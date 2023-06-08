import "./styles.css";

if(document.readyState !== "loading") {
  console.log("Document is ready!");
} else {
  document.addEventListener("DOMContentLoaded", function() {
      console.log("Document is ready after waiting!");
    
      const emptyButtonId = document.getElementById("empty-table");
      emptyButtonId.onclick = emptyTable;
   })
}

function emptyTable() {
  const table = document.getElementById("data_table");
  const rows = table.rows.length;

  for (var x=rows; x>1; x--) {
    table.deleteRow(1);
 }
}