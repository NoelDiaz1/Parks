const main = document.getElementById("main")
const cardContainers = document.getElementById("card-containers")

const cards = () => {
    let cardHtml = ""
    return cardHtml = `
        <div class="card-containers">
            <div class="containers"></div>
            <div class="containers"></div>
            <div class="containers"></div>
            <div class="containers"></div>
        </div>
    `
}

const render = () => {
    cardContainers.innerHTML = cards()
}

render()