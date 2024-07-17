$(document).ready(function() {
    let currentInput = '';
    let operator = '';
    let previousInput = '';

    function updateScreen(value) {
        $('.calculator-screen').val(value);
    }

    $('.calculator-keys button').on('click', function() {
        const buttonValue = $(this).val();

        if (buttonValue === 'clear') {
            currentInput = '';
            operator = '';
            previousInput = '';
            updateScreen(currentInput);
            return;
        }

        if (buttonValue === '=') {
            if (currentInput !== '' && previousInput !== '' && operator !== '') {
                currentInput = eval(previousInput + operator + currentInput);
                operator = '';
                previousInput = '';
                updateScreen(currentInput);
            }
            return;
        }

        if (['+', '-', '*', '/'].includes(buttonValue)) {
            if (currentInput !== '') {
                if (previousInput === '') {
                    previousInput = currentInput;
                    operator = buttonValue;
                    currentInput = '';
                } else {
                    previousInput = eval(previousInput + operator + currentInput);
                    operator = buttonValue;
                    currentInput = '';
                    updateScreen(previousInput);
                }
            }
            return;
        }

        currentInput += buttonValue;
        updateScreen(currentInput);
    });
});
