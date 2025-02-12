
// const para libreria express
const express = require('express');
const app = express();
const cors = require('cors');
// para utilizar json
app.use(express.json());
app.use(cors());


const comentarios = [
    { id: 1, Nombre: "usuario 1", Email: "usuario@gmail.com", Descripcion: "Lorem ipsum dolor sit amet consectetur adipisicing elit." },
    { id: 2, Nombre: "usuario 2", Email: "otro@gmail.com", Descripcion: "Earum nobis eligendi, dignissimos consequuntur blanditiis natus." },
]

// request a api
app.get('/', (req, res) => {
    res.send('pagina principal api')
});

app.get('/api/comentarios/', (req, res) => {
    res.send(comentarios);
})

// mostrar
app.get('/api/comentarios/:id', (req, res) => {
    const cantante = comentarios.find(c => c.id === parseInt(req.params.id));
    if (!cantante) return res.status(404).send('No hay comentarios con id');
    else res.send(cantante);
})

// agregar
app.post('/api/comentarios', (req, res) => {
    const cantante = {
        id: comentarios.length + 1,
        Nombre: req.body.Nombre,
        Nombre: req.body.Email,
        Descripcion: req.body.Descripcion,
    }
    comentarios.push(cantante);
    res.send(comentarios);
});

// borrar - mejorar el eliminar ya que debe actualizar la api *
app.delete('/api/comentarios/:id', (req, res) => {
    const cantante = comentarios.find(c => c.id === parseInt(req.params.id));
    if (!cantante) return res.status(404).send('No existe actividad');

    const index = comentarios.indexOf(cantante);
    comentarios.splice(index, 1);
    res.send(cantante);
});


// puerto - redireccionar a puerto n1
const port = process.env.port || 4005;
app.listen(port, () => console.log('api up! comentarios'));