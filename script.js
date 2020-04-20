let startCalcButton = document.getElementById('start'),
    budgetValue = document.getElementsByClassName('budget-value')[0],
    dayBudgetValue = document.getElementsByClassName('daybudget-value')[0],
    levelValue = document.getElementsByClassName('level-value')[0],
    expensesValue = document.getElementsByClassName('expenses-value')[0],
    optionalExpensesValue = document.getElementsByClassName(
        'optionalexpenses-value'
    )[0],
    incomeValue = document.getElementsByClassName('income-value')[0],
    monthSavingsValue = document.getElementsByClassName(
        'monthsavings-value'
    )[0],
    yearSavingsValue = document.getElementsByClassName('yearsavings-value')[0],
    expensesItem = document.querySelectorAll('.expenses-item'),
    expensesBtn = document.getElementsByTagName('button')[0],
    optionalexpensesBtn = document.getElementsByTagName('button')[1],
    countBtn = document.getElementsByTagName('button')[2],
    optionalExpensesItem = document.querySelectorAll('.optionalexpenses-item'),
    incomeItem = document.querySelector('.choose-income'),
    checkSavings = document.querySelector('#savings'),
    sumValue = document.querySelector('.choose-sum'),
    percentValue = document.querySelector('.choose-percent'),
    yearValue = document.querySelector('.year-value'),
    monthValue = document.querySelector('.month-value'),
    dayValue = document.querySelector('.day-value'),
    disabledBtn = document.querySelectorAll('button:disabled');

let time, money;

startCalcButton.addEventListener('click', function() {
    for (let i = 0; i < disabledBtn.length; i++) {
        disabledBtn[i].removeAttribute('disabled');
    }

    time = prompt('Введите дату в формате YYYY-MM-DD', '');
    money = +prompt('Ваш бюджет на месяц?', '');

    while (isNaN(money) || money === '' || money === null) {
        money = prompt('Ваш бюджет на месяц?', '');
    }
    appData.budget = money;
    appData.timeDate = time;
    budgetValue.textContent = money.toFixed();
    yearValue.value = new Date(Date.parse(time)).getFullYear();
    monthValue.value = new Date(Date.parse(time)).getMonth() + 1;
    dayValue.value = new Date(Date.parse(time)).getDate();
});

expensesBtn.addEventListener('click', function() {
    let sum = 0;

    for (let i = 0; i < expensesItem.length; i++) {
        let answ1 = expensesItem[i].value,
            answ2 = expensesItem[++i].value;

        if (
            typeof answ1 === 'string' &&
            typeof answ1 !== null &&
            typeof answ2 !== null &&
            answ1 !== '' &&
            answ2 !== '' &&
            answ1.length < 50
        ) {
            console.log('done');
            appData.expenses[answ1] = answ2;
            sum += +answ2;
        } else {
            i--;
        }
    }
    expensesValue.textContent = sum;
});

optionalexpensesBtn.addEventListener('click', function() {
    for (let i = 0; i < optionalExpensesItem.length; i++) {
        let answ3 = optionalExpensesItem[i].value;
        appData.optionalExpenses[i] = answ3;
        optionalExpensesValue.textContent += appData.optionalExpenses[i] + ' ';
    }
});

countBtn.addEventListener('click', function() {
    if (appData.budget !== undefined) {
        appData.moneyPerDay = (appData.budget / 30).toFixed();
        dayBudgetValue.textContent = appData.moneyPerDay;

        if (appData.moneyPerDay < 100) {
            levelValue.textContent = 'Минимальный уровень достатка';
        } else if (appData.moneyPerDay > 100 && appData.moneyPerDay < 2000) {
            levelValue.textContent = 'Средний уровень достатка';
        } else if (appData.moneyPerDay > 2000) {
            levelValue.textContent = 'Высокий уровень достатка';
        } else {
            levelValue.textContent = 'Произошла ошибка';
        }
    } else {
        dayBudgetValue.textContent = 'Поизошла ошибка';
    }
});

incomeItem.addEventListener('input', function() {
    let items = incomeItem.value;
    appData.income = items.split(', ');
    incomeValue.textContent = appData.income;
});

checkSavings.addEventListener('click', function() {
    if (appData.savings === true) {
        appData.savings = false;
    } else {
        appData.savings = true;
    }
});

sumValue.addEventListener('input', function() {
    if (appData.savings === true) {
        let sum = +sumValue.value,
            percent = +percentValue.value;

        appData.monthIncome = (sum / 100 / 12) * percent;
        appData.yearIncome = (sum / 100) * percent;

        monthSavingsValue.textContent = appData.monthIncome.toFixed(1);
        yearSavingsValue.textContent = appData.yearIncome.toFixed(1);
    }
});

percentValue.addEventListener('input', function() {
    if (appData.savings === true) {
        let sum = +sumValue.value,
            percent = +percentValue.value;

        appData.monthIncome = (sum / 100 / 12) * percent;
        appData.yearIncome = (sum / 100) * percent;

        monthSavingsValue.textContent = appData.monthIncome.toFixed(1);
        yearSavingsValue.textContent = appData.yearIncome.toFixed(1);
    }
});

let appData = {
    budget: money,
    timeDate: time,
    expenses: {},
    optionalExpenses: {},
    income: [],
    savings: false
};
