function InitialState(value, signalName) {
  if (!signalName) {
    signalName = 'UnknownData';
  }
  //if (value == null || value !== value) { //If I want to have it send Invalid if data is null, undefined or not a number
    //value = 'Invalid';
  //}
  if (value != null && value === value) { //If I want it to just not send a value if it is null, undefined or not a number
    var url = 'https://groker.initialstate.com/api/events?accessKey=INSERT_ACCESS_KEY_HERE&bucketKey=INSERT_BUCKET_KEY_HERE&' + encodeURIComponent(signalName) + '=' + encodeURIComponent(value);

    UrlFetchApp.fetch(url);
  }

    return value;
}
