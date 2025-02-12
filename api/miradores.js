
// const para libreria express
const express = require('express');
const app = express();
const cors = require('cors');
// para utilizar json
app.use(express.json());
app.use(cors());

const miradores = [

    { id: 1, Nombre: "mirador_01", Subtipo: "Mirador/viewpoint", Sector: "Centro", Tipo: "mirador", Img: "el_faro", long: -73.535568815924179, lat: -47.801699498146959 },
    { id: 2, Nombre: "mirador_02", Subtipo: "Mirador/viewpoint", Sector: "Junquillo", Tipo: "mirador", Img: null, long: -73.540741065205651, lat: -47.803594954335061 },
    { id: 3, Nombre: "mirador_03", Subtipo: "Mirador/viewpoint", Sector: "Cerro Vigía", Tipo: "mirador", Img: "cascada_pisagua", long: -73.532340091573943, lat: -47.791539293296651 },
    { id: 4, Nombre: "mirador_04", Subtipo: "Mirador/viewpoint", Sector: "Cerro Vigía", Tipo: "mirador", Img: "el_condor", long: -73.537233029361133, lat: -47.792753480577993 },
    { id: 5, Nombre: "mirador_05", Subtipo: "Mirador/viewpoint", Sector: "Cerro Vigía", Tipo: "mirador", Img: null, long: -73.537220018873043, lat: -47.795119734515559 },
    { id: 6, Nombre: "mirador_06", Subtipo: "Mirador/viewpoint", Sector: "Rincón alto", Tipo: "mirador", Img: null, long: -73.532423544265853, lat: -47.796480832382777 },
    { id: 7, Nombre: "mirador_07", Subtipo: "Mirador/viewpoint", Sector: "Rincón alto", Tipo: "mirador", Img: "rincon_alto", long: -73.531347989949538, lat: -47.796056156120976 },
    { id: 8, Nombre: "mirador_08", Subtipo: "Mirador/viewpoint", Sector: "Junquillo", Tipo: "mirador", Img: null, long: -73.548593643771483, lat: -47.806504848327044 },
    { id: 9, Nombre: "mirador_09", Subtipo: "Mirador/viewpoint", Sector: "Isla de los muertos", Tipo: "mirador", Img: null, long: -73.557222887965963, lat: -47.778589710648887 },
    { id: 10, Nombre: "mirador_010", Subtipo: "Mirador/viewpoint", Sector: "Isla de los muertos", Tipo: "mirador", Img: null, long: -73.558803919296267, lat: -47.779522181700969 },

];

// request a api
app.get('/', (req, res) => {
    res.send('pagina principal api')
});

app.get('/api/miradores/', (req, res) => {
    res.send(miradores);
})

// puerto
const port = process.env.port || 4002;
app.listen(port, () => console.log('api up! miradores'));