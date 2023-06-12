let pressureColor = "#001f4d";
let unitsDisabled = "#bbafaf";

function changeUnit(unit) {
    const units = ["mBar", "Bar", "Pa", "kPa", "MPa", "psi", "torr"];
    let unitSelected = document.querySelector("#" + unit);
    
    let index = units.indexOf(unit);
    units.splice(index, 1);

    unitSelected.style.backgroundColor = pressureColor;
    
    for (k = 0; k < units.length; k++) {
        document.querySelector("#" + (units[k])).style.backgroundColor = unitsDisabled;
    }

    pressureConverter(unit);
}

function pressureConverter(unit) {
    let pressureValue = document.querySelector('#pressure-input').value;

    if (pressureValue > 0) {
        if (unit == undefined) { unit = "kPa"};

        let mBar = document.querySelector('#output-mBar');
        let Bar = document.querySelector('#output-Bar');
        let Pa = document.querySelector('#output-Pa');
        let kPa = document.querySelector('#output-kPa');
        let MPa = document.querySelector('#output-MPa');
        let psi = document.querySelector('#output-psi');
        let torr = document.querySelector('#output-torr');

        switch (unit) {
            case "mBar":
                mBar.innerText = pressureValue + " " + "mBar";
                Bar.innerText = (pressureValue / 1000) + " " + "Bar";
                Pa.innerText = (pressureValue * 100) + " " + "Pa";
                kPa.innerText = (pressureValue / 10) + " " + "kPa";
                MPa.innerText = (pressureValue / 10000) + " " + "MPa";
                psi.innerText = (pressureValue / 68.948) + " " + "psi";
                torr.innerText = (pressureValue / 1.333) + " " + "torr";
                break;
            case "Bar":
                Bar.innerText = pressureValue + " " + "Bar";
                break;
            case "Pa":
                Pa.innerText = pressureValue + " " + "Pa";
                break;
            case "kPa":
                kPa.innerText = pressureValue + " " + "kPa";
                break;
            case "MPa":
                MPa.innerText = pressureValue + " " + "MPa";
                break;
            case "psi":
                psi.innerText = pressureValue + " " + "psi";
                break;
            case "torr":
                torr.innerText = pressureValue + " " + "torr";
                break;
        }
        
    }
}


