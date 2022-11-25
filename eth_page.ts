import { getPrice } from "./coingecko"

document.getElementById("prices")!.addEventListener("change", async function (event: Event) {
    // event.preventDefault()

    let elem: HTMLSelectElement = document.getElementById("prices") as HTMLSelectElement
    let value: string = elem.options[elem.selectedIndex].value
    let text: string = elem.options[elem.selectedIndex].text
    console.log(`Value ${value} with text ${text}`)

    let tag: HTMLElement = document.getElementById("tag")!
    tag.innerHTML = text

    let valueElement: HTMLElement = document.getElementById("value")!

    switch (value) {
        case "1":
            let ethPrice = await getPrice("ethereum")
            valueElement.innerHTML = ethPrice.toString()
            break
        case "2":
            let prices = [
                { coinId: "eth", date: "Wed Oct 05 2022 18:43:14", price:"USD 1349.34" },
                { coinId: "eth", date: "Wed Oct 05 2022 18:46:27", price:"USD 1349.83" },
                { coinId: "eth", date: "Wed Nov 02 2022 17:05:00", price:"USD 1535.02" },
                ]
           
            valueElement.innerHTML = arrayToTable(prices)
            break
        default:
            throw new Error(`There is no option ${value}`)
    }
})
function arrayToTable (data: any []) : string {
    const columnNames: string [] = Object.keys (data[0])
    let table : string = "<table>"
    table += "<thead>"
    table += "<tr>"
    table += columnNames.reduce((acc, columnName) => `${acc}<th>${columnName}</th>`, "")
    table += "</tr>"
    table += "</thead>"
    table += "<tbody>"
    table += "</tbody>"
    table += "</table>"
    return table
}
