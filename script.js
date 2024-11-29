// Необходимо выполнить в отдельном js файле, подключенному к отдельной HTML странице

//  Создать массив week и записать в него дни недели в виде строк
// Вывести на экран все дни недели
// Каждый из них с новой строчки
// Выходные дни - курсивом
// Текущий день - жирным шрифтом(использовать объект даты)


const week = ['Понедельник', 'Вторник', 'Среда', 'Четверг', 'Пятница', 'Суббота', 'Воскресенье']
const fordaysWeek = document.querySelector('.fordays')
const dayWeek = document.querySelectorAll('.day')
const nowDay = document.querySelector('.now__day')

// 1
document.querySelector('.weekend').textContent = week.join(', ')


// 2-3
document.querySelectorAll('.day').forEach((n, i) => {

    n.textContent = week[i]

    if (fordaysWeek.innerText.includes('Суббота')) {
        n.classList.add('italic')
    }
    if (fordaysWeek.innerText.includes('Воскресенье')) {
        n.classList.add('italic')
    }

}
);

// 4

const day = new Date();

// if (day.getDay() === 6) {
//     let name = "Суббота";
//     nowDay.textContent = name;
// }
// if (day.getDay() === 0) {
//     let name = "Воскресенье";
//     nowDay.textContent = name;
// }
// if (day.getDay() === 1) {
//     let name = "Понедельник";
//     nowDay.textContent = name;
// }
// if (day.getDay() === 2) {
//     let name = "Вторник";
//     nowDay.textContent = name;
// }
// if (day.getDay() === 3) {
//     let name = "Среда";
//     nowDay.textContent = name;
// }
// if (day.getDay() === 4) {
//     let name = "Четверг";
//     nowDay.textContent = name;
// }
// if (day.getDay() === 5) {
//     let name = "Пятница";
//     nowDay.textContent = name;
// }

nowDay.classList.add('bold')


// или 
let textDay;
switch (day.getDay()) {

    case 0:
        textDay = "Воскресенье";
        nowDay.textContent = textDay;
        break;
    case 1:
        textDay = "Понедельник";
        nowDay.textContent = textDay;
        break;
    case 2:
        textDay = "Вторник";
        nowDay.textContent = textDay;
        break;
    case 3:
        textDay = "Среда";
        nowDay.textContent = textDay;
        break;
    case 4:
        textDay = "Четверг";
        nowDay.textContent = textDay;
        break;
    case 5:
        textDay = "Пятница";
        nowDay.textContent = textDay;
        break;
    case 6:
        textDay = "Суббота";
        nowDay.textContent = textDay;
        break;
    default:
        console.log("такого дня недели нет")
}


