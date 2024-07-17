$(document).ready(function() {
    function initializeCalculator(calculatorElement) {
        let currentInput = '';
        let operator = '';
        let previousInput = '';

        function updateScreen(value) {
            calculatorElement.find('.calculator-screen').val(value);
        }

        calculatorElement.find('.calculator-keys button').on('click', function() {
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

            if (['sin', 'cos', 'tan', 'sqrt'].includes(buttonValue)) {
                if (currentInput !== '') {
                    switch (buttonValue) {
                        case 'sin':
                            currentInput = Math.sin(currentInput);
                            break;
                        case 'cos':
                            currentInput = Math.cos(currentInput);
                            break;
                        case 'tan':
                            currentInput = Math.tan(currentInput);
                            break;
                        case 'sqrt':
                            currentInput = Math.sqrt(currentInput);
                            break;
                    }
                    updateScreen(currentInput);
                }
                return;
            }

            currentInput += buttonValue;
            updateScreen(currentInput);
        });
    }

    initializeCalculator($('.calculator').eq(0)); // Initialize first calculator
    initializeCalculator($('.calculator').eq(1)); // Initialize second calculator
});