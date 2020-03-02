let money = +prompt('Ваш бюджет на месяц?', ''),
    time = prompt('Введите дату в формате YYYY-MM-DD', '');

let appData = {
    budget: money,
    timeDate: time,
    expenses: {},
    oprionalExpenses: {},
    income: [],
    savongs: false
};

for (let i = 0; i < 2; i++) {
    let answ1 = prompt(
            'Введите обязательную статью расходов в этом месяце',
            ''
        ),
        answ2 = +prompt('Во сколько обойдется?', '');
    if (
        typeof answ1 === 'string' &&
        typeof answ1 !== null &&
        typeof answ1 !== null &&
        answ1 !== '' &&
        answ2 !== '' &&
        answ1.length < 50
    ) {
        console.log('done');
        appData.expenses[answ1] = answ2;
    } else {
        i--;
    }
}

appData.moneyPerDay = appData.budget / 30;

alert('Ежедневный бюджет: ' + appData.moneyPerDay);

if (appData.moneyPerDay < 100) {
    console.log('Минимальный уровень достатка');
} else if (appData.moneyPerDay > 100) {
    console.log('Средний уровень достатка');
} else if (appData.moneyPerDay > 2000) {
    console.log('Высокий уровень достатка');
} else {
    console.log('Произошла ошибка');
}
