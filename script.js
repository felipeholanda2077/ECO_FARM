var slideIndex = 1;
var slideIndex2 = 0;

showSlidesAutomatic();

function plusSlides(n) {
    showSlides(slideIndex += n)
}

function currentSlide(n) {
    showSlides(slideIndex = n)
}

function showSlides(n) {
    var i;
    var slides = document.getElementsByClassName("mySlides");
    var dots = document.getElementsByClassName("dot");

    if (n > slides.length) { slideIndex = 1 }
    if (n < 1) { slideIndex = slides.length }

    for (i = 0; i < slides.length; i++) {
        slides[i].style.display = "none";
    }

    for (i = 0; i < dots.length; i++) {
        dots[i].className = dots[i].className.replace(" active", "")
    }

    slides[slideIndex - 1].style.display = "block";
    dots[slideIndex - 1].className += " active";

}

function showSlidesAutomatic() {
    var i;
    var slides = document.getElementsByClassName("mySlides");
    var dots = document.getElementsByClassName("dot");

    for (i = 0; i < slides.length; i++) {
        slides[i].style.display = "none";
    }
    slideIndex2++

    if (slideIndex2 > slides.length) { slideIndex2 = 1 }

    for (i = 0; i < dots.length; i++) {
        dots[i].className = dots[i].className.replace(" active", "")
    }

    slides[slideIndex2 - 1].style.display = "block";
    dots[slideIndex2 - 1].className += " active";
    setTimeout(showSlidesAutomatic, 3000);

}

function validaDados() {

  var invalid = /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,4})+$/; //expressao regular
  var nome = document.getElementById('txtnome');
  var celular = document.getElementById('txtcelular');
  var email = document.getElementById('txtemail');

  caixa_nome = document.querySelector('.msg-nome');
  caixa_nome.style.display = 'none';

  caixa_mensagem = document.querySelector('.msg-mensagem');
  caixa_mensagem.style.display = 'none';

  caixa_celular = document.querySelector('.msg-celular');
  caixa_celular.style.display = 'none';

  caixa_email = document.querySelector('.msg-email');
  caixa_email.style.display = 'none';


  if (nome.value.length<5){
      //alert("Nome Não informado!");
      caixa_nome.innerHTML = "Favor preencha o nome";
      caixa_nome.style.display = 'block';
      caixa_nome.style = 'border: 2px';
      return false;
  }

  if (invalid.test(email.value)==false){

    caixa_email.innerHTML = "Favor preencha o email";
    caixa_email.style.display = 'block';
    caixa_email.style = 'border: 2px';
    return false;

}

if (celular.value.length<5){

    caixa_celular.innerHTML = "Favor preencha com o seu numero";
    caixa_celular.style.display = 'block';
    caixa_celular.style = 'border: 2px';
    return false;

}
  
  if (document.getElementById('txtmensagem').value.length==0){
      //alert("Mensagem Obrigatória");
      caixa_mensagem.innerHTML = "Favor preencha a mensagem";
      caixa_mensagem.style.display = 'block';
      caixa_mensagem.style = 'border: 2px';
      return false;
  }
}

function inicializaJS(){
    document.getElementById('txtnome').focus();
}