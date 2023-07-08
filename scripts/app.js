
//MASAJE RELAJANTE
const time90re = document.querySelector(".time-90-re");
const time60re = document.querySelector(".time-60-re");
const time120re = document.querySelector(".time-120-re");
const precioactualrelajante = document.querySelector(".precioahora-re");
const precioantesrelajante = document.querySelector(".precioantes-re");
const visitanosrelajante = document.querySelector(".visitanos-re");
const domiciliorelajante = document.querySelector(".domicilio-re");
//MASAJE DRENAJE

const time90dre= document.querySelector(".time-90-dre");
const time60dre= document.querySelector(".time-60-dre");
const time120dre= document.querySelector(".time-120-dre");
const precioactualdrenaje = document.querySelector(".precioahora-dre");
const precioantesdrenaje = document.querySelector(".precioantes-dre");
const visitanosdrenaje = document.querySelector(".visitanos-dre");
const domiciliodrenaje = document.querySelector(".domicilio-dre");
//MASAJE DEPORTIVO

const time90de= document.querySelector(".time-90-de");
const time60de= document.querySelector(".time-60-de");
const time120de= document.querySelector(".time-120-de");
const precioactualdeportivo = document.querySelector(".precioahora-de");
const precioantesdeportivo = document.querySelector(".precioantes-de");
const visitanosdeportivo = document.querySelector(".visitanos-de");
const domiciliodeportivo = document.querySelector(".domicilio-de");
//MASAJE DESCONTRACTURANTE

const time90des= document.querySelector(".time-90-des");
const time60des= document.querySelector(".time-60-des");
const time120des= document.querySelector(".time-120-des");
const precioactualdescon = document.querySelector(".precioahora-des");
const precioantesdescon = document.querySelector(".precioantes-des");
const visitanosdescon = document.querySelector(".visitanos-des");
const domiciliodescon = document.querySelector(".domicilio-des");
//MASAJE PRENATAL

const time90pre= document.querySelector(".time-90-pre");
const time60pre= document.querySelector(".time-60-pre");
const time120pre= document.querySelector(".time-120-pre");
const precioactualprenatal = document.querySelector(".precioahora-pre");
const precioantesprenatal = document.querySelector(".precioantes-pre");
const visitanosprenatal = document.querySelector(".visitanos-pre");
const domicilioprenatal = document.querySelector(".domicilio-pre");
//MASAJE POST NATAL

const time90pos= document.querySelector(".time-90-pos");
const time60pos= document.querySelector(".time-60-pos");
const time120pos= document.querySelector(".time-120-pos");
const precioactualposnatal = document.querySelector(".precioahora-pos");
const precioantesposnatal = document.querySelector(".precioantes-pos");
const visitanosposnatal = document.querySelector(".visitanos-pos");
const domicilioposnatal = document.querySelector(".domicilio-pos");
//MASAJE CON PIEDRAS

const time90pi= document.querySelector(".time-90-pi");
const time60pi= document.querySelector(".time-60-pi");
const time120pi= document.querySelector(".time-120-pi");
const precioactualpiedras = document.querySelector(".precioahora-pi");
const precioantespiedras = document.querySelector(".precioantes-pi");
const visitanospiedras = document.querySelector(".visitanos-pi");
const domiciliopiedras = document.querySelector(".domicilio-pi");
//MASJE PIES MANOS

const time90pies= document.querySelector(".time-90-pies");
const time60pies= document.querySelector(".time-60-pies");
const time120pies= document.querySelector(".time-120-pies");
const precioactualpies = document.querySelector(".precioahora-pies");
const precioantespies = document.querySelector(".precioantes-pies");
const visitanospies = document.querySelector(".visitanos-pies");
const domiciliopies = document.querySelector(".domicilio-pies");


function preciosporminutos(timeadd, timeremoveone, timeremovetwo){
    timeadd.classList.add("text-decoration-underline");
    timeremoveone.classList.remove("text-decoration-underline"); 
    timeremovetwo.classList.remove("text-decoration-underline");
}

function tipoDeMasajesañadirclases(tipoadd, tiporemove){
  tipoadd.classList.add("text-decoration-underline");
  tiporemove.classList.remove("text-decoration-underline"); 
  console.log("dsfg");
}


time90re.addEventListener("click", (e) => {
  console.log("click")
  preciosporminutos(time90re, time60re, time120re);
  
  if (domiciliorelajante.classList.contains('text-decoration-underline')) {
    precioactualrelajante.textContent = "190.000";
    precioantesrelajante.textContent = "$230.000";
  }else{
    precioactualrelajante.textContent = "180.000";
    precioantesrelajante.textContent = "$200.000";
  }
});

time120re.addEventListener("click", (e) => {
  console.log("click")
  preciosporminutos(time120re, time90re, time60re);
  time90re.classList.remove("text-decoration-underline");
  if (domiciliorelajante.classList.contains('text-decoration-underline')) {
    precioactualrelajante.textContent = "270.000";
    precioantesrelajante.textContent = "$290.000";
  }else{
    precioactualrelajante.textContent = "240.000";
    precioantesrelajante.textContent = "$280.000";
  }
  
});


time60re.addEventListener("click", (e) => {
  console.log("click")
  preciosporminutos(time60re, time90re, time120re);
  if (domiciliorelajante.classList.contains('text-decoration-underline')) {
    precioactualrelajante.textContent = "170.000";
    precioantesrelajante.textContent = "$190.000";
  }else{
    precioactualrelajante.textContent = "140.000";
    precioantesrelajante.textContent = "$180.000";
  }

});

domiciliorelajante.addEventListener('click', (e) => tipoDeMasajesañadirclases(domiciliorelajante, visitanosrelajante))
visitanosrelajante.addEventListener('click', (e) => tipoDeMasajesañadirclases( visitanosrelajante, domiciliorelajante))



time90dre.addEventListener("click", () => {
  console.log("click")
  preciosporminutos(time90dre, time60dre, time120dre);
  if (domiciliodrenaje.classList.contains('text-decoration-underline')) {
    precioactualdrenaje.textContent = "199.000";
    precioantesdrenaje.textContent = "$230.000";
  }else{
    precioactualdrenaje.textContent = "180.000";
    precioantesdrenaje.textContent = "$200.000";
  }

});

time120dre.addEventListener("click", () => {
  console.log("click")
  preciosporminutos(time120dre, time90dre, time60dre);
  time90re.classList.remove("text-decoration-underline");
  if (domiciliodrenaje.classList.contains('text-decoration-underline')) {
    precioactualdrenaje.textContent = "278.000";
    precioantesdrenaje.textContent = "$290.000";
  }else{
    precioactualdrenaje.textContent = "250.000";
    precioantesdrenaje.textContent = "$280.000";
  }

});

time60dre.addEventListener("click", () => {
  console.log("click")
  preciosporminutos(time60dre, time90dre, time120dre);
  if (domiciliodrenaje.classList.contains('text-decoration-underline')) {
    precioactualdrenaje.textContent = "165.000";
    precioantesdrenaje.textContent = "$190.000";
  }else{
    precioactualdrenaje.textContent = "145.000";
    precioantesdrenaje.textContent = "$180.000";
  }

});

domiciliodrenaje.addEventListener('click', (e) => tipoDeMasajesañadirclases(domiciliodrenaje, visitanosdrenaje))
visitanosdrenaje.addEventListener('click', (e) => tipoDeMasajesañadirclases( visitanosdrenaje, domiciliodrenaje))



time90de.addEventListener("click", () => {
  console.log("click")
  preciosporminutos(time90de, time60de, time120de);
  if (domiciliodeportivo.classList.contains('text-decoration-underline')) {
    precioactualdeportivo.textContent = "220.000";
    precioantesdeportivo.textContent = "$250.000";
  }else{
    precioactualdeportivo.textContent = "200.000";
    precioantesdeportivo.textContent = "$210.000";
  }

});

time120de.addEventListener("click", () => {
  console.log("click")
  preciosporminutos(time120de, time90de, time60de);
  if (domiciliodeportivo.classList.contains('text-decoration-underline')) {
    precioactualdeportivo.textContent = "280.000";
    precioantesdeportivo.textContent = "$299.000";
  }else{
    precioactualdeportivo.textContent = "260.000";
    precioantesdeportivo.textContent = "$280.000";
  }

});

time60de.addEventListener("click", () => {
  console.log("click")
  preciosporminutos(time60de, time90de, time120de);
  if (domiciliodeportivo.classList.contains('text-decoration-underline')) {
    precioactualdeportivo.textContent = "170.000";
    precioantesdeportivo.textContent = "$197.000";
  }else{
    precioactualdeportivo.textContent = "150.000";
    precioantesdeportivo.textContent = "$180.000";
  }

});

domiciliodeportivo.addEventListener('click', (e) => tipoDeMasajesañadirclases(domiciliodeportivo, visitanosdeportivo))
visitanosdeportivo.addEventListener('click', (e) => tipoDeMasajesañadirclases( visitanosdeportivo, domiciliodeportivo))



time90des.addEventListener("click", () => {
  console.log("click")
  preciosporminutos(time90des, time60des, time120des);
  if (domiciliodescon.classList.contains('text-decoration-underline')) {
    precioactualdescon.textContent = "225.000";
    precioantesdescon.textContent = "$250.000";
  }else{
    precioactualdescon.textContent = "200.000";
    precioantesdescon.textContent = "$210.000";
  }

});

time120des.addEventListener("click", () => {
  console.log("click")
  preciosporminutos(time120des, time90des, time60des);
  if (domiciliodescon.classList.contains('text-decoration-underline')) {
    precioactualdescon.textContent = "270.000";
    precioantesdescon.textContent = "$298.000";
  }else{
    precioactualdescon.textContent = "260.000";
    precioantesdescon.textContent = "$280.000";
  }

});

time60des.addEventListener("click", () => {
  console.log("click")
  preciosporminutos(time60des, time90des, time120des);
  if (domiciliodescon.classList.contains('text-decoration-underline')) {
    precioactualdescon.textContent = "170.000";
    precioantesdescon.textContent = "$198.000";
  }else{
    precioactualdescon.textContent = "150.000";
    precioantesdescon.textContent = "$180.000";
  }

});

domiciliodescon.addEventListener('click', (e) => tipoDeMasajesañadirclases(domiciliodescon, visitanosdescon))
visitanosdescon.addEventListener('click', (e) => tipoDeMasajesañadirclases( visitanosdescon, domiciliodescon))


time90pre.addEventListener("click", () => {
  console.log("click")
  preciosporminutos(time90pre, time60pre, time120pre);
  if (domicilioprenatal.classList.contains('text-decoration-underline')) {
    precioactualprenatal.textContent = "199.000";
    precioantesprenatal.textContent = "$220.000";
  }else{
    precioactualprenatal.textContent = "190.000";
    precioantesprenatal.textContent = "$210.000";
  }

});

time120pre.addEventListener("click", () => {
  console.log("click")
  preciosporminutos(time120pre, time90pre, time60pre);
  if (domicilioprenatal.classList.contains('text-decoration-underline')) {
    precioactualprenatal.textContent = "270.000";
    precioantesprenatal.textContent = "$299.000";
  }else{
    precioactualprenatal.textContent = "250.000";
    precioantesprenatal.textContent = "$270.000";
  }

});

time60pre.addEventListener("click", () => {
  console.log("click")
  preciosporminutos(time60pre, time90pre, time120pre);
  if (domicilioprenatal.classList.contains('text-decoration-underline')) {
    precioactualprenatal.textContent = "176.000";
    precioantesprenatal.textContent = "$190.000";
  }else{
    precioactualprenatal.textContent = "150.000";
    precioantesprenatal.textContent = "$160.000";
  }

});

domicilioprenatal.addEventListener('click', (e) => tipoDeMasajesañadirclases(domicilioprenatal, visitanosprenatal))
visitanosprenatal.addEventListener('click', (e) => tipoDeMasajesañadirclases( visitanosprenatal, domicilioprenatal))


time90pos.addEventListener("click", () => {
  console.log("click")
  preciosporminutos(time90pos, time60pos, time120pos);
  if (domicilioposnatal.classList.contains('text-decoration-underline')) {
    precioactualposnatal.textContent = "199.000";
    precioantesposnatal.textContent = "$230.000";
  }else{
    precioactualposnatal.textContent = "180.000";
    precioantesposnatal.textContent = "$200.000";
  }

});

time120pos.addEventListener("click", () => {
  console.log("click")
  preciosporminutos(time120pos, time90pos, time60pos);
  if (domicilioposnatal.classList.contains('text-decoration-underline')) {
    precioactualposnatal.textContent = "270.000";
    precioantesposnatal.textContent = "$285.000";
  }else{
    precioactualposnatal.textContent = "250.000";
    precioantesposnatal.textContent = "$270.000";
  }

});

time60pos.addEventListener("click", () => {
  console.log("click")
  preciosporminutos(time60pos, time90pos, time120pos);
  if (domicilioposnatal.classList.contains('text-decoration-underline')) {
    precioactualposnatal.textContent = "170.000";
    precioantesposnatal.textContent = "$190.000";
  }else{
    precioactualposnatal.textContent = "140.000";
    precioantesposnatal.textContent = "$160.000";
  }

});

domicilioposnatal.addEventListener('click', (e) => tipoDeMasajesañadirclases(domicilioposnatal, visitanosposnatal))
visitanosposnatal.addEventListener('click', (e) => tipoDeMasajesañadirclases( visitanosposnatal, domicilioposnatal))


time90pi.addEventListener("click", () => {
  console.log("click")
  preciosporminutos(time90pi, time60pi, time120pi);
  if (domiciliopiedras.classList.contains('text-decoration-underline')) {
    precioactualpiedras.textContent = "250.000";
    precioantespiedras.textContent = "$290.000";
  }else{
    precioactualpiedras.textContent = "220.000";
    precioantespiedras.textContent = "$230.000";
  }

});

time120pi.addEventListener("click", () => {
  console.log("click")
  preciosporminutos(time120pi, time90pi, time60pi);
  if (domiciliopiedras.classList.contains('text-decoration-underline')) {
    precioactualpiedras.textContent = "279.000";
    precioantespiedras.textContent = "$298.000";
  }else{
    precioactualpiedras.textContent = "260.000";
    precioantespiedras.textContent = "$270.000";
  }

});

time60pi.addEventListener("click", () => {
  console.log("click")
  preciosporminutos(time60pi, time90pi, time120pi);
  if (domiciliopiedras.classList.contains('text-decoration-underline')) {
    precioactualpiedras.textContent = "185.000";
    precioantespiedras.textContent = "$195.000";
  }else{
    precioactualpiedras.textContent = "165.000";
    precioantespiedras.textContent = "$185.000";
  }

});

domiciliopiedras.addEventListener('click', (e) => tipoDeMasajesañadirclases(domiciliopiedras, visitanospiedras))
visitanospiedras.addEventListener('click', (e) => tipoDeMasajesañadirclases( visitanospiedras, domiciliopiedras))


time90pies.addEventListener("click", () => {
  console.log("click")
  preciosporminutos(time90pies, time60pies, time120pies);
  if (domiciliopies.classList.contains('text-decoration-underline')) {
    precioactualpies.textContent = "230.000";
    precioantespies.textContent = "$260.000";
  }else{
    precioactualpies.textContent = "190.000";
    precioantespies.textContent = "$200.000";
  }

});

time120pies.addEventListener("click", () => {
  console.log("click")
  preciosporminutos(time120pies, time90pies, time60pies);
  if (domiciliopies.classList.contains('text-decoration-underline')) {
    precioactualpies.textContent = "270.000";
    precioantespies.textContent = "$298.000";
  }else{
    precioactualpies.textContent = "250.000";
    precioantespies.textContent = "$260.000";
  }

});

time60pies.addEventListener("click", () => {
  console.log("click")
  preciosporminutos(time60pies, time90pies, time120pies);
  if (domiciliopies.classList.contains('text-decoration-underline')) {
    precioactualpies.textContent = "160.000";
    precioantespies.textContent = "$189.000";
  }else{
    precioactualpies.textContent = "140.000";
    precioantespies.textContent = "$140.000";
  }
 
});

domiciliopies.addEventListener('click', (e) => tipoDeMasajesañadirclases(domiciliopies, visitanospies))
visitanospies.addEventListener('click', (e) => tipoDeMasajesañadirclases( visitanospies, domiciliopies))

