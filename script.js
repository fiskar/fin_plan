let money, time;

function start() {
    money = +prompt('Ваш бюджет на месяц?', '');
    time = prompt('Введите дату в формате YYYY-MM-DD', '');

    while (isNaN(money) || money === '' || money === null) {
        money = +prompt('Ваш бюджет на месяц?', '');
    }
}
start();

let appData = {
    budget: money,
    timeDate: time,
    expenses: {},
    optionalExpenses: {},
    income: [],
    savings: true
};

function chooseExpenses() {
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
}
chooseExpenses();

function detectDayBudget() {
    appData.moneyPerDay = (appData.budget / 30).toFixed();
    alert('Ежедневный бюджет: ' + appData.moneyPerDay);
}
detectDayBudget();

function detectLevel() {
    if (appData.moneyPerDay < 100) {
        console.log('Минимальный уровень достатка');
    } else if (appData.moneyPerDay > 100) {
        console.log('Средний уровень достатка');
    } else if (appData.moneyPerDay > 2000) {
        console.log('Высокий уровень достатка');
    } else {
        console.log('Произошла ошибка');
    }
}
detectLevel();

function checkSavings() {
    if (appData.savings === true) {
        let save = +prompt('Какова сумма накоплений?', '');
        let percent = +prompt('Под какой процент?', '');

        appData.monthIncome = (save / 100 / 12) * percent;
        alert('Доход в месяц с вашего депозита: ' + appData.monthIncome);
    }
}
checkSavings();

function chooseOptExpenses() {
    for (let i = 1; i <= 3; i++) {
        let answ3 = prompt('Статья необязательных расходов', '');
        appData.optionalExpenses[i] = answ3;
    }
}
