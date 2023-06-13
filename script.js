let pressureColor = "#001f4d";
let flowColor = "#d38900";
let unitsDisabled = "#bbafaf";
let currentPressureUnit = "kPa";
let currentFlowUnit = "mms";

function changePressureUnit(unit) {
    const units = ["mBar", "Bar", "Pa", "kPa", "MPa", "psi", "torr"];
    let unitSelected = document.querySelector("#" + unit);
    
    let index = units.indexOf(unit);
    units.splice(index, 1);

    unitSelected.style.backgroundColor = pressureColor;
    
    for (k = 0; k < units.length; k++) {
        document.querySelector("#" + (units[k])).style.backgroundColor = unitsDisabled;
    }

    // define which unit is selected
    currentPressureUnit = unit;
    pressureConverter(unit);
}

function pressureConverter(unit) {
    let pressureValue = document.querySelector('#pressure-input').value;

    if (pressureValue > 0) {
        if (unit == undefined) {
            unit = currentPressureUnit;
        }

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
                mBar.innerText = (pressureValue * 1000) + " " + "mBar";
                Bar.innerText = pressureValue + " " + "Bar";
                Pa.innerText = (pressureValue * 100000) + " " + "Pa";
                kPa.innerText = (pressureValue * 100) + " " + "kPa";
                MPa.innerText = (pressureValue / 10) + " " + "MPa";
                psi.innerText = (pressureValue * 14.504) + " " + "psi";
                torr.innerText = (pressureValue * 750.1) + " " + "torr";
                break;
            case "Pa":
                mBar.innerText = (pressureValue / 100) + " " + "mBar";
                Bar.innerText = (pressureValue / 100000) + " " + "Bar";
                Pa.innerText = pressureValue + " " + "Pa";
                kPa.innerText = (pressureValue / 1000) + " " + "kPa";
                MPa.innerText = (pressureValue / 1000000) + " " + "MPa";
                psi.innerText = (pressureValue / 6895) + " " + "psi";
                torr.innerText = (pressureValue / 133.3) + " " + "torr";
                break;
            case "kPa":
                mBar.innerText = (pressureValue * 10) + " " + "mBar";
                Bar.innerText = (pressureValue / 100) + " " + "Bar";
                Pa.innerText = (pressureValue * 1000) + " " + "Pa";
                kPa.innerText = pressureValue + " " + "kPa";
                MPa.innerText = (pressureValue / 1000) + " " + "MPa";
                psi.innerText = (pressureValue / 6.895) + " " + "psi";
                torr.innerText = (pressureValue * 7.501) + " " + "torr";
                break;
            case "MPa":
                mBar.innerText = (pressureValue * 10000) + " " + "mBar";
                Bar.innerText = (pressureValue * 10) + " " + "Bar";
                Pa.innerText = (pressureValue * 1000000) + " " + "Pa";
                kPa.innerText = (pressureValue * 1000) + " " + "kPa";
                MPa.innerText = pressureValue + " " + "MPa";
                psi.innerText = (pressureValue * 145) + " " + "psi";
                torr.innerText = (pressureValue * 7501) + " " + "torr";
                break;
            case "psi":
                mBar.innerText = (pressureValue * 68.948) + " " + "mBar";
                Bar.innerText = (pressureValue / 14.504) + " " + "Bar";
                Pa.innerText = (pressureValue * 6895) + " " + "Pa";
                kPa.innerText = (pressureValue * 6.895) + " " + "kPa";
                MPa.innerText = (pressureValue / 145) + " " + "MPa";
                psi.innerText = pressureValue + " " + "psi";
                torr.innerText = (pressureValue * 51.715) + " " + "torr";
                break;
            case "torr":
                mBar.innerText = (pressureValue * 1.333) + " " + "mBar";
                Bar.innerText = (pressureValue / 750.1) + " " + "Bar";
                Pa.innerText = (pressureValue * 133.3) + " " + "Pa";
                kPa.innerText = (pressureValue / 7.501) + " " + "kPa";
                MPa.innerText = (pressureValue / 7501) + " " + "MPa";
                psi.innerText = (pressureValue / 51.715) + " " + "psi";
                torr.innerText = pressureValue + " " + "torr";
                break;
        }
    }
}

function changeFlowUnit (unit) {
    const units = ["lps", "lpm", "lph", "mms", "ccs", "ccm", "cch"];
    let unitSelected = document.querySelector("#" + unit);
    
    let index = units.indexOf(unit);
    units.splice(index, 1);

    unitSelected.style.backgroundColor = flowColor;
    
    for (j = 0; j < units.length; j++) {
        document.querySelector("#" + (units[j])).style.backgroundColor = unitsDisabled;
    }

    // define which unit is selected
    currentFlowUnit = unit;
    flowConverter(unit);
}

function flowConverter(unit) {
    let flowValue = document.querySelector('#flow-input').value;

    if (flowValue > 0) {
        if (unit == undefined) {
            unit = currentFlowUnit;
        }

        let lps = document.querySelector('#output-lps');
        let lpm = document.querySelector('#output-lpm');
        let lph = document.querySelector('#output-lph');
        let mms = document.querySelector('#output-mms');
        let ccs = document.querySelector('#output-ccs');
        let ccm = document.querySelector('#output-ccm');
        let cch = document.querySelector('#output-cch');

        switch (unit) {
            case "lps":
                lps.innerText = flowValue + " " + "lps";
                lpm.innerText = (flowValue * 60) + " " + "lpm";
                lph.innerText = (flowValue * 3600) + " " + "lph";
                mms.innerText = (flowValue * 1000000) + " " + "mms";
                ccs.innerText = (flowValue * 1000) + " " + "ccs";
                ccm.innerText = (flowValue * 60000) + " " + "ccm";
                cch.innerText = (flowValue * 3600000) + " " + "cch";
                break;
            case "lpm":
                lps.innerText = (flowValue / 60) + " " + "lps";
                lpm.innerText = flowValue + " " + "lpm";
                lph.innerText = (flowValue * 60) + " " + "lph";
                mms.innerText = (flowValue * 16670) + " " + "mms";
                ccs.innerText = (flowValue * 16.667) + " " + "ccs";
                ccm.innerText = (flowValue * 1000) + " " + "ccm";
                cch.innerText = (flowValue * 60000) + " " + "cch";
                break;
            case "lph":
                lps.innerText = (flowValue * 0.000277) + " " + "lps";
                lpm.innerText = (flowValue * 60) + " " + "lpm";
                lph.innerText = flowValue + " " + "lph";
                mms.innerText = (flowValue * 277.8) + " " + "mms";
                ccs.innerText = (flowValue / 3.6) + " " + "ccs";
                ccm.innerText = (flowValue * 16.667) + " " + "ccm";
                cch.innerText = (flowValue * 1000) + " " + "cch";
                break;
            case "mms":
                lps.innerText = (flowValue / 1000000) + " " + "lps";
                lpm.innerText = (flowValue / 16670) + " " + "lpm";
                lph.innerText = (flowValue / 277.8) + " " + "lph";
                mms.innerText = flowValue + " " + "mms";
                ccs.innerText = (flowValue / 1000) + " " + "ccs";
                ccm.innerText = (flowValue * 16.667) + " " + "ccm";
                cch.innerText = (flowValue * 3.6) + " " + "cch";
                break;
            case "ccs":
                lps.innerText = (flowValue / 1000) + " " + "lps";
                lpm.innerText = (flowValue / 16.667) + " " + "lpm";
                lph.innerText = (flowValue * 3.6) + " " + "lph";
                mms.innerText = (flowValue * 1000) + " " + "mms";
                ccs.innerText = flowValue + " " + "ccs";
                ccm.innerText = (flowValue * 60) + " " + "ccm";
                cch.innerText = (flowValue * 3600) + " " + "cch";
                break;
            case "ccm":
                lps.innerText = (flowValue / 60000) + " " + "lps";
                lpm.innerText = (flowValue / 1000) + " " + "lpm";
                lph.innerText = (flowValue / 16.667) + " " + "lph";
                mms.innerText = (flowValue * 16.667) + " " + "mms";
                ccs.innerText = (flowValue / 60) + " " + "ccs";
                ccm.innerText = flowValue + " " + "ccm";
                cch.innerText = (flowValue * 60) + " " + "cch";
                break;
            case "cch":
                lps.innerText = (flowValue / 3.6000000) + " " + "lps";
                lpm.innerText = (flowValue / 60000) + " " + "lpm";
                lph.innerText = (flowValue / 1000) + " " + "lph";
                mms.innerText = (flowValue / 3.6) + " " + "mms";
                ccs.innerText = (flowValue / 3600) + " " + "ccs";
                ccm.innerText = (flowValue / 60) + " " + "ccm";
                cch.innerText = flowValue + " " + "cch";
                break;
        }
    }
}

function copyValue(id) {
    let copy = document.querySelector("#" + id);
    navigator.clipboard.writeText(copy.innerText);
}