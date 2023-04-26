import { createTable } from './utils/table';
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

  model = await viewer.IFC.loadIfc(selectedFile, false);

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

function createTable(){
  const table = document.createElement('ifcTable');  
}