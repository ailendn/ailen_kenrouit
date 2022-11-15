import { getPrice } from "./coingecko"
function selectType(){
    let type = document.getElementById (`prices`);
    let selectedType = prices.value;
}
document.getElementById("Send")!.onclick = async function () {
    const tokenNameElem: HTMLInputElement = document.getElementById("token_name") as HTMLInputElement
    const tokenName: string = tokenNameElem.value
    alert(await getPrice(tokenName))
}
document.querySelector("coin")?.addEventListener("change", async function (event: Event) {
    // event.preventDefault()

    let elem: HTMLSelectElement = document.getElementById("coin") as HTMLSelectElement
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
            // Lógica para traer datos de base de datos
            // let prices = readFileSync("prices.json")
            let prices = [
                { name: "eth", date: "Wed Oct 05 2022 18:43:14", price:"USD 1349.34" },
                { name: "eth", date: "Wed Oct 05 2022 18:46:27", price:"USD 1349.83" },
                { name: "eth", date: "Wed Nov 02 2022 17:05:00", price:"USD 1535.02" },
                ]
            let displayPrices = []
            for (let i = 0; i < prices.length; i++) {
                // delete (prices[i]["name"])
                displayPrices.push({ date: prices[i].date, price: prices[i].price })
            }
            valueElement.innerHTML = JSON.stringify(displayPrices)
            break
        default:
            throw new Error(`There is no option ${value}`)
    }
})