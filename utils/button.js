export function createUploadButton(){
const button = document.createElement('upload-button');
button.innerHTML = "Modell hochladen";
button.type = "hochladen";
button.name = "upload";
document.body.appendChild(button);
return button;
}

