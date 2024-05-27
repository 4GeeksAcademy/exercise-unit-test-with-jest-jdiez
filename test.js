const { fromDollarToYen } = require('./app.js');
const { fromEuroToDollar } = require('./app.js');
const { fromYenToPound } = require('./app.js');


test('100 euros son 14626.16 yenes', () => {

    let total = fromDollarToYen(100);
    expect(total).toBeCloseTo(14626.17,2);
})


test('10 dolares son 10.7 euros', () => {

    let total = fromEuroToDollar(10);
    expect(total).toBeCloseTo(10.70);
})


test('100 Yenes son 0.55591 GBP', () => {

    let total = fromYenToPound(100);
    expect(total).toBeCloseTo(0.55591,5);
})