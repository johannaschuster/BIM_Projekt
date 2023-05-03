const loadIfc = async (event) => {
  const selectedFile = event.target.files[0];
  if(!selectedFile) return;

  model = await viewer.IFC.loadIfc(selectedFile, false);
  const table = createNewTable(model);
  loadButton.dataset.table = table.outerHTML;
};

const loadButton = createUploadButton();
loadButton.addEventListener('click', () => {
  loadButton.blur();
  inputElement.click();
  const tableContainer = document.getElementById('table-container');
  tableContainer.innerHTML = loadButton.dataset.table;
});
