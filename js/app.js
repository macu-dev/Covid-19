import {Covid} from './api.js';
import {myChart} from './grafic.js';

const cv = new Covid();

async function main() {
  const select = document.querySelector('#paises');

  cargarGlobal();
  let cvCountries = await cv.get_countries();
  
  cargarSelect(cvCountries.countries, select);
  select.addEventListener('change', selectControler);
}

async function cargarGlobal(){
  let cvGlobal = await cv.get_Global();
  changeValues(cvGlobal, "Global");
}

async function selectControler(e){
  if(e.target.value === 'Global'){
    cargarGlobal();
  }else{
    let param = e.target.value.split("|"); // "arg|aergentina" 
    let data = await cv.get_country(param[0]);
    changeValues(data, param[1]);
    //cambia los datos del label
    myChart.config.data.datasets[0].label =`Numero de caso en ${param[1]}`; 
    myChart.update();
  }
}

function changeValues({lastUpdate, confirmed, recovered, deaths}, country){
  
  const title = document.querySelector('#pais');
  const confirm = document.querySelector('#infoConf');
  const recovr = document.querySelector('#infoRecup');
  const death = document.querySelector('#infoMuert');
  const fecha = document.querySelectorAll('.fecha');


  title.textContent = country;
  confirm.textContent = confirmed.value;
  myChart.config.data.datasets[0].data = [confirmed.value,recovered.value,deaths.value];
  myChart.update();
  recovr.textContent = recovered.value;
  death.textContent = deaths.value;
  fecha.forEach(e =>{
    e.textContent = (new Date(lastUpdate)).toLocaleDateString();
  });
}

function cargarSelect(options, select){
  let html = '<option value="Global" selected >Global</option>';
  options.forEach( e =>{
    html+= `<option value="${e.iso3}|${e.name}">${e.name}</option>`;
  });
  select.innerHTML = html;
}

window.onload = main;