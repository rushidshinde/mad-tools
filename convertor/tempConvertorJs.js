function convertTemperature(){
    let inputValueString = document.getElementById("inputValueT").value;
    let inputValue = parseInt(inputValueString);
    let iT = document.getElementById("inputTypeT");
    let oT = document.getElementById("outputTypeT");
    let tempSign;
    let result;
    let inputValueType = iT.options[iT.selectedIndex].value;
    let outputValueType = oT.options[oT.selectedIndex].value;

    if(inputValueString == ""){
        alert("please enter a value...");
    } else{
        if(inputValueType=="InputDegreeCelsius" && outputValueType=="OutputDegreeCelsius"){
            result = inputValue;
            tempSign = "\u2103";

        } else if(inputValueType=="InputDegreeCelsius" && outputValueType=="OutputDegreeFahrenheit"){
            result = (inputValue*9/5)+32;
            tempSign = "\u2109";

        } else if(inputValueType=="InputDegreeCelsius" && outputValueType=="OutputKelvin"){
            result = inputValue+273.15;
            tempSign = "\u212A";

        } else if(inputValueType=="InputDegreeFahrenheit" && outputValueType=="OutputDegreeCelsius"){
            result = (inputValue-32)*5/9;
            tempSign = "\u2103";

        } else if(inputValueType=="InputDegreeFahrenheit" && outputValueType=="OutputDegreeFahrenheit"){
            result = inputValue;
            tempSign = "\u2109";

        } else if(inputValueType=="InputDegreeFahrenheit" && outputValueType=="OutputKelvin"){
            result = ((inputValue-32)*5/9)+273.15;
            tempSign = "\u212A";

        } else if(inputValueType=="InputKelvin" && outputValueType=="OutputDegreeCelsius"){
            result = inputValue-273.15;
            tempSign = "\u2103";

        } else if(inputValueType=="InputKelvin" && outputValueType=="OutputDegreeFahrenheit"){
            result = ((inputValue-273.15)*9/5)+32;
            tempSign = "\u2109";

        } else if(inputValueType=="InputKelvin" && outputValueType=="OutputKelvin"){
            result = inputValue;
            tempSign = "\u212A";

        }

        document.getElementById("printResultTemp").innerHTML = result+" "+tempSign;
    }
}

function resetMyTemperatureForm(){
    document.getElementById("printResultTemp").innerHTML="";
    document.getElementById("tempForm").reset();
}