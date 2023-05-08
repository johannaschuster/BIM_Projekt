//import {enableEditMode, editCell, saveCell} from './utils/table';
import { CameraProjections, IfcViewerAPI } from 'web-ifc-viewer';
import {createUploadButton} from './utils/button';
import {IFCSPACE, IFCOPENINGELEMENT, IFCFURNISHINGELEMENT, IFCWALL, IFCWINDOW, IFCCURTAINWALL, IFCMEMBER, IFCPLATE
} from 'web-ifc';
import {
  MeshBasicMaterial,
  LineBasicMaterial,
  Color,
  Vector2,
  DepthTexture,
  WebGLRenderTarget, Material, BufferGeometry, BufferAttribute, Mesh
} from 'three';
import { ClippingEdges } from 'web-ifc-viewer/dist/components/display/clipping-planes/clipping-edges';
import Stats from 'stats.js/src/Stats';
import { insertDataInTable } from "./utils/api_helper"
import { getFlaecheOderSo } from './utils/analyze_file';

const container = document.getElementById('viewer-container');
const viewer = new IfcViewerAPI({ container, backgroundColor: new Color(255, 255, 255) });
viewer.axes.setAxes();
viewer.grid.setGrid();

const manager = viewer.IFC.loader.ifcManager;

viewer.IFC.setWasmPath('files/');

viewer.IFC.loader.ifcManager.applyWebIfcConfig({
  USE_FAST_BOOLS: true,
  COORDINATE_TO_ORIGIN: true
});

viewer.context.renderer.postProduction.active = true;

let first = true;
let model;

const loadIfc = async (event) => {

  const selectedFile = event.target.files[0];
  if(!selectedFile) return;

  getFlaecheOderSo(selectedFile)

  model = await viewer.IFC.loadIfc(selectedFile, false);
  
  const spaces = model.getItems({ type: IFCSPACE });

  const tableContainer = document.getElementById('table-container');
  const table = document.createElement('table');
  const thead = document.createElement('thead');
  const tbody = document.createElement('tbody');

  const headerRow = document.createElement('tr');
  const headers = ['ID', 'Name', 'Area'];

  headers.forEach(header => {
    const th = document.createElement('th');
    th.textContent = header;
    headerRow.appendChild(th);
  });

  thead.appendChild(headerRow);
  table.appendChild(thead);

  spaces.forEach(space => {
    const row = document.createElement('tr');
    const idCell = document.createElement('td');
    idCell.textContent = space.id;
    const nameCell = document.createElement('td');
    nameCell.textContent = space.name;
    const areaCell = document.createElement('td');
    areaCell.textContent = space.area.toFixed(2);
    row.appendChild(idCell);
    row.appendChild(nameCell);
    row.appendChild(areaCell);
    tbody.appendChild(row);
  });

  table.appendChild(tbody);
  tableContainer.appendChild(table);
};

const inputElement = document.createElement('input');
inputElement.setAttribute('type', 'file');
inputElement.classList.add('hidden');
inputElement.addEventListener('change', loadIfc, false);

const loadButton = createUploadButton();
loadButton.addEventListener('click', () => {
  loadButton.blur();
  inputElement.click();
});

//insertDataInTable()
