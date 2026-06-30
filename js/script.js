// array con los detalles del proyecto
const detalles = {
    detalle1: {
        titulo: "Proyecto 1: Reforestación de bambú",
        descripcion: "Objetivo: Restaurar 50 hectáreas de bosque de bambú en el Himalaya oriental",
        punto1: "-Acciones: Plantar 10.000 brotes de bambú",
        punto2: "-Beneficio: Asegura la fuente de alimentación del panda",
        punto3: "-Impacto: Beneficia a mas de 30 especies de fauna local",
        meta: "-Meta: Restaurar el hábitat natural del panda y promover la biodiversidad en la región",
    },
    detalle2: {
        titulo: "Proyecto 2: Monitoreo con GPS",
        descripcion: "Seguimiento de la población de pandas y su hábitat mediante tecnología GPS",
        punto1: "-Acciones: Implantar collares GPS en 20 pandas",
        punto2: "-Beneficio: Permite estudiar los patrones de movimiento y comportamiento de los pandas",
        punto3: "-Impacto: Mejora la conservación de la especie y su entorno natural",
        meta: "-Meta: Mejorar el conocimiento sobre la población de pandas y su hábitat",
    },
    detalle3: {
        titulo: "Proyecto 3: Educación Ambiental",
        descripcion: "Objetivo: Concienciar a la comunidad local sobre la importancia de la conservación del panda y su hábitat",
        punto1: "-Acciones: Organizar talleres y charlas educativas en escuelas y comunidades",
        punto2: "-Beneficio: Fomenta la participación activa de la comunidad en la conservación del panda",
        punto3: "-Impacto: Aumenta la conciencia ambiental y el compromiso de la comunidad con la conservación del panda",
        meta: "-Meta: Mejorar el conocimiento sobre la población de pandas y su hábitat",

    },
};

  const checkbox = document.getElementById('otro');
  const cantidad = document.getElementById('dinero');
  const libre = document.getElementById('enviar');
  // libre.disabled = !checkbox.checked;
 checkbox.addEventListener("change",
  function(event){
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


// Seleccionamos todos los botones con la clase 'view-details'
const botones = document.querySelectorAll('.view-details');
//Transforma contenedor estatico en objeto interactivo
const modal=new bootstrap.Modal(document.getElementById('descriptionModal'));

const modalTitle = document.getElementById('modalProductLabel');
const descriptionContainer = document.getElementById('descriptionProduct');
const descriptionMeta = document.getElementById('modalMeta');

document.addEventListener("DOMContentLoaded",function (){
    //Function para mostrar la descripcion en el modal
    function mostrarDescripcion(productId){
        const producto = detalles[productId];
        if (producto) {
            //Actualiza titulo Modal
            modalTitle.textContent = producto.titulo;
            // actualiza descripcion con formato html
            descriptionContainer.innerHTML = `
            <div class="mb-3">
            <span class="badge bg-info text-dark mb-2">Información detallada</span>
            <p class="mt-2">${producto.descripcion}</p>
            <hr>
            <p class="mt-2">${producto.punto1}</p>
            <p class="mt-2">${producto.punto2}</p>
            <p class="mt-2">${producto.punto3}</p>
            </div>`
            descriptionMeta.textContent = producto.meta;
            //mostrar el modal
            modal.show();
        }else{
            descriptionContainer.innerHTML = `<p class="text-danger">Detalle no disponible temporalmente</p>`;
            modal.show ();
        }
    }
    //Agregar evento click a cada botón
    botones.forEach(boton=> {
        boton.addEventListener('click',function(e){
            e.preventDefault();
            const productId = this.getAttribute (`data-product`);
            mostrarDescripcion(productId);
        });
    })
})