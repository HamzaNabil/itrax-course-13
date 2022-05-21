let rowsInput = document.querySelector("#rows");
let colsInput = document.querySelector("#cols");
let btn = document.querySelector("button");

// CreateElement

btn.addEventListener("click", TableCreate);

function TableCreate() {
  // let body = document.querySelector('body')
  let body = document.body;
  let table = document.createElement("table"); // <table></table>
  table.style.border = "1px solid #000";
  for (var i = 0; i < rowsInput.value; i++) {
    let tr = document.createElement("tr");

    for (var j = 0; j < colsInput.value; j++) {
      let td = document.createElement("td");
      td.innerHTML = "item";
      td.style.border = "1px solid #000";
      tr.appendChild(td);
    }

    table.appendChild(tr);
  }

  body.appendChild(table);
}
