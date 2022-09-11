// https://www.omnicalculator.com/finance/labor-force-participation-rate

const v1 =  document.getElementById('v1');
const v2 = document.getElementById('v2');
const v3 = document.getElementById('v3');
const btn = document.getElementById('btn');
const result = document.getElementById('result');

// radio buttons
const laborforceparticipationrateRadio = document.getElementById('laborforceparticipationrateRadio');
const employedpopulationRadio = document.getElementById('employedpopulationRadio');
const unemployedpopulationRadio = document.getElementById('unemployedpopulationRadio');
const workingagepopulationRadio = document.getElementById('workingagepopulationRadio');

let laborforceparticipationrate;
let employedpopulation = v1;
let unemployedpopulation = v2;
let workingagepopulation = v3;

// labels of the inpust
const variable1 = document.getElementById('variable1');
const variable2 = document.getElementById('variable2');
const variable3 = document.getElementById('variable3');

laborforceparticipationrateRadio.addEventListener('click', function() {
  variable1.textContent = 'Employed population';
  variable2.textContent = 'Unemployed population';
  variable3.textContent = 'Working age population';
  employedpopulation = v1;
  unemployedpopulation = v2;
  workingagepopulation = v3;
  result.textContent = '';
});

employedpopulationRadio.addEventListener('click', function() {
  variable1.textContent = 'Labor force participation rate';
  variable2.textContent = 'Unemployed population';
  variable3.textContent = 'Working age population';
  laborforceparticipationrate = v1;
  unemployedpopulation = v2;
  workingagepopulation = v3;
  result.textContent = '';
});

unemployedpopulationRadio.addEventListener('click', function() {
  variable1.textContent = 'Labor force participation rate';
  variable2.textContent = 'Employed population';
  variable3.textContent = 'Working age population';
  laborforceparticipationrate = v1;
  employedpopulation = v2;
  workingagepopulation = v3;
  result.textContent = '';
});

workingagepopulationRadio.addEventListener('click', function() {
  variable1.textContent = 'Labor force participation rate';
  variable2.textContent = 'Employed population';
  variable3.textContent = 'Unemployed population';
  laborforceparticipationrate = v1;
  employedpopulation = v2;
  unemployedpopulation = v3;
  result.textContent = '';
});

btn.addEventListener('click', function() {
  
  if(laborforceparticipationrateRadio.checked)
    result.textContent = `Labor force participation rate = ${computelaborforceparticipationrate().toFixed(2)}`;

  else if(employedpopulationRadio.checked)
    result.textContent = `Employed population = ${computeemployedpopulation().toFixed(2)}`;

  else if(unemployedpopulationRadio.checked)
    result.textContent = `Unemployed population = ${computeunemployedpopulation().toFixed(2)}`;

  else if(workingagepopulationRadio.checked)
    result.textContent = `Working age population = ${computeworkingagepopulation().toFixed(2)}`;
})

// calculation

// laborforceparticipationrate = (employedpopulation + unemployedpopulation) / workingagepopulation

function computelaborforceparticipationrate() {
  return ((Number(employedpopulation.value) + Number(unemployedpopulation.value)) / Number(workingagepopulation.value)) * 100;
}

function computeemployedpopulation() {
  return ((Number(laborforceparticipationrate.value) / 100) * Number(workingagepopulation.value)) - Number(unemployedpopulation.value);
}

function computeunemployedpopulation() {
  return ((Number(laborforceparticipationrate.value) / 100) * Number(workingagepopulation.value)) - Number(employedpopulation.value);
}

function computeworkingagepopulation() {
  return (Number(employedpopulation.value) + Number(unemployedpopulation.value)) / (Number(laborforceparticipationrate.value) / 100);
}