# Fridays from home

Mark all fridays as working from home on https://app.timetastic.co.uk

To use, you need to find out:

- [You API key](https://app.timetastic.co.uk/apidocs/index.html)
- Your user ID. Go to https://app.timetastic.co.uk/wallchart, click on your user (it should be first in the list), and the ID will be the last part of the URL, e.g. 12345.

Then, clone the repo and do the following, inserting your API key and user ID:

    yarn
    export TIMETASTIC_API_KEY=your_api_key
    export TIMETASTIC_USER_ID=your_user_id
    node .
