function convertSpeed(){
    let inputValueString = document.getElementById("inputValueSpeed").value;
    let inputValue = parseInt(inputValueString);
    let iT = document.getElementById("inputTypeSpeed");
    let oT = document.getElementById("outputTypeSpeed");
    let tempSign;
    let result;
    let inputValueType = iT.options[iT.selectedIndex].value;
    let outputValueType = oT.options[oT.selectedIndex].value;

    if(inputValueString == ""){
        alert("please enter a value...");
    }else{
        /** InputMilesPerHour */
        if(inputValueType == "InputMilesPerHour" && outputValueType == "OutputMilesPerHour"){
            result = inputValue;
            tempSign = "m/h";
        } else if(inputValueType == "InputMilesPerHour" && outputValueType == "OutputFootPerSecond"){
            result = inputValue*1.46667;
            tempSign = "f/s";
        } else if(inputValueType == "InputMilesPerHour" && outputValueType == "OutputMeterPerSecond"){
            result = inputValue/2.237;
            tempSign = "m/s";
        } else if(inputValueType == "InputMilesPerHour" && outputValueType == "OutputKilometerPerHour"){
            result = inputValue*1.60934;
            tempSign = "km/h";
        } else if(inputValueType == "InputMilesPerHour" && outputValueType == "OutputKnot"){
            result = inputValue/1.151;
            tempSign = "knot";
        }

        /** InputFootPerSecond */

        if(inputValueType == "InputFootPerSecond" && outputValueType == "OutputMilesPerHour"){
            result = inputValue/1.151;
            tempSign = "m/h";
        } else if(inputValueType == "InputFootPerSecond" && outputValueType == "OutputFootPerSecond"){
            result = inputValue;
            tempSign = "f/s";
        } else if(inputValueType == "InputFootPerSecond" && outputValueType == "OutputMeterPerSecond"){
            result = inputValue/3.281;
            tempSign = "m/s";
        } else if(inputValueType == "InputFootPerSecond" && outputValueType == "OutputKilometerPerHour"){
            result = inputValue*1.09728;
            tempSign = "km/h";
        } else if(inputValueType == "InputFootPerSecond" && outputValueType == "OutputKnot"){
            result = inputValue/1.688;
            tempSign = "knot";
        }

        /** InputMeterPerSecond */

        if(inputValueType == "InputMeterPerSecond" && outputValueType == "OutputMilesPerHour"){
            result = inputValue*2.237;
            tempSign = "m/h";
        } else if(inputValueType == "InputMeterPerSecond" && outputValueType == "OutputFootPerSecond"){
            result = inputValue*3.281;
            tempSign = "f/s";
        } else if(inputValueType == "InputMeterPerSecond" && outputValueType == "OutputMeterPerSecond"){
            result = inputValue;
            tempSign = "m/s";
        } else if(inputValueType == "InputMeterPerSecond" && outputValueType == "OutputKilometerPerHour"){
            result = inputValue*3.6;
            tempSign = "km/h";
        } else if(inputValueType == "InputMeterPerSecond" && outputValueType == "OutputKnot"){
            result = inputValue*1.944;
            tempSign = "knot";
        }

        /** InputKilometerPerHour */

        if(inputValueType == "InputKilometerPerHour" && outputValueType == "OutputMilesPerHour"){
            result = inputValue/1.609;
            tempSign = "m/h";
        } else if(inputValueType == "InputKilometerPerHour" && outputValueType == "OutputFootPerSecond"){
            result = inputValue/1.097;
            tempSign = "f/s";
        } else if(inputValueType == "InputKilometerPerHour" && outputValueType == "OutputMeterPerSecond"){
            result = inputValue/3.6;
            tempSign = "m/s";
        } else if(inputValueType == "InputKilometerPerHour" && outputValueType == "OutputKilometerPerHour"){
            result = inputValue;
            tempSign = "km/h";
        } else if(inputValueType == "InputKilometerPerHour" && outputValueType == "OutputKnot"){
            result = inputValue/1.852;
            tempSign = "knot";
        }

        /** InputKnot */

        if(inputValueType == "InputKnot" && outputValueType == "OutputMilesPerHour"){
            result = inputValue*1.151;
            tempSign = "m/h";
        } else if(inputValueType == "InputKnot" && outputValueType == "OutputFootPerSecond"){
            result = inputValue*1.688;
            tempSign = "f/s";
        } else if(inputValueType == "InputKnot" && outputValueType == "OutputMeterPerSecond"){
            result = inputValue/1.944;
            tempSign = "m/s";
        } else if(inputValueType == "InputKnot" && outputValueType == "OutputKilometerPerHour"){
            result = inputValue*1.852;
            tempSign = "km/h";
        } else if(inputValueType == "InputKnot" && outputValueType == "OutputKnot"){
            result = inputValue;
            tempSign = "knot";
        }

        document.getElementById("printResultSpeed").innerHTML = result+" "+tempSign;
    }
}

function resetMySpeedForm(){
    document.getElementById("printResultSpeed").innerHTML="";
    document.getElementById("speedForm").reset();
}