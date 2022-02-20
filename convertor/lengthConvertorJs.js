function convertLength(){
    let inputValueString = document.getElementById("inputValueL").value;
    let inputValue = parseInt(inputValueString);
    let iT = document.getElementById("inputTypeL");
    let oT = document.getElementById("outputTypeL");
    let tempSign;
    let result;
    let inputValueType = iT.options[iT.selectedIndex].value;
    let outputValueType = oT.options[oT.selectedIndex].value;

    if(inputValueString == ""){
        alert("please enter a value...");
    }else{
        /** InputKilometer */
        if(inputValueType == "InputKilometer" && outputValueType == "OutputKilometer"){
            result = inputValue;
            tempSign = "km";
        } else if(inputValueType == "InputKilometer" && outputValueType == "OutputMeter"){
            result = inputValue*1000;
            tempSign = "m";
        } else if(inputValueType == "InputKilometer" && outputValueType == "OutputCentimeter"){
            result = inputValue*100000;
            tempSign = "cm";
        } else if(inputValueType == "InputKilometer" && outputValueType == "OutputMillimeter"){
            result = inputValue*(10**6);
            tempSign = "mm";
        } else if(inputValueType == "InputKilometer" && outputValueType == "OutputMicrometer"){
            result = inputValue*(10**9);
            tempSign = "\u00B5m";
        } else if(inputValueType == "InputKilometer" && outputValueType == "OutputNanometer"){
            result = inputValue*(10**12);
            tempSign = "nm";
        } else if(inputValueType == "InputKilometer" && outputValueType == "OutputMile"){
            result = inputValue/1.609;
            tempSign = "Mile";
        } else if(inputValueType == "InputKilometer" && outputValueType == "OutputYard"){
            result = inputValue*1094;
            tempSign = "Yard";
        } else if(inputValueType == "InputKilometer" && outputValueType == "OutputFoot"){
            result = inputValue*3281;
            tempSign = "Foot";
        } else if(inputValueType == "InputKilometer" && outputValueType == "OutputInch"){
            result = inputValue*39370;
            tempSign = "Inch";
        } else if(inputValueType == "InputKilometer" && outputValueType == "OutputNauticalMile"){
            result = inputValue/1.852;
            tempSign = "Nautical Mile";
        }

        /** InputMeter */
        else if(inputValueType == "InputMeter" && outputValueType == "OutputKilometer"){
            result = inputValue/1000;
            tempSign = "km";
        } else if(inputValueType == "InputMeter" && outputValueType == "OutputMeter"){
            result = inputValue;
            tempSign = "m";
        } else if(inputValueType == "InputMeter" && outputValueType == "OutputCentimeter"){
            result = inputValue*100;
            tempSign = "cm";
        } else if(inputValueType == "InputMeter" && outputValueType == "OutputMillimeter"){
            result = inputValue*1000;
            tempSign = "mm";
        } else if(inputValueType == "InputMeter" && outputValueType == "OutputMicrometer"){
            result = inputValue*(10**6);
            tempSign = "\u00B5m";
        } else if(inputValueType == "InputMeter" && outputValueType == "OutputNanometer"){
            result = inputValue*(10**9);
            tempSign = "nm";
        } else if(inputValueType == "InputMeter" && outputValueType == "OutputMile"){
            result = inputValue/1609;
            tempSign = "Mile";
        } else if(inputValueType == "InputMeter" && outputValueType == "OutputYard"){
            result = inputValue*1.094;
            tempSign = "Yard";
        } else if(inputValueType == "InputMeter" && outputValueType == "OutputFoot"){
            result = inputValue*3.281;
            tempSign = "Foot";
        } else if(inputValueType == "InputMeter" && outputValueType == "OutputInch"){
            result = inputValue*39.37;
            tempSign = "Inch";
        } else if(inputValueType == "InputMeter" && outputValueType == "OutputNauticalMile"){
            result = inputValue/1852;
            tempSign = "Nautical Mile";
        }

        /** InputCentimeter */
        else if(inputValueType == "InputCentimeter" && outputValueType == "OutputKilometer"){
            result = inputValue/100000;
            tempSign = "km";
        } else if(inputValueType == "InputCentimeter" && outputValueType == "OutputMeter"){
            result = inputValue/100;
            tempSign = "m";
        } else if(inputValueType == "InputCentimeter" && outputValueType == "OutputCentimeter"){
            result = inputValue;
            tempSign = "cm";
        } else if(inputValueType == "InputCentimeter" && outputValueType == "OutputMillimeter"){
            result = inputValue*10;
            tempSign = "mm";
        } else if(inputValueType == "InputCentimeter" && outputValueType == "OutputMicrometer"){
            result = inputValue*10000;
            tempSign = "\u00B5m";
        } else if(inputValueType == "InputCentimeter" && outputValueType == "OutputNanometer"){
            result = inputValue*(10**7);
            tempSign = "nm";
        } else if(inputValueType == "InputCentimeter" && outputValueType == "OutputMile"){
            result = inputValue/160934;
            tempSign = "Mile";
        } else if(inputValueType == "InputCentimeter" && outputValueType == "OutputYard"){
            result = inputValue/91.44;
            tempSign = "Yard";
        } else if(inputValueType == "InputCentimeter" && outputValueType == "OutputFoot"){
            result = inputValue/30.48;
            tempSign = "Foot";
        } else if(inputValueType == "InputCentimeter" && outputValueType == "OutputInch"){
            result = inputValue/2.54;
            tempSign = "Inch";
        } else if(inputValueType == "InputCentimeter" && outputValueType == "OutputNauticalMile"){
            result = inputValue/185200;
            tempSign = "Nautical Mile";
        }

        /** InputMillimeter */
        else if(inputValueType == "InputMillimeter" && outputValueType == "OutputKilometer"){
            result = inputValue/(10**6);
            tempSign = "km";
        } else if(inputValueType == "InputMillimeter" && outputValueType == "OutputMeter"){
            result = inputValue/1000;
            tempSign = "m";
        } else if(inputValueType == "InputMillimeter" && outputValueType == "OutputCentimeter"){
            result = inputValue/10;
            tempSign = "cm";
        } else if(inputValueType == "InputMillimeter" && outputValueType == "OutputMillimeter"){
            result = inputValue;
            tempSign = "mm";
        } else if(inputValueType == "InputMillimeter" && outputValueType == "OutputMicrometer"){
            result = inputValue*1000;
            tempSign = "\u00B5m";
        } else if(inputValueType == "InputMillimeter" && outputValueType == "OutputNanometer"){
            result = inputValue*(10**6);
            tempSign = "nm";
        } else if(inputValueType == "InputMillimeter" && outputValueType == "OutputMile"){
            result = inputValue/(1.609*(10**6));
            tempSign = "Mile";
        } else if(inputValueType == "InputMillimeter" && outputValueType == "OutputYard"){
            result = inputValue/914;
            tempSign = "Yard";
        } else if(inputValueType == "InputMillimeter" && outputValueType == "OutputFoot"){
            result = inputValue/305;
            tempSign = "Foot";
        } else if(inputValueType == "InputMillimeter" && outputValueType == "OutputInch"){
            result = inputValue/25.4;
            tempSign = "Inch";
        } else if(inputValueType == "InputMillimeter" && outputValueType == "OutputNauticalMile"){
            result = inputValue/(1.852*(10**6));
            tempSign = "Nautical Mile";
        }

        /** InputMicrometer */
        else if(inputValueType == "InputMicrometer" && outputValueType == "OutputKilometer"){
            result = inputValue/(10**9);
            tempSign = "km";
        } else if(inputValueType == "InputMicrometer" && outputValueType == "OutputMeter"){
            result = inputValue/(10**6);
            tempSign = "m";
        } else if(inputValueType == "InputMicrometer" && outputValueType == "OutputCentimeter"){
            result = inputValue/10000;
            tempSign = "cm";
        } else if(inputValueType == "InputMicrometer" && outputValueType == "OutputMillimeter"){
            result = inputValue/1000;
            tempSign = "mm";
        } else if(inputValueType == "InputMicrometer" && outputValueType == "OutputMicrometer"){
            result = inputValue;
            tempSign = "\u00B5m";
        } else if(inputValueType == "InputMicrometer" && outputValueType == "OutputNanometer"){
            result = inputValue*1000;
            tempSign = "nm";
        } else if(inputValueType == "InputMicrometer" && outputValueType == "OutputMile"){
            result = inputValue/(1.609*(10**9));
            tempSign = "Mile";
        } else if(inputValueType == "InputMicrometer" && outputValueType == "OutputYard"){
            result = inputValue/914400;
            tempSign = "Yard";
        } else if(inputValueType == "InputMicrometer" && outputValueType == "OutputFoot"){
            result = inputValue/304800;
            tempSign = "Foot";
        } else if(inputValueType == "InputMicrometer" && outputValueType == "OutputInch"){
            result = inputValue/25400;
            tempSign = "Inch";
        } else if(inputValueType == "InputMicrometer" && outputValueType == "OutputNauticalMile"){
            result = inputValue/(1.852*(10**9));
            tempSign = "Nautical Mile";
        } 

        /** InputNanometer */
        else if(inputValueType == "InputNanometer" && outputValueType == "OutputKilometer"){
            result = inputValue/(10**12);
            tempSign = "km";
        } else if(inputValueType == "InputNanometer" && outputValueType == "OutputMeter"){
            result = inputValue/(10**9);
            tempSign = "m";
        } else if(inputValueType == "InputNanometer" && outputValueType == "OutputCentimeter"){
            result = inputValue/(10**7);
            tempSign = "cm";
        } else if(inputValueType == "InputNanometer" && outputValueType == "OutputMillimeter"){
            result = inputValue/(10**6);
            tempSign = "mm";
        } else if(inputValueType == "InputNanometer" && outputValueType == "OutputMicrometer"){
            result = inputValue/1000;
            tempSign = "\u00B5m";
        } else if(inputValueType == "InputNanometer" && outputValueType == "OutputNanometer"){
            result = inputValue;
            tempSign = "nm";
        } else if(inputValueType == "InputNanometer" && outputValueType == "OutputMile"){
            result = inputValue/(1.609*(10**12));
            tempSign = "Mile";
        } else if(inputValueType == "InputNanometer" && outputValueType == "OutputYard"){
            result = inputValue/(9.144*(10**8));
            tempSign = "Yard";
        } else if(inputValueType == "InputNanometer" && outputValueType == "OutputFoot"){
            result = inputValue/(3.048*(10**8));
            tempSign = "Foot";
        } else if(inputValueType == "InputNanometer" && outputValueType == "OutputInch"){
            result = inputValue/(2.54*(10**7));
            tempSign = "Inch";
        } else if(inputValueType == "InputNanometer" && outputValueType == "OutputNauticalMile"){
            result = inputValue/(1.852*(10**12));
            tempSign = "Nautical Mile";
        }

        /** InputMile */
        else if(inputValueType == "InputMile" && outputValueType == "OutputKilometer"){
            result = inputValue*1.609;
            tempSign = "km";
        } else if(inputValueType == "InputMile" && outputValueType == "OutputMeter"){
            result = inputValue*1609;
            tempSign = "m";
        } else if(inputValueType == "InputMile" && outputValueType == "OutputCentimeter"){
            result = inputValue*160934;
            tempSign = "cm";
        } else if(inputValueType == "InputMile" && outputValueType == "OutputMillimeter"){
            result = inputValue*(1.609*(10**6));
            tempSign = "mm";
        } else if(inputValueType == "InputMile" && outputValueType == "OutputMicrometer"){
            result = inputValue*(1.609*(10**9));
            tempSign = "\u00B5m";
        } else if(inputValueType == "InputMile" && outputValueType == "OutputNanometer"){
            result = inputValue*(1.609*(10**12));
            tempSign = "nm";
        } else if(inputValueType == "InputMile" && outputValueType == "OutputMile"){
            result = inputValue;
            tempSign = "Mile";
        } else if(inputValueType == "InputMile" && outputValueType == "OutputYard"){
            result = inputValue*1760;
            tempSign = "Yard";
        } else if(inputValueType == "InputMile" && outputValueType == "OutputFoot"){
            result = inputValue*5280;
            tempSign = "Foot";
        } else if(inputValueType == "InputMile" && outputValueType == "OutputInch"){
            result = inputValue*63360;
            tempSign = "Inch";
        } else if(inputValueType == "InputMile" && outputValueType == "OutputNauticalMile"){
            result = inputValue/1.151;
            tempSign = "Nautical Mile";
        }

        /** InputYard */
        else if(inputValueType == "InputYard" && outputValueType == "OutputKilometer"){
            result = inputValue/1094;
            tempSign = "km";
        } else if(inputValueType == "InputYard" && outputValueType == "OutputMeter"){
            result = inputValue/1.094;
            tempSign = "m";
        } else if(inputValueType == "InputYard" && outputValueType == "OutputCentimeter"){
            result = inputValue*91.44;
            tempSign = "cm";
        } else if(inputValueType == "InputYard" && outputValueType == "OutputMillimeter"){
            result = inputValue*914.4;
            tempSign = "mm";
        } else if(inputValueType == "InputYard" && outputValueType == "OutputMicrometer"){
            result = inputValue*914400;
            tempSign = "\u00B5m";
        } else if(inputValueType == "InputYard" && outputValueType == "OutputNanometer"){
            result = inputValue*(9.144*(10**8));
            tempSign = "nm";
        } else if(inputValueType == "InputYard" && outputValueType == "OutputMile"){
            result = inputValue/1760;
            tempSign = "Mile";
        } else if(inputValueType == "InputYard" && outputValueType == "OutputYard"){
            result = inputValue;
            tempSign = "Yard";
        } else if(inputValueType == "InputYard" && outputValueType == "OutputFoot"){
            result = inputValue*3;
            tempSign = "Foot";
        } else if(inputValueType == "InputYard" && outputValueType == "OutputInch"){
            result = inputValue*36;
            tempSign = "Inch";
        } else if(inputValueType == "InputYard" && outputValueType == "OutputNauticalMile"){
            result = inputValue/2025;
            tempSign = "Nautical Mile";
        }

        /** InputFoot */
        else if(inputValueType == "InputFoot" && outputValueType == "OutputKilometer"){
            result = inputValue/3281;
            tempSign = "km";
        } else if(inputValueType == "InputFoot" && outputValueType == "OutputMeter"){
            result = inputValue/3.281;
            tempSign = "m";
        } else if(inputValueType == "InputFoot" && outputValueType == "OutputCentimeter"){
            result = inputValue*30.48;
            tempSign = "cm";
        } else if(inputValueType == "InputFoot" && outputValueType == "OutputMillimeter"){
            result = inputValue*304.8;
            tempSign = "mm";
        } else if(inputValueType == "InputFoot" && outputValueType == "OutputMicrometer"){
            result = inputValue*304800;
            tempSign = "\u00B5m";
        } else if(inputValueType == "InputFoot" && outputValueType == "OutputNanometer"){
            result = inputValue*(3.048*(10**8));
            tempSign = "nm";
        } else if(inputValueType == "InputFoot" && outputValueType == "OutputMile"){
            result = inputValue/5280;
            tempSign = "Mile";
        } else if(inputValueType == "InputFoot" && outputValueType == "OutputYard"){
            result = inputValue/3;
            tempSign = "Yard";
        } else if(inputValueType == "InputFoot" && outputValueType == "OutputFoot"){
            result = inputValue;
            tempSign = "Foot";
        } else if(inputValueType == "InputFoot" && outputValueType == "OutputInch"){
            result = inputValue*12;
            tempSign = "Inch";
        } else if(inputValueType == "InputFoot" && outputValueType == "OutputNauticalMile"){
            result = inputValue/6076;
            tempSign = "Nautical Mile";
        }

        /** InputInch */
        else if(inputValueType == "InputInch" && outputValueType == "OutputKilometer"){
            result = inputValue/39370;
            tempSign = "km";
        } else if(inputValueType == "InputInch" && outputValueType == "OutputMeter"){
            result = inputValue/39.37;
            tempSign = "m";
        } else if(inputValueType == "InputInch" && outputValueType == "OutputCentimeter"){
            result = inputValue*2.54;
            tempSign = "cm";
        } else if(inputValueType == "InputInch" && outputValueType == "OutputMillimeter"){
            result = inputValue*25.4;
            tempSign = "mm";
        } else if(inputValueType == "InputInch" && outputValueType == "OutputMicrometer"){
            result = inputValue*25400;
            tempSign = "\u00B5m";
        } else if(inputValueType == "InputInch" && outputValueType == "OutputNanometer"){
            result = inputValue*(2.54*(10**7));
            tempSign = "nm";
        } else if(inputValueType == "InputInch" && outputValueType == "OutputMile"){
            result = inputValue/63360;
            tempSign = "Mile";
        } else if(inputValueType == "InputInch" && outputValueType == "OutputYard"){
            result = inputValue/36;
            tempSign = "Yard";
        } else if(inputValueType == "InputInch" && outputValueType == "OutputFoot"){
            result = inputValue/12;
            tempSign = "Foot";
        } else if(inputValueType == "InputInch" && outputValueType == "OutputInch"){
            result = inputValue;
            tempSign = "Inch";
        } else if(inputValueType == "InputInch" && outputValueType == "OutputNauticalMile"){
            result = inputValue/72913;
            tempSign = "Nautical Mile";
        }

        /** InputNauticalMile */
        else if(inputValueType == "InputNauticalMile" && outputValueType == "OutputKilometer"){
            result = inputValue*1.852;
            tempSign = "km";
        } else if(inputValueType == "InputNauticalMile" && outputValueType == "OutputMeter"){
            result = inputValue*1852;
            tempSign = "m";
        } else if(inputValueType == "InputNauticalMile" && outputValueType == "OutputCentimeter"){
            result = inputValue*185200;
            tempSign = "cm";
        } else if(inputValueType == "InputNauticalMile" && outputValueType == "OutputMillimeter"){
            result = inputValue*(1.852*(10**6));
            tempSign = "mm";
        } else if(inputValueType == "InputNauticalMile" && outputValueType == "OutputMicrometer"){
            result = inputValue*(1.852*(10**9));
            tempSign = "\u00B5m";
        } else if(inputValueType == "InputNauticalMile" && outputValueType == "OutputNanometer"){
            result = inputValue*(1.852*(10**12));
            tempSign = "nm";
        } else if(inputValueType == "InputNauticalMile" && outputValueType == "OutputMile"){
            result = inputValue*1.151;
            tempSign = "Mile";
        } else if(inputValueType == "InputNauticalMile" && outputValueType == "OutputYard"){
            result = inputValue*2025.37;
            tempSign = "Yard";
        } else if(inputValueType == "InputNauticalMile" && outputValueType == "OutputFoot"){
            result = inputValue*6076.12;
            tempSign = "Foot";
        } else if(inputValueType == "InputNauticalMile" && outputValueType == "OutputInch"){
            result = inputValue*72913.4;
            tempSign = "Inch";
        } else if(inputValueType == "InputNauticalMile" && outputValueType == "OutputNauticalMile"){
            result = inputValue;
            tempSign = "Nautical Mile";
        }

        document.getElementById("printResultLength").innerHTML = result+" "+tempSign;
    }
}

function resetMyLengthForm(){
    document.getElementById("printResultLength").innerHTML="";
    document.getElementById("lengthForm").reset();
}