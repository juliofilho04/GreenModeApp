
(() => {
    'use strict'
    const forms = document.querySelectorAll('.needs-validation')
    Array.from(forms).forEach(form => {
      form.addEventListener('submit', event => {
        if (!form.checkValidity()) {
          event.preventDefault()
          event.stopPropagation()
        }
        form.classList.add('was-validated')
      }, false)
    })
  })()

  const alertPlaceholder = document.getElementById('liveAlertPlaceholder')
const appendAlert = (message, type) => {
  const wrapper = document.createElement('div')
  wrapper.innerHTML = [
    `<div class="alert alert-${type} alert-dismissible" role="alert">`,
    `   <div>${message}</div>`,
    '   <button type="button" class="btn-close" data-bs-dismiss="alert" aria-label="Close"></button>',
    '</div>'
  ].join('')

  alertPlaceholder.append(wrapper)
}

const alertTrigger = document.getElementById('liveAlertBtn')
if (alertTrigger) {
  alertTrigger.addEventListener('click', () => {
    appendAlert('The payment was successfully made', 'success')
  })
}

const links = document.querySelectorAll(".btn-menu-preto a");


function logHref(item) {
    const href = item.href;
    const url = document.location.href;

    if (href === url){
      item.style.fontsize = "2rem"
        item.style.backgroundColor = "black"
        item.style.color = "white"
    }

}

links.forEach(logHref)

const imagens = document.querySelectorAll("#foto-carrosel");

function galeriaTrocar(event){
    const clicada = event.currentTarget;
    const principal = document.querySelector('.pic-prod')
    const segundo = document.querySelector('#foto-produto')

    principal.src = clicada.src;
    principal.alt = clicada.alt;
    segundo.src = clicada.src;
    segundo.alt = clicada.alt;

    console.log(clicada.src)
}


function galeriaClick(imagem){
    imagem.addEventListener("click", galeriaTrocar)
}

//colocar como parametro uma funcao - serve para por em loop
imagens.forEach(galeriaClick);

//botão de mais

const botaoMais = document.querySelector("#botaoMais");

function ativarAoClickMais() {
  const numero = document.querySelector('#numero')
  const total = Number(numero.innerHTML) + 1;

  const valor = document.querySelector('#valor-produto')
  const valorNumero = document.querySelector('#valor-total')
  const valorTotal = valorNumero.innerHTML;

    if (total <= 10) {
      numero.innerHTML = total;
      valorNumero.innerHTML = Number(valorTotal) + (Number(valor.innerHTML));
      valorTotal = Number(valor.innerHTML)
    } else {
      alert('Não é possível colocar mais de 10 produtos no seu carrinho!')
    }
}

botaoMais.addEventListener ('click', ativarAoClickMais);

//botão de menos

const botaoMenos = document.querySelector("#botaoMenos");

function ativarAoClickMenos() {
  const numero = document.querySelector('#numero')
  const total = Number(numero.innerHTML) - 1;

  const valor = document.querySelector('#valor-produto')
  const valorNumero = document.querySelector('#valor-total')
  const valorTotal = valorNumero.innerHTML;

   if (total >= 1) {
    numero.innerHTML = total;
    valorNumero.innerHTML = Number(valorTotal) - (Number(valor.innerHTML));
    valorTotal = Number(valor.innerHTML)
   } else {
    alert('Não é possível colocar menos de 1 produto no seu carrinho!')
   }
}

botaoMenos.addEventListener ('click', ativarAoClickMenos);

//remover item do carrinho

const botaoRemove = document.querySelector('#remove');

function ativarAoClickRemove() {
  const elemento = document.querySelector('#produto');
  const numero = document.querySelector('#numero');
  const valor = document.querySelector('#valor-total');

  if (confirm("Você deseja realmente excluir este item?")) {
    console.log(elemento.classList.toggle('ativo'))
    elemento.classList.toggle('empty'); 
    numero.innerHTML = 1;
    valor.innerHTML = 0;
    window.location.replace('/tela-do-produto/produto.html');
  } else {
    // Código para cancelar a exclusão
  }
}

botaoRemove.addEventListener ('click', ativarAoClickRemove);

//add item no carrinho

const botaoAdd = document.querySelector('#add');

function mostrar() {
const item = document.querySelector('#produto');
const valor = document.querySelector('#valor-total');

item.classList.toggle('ativo');
valor.innerHTML = 10;
}

botaoAdd.addEventListener('click', mostrar);
