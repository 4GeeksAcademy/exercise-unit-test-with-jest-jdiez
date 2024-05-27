function fromDollarToYen(importe){
    let jpy = 156.5 // japan yen = 1 euro
    let dolEur = 1.07 // 1 euro = 1.07 usd
    let importeEnEuros = importe / dolEur;
    let usdToJpy = importeEnEuros * jpy;
    return usdToJpy;
}

function fromEuroToDollar(importe){
    let dolEur = 1.07 // 1 euro = 1.07 usd
    return importe * dolEur;
}

function fromYenToPound(importe){
    let gbpEur = 0.87 // 1 euro = 0.87 gbp
    let jpy = 156.5 // japan yen = 1 euro
    let importeEnEuros = importe / jpy;
    let jpyToGbp = importeEnEuros * gbpEur;
    return jpyToGbp;

}

module.exports = { fromDollarToYen, fromEuroToDollar, fromYenToPound }


console.log(fromDollarToYen(100));
console.log(fromEuroToDollar(100));
console.log(fromYenToPound(100));