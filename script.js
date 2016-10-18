"use strict";

function createTable (data) {
  data.map(function (nemo) {
    const msg = "<tr><td>" + nemo.name
                     + "</td><td>" + nemo.salary
                     + "</td><td>" + nemo.position_title
                     + "</td></tr>\n"
    document.querySelector("#table").innerHTML += msg;
  })
}
