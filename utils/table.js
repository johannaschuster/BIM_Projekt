/*export function enableEditMode() {
  var cells = document.getElementsByTagName("td");
  
  // Loop through the cells and add event listeners to enable editing
  for(var i = 0; i < cells.length; i++) {
      cells[i].addEventListener("click", editCell);
  }
}

export function editCell() {
  // Get the current text content of the cell
  var currentValue = this.innerHTML;
  
  // Replace the text content with an input element
  this.innerHTML = "<input type='text' value='" + currentValue + "'>";
  
  // Add an event listener to the input element to save the new value
  this.getElementsByTagName("input")[0].addEventListener("blur", saveCell);
}

export function saveCell() {
  // Get the new value from the input element
  var newValue = this.value;
  
  // Replace the input element with the new text content
  this.parentNode.innerHTML = newValue;
}
*/
//export function safeInput(){
  //document.getElementById('Einnahmen').innerHTML = 


/*export function getGewinn(){
  let x = document.getElementById('Einnahmen').innerHTML;
  let y = document.getElementById('Kosten').innerHTML;
  let z = x-y;
  document.getElementById('Gewinn').innerHTML = z;
}*/

export function createNewTable(model) {
  // Extrahiere notwendige Daten aus dem Model
  const spaces = model.getCollection(IFCSPACE).map((space) => ({
    id: space.id,
    name: space.Name,
    area: space.PredefinedType === 'NOTDEFINED' ? 0 : space.FloorArea,
    volume: space.PredefinedType === 'NOTDEFINED' ? 0 : space.Volume
  }));

  // Erstelle die Tabelle
  const table = document.createElement('table');
  table.classList.add('my-table');

  // Erstelle Tabellenkopf
  const thead = document.createElement('thead');
  const tr = document.createElement('tr');
  const headers = ['ID', 'Name', 'Area', 'Volume'];
  headers.forEach((header) => {
    const th = document.createElement('th');
    th.textContent = header;
    tr.appendChild(th);
  });
  thead.appendChild(tr);
  table.appendChild(thead);

  // Erstelle Tabelleninhalt
  const tbody = document.createElement('tbody');
  spaces.forEach((space) => {
    const tr = document.createElement('tr');
    const td1 = document.createElement('td');
    td1.textContent = space.id;
    const td2 = document.createElement('td');
    td2.textContent = space.name;
    const td3 = document.createElement('td');
    td3.textContent = space.area.toFixed(2);
    const td4 = document.createElement('td');
    td4.textContent = space.volume.toFixed(2);
    tr.appendChild(td1);
    tr.appendChild(td2);
    tr.appendChild(td3);
    tr.appendChild(td4);
    tbody.appendChild(tr);
  });
  table.appendChild(tbody);

  return table;
}
