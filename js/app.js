const getCountryButton = document.querySelector(".getCountry");
getCountryButton.addEventListener("click",getCountry)
const flag = document.getElementById("flag");
const domain = document.getElementById("domain");
const countrySelect = document.getElementById("countrySelect");
const output = document.getElementById("result");
const countryName = document.getElementById("countryName");
const callingcode = document.getElementById("callingcode");
const capital = document.getElementById("capital");
const region = document.getElementById("region");
const subregion = document.getElementById("subregion");
const population = document.getElementById("population");
const language = document.getElementById("language");
const currency_abrv = document.getElementById("currency-abrv");
const currency = document.getElementById("currency");
const currency_symbol = document.getElementById("currency-symbol");
const timezone = document.getElementById("timezone");




function getCountry()
{
    getSelectCountry = document.getElementById("selectCountry").value;
    let url = `https://restcountries.com/v2/name/${getSelectCountry}`;
    fetch(url)
    .then(response =>{
        return response.json();
    })
    .then(Data=>{
        countryName.innerHTML = Data[0].name;
        flag.src = Data[0].flags.png;
        domain.innerHTML = `Domain : ${Data[0].topLevelDomain[0]}` ;
        timezone.innerHTML = `Timezone : ${Data[0].timezones[0]}`;
        callingcode.innerHTML = `Calling code : ${Data[0].callingCodes[0]}` ;
        capital.innerHTML = `Capital : ${Data[0].capital}` ;
        region.innerHTML = `Region : ${Data[0].region}`;
        subregion.innerHTML = `Subregion : ${Data[0].subregion}`;
        population.innerHTML = `Population : ${Data[0].population}`;
        language.innerHTML = `Language : ${Data[0].demonym}`;
        currency.innerHTML = `Currency : ${Data[0].currencies[0].name}`;
        currency_abrv.innerHTML = `Currency abbreviation : ${Data[0].currencies[0].code}`;
        currency_symbol.innerHTML = `Symbol : ${Data[0].currencies[0].symbol}`;
        });


    }