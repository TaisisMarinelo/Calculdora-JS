'use strict';

const display = document.getElementById('display');
const numeros =  document.querySelectorAll('[id*=tecla]');

const inserirNumero = (evento) => display.textContent = evento.target.textContent;

numeros.forEach(numero => numero.addEventListener('click', inserirNumero));

