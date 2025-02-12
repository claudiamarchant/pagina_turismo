// const para libreria express
const express = require('express');
const app = express();
const cors = require('cors');
// para utilizar json
app.use(express.json());
app.use(cors());


const puntos_fijos = [

    { id: 1, Nombre: "plaza_01", Subtipo: "Plaza/Square", Sector: "Rincón bajo", Tipo: "plaza", Link: null, fono1: null, long: -73.535352515781781, lat: -47.79798027882719 },
    { id: 2, Nombre: "casa_cultura", Subtipo: "Espacio multiuso/public facilities", Sector: "Junquillo", Tipo: "espaciomultiuso", Link: null, fono1: null, long: -73.539080168449672, lat: -47.804024242220201 },
    { id: 3, Nombre: "pasarela", Subtipo: "Espacio multiuso/public facilities", Sector: "Junquillo", Tipo: "espaciomultiuso", Link: null, fono1: null, long: -73.539427288905998, lat: -47.804028660280565 },
    { id: 4, Nombre: "plaza_01", Subtipo: "Plaza/Square", Sector: "Junquillo", Tipo: "plaza", Link: null, fono1: null, long: -73.545322397850498, lat: -47.805273242049687 },
    { id: 5, Nombre: "plaza_02", Subtipo: "Plaza/Square", Sector: "Junquillo", Tipo: "plaza", Link: null, fono1: null, long: -73.540783772462447, lat: -47.805188632822166 },
    { id: 6, Nombre: "espacio_multiuso_01", Subtipo: "Espacio multiuso/public facilities", Sector: "Rincón alto", Tipo: "espaciomultiuso", Link: null, fono1: null, long: -73.531118323301087, lat: -47.796040555899836 },
    { id: 7, Nombre: "espacio_multiuso_02", Subtipo: "Espacio multiuso/public facilities", Sector: "Junquillo", Tipo: "espaciomultiuso", Link: null, fono1: null, long: -73.551120899417143, lat: -47.805679507816322 },
    { id: 8, Nombre: "espacio_multiuso_03 ", Subtipo: "Espacio multiuso/public facilities", Sector: "Centro", Tipo: "espaciomultiuso", Link: null, fono1: null, long: -73.537895066437898, lat: -47.802470530279223 },
    { id: 9, Nombre: "plaza_03", Subtipo: "Plaza/Square", Sector: "Centro", Tipo: "plaza", Link: null, fono1: null, long: -73.535524217956677, lat: -47.80202901742512 },
    { id: 10, Nombre: "plaza_04", Subtipo: "Plaza/Square", Sector: "Centro", Tipo: "plaza", Link: null, fono1: null, long: -73.538349499198162, lat: -47.80391322842258 },
    { id: 11, Nombre: "plaza_05", Subtipo: "Plaza/Square", Sector: "Centro", Tipo: "plaza", Link: null, fono1: null, long: -73.537531126494457, lat: -47.803669093649667 },
    { id: 12, Nombre: "espacio_multiuso_04", Subtipo: "Espacio multiuso/public facilities", Sector: "Rincón alto", Tipo: "espaciomultiuso", Link: null, fono1: null, long: -73.53099362193268, lat: -47.795787642090254 },
    { id: 13, Nombre: "plaza_06", Subtipo: "Espacio recreacional/playground", Sector: "Rincón bajo", Tipo: "juegos", Link: null, fono1: null, long: -73.535747207794202, lat: -47.798293344602172 },
    { id: 14, Nombre: "Paradero", Subtipo: "Espacio multiuso/public facilities", Sector: "Rincón alto", Tipo: "espaciomultiuso", Link: null, fono1: null, long: -73.53179973019536, lat: -47.795999232760359 },
    { id: 15, Nombre: "plaza_07", Subtipo: "Espacio recreacional/playground", Sector: "Rincón alto", Tipo: "juegos", Link: null, fono1: null, long: -73.532174, lat: -47.794787 },
    { id: 16, Nombre: "plaza_08", Subtipo: "Espacio recreacional/playground", Sector: "Rincón alto", Tipo: "juegos", Link: null, fono1: null, long: -73.529544745463369, lat: -47.794905692937029 },
    { id: 17, Nombre: "plaza_011", Subtipo: "Plaza/Square", Sector: "Rincón bajo", Tipo: "plaza", Link: null, fono1: null, long: -73.533485719192001, lat: -47.797169644406225 },
    { id: 18, Nombre: "plaza_012", Subtipo: "Plaza/Square", Sector: "Rincón bajo", Tipo: "plaza", Link: null, fono1: null, long: -73.535668728712977, lat: -47.799074982252925 },
    { id: 19, Nombre: "plaza_09", Subtipo: "Espacio recreacional/playground", Sector: "Centro", Tipo: "juegos", Link: null, fono1: null, long: -73.537458194512965, lat: -47.802115353534546 },
    { id: 20, Nombre: "plaza_010", Subtipo: "Espacio recreacional/playground", Sector: "Junquillo", Tipo: "juegos", Link: null, fono1: null, long: -73.548763855787485, lat: -47.806373981160178 },
    { id: 21, Nombre: "biblioteca", Subtipo: "Public library", Sector: null, Tipo: "biblioteca", Link: null, fono1: null, long: -73.537203048784335, lat: -47.803334496842083 },
    { id: 22, Nombre: "carabineros", Subtipo: "Police", Sector: null, Tipo: "carabineros", Link: null, fono1: null, long: -73.537468293076898, lat: -47.803400861705278 },
    { id: 23, Nombre: "CONAF", Subtipo: null, Sector: null, Tipo: "conaf", Link: null, fono1: null, long: -73.532931467414443, lat: -47.796144728172166 },
    { id: 24, Nombre: "municipalidad", Subtipo: "City Hall", Sector: null, Tipo: "municipalidad", Link: "https://www.instagram.com", fono1: null, long: -73.537630015462668, lat: -47.80334893579559 },
    { id: 25, Nombre: "posta", Subtipo: "Health service", Sector: null, Tipo: "posta", Link: null, fono1: "56944984356", long: -73.532350710368959, lat: -47.795903360153723 },
    { id: 26, Nombre: "registro_civil", Subtipo: "Civil registry", Sector: null, Tipo: "registro", Link: null, fono1: null, long: -73.537011705453708, lat: -47.802063370770249 },
    { id: 27, Nombre: "bomberos", Subtipo: "Firemen", Sector: null, Tipo: "bomberos", Link: null, fono1: null, long: -73.536742843844848, lat: -47.801733948045872 },
    { id: 28, Nombre: "ferry", Subtipo: "Ferry tickets", Sector: null, Tipo: "otros", Link: null, fono1: "56944984356", long: -73.537015494331442, lat: -47.801928452338394 },
    { id: 29, Nombre: "combustible", Subtipo: "Fuel Station", Sector: null, Tipo: "combustible", Link: null, fono1: null, long: -73.530726739407029, lat: -47.795720620569661 },
    { id: 30, Nombre: "otros", Subtipo: "Custodia/Luggage Storage", Sector: null, Tipo: "otros", Link: null, fono1: null, long: -73.53034451575688, lat: -47.796074405564632 },
    { id: 31, Nombre: "informacion", Subtipo: "Tourism Information Office", Sector: null, Tipo: "informacion", Link: "https://www.instagram.com", fono1: "56944984356", long: -73.531742754657103, lat: -47.795679636794887 },
    { id: 32, Nombre: "ferreteria", Subtipo: "Hardware store", Sector: null, Tipo: "ferreteria", Link: null, fono1: "56944984356", long: -73.528624354908942, lat: -47.795558823599386 },
    { id: 33, Nombre: "plaza_013", Subtipo: "Trail shelter", Sector: null, Tipo: "plaza", Link: "https://www.instagram.com", fono1: null, long: -73.500654717645006, lat: -48.246632440425387 },
]

// request a api
app.get('/', (req, res) => {
    res.send('pagina principal api')
});

app.get('/api/puntos_fijos/', (req, res) => {
    res.send(puntos_fijos);
})



// puerto 
const port = process.env.port || 4001;
app.listen(port, () => console.log('api up! puntos_fijos'));