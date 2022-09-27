const unit = document.getElementById('number');
const convertNumber = document.getElementById('convert');


// Length (Meter/Feet)
lengthUnitConversion = () => {
    const feet = document.getElementById('feet');
    const meter = document.getElementById('meter');

    const feetToMeterConversion = unit.value / 3.2808;
    const meterToFeetConversion = unit.value * 3.2808;

    feet.textContent = `${unit.value} feet = ${feetToMeterConversion.toFixed(3)} meters`
    meter.textContent = `${ unit.value } meters = ${ meterToFeetConversion.toFixed(3) } feets `;
}

// Volume(Liters/Gallons)
const volumeUnitConversion = () => {
    const liter = document.getElementById('liter');
    const gallon = document.getElementById('gallon');

    const literToGallonConversion = unit.value * 0.264172;
    const gallonToliterConversion = unit.value / 0.264172;

    liter.textContent = `${unit.value} liters = ${literToGallonConversion.toFixed(3)} gallons`;
    gallon.textContent = `${unit.value} gallons = ${gallonToliterConversion.toFixed(3)} liters`;
}

// Mass(Kilogram/Pounds)
const massUnitConversion = () => {
    const pounds = document.getElementById('pound');
    const kilo = document.getElementById('kilo');

    const poundsToKilogramConversion = unit.value / 2.2046;
    const kilogramToPoundsConversion = unit.value * 2.2046;

    pounds.textContent = `${unit.value} pounds = ${poundsToKilogramConversion.toFixed(3)} kilos`;  
    kilo.textContent = `${ unit.value } kilos = ${ kilogramToPoundsConversion.toFixed(3) } pounds`;
}

const kilogramToPoundsConversion = () => {
    console.log(unit.value * 2.2046);
}


const convertUnitNumber = () => {

    // Length (Meter/Feet)
    lengthUnitConversion()

    // Volume(Liters/Gallons)
    volumeUnitConversion()
    
    // Mass(Kilogram/Pounds)
    massUnitConversion()

}

convertNumber.addEventListener('click', () => {
    convertUnitNumber()

    if (unit.value) {
        document.getElementById('form').reset()
    }
})