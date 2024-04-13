const lowercaseletters = 'abcdefghijklmnopqrstuvwxyz';
const uppercaseletters = 'ABCDEFGHIJKLMNOPQRSTUVWXYZ';
const numbers = '0123456789';
const symbols = '!@#$%^&*()_+-=[]{}|;:"<.>/?';

const lenel=document.getElementById('length');
const uppercaseel=document.getElementById('uppercase');
const lowercaseel=document.getElementById('lowercase');
const numbersel=document.getElementById('numbers');
const symbolsel=document.getElementById('symbols');
const generateel=document.getElementById('generate');
const passwordel=document.getElementById('password');

console.log(lenel);
console.log(uppercaseel);
console.log(lowercaseel);
console.log(numbersel);
console.log(symbolsel);
console.log(generateel);


generateel.addEventListener('click',()=>{

    const len=lenel.value;
    let characters="";
    let pasword="";

    if(uppercaseel.checked){
        characters+=uppercaseletters;
    }

    if(lowercaseel.checked){
        characters+=lowercaseletters;
    }

    if(numbersel.checked){
        characters+=numbers;
    }

    if(symbolsel.checked){
        characters+=symbols;
    }

    for(let i=0;i<len;i++){
        pasword+=characters.charAt(Math.floor(Math.random()*characters.length));
    }   

    passwordel.value=pasword;

});
