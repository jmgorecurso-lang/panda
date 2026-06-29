// Base de datos de detalles de Productos
const detalles = {
    detalle1:{
        titulo: "Archspyre",
        descripcion: "Technical Brutal Death Metal",
        //pais: "Canadá",
        //publicado: "2026"
    },
    detalle2:{
        titulo: "Ingested",
        descripcion: "Slamming Brutal Deathcore",
       // pais: "Reino Unido",
       // publicado: "2026"
    },
    detalle3:{
        titulo: "Caedem",
        descripcion: "Death Metal",
        //pais: "Suecia",
        //publicado: "2026"
    },
};
// Seleccionamos todos los botones con la clase 'view-details'
const botones = document.querySelectorAll('.view-details');
//Transforma contenedor estatico en objeto interactivo
const modal=new bootstrap.Modal(document.getElementById('descriptionModal'));

const modalTitle = document.getElementById('modalProductLabel');
const descriptionContainer = document.getElementById('descriptionProduct');

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
            <p class="mt-2">${producto.texto}</p>
            <hr>
            <small class="text-muted">ID del producto: ${productId}</small>
            </div>`;
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
