// Task1 

// 1) Создать переменную num со значением 266219 (тип данных число)
const num = 266219;

// 2) Вывести в консоль произведение (умножение) цифр этого числа
// Например: число 123, при помощи javaScript получить каждую цифру ( 1, 2, 3 ) и перемножить их. Правильно использовать цикл или методы перебора.
const numArray = String(num).split('');
// или 
// let numArray = [...num + ''];
console.log(numArray)

res = numArray[0];

for (let i = 1; i < numArray.length; i++) {
    res *= numArray[i];
}
console.log(res);


// 3) Полученный результат возвести в степень 3, используя только 1 оператор (Math.pow не подходит)
res = res ** 3;
console.log(res);


// 4) Вывести в консоль первые 2 цифры полученного числа
console.log(res.toString().slice(0, 2));
