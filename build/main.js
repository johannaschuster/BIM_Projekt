(function () {
  'use strict';

  const loadButton = createUploadButton();
  loadButton.addEventListener('click', () => {
    loadButton.blur();
    inputElement.click();
    const tableContainer = document.getElementById('table-container');
    tableContainer.innerHTML = loadButton.dataset.table;
  });

})();
