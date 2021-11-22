const fieldset = document.querySelector("#fieldset-1");

// create prevent default button;
const preventButton = document.querySelector(".preventButton");
const button = document.createElement("button");
button.type = 'submit';
button.id = "preButton";
button.innerText = "Submeter";
preventButton.appendChild(button);

// create clear button;
const clearButton = document.createElement("button");
clearButton.id = "clearButton";
clearButton.innerText = "Limpar";
preventButton.appendChild(clearButton);

// creat options to input state;
const optStates = document.querySelector("#state");
let stateList = [
  "Acre",
  "Alagoas",
  "Amapá",
  "Amazonas",
  "Bahia",
  "Ceará",
  "Distrito Federal",
  "Espírito Santo",
  "Goiás",
  "Maranhão",
  "Mato Grosso",
  "Mato Grosso do Sul",
  "Minas Gerais",
  "Pará",
  "Paraíba",
  "Paraná",
  "Pernambuco",
  "Piauí",
  "Rio de Janeiro",
  "Rio Grande do Norte",
  "Rio Grande do Sul",
  "Rondônia",
  "Roraima",
  "Santa Catarina",
  "São Paulo",
  "Sergipe",
  "Tocantins"
];

let stateSimbol = [
    'AC',
    'AL',
    'AP',
    'AM',
    'BA',
    'CE',
    'DF',
    'ES',
    'GO',
    'MA',
    'MT',
    'MS',
    'MG',
    'PA',
    'PB',
    'PR',
    'PE',
    'PI',
    'RJ',
    'RN',
    'RS',
    'RO',
    'RR',
    'SC',
    'SP',
    'SE',
    'TO'
];

for (let i = 0; i < stateList.length; i += 1) {
  let state = stateList[i];
  let option = document.createElement("option");
  option.innerText = state;
  option.className = 'options';
  optStates.appendChild(option);
}

for (let i = 0; i < stateSimbol.length; i += 1) {
    const simbol = stateSimbol[i];
    const option = document.querySelector('.options');
    option.value = simbol;
    optStates.appendChild(option);
}

const visual = document.querySelector('#visual');
const email = document.querySelector('#email');
const fullName = document.querySelector('#full-name');
const cpf = document.querySelector('#cpf');
const address = document.querySelector('#address');
const city = document.querySelector('#city');
const state = document.querySelector('#state');
const placeType = document.querySelector('#place-type');
const curriculo = document.querySelector('#curriculo');
const cargo = document.querySelector('#cargo');
const descargo = document.querySelector('#descargo');
const dataInicio = document.querySelector('#data-inicio');


function getVisual (event) {
    event.preventDefault();
    visual.innerHTML = email.value;
    visual.innerHTML = fullName.value;
    visual.innerHTML = cpf.value;
    visual.innerHTML = address.value;
    visual.innerHTML = city.value;
    visual.innerHTML = state.value;
    visual.innerHTML = placeType.value;
    visual.innerHTML = curriculo.value;
    visual.innerHTML = cargo.value;
    visual.innerHTML = descargo.value;
    visual.innerHTML = dataInicio.value;
}

const defaultButton = document.querySelector('#preButton');
defaultButton.addEventListener('click', getVisual);