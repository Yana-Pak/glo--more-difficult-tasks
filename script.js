'use strict'

const appData = {
    title: '',
    screens: [],
    screenPrice: 0,
    adaptive: true,
    rollback: 10,
    allServicePrices: 0,
    fullPrice: 0,
    servicePercentPrice: 0,
    services: [],

    start: function () {
        appData.asking()
        appData.addPrices();
        appData.getFullPrice()
        appData.getServicePercentPrices();
        appData.getTitle();
        appData.logger()
    },

    isNumber: function (num) {
        return !isNaN(parseFloat(num) && isFinite(num))
    },

    asking: function () {
        appData.title = prompt('Как называется ваш проект?', 'Калькулятор верстки');

        for (let i = 0; i < 2; i++) {
            let name = prompt('Какие типы экранов нужно разработать?');
            let price = 0

            do {
                price = prompt('Сколько будет стоить данная работа?');
                if (isNaN(price)) {
                    alert("Сколько будет стоить данная работа? Введите цифры");
                }
            } while (!appData.isNumber(price))

            appData.screens.push({ id: i, name: name, price: price })
        }

        for (let i = 0; i < 2; i++) {
            let name = prompt('Какой дополнительный тип услуги нужен?');
            let price = 0

            do {
                price = prompt("Сколько это будет стоить? ")
                if (isNaN(price)) {
                    alert("Сколько это будет стоить? Введите цифры");
                }
            } while (!appData.isNumber(price))

            appData.services.push({ id: i, name: name, price: price })
        }

        appData.adaptive = confirm('Нужен ли адаптив на сайте?');
    },
    addPrices: function () {
        //     for (let screen of appData.screens) {
        //         appData.screenPrice += +screen.price
        //     }
        appData.screenPrice = appData.screens.reduce(function (acc, value) {
            return +acc + +value.price;
        }, 0)

        // for (let key in appData.services) {
        //     appData.allServicePrices += appData.services[key]
        // }
        appData.allServicePrices = appData.services.reduce(function (acc, value) {
            return +acc + +value.price;
        }, 0)
    },

    getFullPrice: function () {
        appData.fullPrice = appData.screenPrice + appData.allServicePrices;
    },
    getServicePercentPrices: function () {
        appData.servicePercentPrice = appData.fullPrice - (appData.fullPrice * (appData.rollback / 100));
    },

    getTitle: function () {
        appData.title = appData.title[0].toUpperCase() + appData.title.slice(1);
    },

    getRollbackMessage: function (price) {
        if (price >= 30000) {
            return `Даем скидку в 10%  - fullPrice = ${appData.fullPrice * 0.9} руб.`;
        } else if (price >= 15000 && price < 30000) {
            return `Даем скидку в 5%  - fullPrice = ${appData.fullPrice * 0.95} руб.`;
        } else if (price > 0 && price < 15000) {
            return `Скидка не предусмотрена fullPrice = ${appData.fullPrice} руб.`;
        } else {
            return "Что то пошло не так";
        }
    },
    logger: function () {

        console.log(`fullPrice - ${appData.fullPrice}`);
        console.log(`servicePercentPrice - ${appData.servicePercentPrice}`);
        console.log(appData.screens);
        console.log(appData.services);

    },

}


appData.start()

// отформатировать код
// Сделать проверку при получении данных: (число)

// усложненное
// 1) Если пользователь введет одинаковый ответ на вопрос "Какой дополнительный тип услуги нужен?" то необходимо не перезаписывать, а сохранять оба ответа в appData.services, добавить каждому названию ключа уникальность!
// 2) Посчитать свойство appData.screenPrice методом reduce