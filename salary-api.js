/* https://open.whitehouse.gov/ data from the
   Climate Change Adaptation Task Force
*/

var ourData = {};

window.onload = function salary () {

  let url = 'https://open.whitehouse.gov/resource/9j92-xfdk.json'

  var jQueryPromise = $.ajax({
    dataType: "json",
    url: url,
    data: {
      "$limit" : 20
    }
  })

  var realPromise = Promise.resolve(jQueryPromise);

  realPromise.then(function(response) {
    console.log("gotData", response);
    createTable(response);
  }, function(err) {
    console.log("err:", err);
  })

};
