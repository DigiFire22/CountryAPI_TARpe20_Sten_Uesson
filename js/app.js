const Confirm = document.querySelector('.selectCountry')
const InformationList = document.querySelector('.Information')
const inputField = document.querySelector('input[type="Country"]')

Confirm.addEventListener('click', selectCountry);

function selectCountry(){
    let Confirmation = inputField.value;
    let url = `https://restcountries.com/v2/name/${Confirmation}`;
    fetch(url).then(response => {
        return response.json();
    })
    .then(data => {
        let output = "";

        data.value.forEach(value => {
            console.log(value.Info)
            output += `<li>${value.Info}</li>`
        });
        
        InformationList.innerHTML = output;
    });
};