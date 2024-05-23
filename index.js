const main = document.getElementById("main")
const cardContainers = document.getElementById("card-containers")

const cards = () => {
    let cardHtml = ""
    for (let i = 0; i < 8; i++) {
       cardHtml += `<div class="containers"></div>`
    }
    return cardHtml
}

const render = () => {
    cardContainers.innerHTML = cards()
}

render()