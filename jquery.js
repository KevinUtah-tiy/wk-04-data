window.onload = function () {

  $.getJSON('data.json', function(data) {
    console.log(data);
  })

  console.log('async?');

}
