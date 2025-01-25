let isDarkMode = false;
let isScientificMode = false;

document.getElementById('modeToggle').addEventListener('click', () => {
    isDarkMode = !isDarkMode;
    document.body.classList.toggle('dark-mode', isDarkMode);
    document.body.classList.toggle('light-mode', !isDarkMode);
    document.getElementById('modeToggle').innerText = isDarkMode ? 'Light Mode' : 'Dark Mode';
});

document.getElementById('scientificToggle').addEventListener('click', () => {
    isScientificMode = !isScientificMode;
    document.getElementById('calculator').classList.toggle('scientific-mode', isScientificMode);
    document.getElementById('scientificToggle').innerText = isScientificMode ? 'Basic' : 'Scientific';
});

function append(value) {
    document.getElementById('display').value += value;
}

function clearDisplay() {
    document.getElementById('display').value = '';
}

function backspace() {
    let display = document.getElementById('display');
    display.value = display.value.slice(0, -1);
}

function calculate() {
    let display = document.getElementById('display');
    try {
        display.value = eval(display.value);
    } catch (e) {
        display.value = 'Error';
    }
}

function convert(type) {
    let display = document.getElementById('display');
    let value = parseFloat(display.value);
    switch (type) {
        case 'm_to_ft':
            display.value = (value * 3.28084).toFixed(2);
            break;
        case 'kg_to_lb':
            display.value = (value * 2.20462).toFixed(2);
            break;
        case 'c_to_f':
            display.value = (value * 9/5 + 32).toFixed(2);
            break;
        default:
            display.value = 'Error';
    }
}

document.addEventListener('keydown', (event) => {
    const key = event.key;
    if (!isNaN(key) || ['+', '-', '*', '/', '.', '(', ')'].includes(key)) {
        append(key);
    } else if (key === 'Enter') {
        calculate();
    } else if (key === 'Backspace') {
        backspace();
    } else if (key === 'Escape') {
        clearDisplay();
    }
});