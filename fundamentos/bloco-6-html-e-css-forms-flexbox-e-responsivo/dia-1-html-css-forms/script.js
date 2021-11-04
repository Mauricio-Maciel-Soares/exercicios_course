const fieldset = document.querySelector("#fieldset-1");

// create prevent default button;
const preventButton = document.querySelector(".preventButton");
const button = document.createElement("button");
button.id = "preButton";
button.innerText = "Prevent Default";
preventButton.appendChild(button);

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