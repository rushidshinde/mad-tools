function convertTime(){
    let inputValueString = document.getElementById("inputValueTime").value;
    let inputValue = parseInt(inputValueString);
    let iT = document.getElementById("inputTypeTime");
    let oT = document.getElementById("outputTypeTime");
    let tempSign;
    let result;
    let inputValueType = iT.options[iT.selectedIndex].value;
    let outputValueType = oT.options[oT.selectedIndex].value;

    if(inputValueString == ""){
        alert("please enter a value...");
    }else{

        /** InputNanosecond */

        if(inputValueType == "InputNanosecond" && outputValueType == "OutputNanosecond"){
            result = inputValue;
            tempSign = "ns";
        } else if(inputValueType == "InputNanosecond" && outputValueType == "OutputMicrosecond"){
            result = inputValue/1000;
            tempSign = "\u00B5s";
        } else if(inputValueType == "InputNanosecond" && outputValueType == "OutputMillisecond"){
            result = inputValue/(10**6);
            tempSign = "ms";
        } else if(inputValueType == "InputNanosecond" && outputValueType == "OutputSecond"){
            result = inputValue/(10**9);
            tempSign = "Second";
        } else if(inputValueType == "InputNanosecond" && outputValueType == "OutputMinute"){
            result = inputValue/(6*(10**10));
            tempSign = "Minute";
        } else if(inputValueType == "InputNanosecond" && outputValueType == "OutputHour"){
            result = inputValue/(3.6*(10**12));
            tempSign = "Hour";
        } else if(inputValueType == "InputNanosecond" && outputValueType == "OutputDay"){
            result = inputValue/(8.64*(10**13));
            tempSign = "Day";
        } else if(inputValueType == "InputNanosecond" && outputValueType == "OutputWeek"){
            result = inputValue/(6.048*(10**14));
            tempSign = "week";
        } else if(inputValueType == "InputNanosecond" && outputValueType == "OutputMonth"){
            result = inputValue/(2.628*(10**15));
            tempSign = "Month";
        } else if(inputValueType == "InputNanosecond" && outputValueType == "OutputCalenderYear"){
            result = inputValue/(3.154*(10**16));
            tempSign = "Year";
        } else if(inputValueType == "InputNanosecond" && outputValueType == "OutputDecade"){
            result = inputValue/(3.154*(10**17));
            tempSign = "Decade";
        } else if(inputValueType == "InputNanosecond" && outputValueType == "OutputCentury"){
            result = inputValue/(3.154*(10**18));
            tempSign = "Century";
        }

        /** InputMicrosecond */

        else if(inputValueType == "InputMicrosecond" && outputValueType == "OutputNanosecond"){
            result = inputValue*1000;
            tempSign = "ns";
        } else if(inputValueType == "InputMicrosecond" && outputValueType == "OutputMicrosecond"){
            result = inputValue;
            tempSign = "\u00B5s";
        } else if(inputValueType == "InputMicrosecond" && outputValueType == "OutputMillisecond"){
            result = inputValue/1000;
            tempSign = "ms";
        } else if(inputValueType == "InputMicrosecond" && outputValueType == "OutputSecond"){
            result = inputValue/(10**6);
            tempSign = "Second";
        } else if(inputValueType == "InputMicrosecond" && outputValueType == "OutputMinute"){
            result = inputValue/(6*(10**7));
            tempSign = "Minute";
        } else if(inputValueType == "InputMicrosecond" && outputValueType == "OutputHour"){
            result = inputValue/(3.6*(10**9));
            tempSign = "Hour";
        } else if(inputValueType == "InputMicrosecond" && outputValueType == "OutputDay"){
            result = inputValue/(8.64*(10**10));
            tempSign = "Day";
        } else if(inputValueType == "InputMicrosecond" && outputValueType == "OutputWeek"){
            result = inputValue/(6.048*(10**11));
            tempSign = "week";
        } else if(inputValueType == "InputMicrosecond" && outputValueType == "OutputMonth"){
            result = inputValue/(2.628*(10**12));
            tempSign = "Month";
        } else if(inputValueType == "InputMicrosecond" && outputValueType == "OutputCalenderYear"){
            result = inputValue/(3.154*(10**13));
            tempSign = "Year";
        } else if(inputValueType == "InputMicrosecond" && outputValueType == "OutputDecade"){
            result = inputValue/(3.154*(10**14));
            tempSign = "Decade";
        } else if(inputValueType == "InputMicrosecond" && outputValueType == "OutputCentury"){
            result = inputValue/(3.154*(10**15));
            tempSign = "Century";
        }

        /** InputMillisecond */

        else if(inputValueType == "InputMillisecond" && outputValueType == "OutputNanosecond"){
            result = inputValue*(10**6);
            tempSign = "ns";
        } else if(inputValueType == "InputMillisecond" && outputValueType == "OutputMicrosecond"){
            result = inputValue*1000;
            tempSign = "\u00B5s";
        } else if(inputValueType == "InputMillisecond" && outputValueType == "OutputMillisecond"){
            result = inputValue;
            tempSign = "ms";
        } else if(inputValueType == "InputMillisecond" && outputValueType == "OutputSecond"){
            result = inputValue/1000;
            tempSign = "Second";
        } else if(inputValueType == "InputMillisecond" && outputValueType == "OutputMinute"){
            result = inputValue/60000;
            tempSign = "Minute";
        } else if(inputValueType == "InputMillisecond" && outputValueType == "OutputHour"){
            result = inputValue/(3.6*(10**6));
            tempSign = "Hour";
        } else if(inputValueType == "InputMillisecond" && outputValueType == "OutputDay"){
            result = inputValue/(8.64*(10**7));
            tempSign = "Day";
        } else if(inputValueType == "InputMillisecond" && outputValueType == "OutputWeek"){
            result = inputValue/(6.048*(10**8));
            tempSign = "week";
        } else if(inputValueType == "InputMillisecond" && outputValueType == "OutputMonth"){
            result = inputValue/(2.628*(10**9));
            tempSign = "Month";
        } else if(inputValueType == "InputMillisecond" && outputValueType == "OutputCalenderYear"){
            result = inputValue/(3.154*(10**10));
            tempSign = "Year";
        } else if(inputValueType == "InputMillisecond" && outputValueType == "OutputDecade"){
            result = inputValue/(3.154*(10**11));
            tempSign = "Decade";
        } else if(inputValueType == "InputMillisecond" && outputValueType == "OutputCentury"){
            result = inputValue/(3.154*(10**12));
            tempSign = "Century";
        }

        /** InputSecond */

        else if(inputValueType == "InputSecond" && outputValueType == "OutputNanosecond"){
            result = inputValue*(10**9);
            tempSign = "ns";
        } else if(inputValueType == "InputSecond" && outputValueType == "OutputMicrosecond"){
            result = inputValue*(10**6);
            tempSign = "\u00B5s";
        } else if(inputValueType == "InputSecond" && outputValueType == "OutputMillisecond"){
            result = inputValue*1000;
            tempSign = "ms";
        } else if(inputValueType == "InputSecond" && outputValueType == "OutputSecond"){
            result = inputValue;
            tempSign = "Second";
        } else if(inputValueType == "InputSecond" && outputValueType == "OutputMinute"){
            result = inputValue/60;
            tempSign = "Minute";
        } else if(inputValueType == "InputSecond" && outputValueType == "OutputHour"){
            result = inputValue/3600;
            tempSign = "Hour";
        } else if(inputValueType == "InputSecond" && outputValueType == "OutputDay"){
            result = inputValue/86400;
            tempSign = "Day";
        } else if(inputValueType == "InputSecond" && outputValueType == "OutputWeek"){
            result = inputValue/604800;
            tempSign = "week";
        } else if(inputValueType == "InputSecond" && outputValueType == "OutputMonth"){
            result = inputValue/(2.628*(10**6));
            tempSign = "Month";
        } else if(inputValueType == "InputSecond" && outputValueType == "OutputCalenderYear"){
            result = inputValue/(3.154*(10**7));
            tempSign = "Year";
        } else if(inputValueType == "InputSecond" && outputValueType == "OutputDecade"){
            result = inputValue/(3.154*(10**8));
            tempSign = "Decade";
        } else if(inputValueType == "InputSecond" && outputValueType == "OutputCentury"){
            result = inputValue/(3.154*(10**9));
            tempSign = "Century";
        }

        /** InputMinute */

        else if(inputValueType == "InputMinute" && outputValueType == "OutputNanosecond"){
            result = inputValue*(6*(10*10));
            tempSign = "ns";
        } else if(inputValueType == "InputMinute" && outputValueType == "OutputMicrosecond"){
            result = inputValue*(6*(10**7));
            tempSign = "\u00B5s";
        } else if(inputValueType == "InputMinute" && outputValueType == "OutputMillisecond"){
            result = inputValue*60000;
            tempSign = "ms";
        } else if(inputValueType == "InputMinute" && outputValueType == "OutputSecond"){
            result = inputValue*60;
            tempSign = "Second";
        } else if(inputValueType == "InputMinute" && outputValueType == "OutputMinute"){
            result = inputValue;
            tempSign = "Minute";
        } else if(inputValueType == "InputMinute" && outputValueType == "OutputHour"){
            result = inputValue/60;
            tempSign = "Hour";
        } else if(inputValueType == "InputMinute" && outputValueType == "OutputDay"){
            result = inputValue/1440;
            tempSign = "Day";
        } else if(inputValueType == "InputMinute" && outputValueType == "OutputWeek"){
            result = inputValue/10080;
            tempSign = "week";
        } else if(inputValueType == "InputMinute" && outputValueType == "OutputMonth"){
            result = inputValue/43800;
            tempSign = "Month";
        } else if(inputValueType == "InputMinute" && outputValueType == "OutputCalenderYear"){
            result = inputValue/525600;
            tempSign = "Year";
        } else if(inputValueType == "InputMinute" && outputValueType == "OutputDecade"){
            result = inputValue/(5.256*(10**6));
            tempSign = "Decade";
        } else if(inputValueType == "InputMinute" && outputValueType == "OutputCentury"){
            result = inputValue/(5.256*(10**7));
            tempSign = "Century";
        }

        /** InputHour */

        else if(inputValueType == "InputHour" && outputValueType == "OutputNanosecond"){
            result = inputValue*(3.6*(10**12));
            tempSign = "ns";
        } else if(inputValueType == "InputHour" && outputValueType == "OutputMicrosecond"){
            result = inputValue*(3.6*(10**9));
            tempSign = "\u00B5s";
        } else if(inputValueType == "InputHour" && outputValueType == "OutputMillisecond"){
            result = inputValue*(3.6*(10**6));
            tempSign = "ms";
        } else if(inputValueType == "InputHour" && outputValueType == "OutputSecond"){
            result = inputValue*3600;
            tempSign = "Second";
        } else if(inputValueType == "InputHour" && outputValueType == "OutputMinute"){
            result = inputValue*60;
            tempSign = "Minute";
        } else if(inputValueType == "InputHour" && outputValueType == "OutputHour"){
            result = inputValue;
            tempSign = "Hour";
        } else if(inputValueType == "InputHour" && outputValueType == "OutputDay"){
            result = inputValue/24;
            tempSign = "Day";
        } else if(inputValueType == "InputHour" && outputValueType == "OutputWeek"){
            result = inputValue/168;
            tempSign = "week";
        } else if(inputValueType == "InputHour" && outputValueType == "OutputMonth"){
            result = inputValue/730;
            tempSign = "Month";
        } else if(inputValueType == "InputHour" && outputValueType == "OutputCalenderYear"){
            result = inputValue/8760;
            tempSign = "Year";
        } else if(inputValueType == "InputHour" && outputValueType == "OutputDecade"){
            result = inputValue/87600;
            tempSign = "Decade";
        } else if(inputValueType == "InputHour" && outputValueType == "OutputCentury"){
            result = inputValue/876000;
            tempSign = "Century";
        }

        /** InputDay */

        else if(inputValueType == "InputDay" && outputValueType == "OutputNanosecond"){
            result = inputValue*(8.64*(10**13));
            tempSign = "ns";
        } else if(inputValueType == "InputDay" && outputValueType == "OutputMicrosecond"){
            result = inputValue*(8.64*(10**10));
            tempSign = "\u00B5s";
        } else if(inputValueType == "InputDay" && outputValueType == "OutputMillisecond"){
            result = inputValue*(8.64*(10**7));
            tempSign = "ms";
        } else if(inputValueType == "InputDay" && outputValueType == "OutputSecond"){
            result = inputValue*86400;
            tempSign = "Second";
        } else if(inputValueType == "InputDay" && outputValueType == "OutputMinute"){
            result = inputValue*1440;
            tempSign = "Minute";
        } else if(inputValueType == "InputDay" && outputValueType == "OutputHour"){
            result = inputValue*24;
            tempSign = "Hour";
        } else if(inputValueType == "InputDay" && outputValueType == "OutputDay"){
            result = inputValue;
            tempSign = "Day";
        } else if(inputValueType == "InputDay" && outputValueType == "OutputWeek"){
            result = inputValue/7;
            tempSign = "week";
        } else if(inputValueType == "InputDay" && outputValueType == "OutputMonth"){
            result = inputValue/30.417;
            tempSign = "Month";
        } else if(inputValueType == "InputDay" && outputValueType == "OutputCalenderYear"){
            result = inputValue/365;
            tempSign = "Year";
        } else if(inputValueType == "InputDay" && outputValueType == "OutputDecade"){
            result = inputValue/3650;
            tempSign = "Decade";
        } else if(inputValueType == "InputDay" && outputValueType == "OutputCentury"){
            result = inputValue/36500;
            tempSign = "Century";
        }

        /** InputWeek */

        else if(inputValueType == "InputWeek" && outputValueType == "OutputNanosecond"){
            result = inputValue*(6.048*(10**14));
            tempSign = "ns";
        } else if(inputValueType == "InputWeek" && outputValueType == "OutputMicrosecond"){
            result = inputValue*(6.048*(10**11));
            tempSign = "\u00B5s";
        } else if(inputValueType == "InputWeek" && outputValueType == "OutputMillisecond"){
            result = inputValue*(6.048*(10**8));
            tempSign = "ms";
        } else if(inputValueType == "InputWeek" && outputValueType == "OutputSecond"){
            result = inputValue*604800;
            tempSign = "Second";
        } else if(inputValueType == "InputWeek" && outputValueType == "OutputMinute"){
            result = inputValue*10080;
            tempSign = "Minute";
        } else if(inputValueType == "InputWeek" && outputValueType == "OutputHour"){
            result = inputValue*168;
            tempSign = "Hour";
        } else if(inputValueType == "InputWeek" && outputValueType == "OutputDay"){
            result = inputValue*7;
            tempSign = "Day";
        } else if(inputValueType == "InputWeek" && outputValueType == "OutputWeek"){
            result = inputValue;
            tempSign = "week";
        } else if(inputValueType == "InputWeek" && outputValueType == "OutputMonth"){
            result = inputValue/4.345;
            tempSign = "Month";
        } else if(inputValueType == "InputWeek" && outputValueType == "OutputCalenderYear"){
            result = inputValue/52.1429;
            tempSign = "Year";
        } else if(inputValueType == "InputWeek" && outputValueType == "OutputDecade"){
            result = inputValue/521.429;
            tempSign = "Decade";
        } else if(inputValueType == "InputWeek" && outputValueType == "OutputCentury"){
            result = inputValue/5214.29;
            tempSign = "Century";
        }

        /** InputMonth */

        else if(inputValueType == "InputMonth" && outputValueType == "OutputNanosecond"){
            result = inputValue*(2.628*(10**15));
            tempSign = "ns";
        } else if(inputValueType == "InputMonth" && outputValueType == "OutputMicrosecond"){
            result = inputValue*(2.628*(10**12));
            tempSign = "\u00B5s";
        } else if(inputValueType == "InputMonth" && outputValueType == "OutputMillisecond"){
            result = inputValue*(2.628*(10**9));
            tempSign = "ms";
        } else if(inputValueType == "InputMonth" && outputValueType == "OutputSecond"){
            result = inputValue*(2.628*(10**6));
            tempSign = "Second";
        } else if(inputValueType == "InputMonth" && outputValueType == "OutputMinute"){
            result = inputValue*43800;
            tempSign = "Minute";
        } else if(inputValueType == "InputMonth" && outputValueType == "OutputHour"){
            result = inputValue*730;
            tempSign = "Hour";
        } else if(inputValueType == "InputMonth" && outputValueType == "OutputDay"){
            result = inputValue*30.417;
            tempSign = "Day";
        } else if(inputValueType == "InputMonth" && outputValueType == "OutputWeek"){
            result = inputValue*4.345;
            tempSign = "week";
        } else if(inputValueType == "InputMonth" && outputValueType == "OutputMonth"){
            result = inputValue;
            tempSign = "Month";
        } else if(inputValueType == "InputMonth" && outputValueType == "OutputCalenderYear"){
            result = inputValue/12;
            tempSign = "Year";
        } else if(inputValueType == "InputMonth" && outputValueType == "OutputDecade"){
            result = inputValue/120;
            tempSign = "Decade";
        } else if(inputValueType == "InputMonth" && outputValueType == "OutputCentury"){
            result = inputValue/1200;
            tempSign = "Century";
        }

        /** InputCalenderYear */

        else if(inputValueType == "InputCalenderYear" && outputValueType == "OutputNanosecond"){
            result = inputValue*(3.154*(10**16));
            tempSign = "ns";
        } else if(inputValueType == "InputCalenderYear" && outputValueType == "OutputMicrosecond"){
            result = inputValue*(3.154*(10**13));
            tempSign = "\u00B5s";
        } else if(inputValueType == "InputCalenderYear" && outputValueType == "OutputMillisecond"){
            result = inputValue*(3.154*(10**10));
            tempSign = "ms";
        } else if(inputValueType == "InputCalenderYear" && outputValueType == "OutputSecond"){
            result = inputValue*(3.154*(10**7));
            tempSign = "Second";
        } else if(inputValueType == "InputCalenderYear" && outputValueType == "OutputMinute"){
            result = inputValue*525600;
            tempSign = "Minute";
        } else if(inputValueType == "InputCalenderYear" && outputValueType == "OutputHour"){
            result = inputValue*8760;
            tempSign = "Hour";
        } else if(inputValueType == "InputCalenderYear" && outputValueType == "OutputDay"){
            result = inputValue*365;
            tempSign = "Day";
        } else if(inputValueType == "InputCalenderYear" && outputValueType == "OutputWeek"){
            result = inputValue*52.1429;
            tempSign = "week";
        } else if(inputValueType == "InputCalenderYear" && outputValueType == "OutputMonth"){
            result = inputValue*12;
            tempSign = "Month";
        } else if(inputValueType == "InputCalenderYear" && outputValueType == "OutputCalenderYear"){
            result = inputValue;
            tempSign = "Year";
        } else if(inputValueType == "InputCalenderYear" && outputValueType == "OutputDecade"){
            result = inputValue/10;
            tempSign = "Decade";
        } else if(inputValueType == "InputCalenderYear" && outputValueType == "OutputCentury"){
            result = inputValue/100;
            tempSign = "Century";
        }

        /** InputDecade */

        else if(inputValueType == "InputDecade" && outputValueType == "OutputNanosecond"){
            result = inputValue*(3.154*(10**17));
            tempSign = "ns";
        } else if(inputValueType == "InputDecade" && outputValueType == "OutputMicrosecond"){
            result = inputValue*(3.154*(10**14));
            tempSign = "\u00B5s";
        } else if(inputValueType == "InputDecade" && outputValueType == "OutputMillisecond"){
            result = inputValue*(3.154*(10**11));
            tempSign = "ms";
        } else if(inputValueType == "InputDecade" && outputValueType == "OutputSecond"){
            result = inputValue*(3.154*(10**8));
            tempSign = "Second";
        } else if(inputValueType == "InputDecade" && outputValueType == "OutputMinute"){
            result = inputValue*(5.256*(10**6));
            tempSign = "Minute";
        } else if(inputValueType == "InputDecade" && outputValueType == "OutputHour"){
            result = inputValue*87600;
            tempSign = "Hour";
        } else if(inputValueType == "InputDecade" && outputValueType == "OutputDay"){
            result = inputValue*3650;
            tempSign = "Day";
        } else if(inputValueType == "InputDecade" && outputValueType == "OutputWeek"){
            result = inputValue*521.429;
            tempSign = "week";
        } else if(inputValueType == "InputDecade" && outputValueType == "OutputMonth"){
            result = inputValue*120;
            tempSign = "Month";
        } else if(inputValueType == "InputDecade" && outputValueType == "OutputCalenderYear"){
            result = inputValue*10;
            tempSign = "Year";
        } else if(inputValueType == "InputDecade" && outputValueType == "OutputDecade"){
            result = inputValue;
            tempSign = "Decade";
        } else if(inputValueType == "InputDecade" && outputValueType == "OutputCentury"){
            result = inputValue/10;
            tempSign = "Century";
        }

        else if(inputValueType == "InputCentury" && outputValueType == "OutputNanosecond"){
            result = inputValue*(3.154*(10**18));
            tempSign = "ns";
        } else if(inputValueType == "InputCentury" && outputValueType == "OutputMicrosecond"){
            result = inputValue*(3.154*(10**15));
            tempSign = "\u00B5s";
        } else if(inputValueType == "InputCentury" && outputValueType == "OutputMillisecond"){
            result = inputValue*(3.154*(10**12));
            tempSign = "ms";
        } else if(inputValueType == "InputCentury" && outputValueType == "OutputSecond"){
            result = inputValue*(3.154*(10**9));
            tempSign = "Second";
        } else if(inputValueType == "InputCentury" && outputValueType == "OutputMinute"){
            result = inputValue*(5.256*(10**7));
            tempSign = "Minute";
        } else if(inputValueType == "InputCentury" && outputValueType == "OutputHour"){
            result = inputValue*876000;
            tempSign = "Hour";
        } else if(inputValueType == "InputCentury" && outputValueType == "OutputDay"){
            result = inputValue*36500;
            tempSign = "Day";
        } else if(inputValueType == "InputCentury" && outputValueType == "OutputWeek"){
            result = inputValue*5214.29;
            tempSign = "week";
        } else if(inputValueType == "InputCentury" && outputValueType == "OutputMonth"){
            result = inputValue*1200;
            tempSign = "Month";
        } else if(inputValueType == "InputCentury" && outputValueType == "OutputCalenderYear"){
            result = inputValue*100;
            tempSign = "Year";
        } else if(inputValueType == "InputCentury" && outputValueType == "OutputDecade"){
            result = inputValue*10;
            tempSign = "Decade";
        } else if(inputValueType == "InputCentury" && outputValueType == "OutputCentury"){
            result = inputValue;
            tempSign = "Century";
        }

        document.getElementById("printResultTime").innerHTML = result+" "+tempSign;
    }
}


function resetMyTimeForm(){
    document.getElementById("printResultTime").innerHTML="";
    document.getElementById("timeForm").reset();
}
