
  const checkbox = document.getElementById('otro');
  const cantidad = document.getElementById('dinero');
  const libre = document.getElementById('enviar');
  // libre.disabled = !checkbox.checked;
 checkbox.addEventListener("change",
  function(){
    if(this.checked){
      cantidad.style.opacity="1";
      envia();
    }else{
      cantidad.style.opacity="0";
    }
  }
 );

function envia() {
  const libre = document.getElementById('enviar');
  libre.disabled = !libre.disabled;
}
// Al hacer envio, muestra mensaje y sube al inicio de la pagina, y borra formulario
function enviarFormulario(evento) {
  evento.preventDefault();
  window.scrollTo({ top: 0, behavior: 'smooth' });
  alert('Todo Correcto, enviado 😊')
  document.getElementById('miForm').reset();

}
//cerrar menu hamburguesa al hacer clic
document.querySelectorAll('.navbar-nav .nav-link').forEach (link=>{
  link.addEventListener('click',()=>{
    const collapse = document.querySelector('navbar-collapse');
    if (collapse?.classList.contains('show'));
    document.querySelector('.navbar-toggler')?.click();
  });
});