const getFlaecheOderSo = (file) => {
    const reader = new FileReader()

    reader.onload = () => {
        const res = reader.result
        const ff = extractFlaeche(res)
        insertDataInTable(ff)
    }
    console.log("durch")
    reader.readAsText(file)
}

const addCell = (content, row) => {
    const tc = row.insertCell();
    if (content === "") {
      const input = document.createElement("input");
      input.setAttribute("type", "number");
      input.addEventListener("click", () => {
        input.addEventListener("input", () => {
          const thirdCellInput = row.cells[2].querySelector("input");
          const fourthCellInput = row.cells[3].querySelector("input");
          if (thirdCellInput.value && fourthCellInput.value) {
            const diff = Number(fourthCellInput.value) - Number(thirdCellInput.value);
            row.cells[4].textContent = diff;
          } else {
            row.cells[4].textContent = "";
          }
        });
      });
      tc.appendChild(input);
    } else {
      let txt = document.createTextNode(content);
      tc.appendChild(txt);
    }
  };
  

const insertDataInTable = (els) => {
    const table = document.getElementById("#ttable")
    
    const tb = document.getElementById("table-b")

    for (let el of els) {
        const tr = tb.insertRow()
        addCell("ph", tr)
        addCell(el, tr)
        addCell("", tr)
        addCell("", tr)
        addCell(" ", tr)
    }
}

const extractFlaeche = (fileData) => {
    const flaechen = []
    const lines = fileData.split(/\r?\n/)
    for (const val of lines) {
        if (/^#\d+=IFCQUANTITYAREA/.test(val)) {
            const rel = val.split(",")
            const num = rel[rel.length-1]
            flaechen.push(num.split(".")[0])
        }
    }
    return flaechen
} 

export {
    getFlaecheOderSo
}