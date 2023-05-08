const baseUrl = "http://localhost:5197"

const addCell = (content, row) => {
    const tc = row.insertCell()
    let txt = document.createTextNode(content)
    tc.appendChild(txt)
}

const insertDataInTable = async () => {
    const table = document.getElementById("#ttable")
    const data = await (await fetch(baseUrl)).json()
    console.log(data)
    const tb = document.getElementById("table-b")

    for (let el of data) {
        const tr = tb.insertRow()
        addCell(el.raum, tr)
        addCell(el.qm, tr)
        addCell(el.kosten, tr)
        addCell(el.einnahmen, tr)
        addCell(el.gewinn, tr)
    }
}

const addRow = async () => {
    const bsp =  {
        "id": 3,
        "raum": "lila",
        "qm": 20,
        "kosten": 199.91,
        "einnahmen": 91.12,
        "gewinn": 44.99
    }

    const result = await fetch(baseUrl + "/add", {
        method: "POST",
        body: JSON.stringify({
            data: bsp
        })
    })

    console.log(result)

    insertDataInTable()
}

export {
    insertDataInTable,
    addRow
}