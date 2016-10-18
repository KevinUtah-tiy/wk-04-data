"use strict";

function createTable (data) {
  data.map(function (info) {
    const msg = "<tr><td>" + info.name
                     + "</td><td>$" + info.salary
                     + "</td><td>" + info.position_title
                     + "</td></tr>\n"
    document.querySelector("#table").innerHTML += msg;
  })
}
