import{r as _,k as f,l as v,o as u,c as d,f as k,a as H,F as C,m as D,n as V,t as h}from"./index.CCeoQ9Is.js";/* empty css                             */const g=(r,o)=>{const n=r.__vccOpts||r;for(const[e,c]of o)n[e]=c;return n},M={name:"Calendar",setup(r,{emit:o}){const n=_(new Date),e=_(null),c=m();function m(){const i=[];for(let a=9;a<=23;a++){const p=a<12?`${a} AM`:a===12?"12 PM":`${a-12} PM`;i.push(p)}return i.push("12 AM"),i}function l(s){e.value=s,t()}function t(){if(n.value&&e.value){const s={date:n.value,time:e.value};o("update:dateTime",s)}}return f(n,t),{date:n,hours:c,selectedHour:e,selectHour:l,emitDateTime:t}}},P={class:"main-container"},T={class:"time-container"},x=["onClick"];function y(r,o,n,e,c,m){const l=v("VDatePicker");return u(),d("div",P,[k(l,{modelValue:e.date,"onUpdate:modelValue":o[0]||(o[0]=t=>e.date=t),onInput:e.emitDateTime},null,8,["modelValue","onInput"]),H("div",T,[(u(!0),d(C,null,D(e.hours,t=>(u(),d("div",{key:t,class:V(["time-card",{selected:e.selectedHour===t}]),onClick:s=>e.selectHour(t)},h(t),11,x))),128))])])}const F=g(M,[["render",y]]);export{F as C,g as _};
