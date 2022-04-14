function adiabaticRedirect() {

  setTimeout(() => { doRedirect(); }, 2500);

}

function doRedirect() {
  var param = _decode();

  var PodKey = Object.keys(param);
  var PodKey2 = param[PodKey];

  console.log('PodKey is ' + PodKey + '\nPodKey2 is ' + PodKey2);

  if (typeof RedirectList[PodKey] !== 'undefined') {

    if (PodKey2 == true){
      var redirect = RedirectList[PodKey];
    }
    else
    {
      var redirect = RedirectList[PodKey][PodKey2];
    }

    console.log(redirect);

    redirect ? window.location.replace(redirect) : window.location.replace(DefaultLanding);

  } else {
    console.log('Defaulting...');
    window.location.replace(DefaultLanding);
  }


}

function _decode(){
  var attempt = window.location.href;
  try { 
    var result = decodeURI(attempt);
    console.log(result);
    var params = getParams(result);
    return params;
  }
  catch {
    var params = getParams();
    console.log('catch block');
    return params;
  }
}


function getParams(url) {

  // get query string from url (optional) or window
  var queryString = url ? url.split('?')[1] : window.location.search.slice(1);

  // we'll store the parameters here
  var obj = {};

  // if query string exists
  if (queryString) {

    // stuff after # is not part of query string, so get rid of it
    queryString = queryString.split('#')[0];
    
    // Only take the first parameter? Hopefully?
    queryString = queryString.split('&')[0];

    // split our query string into its component parts
    var arr = queryString.split('&');

    for (var i = 0; i < arr.length; i++) {
      // separate the keys and the values
      var a = arr[i].split('=');

      // set parameter name and value (use 'true' if empty)
      var paramName = a[0];
      var paramValue = typeof (a[1]) === 'undefined' ? true : a[1];

      // (optional) keep case consistent
      paramName = paramName.toLowerCase();
      if (typeof paramValue === 'string') paramValue = paramValue.toLowerCase();

      // if the paramName ends with square brackets, e.g. colors[] or colors[2]
      if (paramName.match(/\[(\d+)?\]$/)) {

        // create key if it doesn't exist
        var key = paramName.replace(/\[(\d+)?\]/, '');
        if (!obj[key]) obj[key] = [];

        // if it's an indexed array e.g. colors[2]
        if (paramName.match(/\[\d+\]$/)) {
          // get the index value and add the entry at the appropriate position
          var index = /\[(\d+)\]/.exec(paramName)[1];
          obj[key][index] = paramValue;
        } else {
          // otherwise add the value to the end of the array
          obj[key].push(paramValue);
        }
      } else {
        // we're dealing with a string
        if (!obj[paramName]) {
          // if it doesn't exist, create property
          obj[paramName] = paramValue;
        } else if (obj[paramName] && typeof obj[paramName] === 'string') {
          // if property does exist and it's a string, convert it to an array
          obj[paramName] = [obj[paramName]];
          obj[paramName].push(paramValue);
        } else {
          // otherwise add the property
          obj[paramName].push(paramValue);
        }
      }
    }
  }

  return obj;
}
