let display = document.getElementById('display');
let historyList = document.getElementById('historyList');
let historyContainer = document.getElementById('historyContainer');

function appendToDisplay(value) {
    if (display.innerText === '0' && value !== 'CE') {
        display.innerText = value;
    } else if (value === '+/-') {
        display.innerText = (parseFloat(display.innerText) * -1).toString();
    } else if (value !== 'CE') {
        display.innerText += value;
    }
}

function clearDisplay() {
    display.innerText = '0';
}

function calculateResult() {
    try {
        let result = eval(display.innerText.replace(/[^-()\d/*+.]/g, ''));
        addToHistory(`${display.innerText} = ${result}`);
        display.innerText = result;
    } catch (error) {
        display.innerText = 'Error';
    }
}

function addToHistory(entry) {
    let listItem = document.createElement('li');
    listItem.innerText = entry;
    historyList.appendChild(listItem);
}

function clearHistory() {
    historyList.innerHTML = '';
}

function toggleHistory() {
    if (historyContainer.style.display === 'none' || historyContainer.style.display === '') {
        historyContainer.style.display = 'block';
    } else {
        historyContainer.style.display = 'none';
    }
}
