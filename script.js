function convert() {
    var conversionType = document.getElementById("conversionType").value;
    var inputNumber = document.getElementById("inputNumber").value;
    var resultElement = document.getElementById("result");
    var result = '';

    switch (conversionType) {
        case "hexToDec":
            result = parseInt(inputNumber, 16);
            resultElement.innerText = "Decimal: " + result;
            break;
        case "decToHex":
            result = (+inputNumber).toString(16).toUpperCase();
            resultElement.innerText = "Hexadecimal: 0x" + result;
            break;
        case "decToBin":
            result = (+inputNumber).toString(2);
            resultElement.innerText = "Binário: " + result;
            break;
        case "binToDec":
            result = parseInt(inputNumber, 2);
            resultElement.innerText = "Decimal: " + result;
            break;
        case "binToHex":
            var decimalNumber = parseInt(inputNumber, 2);
            result = decimalNumber.toString(16).toUpperCase();
            resultElement.innerText = "Hexadecimal: 0x" + result;
            break;
        case "hexToBin":
            var decNumber = parseInt(inputNumber, 16);
            result = decNumber.toString(2);
            resultElement.innerText = "Binário: " + result;
            break;
        default:
            resultElement.innerText = "Tipo de conversão desconhecido.";
    }
}
