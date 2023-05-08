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
    const tc = row.insertCell()
    let txt = document.createTextNode(content)
    tc.appendChild(txt)
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
        addCell("", tr)
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