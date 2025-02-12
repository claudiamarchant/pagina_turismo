
// const para libreria express
const express = require('express');
const app = express();
const cors = require('cors');
// para utilizar json
app.use(express.json());
app.use(cors());


const actividades = [
    { id: 1, Nombre: "Actividad N° 1", Descripcion: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Libero magni voluptatem rem dolor, iusto reiciendis ex aut aspernatur.", Fecha: "Enero", Lugar: "Lugar 1", Link: null, Img: "el_faro" },
    { id: 2, Nombre: "Actividad N° 2", Descripcion: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Libero magni voluptatem rem dolor, iusto reiciendis ex aut aspernatur.", Fecha: "Mayo", Lugar: "Lugar 2", Link: null, Img: "cascada_pisagua" },

]

// request a api
app.get('/', (req, res) => {
    res.send('pagina principal api')
});

app.get('/api/actividades/', (req, res) => {
    res.send(actividades);
})

// mostrar
app.get('/api/actividades/:id', (req, res) => {
    const cantante = actividades.find(c => c.id === parseInt(req.params.id));
    if (!cantante) return res.status(404).send('No hay actividad con id');
    else res.send(cantante);
})

// agregar
app.post('/api/actividades', (req, res) => {
    const cantante = {
        id: actividades.length + 1,
        Nombre: req.body.Nombre,
        Descripcion: req.body.Descripcion,
        Fecha: req.body.Fecha,
        Lugar: req.body.Lugar,
        Link: req.body.Link,
        Img: 'madereo',
        Img2: null,
        Img3: null
        // Img: req.body.Img,
        // Img2: req.body.Img2,
        // Img3: req.body.Img3

    }
    actividades.push(cantante);
    res.send(actividades);
});

// borrar - mejorar el eliminar ya que debe actualizar la api *
app.delete('/api/actividades/:id', (req, res) => {
    const cantante = actividades.find(c => c.id === parseInt(req.params.id));
    if (!cantante) return res.status(404).send('No existe actividad');

    const index = actividades.indexOf(cantante);
    actividades.splice(index, 1);
    res.send(cantante);
});

// agregar método actualizar
app.put('/api/actividades/:id', (req, res) => {
    const cantante = actividades.find(c => c.id === parseInt(req.params.id));


    const index = actividades.indexOf(cantante);
    const cantantes = {
        id: parseInt(req.params.id),
        Nombre: req.body.Nombre,
        Fecha: req.body.Fecha,
        Descripcion: req.body.Descripcion,
        Img: 'madereo',
        Img2: null,
        Img3: null
        // agregar imgenes
    }
    // operadores.push(cantante);
    res.send(actividades[index] = cantantes);

});


// puerto - redireccionar a puerto n1
const port = process.env.port || 4003;
app.listen(port, () => console.log('api up! actividades'));