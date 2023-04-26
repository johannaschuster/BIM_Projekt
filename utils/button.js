export function createUploadButton(){
  /*const button = document.createElement('upload-button');
  button.classList.add('upload-button');
  button.innerHTML ="Modell hochladen";
*/
const button = document.createElement('upload-button');
button.innerHTML = "Modell hochladen";
button.type = "hochladen";
button.name = "upload";
document.body.appendChild(button);
return button;
}
// let btn = document.createElement("upload-button");
//btn.innerHTML = "Modell hochladen";
//document.body.appendChild(btn);
//return button;
