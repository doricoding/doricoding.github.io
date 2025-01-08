function calculate() {
    const n1 = parseFloat(document.getElementById("n1").value);
    const op = document.getElementById("op").value;
    const n2 = parseFloat(document.getElementById("n2").value);
    let result;

    switch (op) {
        case '+':
            result = n1 + n2;
            break;
        case '-':
            result = n1 - n2;
            break;
        case '*':
            result = n1 * n2;
            break;
        case '/':
            if (n2 !== 0) {
                result = n1 / n2;
            } else {
                result = 'error: delenie 0';
            }
            break;
        default:
            result = 'error: zla operacia';
    }

    document.getElementById("vysledok").textContent = `vysledok: ${result}`;
}