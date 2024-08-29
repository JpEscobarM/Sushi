function sim(){

    location.href = "https://youtu.be/Gnm3hIcjiCQ";
}
function desvia(t){
  var btn = t;
  btn.style.position = 'absolute';
  btn.style.bottom= geraPosicao(20,80);
  btn.style.left = geraPosicao(20,80);
  console.log(btn);
}
function geraPosicao(min, max) {
    return (Math.random() * (max - min) + min) + "%";
}