export default {
    
    props: {
        productos: Array,
        estilos: String,
        titulo: String
        },

        template: /*html*/`
            <table class="table table-striped">
            <thead>
                <tr>
                    <th scope="col">imagen</th>
                    <th scope="col">marca</th>
                    <th scope="col">descripcion</th>
                    <th scope="col">precio</th>
                </tr>
            </thead>
                <tbody>            
                <tr v-for="(producto, i) in productos" :key="i">
                    <td scope="row"><img :src="producto.imagen" :alt="producto.marca"></td>
                    <td>{{producto.marca}}</td>
                    <td>{{producto.descripcion}}</td>
                    <td id='precio'>{{producto.precio}}</td>
                </tr>
                </tbody>
            </table>
        `
}