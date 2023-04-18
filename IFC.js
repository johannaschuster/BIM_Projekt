import { IFCLoader } from "web-ifc-three/IFCLoader";
ifcLoader.load("models/Example_model.ifc", (ifcModel) => scene.add(ifcModel));

// Sets up the IFC loading
const ifcLoader = new IFCLoader();

const input = document.getElementById("file-input");
input.addEventListener(
  "change",
  (changed) => {
    const file = changed.target.files[0];
    var ifcURL = URL.createObjectURL(file);
    ifcLoader.load(ifcURL, (ifcModel) => scene.add(ifcModel));
  },
  false
);