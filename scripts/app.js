
//MASAJE RELAJANTE
const time90re = document.querySelector(".time-90-re");
const time60re = document.querySelector(".time-60-re");
const time120re = document.querySelector(".time-120-re");
const precioactualrelajante = document.querySelector(".precioahora-re");
const precioantesrelajante = document.querySelector(".precioantes-re");
//MASAJE DRENAJE

const time90dre= document.querySelector(".time-90-dre");
const time60dre= document.querySelector(".time-60-dre");
const time120dre= document.querySelector(".time-120-dre");
const precioactualdrenaje = document.querySelector(".precioahora-dre");
const precioantesdrenaje = document.querySelector(".precioantes-dre");
//MASAJE DEPORTIVO

const time90de= document.querySelector(".time-90-de");
const time60de= document.querySelector(".time-60-de");
const time120de= document.querySelector(".time-120-de");
const precioactualdeportivo = document.querySelector(".precioahora-de");
const precioantesdeportivo = document.querySelector(".precioantes-de");
//MASAJE DESCONTRACTURANTE

const time90des= document.querySelector(".time-90-des");
const time60des= document.querySelector(".time-60-des");
const time120des= document.querySelector(".time-120-des");
const precioactualdescon = document.querySelector(".precioahora-des");
const precioantesdescon = document.querySelector(".precioantes-des");
//MASAJE PRENATAL

const time90pre= document.querySelector(".time-90-pre");
const time60pre= document.querySelector(".time-60-pre");
const time120pre= document.querySelector(".time-120-pre");
const precioactualprenatal = document.querySelector(".precioahora-pre");
const precioantesprenatal = document.querySelector(".precioantes-pre");
//MASAJE POST NATAL

const time90pos= document.querySelector(".time-90-pos");
const time60pos= document.querySelector(".time-60-pos");
const time120pos= document.querySelector(".time-120-pos");
const precioactualposnatal = document.querySelector(".precioahora-pos");
const precioantesposnatal = document.querySelector(".precioantes-pos");
//MASAJE CON PIEDRAS

const time90pi= document.querySelector(".time-90-pi");
const time60pi= document.querySelector(".time-60-pi");
const time120pi= document.querySelector(".time-120-pi");
const precioactualpiedras = document.querySelector(".precioahora-pi");
const precioantespiedras = document.querySelector(".precioantes-pi");
//MASJE PIES MANOS

const time90pies= document.querySelector(".time-90-pies");
const time60pies= document.querySelector(".time-60-pies");
const time120pies= document.querySelector(".time-120-pies");
const precioactualpies = document.querySelector(".precioahora-pies");
const precioantespies = document.querySelector(".precioantes-pies");


function preciosporminutos(timeadd, timeremoveone, timeremovetwo){
    timeadd.classList.add("text-decoration-underline");
    timeremoveone.classList.remove("text-decoration-underline"); 
    timeremovetwo.classList.remove("text-decoration-underline");
}



time90re.addEventListener("click", (e) => {
  console.log("click")
  preciosporminutos(time90re, time60re, time120re);
  precioactualrelajante.textContent = "150.000";
  precioantesrelajante.textContent = "$170.000";
});

time120re.addEventListener("click", (e) => {
  console.log("click")
  preciosporminutos(time120re, time90re, time60re);
  time90re.classList.remove("text-decoration-underline");
  precioactualrelajante.textContent = "220.000";
  precioantesrelajante.textContent = "$250.000";
});
time60re.addEventListener("click", (e) => {
  console.log("click")
  preciosporminutos(time60re, time90re, time120re);
  precioactualrelajante.textContent = "115.000";
  precioantesrelajante.textContent = "$150.000";
});



time90dre.addEventListener("click", () => {
  console.log("click")
  preciosporminutos(time90dre, time60dre, time120dre);
  precioactualdrenaje.textContent = "150.000";
  precioantesdrenaje.textContent = "$170.000";
});

time120dre.addEventListener("click", () => {
  console.log("click")
  preciosporminutos(time120dre, time90dre, time60dre);
  time90re.classList.remove("text-decoration-underline");
  precioactualdrenaje.textContent = "220.000";
  precioantesdrenaje.textContent = "$250.000";
});

time60dre.addEventListener("click", () => {
  console.log("click")
  preciosporminutos(time60dre, time90dre, time120dre);
  precioactualdrenaje.textContent = "115.000";
  precioantesdrenaje.textContent = "$150.000";
});


time90de.addEventListener("click", () => {
  console.log("click")
  preciosporminutos(time90de, time60de, time120de);
  precioactualdeportivo.textContent = "170.000";
  precioantesdeportivo.textContent = "$180.000";
});

time120de.addEventListener("click", () => {
  console.log("click")
  preciosporminutos(time120de, time90de, time60de);
  precioactualdeportivo.textContent = "230.000";
  precioantesdeportivo.textContent = "$250.000";
});

time60de.addEventListener("click", () => {
  console.log("click")
  preciosporminutos(time60de, time90de, time120de);
  precioactualdeportivo.textContent = "120.000";
  precioantesdeportivo.textContent = "$150.000";
});



time90des.addEventListener("click", () => {
  console.log("click")
  preciosporminutos(time90des, time60des, time120des);
  precioactualdescon.textContent = "170.000";
  precioantesdescon.textContent = "$180.000";
});

time120des.addEventListener("click", () => {
  console.log("click")
  preciosporminutos(time120des, time90des, time60des);
  precioactualdescon.textContent = "230.000";
  precioantesdescon.textContent = "$250.000";
});

time60des.addEventListener("click", () => {
  console.log("click")
  preciosporminutos(time60des, time90des, time120des);
  precioactualdescon.textContent = "120.000";
  precioantesdescon.textContent = "$150.000";
});
    


time90pre.addEventListener("click", () => {
  console.log("click")
  preciosporminutos(time90pre, time60pre, time120pre);
  precioactualprenatal.textContent = "160.000";
  precioantesprenatal.textContent = "$180.000";
});

time120pre.addEventListener("click", () => {
  console.log("click")
  preciosporminutos(time120pre, time90pre, time60pre);
  precioactualprenatal.textContent = "220.000";
  precioantesprenatal.textContent = "$240.000";
});

time60pre.addEventListener("click", () => {
  console.log("click")
  preciosporminutos(time60pre, time90pre, time120pre);
  precioactualprenatal.textContent = "120.000";
  precioantesprenatal.textContent = "$130.000";
});


time90pos.addEventListener("click", () => {
  console.log("click")
  preciosporminutos(time90pos, time60pos, time120pos);
  precioactualposnatal.textContent = "150.000";
  precioantesposnatal.textContent = "$170.000";
});

time120pos.addEventListener("click", () => {
  console.log("click")
  preciosporminutos(time120pos, time90pos, time60pos);
  precioactualposnatal.textContent = "220.000";
  precioantesposnatal.textContent = "$240.000";
});

time60pos.addEventListener("click", () => {
  console.log("click")
  preciosporminutos(time60pos, time90pos, time120pos);
  precioactualposnatal.textContent = "110.000";
  precioantesposnatal.textContent = "$130.000";
});


time90pi.addEventListener("click", () => {
  console.log("click")
  preciosporminutos(time90pi, time60pi, time120pi);
  precioactualpiedras.textContent = "190.000";
  precioantespiedras.textContent = "$200.000";
});

time120pi.addEventListener("click", () => {
  console.log("click")
  preciosporminutos(time120pi, time90pi, time60pi);
  precioactualpiedras.textContent = "230.000";
  precioantespiedras.textContent = "$240.000";
});

time60pi.addEventListener("click", () => {
  console.log("click")
  preciosporminutos(time60pi, time90pi, time120pi);
  precioactualpiedras.textContent = "135.000";
  precioantespiedras.textContent = "$155.000";
});



time90pies.addEventListener("click", () => {
  console.log("click")
  preciosporminutos(time90pies, time60pies, time120pies);
  precioactualpies.textContent = "160.000";
  precioantespies.textContent = "$170.000";
});

time120pies.addEventListener("click", () => {
  console.log("click")
  preciosporminutos(time120pies, time90pies, time60pies);
  precioactualpies.textContent = "220.000";
  precioantespies.textContent = "$230.000";
});

time60pies.addEventListener("click", () => {
  console.log("click")
  preciosporminutos(time60pies, time90pies, time120pies);
  precioactualpies.textContent = "110.000";
  precioantespies.textContent = "$110.000";
});