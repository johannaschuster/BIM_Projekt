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
//import { ClippingEdges } from 'web-ifc-viewer/dist/components/display/clipping-planes/clipping-edges';
//import Stats from 'stats.js/src/Stats';
//import { insertDataInTable } from "./utils/api_helper"
import { getFlaeche } from './utils/analyze_file';

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

  getFlaeche(selectedFile)

  model = await viewer.IFC.loadIfc(selectedFile, false);
  
  const spaces = model.getItems({ type: IFCSPACE });


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



 if(Gewinn<0) {
  farbe = "#e30613"; //rot
} else if (gewinn >= 1 && gewinn <= 5000) {
  farbe = "#a6c9f1"; // blau
} else if (gewinn > 5000 && gewinn <= 10000) {
  farbe = "#95c11f"; // grün 
} else if (gewinn > 10000 && gewinn <= 30000) {
  farbe = "#951b81"; // lila
} else {
  farbe = "#ffed00"; //gelb
}