// Task2
// 1). Переменная lang может принимать 2 значения: 'ru' 'en'.
let lang = 'ru';

// Написать условия при котором в зависимости от значения lang будут выводится дни недели на русском или английском языке. Решите задачу

//  a) через if,
if (lang === 'ru') {
    console.log('Понедельник, Вторник, Среда, Четверг, Пятница, Суббота, Воскресенье');
} else if (lang === 'en') {
    console.log('Monday, Tuesday, Wednesday, Thursday, Friday, Saturday, Sunday');
}

//  b) через switch-case
switch (lang) {
    case 'ru':
        console.log('Понедельник, Вторник, Среда, Четверг, Пятница, Суббота, Воскресенье');
        break;
    case 'en':
        console.log('Monday, Tuesday, Wednesday, Thursday, Friday, Saturday, Sunday');
        break;
    default:
        console.log('Такого языка в программе пока нет)');
}

//  c) через многомерный массив без ифов и switch.
let arr = [];
arr.ru = ['Понедельник', 'Вторник', 'Среда', 'Четверг', 'Пятница', 'Суббота', 'Воскресенье'];
arr.en = ['Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday', 'Saturday', 'Sunday'];
lang = 'en';
console.log(arr[lang].join(' '));

// 2). У нас есть переменная namePerson. Если значение этой переменной “Артем” то вывести в консоль “директор”, если значение “Александр” то вывести в консоль “преподаватель”, с любым другим значением вывести в консоль “студент”
//  Решить задачу с помощью нескольких тернарных операторов, без использования if или switch

let namePerson = 'Яна';
console.log((namePerson === 'Артем') ? console.log('директор') : (namePerson === 'Александр') ? 'преподаватель' : 'студент');