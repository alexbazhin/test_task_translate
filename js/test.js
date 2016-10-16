function validateStrNumber(digNumber, strNumber) {
    var number = new DigitalNumber(digNumber);
    return (strNumber==number.solve(number.splitIntoCategories()));
}