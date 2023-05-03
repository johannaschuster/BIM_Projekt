export function enableEditMode() {
  // Get all the table cells in the document
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
