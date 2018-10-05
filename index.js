var axios = require('axios');
var luxon = require('luxon');

const key = process.env.TIMETASTIC_API_KEY;
const user = process.env.TIMETASTIC_USER_ID;

const requestHolidays = async friday => {
  console.log('> Booking ' + friday.toLocaleString());
  try {
    const response = await axios.post(
      'https://app.timetastic.co.uk/api/holidays',
      {
        from: friday.toFormat('yyyy-MM-dd'),
        to: friday.toFormat('yyyy-MM-dd'),
        leavetypeid: 153582,
        fromtime: 'AM',
        totime: 'PM',
        userordepartmentid: user
      },

      { headers: { Authorization: 'Bearer ' + key } }
    );
    console.log('< ' + response.data.response);
  } catch (e) {
    console.log(e);
  }
  await new Promise(resolve => setTimeout(resolve, 200));
  requestHolidays(friday.plus({ days: 7 }));
};

requestHolidays(luxon.DateTime.utc().set({ weekday: 5 }));
