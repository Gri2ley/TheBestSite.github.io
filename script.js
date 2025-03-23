let tg = window.Telegram.WebApp;
let btn = document.querySelector("#click");

tg.MainButton.textColor = "#FFFFFF"
tg.MainButton.color = "#2cab37"

let item = ""

let btn1 = document.querySelector("#btn1")
let btn2 = document.querySelector("#btn2")
let btn3 = document.querySelector("#btn3")
let btn4 = document.querySelector("#btn4")
let btn5 = document.querySelector("#btn5")
let btn6 = document.querySelector("#btn6")

btn1.onclick = () => {
    if (tg.MainButton.isVisible) {
        tg.MainButton.hide()
    } else {
        tg.MainButton.setText("Вы выбрали Москва - Санкт-Петербург!")
        item = "Москва - Санкт-Петербург"
        tg.MainButton.show()
    }
}

btn2.onclick = () => {
    if (tg.MainButton.isVisible) {
        tg.MainButton.hide()
    } else {
        tg.MainButton.setText("Вы выбрали Ростов-на-Дону - Краснодар!")
        item = "Ростов-на-Дону - Краснодар"
        tg.MainButton.show()
    }
}

btn3.onclick = () => {
    if (tg.MainButton.isVisible) {
        tg.MainButton.hide()
    } else {
        tg.MainButton.setText("Вы выбрали Волгоград - Волгодонск!")
        item = "Волгоград - Волгодонск"
        tg.MainButton.show()
    }
}



Telegram.WebApp.onEvent("mainButtonClicked", function() {
    tg.sendData(item);
})

tg.expand();