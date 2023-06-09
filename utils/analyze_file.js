const getFlaeche = (file) => {
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
            const Gewinn = Number(fourthCellInput.value) - Number(thirdCellInput.value);
            row.cells[4].textContent = Gewinn;
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

  export function getFarbe(Gewinn) {
    if (Gewinn < 0) {
      return "#e30613"; // rot
    } else if (Gewinn >= 1 && Gewinn <= 5000) {
      return "#a6c9f1"; // blau
    } else if (Gewinn > 5000 && Gewinn <= 10000) {
      return "#95c11f"; // grün
    } else if (Gewinn > 10000 && Gewinn <= 30000) {
      return "#951b81"; // lila
    } else {
      return "#ffed00"; // gelb
    }
  }  
  

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
    getFlaeche
}