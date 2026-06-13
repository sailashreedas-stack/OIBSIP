function convertTemp() {

    let temp = document.getElementById("tempInput").value;
    let type = document.getElementById("conversionType").value;
    let result = document.getElementById("result");

    if(temp === ""){
        result.innerHTML = "Please enter a temperature";
        return;
    }

    temp = Number(temp);

    let converted;

    switch(type){

        case "cToF":
            converted = (temp * 9/5) + 32;
            result.innerHTML = `${converted.toFixed(2)} °F`;
            break;

        case "fToC":
            converted = (temp - 32) * 5/9;
            result.innerHTML = `${converted.toFixed(2)} °C`;
            break;

        case "cToK":
            converted = temp + 273.15;
            result.innerHTML = `${converted.toFixed(2)} K`;
            break;

        case "kToC":
            converted = temp - 273.15;
            result.innerHTML = `${converted.toFixed(2)} °C`;
            break;
    }
}