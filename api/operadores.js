
// const para libreria express
const express = require('express');
const app = express();
const cors = require('cors');
// para utilizar json
app.use(express.json());
app.use(cors());

// quiza quitar https links **

const operadores = [
    { id: 1, Nombre: "almacen_01", Subtipo: "Venta abarrotes/Grocery Store", Sector: "Junquillo", fono1: "56944984356", Tipo: "abarrotes", Link: null, long: -73.542922716623863, lat: -47.805116832649212 },
    { id: 2, Nombre: "almacen_02", Subtipo: "Venta abarrotes/Grocery Store", Sector: "Junquillo", fono1: "56944984356", Tipo: "abarrotes", Link: null, long: -73.544301930042721, lat: -47.805467252104847 },
    { id: 3, Nombre: "almacen_03", Subtipo: "Venta abarrotes/Grocery Store", Sector: "Junquillo", fono1: "56944984356", Tipo: "abarrotes", Link: null, long: -73.544933455999669, lat: -47.805331296053382 },
    { id: 4, Nombre: "almacen_04", Subtipo: "Venta abarrotes/Grocery Store", Sector: "Junquillo", fono1: "56944984356",  Tipo: "abarrotes", Link: null, long: -73.542712622126174, lat: -47.804988196303285 },
    { id: 5, Nombre: "kiosko_01", Subtipo: "Venta abarrotes/Grocery Store", Sector: "Rincón alto", fono1: "56944984356", Tipo: "abarrotes", Link: null, long: -73.531855289292537, lat: -47.795951010255408 },
    { id: 6, Nombre: "kiosko_02", Subtipo: "Venta abarrotes/Grocery Store", Sector: "Rincón alto", fono1: "56944984356",  Tipo: "abarrotes", Link: null, long: -73.531868857044998, lat: -47.7960801238331 },
    { id: 7, Nombre: "kiosko_03", Subtipo: "Venta abarrotes/Grocery Store", Sector: "Centro", fono1: "56944984356",  Tipo: "abarrotes", Link: null, long: -73.537798156824877, lat: -47.803828605149583 },
    { id: 8, Nombre: "kiosko_04", Subtipo: "Venta abarrotes/Grocery Store", Sector: "Rincón alto", fono1: "56944984356",  Tipo: "abarrotes", Link: null, long: -73.531651257237158, lat: -47.796083366866412 },
    { id: 9, Nombre: "kiosko_05", Subtipo: "Venta abarrotes/Grocery Store", Sector: "Centro", fono1: "56944984356",  Tipo: "abarrotes", Link: null, long: -73.537234871750883, lat: -47.802201182063705 },
    { id: 10, Nombre: "kiosko_06", Subtipo: "Venta abarrotes/Grocery Store", Sector: "Rincón alto", fono1: "56944984356",  Tipo: "abarrotes", Link: null, long: -73.531008328068197, lat: -47.795679236280876 },
    { id: 11, Nombre: "minimarket_01", Subtipo: "Venta abarrotes/Grocery Store", Sector: "Rincón alto", fono1: null,  Tipo: "abarrotes", Link: null, long: -73.528731560598743, lat: -47.795443121789255 },
    { id: 12, Nombre: "minimarket_02", Subtipo: "Venta abarrotes/Grocery Store", Sector: "Rincón alto", fono1: "56944984356", Tipo: "abarrotes", Link: null, long: -73.531019901673957, lat: -47.795742368977493 },
    { id: 13, Nombre: "minimarket_03", Subtipo: "Venta abarrotes/Grocery Store", Sector: "Rincón alto", fono1: "56944984356", Tipo: "abarrotes", Link: null, long: -73.531940360449639, lat: -47.794827374292908 },
    { id: 14, Nombre: "minimarket_04", Subtipo: "Venta abarrotes/Grocery Store", Sector: "Rincón alto", fono1: "56944984356", Tipo: "abarrotes", Link: null, long: -73.531767170890518, lat: -47.795760929303206 },
    { id: 15, Nombre: "minimarket_05", Subtipo: "Venta abarrotes/Grocery Store", Sector: "Junquillo", fono1: "56944984356",  Tipo: "abarrotes", Link: null, long: -73.547541300871487, lat: -47.803895209802704 },
    { id: 16, Nombre: "minimarket_06", Subtipo: "Venta abarrotes/Grocery Store", Sector: "Rincón bajo", fono1: "56944984356",  Tipo: "abarrotes", Link: null, long: -73.533307327321936, lat: -47.796432647655244 },
    { id: 17, Nombre: "minimarket_07", Subtipo: "Venta abarrotes/Grocery Store", Sector: "Rincón alto", fono1: "56944984356",  Tipo: "abarrotes", Link: null, long: -73.532048170934289, lat: -47.796214413537733 },
    { id: 18, Nombre: "minimarket_08", Subtipo: "Venta abarrotes/Grocery Store", Sector: "Centro", fono1: "56944984356", Tipo: "abarrotes", Link: null, long: -73.538039566631895, lat: -47.803696067846133 },
    { id: 19, Nombre: "cafeteria_01", Sector: "Rincon alto", Subtipo: "Restaurante", Tipo: "alimentacion", Link: "www.instagram.com", fono1: "56944984356", long: -73.529968860484601, lat: -47.794658173371062 },
    { id: 20, Nombre: "comida_01", Sector: "Rincon alto", Subtipo: "Comida al paso/fast food", Tipo: "alimentacion", Link: null, fono1: "56944984356", long: -73.530800076262807, lat: -47.795487616798219 },
    { id: 21, Nombre: "comida_02", Sector: "Rincon alto", Subtipo: "Comida al paso/fast food", Tipo: "alimentacion", Link: null, fono1: "56944984356",  long: -73.530776422490959, lat: -47.795379340455376 },
    { id: 22, Nombre: "restaurante_01", Sector: "Rincon bajo", Subtipo: "Restaurante", Tipo: "alimentacion", Link: null, fono1: "56944984356",  long: -73.534763109904418, lat: -47.797490803023742 },
    { id: 23, Nombre: "restaurante_02", Sector: "Rincon alto", Subtipo: "Restaurante", Tipo: "alimentacion", Link: null, fono1: "56944984356",  long: -73.53180809231425, lat: -47.796077876860529 },
    { id: 24, Nombre: "restaurante_03", Sector: "Rincon alto", Subtipo: "Restaurante", Tipo: "alimentacion", Link: "www.instagram.com", fono1: "56944984356",  long: -73.533687602345694, lat: -47.795848466580935 },
    { id: 25, Nombre: "restaurante_04", Sector: "Centro", Subtipo: "Restaurante", Tipo: "alimentacion", Link: null, fono1: "56944984356",  long: -73.538127066835244, lat: -47.803419341091903 },
    { id: 26, Nombre: "restaurante_05", Sector: "Rincon bajo", Subtipo: "Restaurante", Tipo: "alimentacion", Link: null, fono1: "56944984356", long: -73.534908179445296, lat: -47.797555639587408 },
    { id: 27, Nombre: "restaurante_06", Sector: "Rincon bajo", Subtipo: "Restaurante", Tipo: "alimentacion", Link: null, fono1: "56944984356", long: -73.531172553450858, lat: -47.796959024800891 },
    { id: 28, Nombre: "restaurante_07", Sector: "Rincon alto", Subtipo: "Restaurante", Tipo: "alimentacion", Link: "https://www.instagram.com", fono1: "56944984356",long: -73.529581043935011, lat: -47.795624966990822 },
    { id: 29, Nombre: "restaurante_08", Sector: "Rincon alto", Subtipo: "Restaurante", Tipo: "alimentacion", Link: null, fono1: "56944984356", long: -73.532598585334426, lat: -47.795636595995255 },
    { id: 30, Nombre: "restaurante_09", Sector: "Rincon alto", Subtipo: "Restaurante", Tipo: "alimentacion", Link: null, fono1: "56944984356",  long: -73.531041781122497, lat: -47.795913607104673 },
    { id: 31, Nombre: "restaurante_010", Sector: "Rincon bajo", Subtipo: "Restaurante", Tipo: "alimentacion", Link: null, fono1: "56944984356",  long: -73.533867960938451, lat: -47.796449749493668 },
    { id: 32, Nombre: "restobar", Sector: "Rincon bajo", Subtipo: "Restaurante", Tipo: "alimentacion", Link: null, fono1: "56944984356", long: -73.535105381419996, lat: -47.797666130352283 },
    { id: 33, Nombre: "restaurante_011", Sector: "Rincon alto", Subtipo: "Comida al paso/fast food", Tipo: "alimentacion", Link: null, fono1: "56944984356",  long: -73.530775408051042, lat: -47.795415318645034 },
    { id: 34, Nombre: "cafeteria_02", Sector: "Puerto Yungay", Subtipo: "Comida al paso/fast food", Tipo: "alimentacion", Link: null, fono1: "56944984356", long: -73.32405864980349, lat: -47.935350438848083 },
    { id: 35, Nombre: "camping", Sector: "Rincon bajo", Subtipo: "Camping", Tipo: "alojamiento", Link: null, fono1: "56944984356", long: -73.530747883293614, lat: -47.796820302618698 },
    { id: 36, Nombre: "hostel_01", Sector: "Centro", Subtipo: "Hostel", Tipo: "alojamiento", Link: "https://www.instagram.com", fono1: "56944984356",  long: -73.537275245655849, lat: -47.802354415661128 },
    { id: 37, Nombre: "hostel_02", Sector: "Rincon bajo", Subtipo: "Hostal", Tipo: "alojamiento", Link: "https://www.instagram.com", fono1: "56944984356",  long: -73.534253733357374, lat: -47.797137313636483 },
    { id: 38, Nombre: "hostel_01", Sector: "Centro", Subtipo: "Lodge", Tipo: "alojamiento", Link: "https://www.instagram.com", fono1: "56944984356", long: -73.536657563805917, lat: -47.800929987601982 },
    { id: 39, Nombre: "artesanias_01", Sector: "Rincon bajo", Subtipo: "Artesanías/crafts", Tipo: "artesanias", Link: null, fono1: "56944984356", long: -73.535790642187024, lat: -47.798466680472671 },
    { id: 40, Nombre: "artesanias_02", Sector: "Rincon bajo", Subtipo: "Artesanías/crafts", Tipo: "artesanias", Link: null, fono1: "56944984356", long: -73.535499535069178, lat: -47.797896105448082 },
    { id: 41, Nombre: "artesanias_03", Sector: "Centro", Subtipo: "Artesanías/crafts", Tipo: "artesanias", Link: null, fono1: null, long: -73.537531683969036, lat: -47.803461278636746 },
    { id: 42, Nombre: "cabaña_01", Sector: "Rincon alto", Subtipo: "Cabañas/cabins", Tipo: "cabana", Link: null, fono1: "56944984356", long: -73.528914850532956, lat: -47.794626672012377 },
    { id: 43, Nombre: "cabaña_02", Sector: "Rincon bajo", Subtipo: "Cabañas/cabins", Tipo: "cabana", Link: null, fono1: "56944984356",  long: -73.535664438803565, lat: -47.801056432593235 },
    { id: 44, Nombre: "cabaña_03", Sector: "Rincon alto", Subtipo: "Cabañas/cabins", Tipo: "cabana", Link: null, fono1: "56944984356",  long: -73.533184404577071, lat: -47.795698071621054 },
    { id: 45, Nombre: "cabaña_04", Sector: "Rincon alto", Subtipo: "Cabañas/cabins", Tipo: "cabana", Link: null, fono1: "56944984356", long: -73.53019679695079, lat: -47.794625101624831 },
    { id: 46, Nombre: "cabaña_05", Sector: "Rincon alto", Subtipo: "Cabañas/cabins", Tipo: "cabana", Link: null, fono1: "56944984356",  long: -73.531979727036628, lat: -47.794377988117915 },
    { id: 47, Nombre: "cabaña_06", Sector: "Puerto Yungay", Subtipo: "Cabañas/cabins", Tipo: "cabana", Link: null, fono1: "56944984356",  long: -73.324101358848679, lat: -47.933200616743207 },
    { id: 48, Nombre: "cabaña_07", Sector: "Rincon bajo", Subtipo: "Cabañas/cabins", Tipo: "cabana", Link: null, fono1: "56944984356",  long: -73.530877516765671, lat: -47.797477120294602 },
    { id: 49, Nombre: "cabaña_08", Sector: "Rincon alto", Subtipo: "Cabañas/cabins", Tipo: "cabana", Link: null, fono1: "56944984356",  long: -73.532816900657394, lat: -47.795945312151119 },
    { id: 50, Nombre: "cabaña_09", Sector: "Rincon bajo", Subtipo: "Cabañas/cabins", Tipo: "cabana", Link: null, fono1: "56944984356",  long: -73.53556491360203, lat: -47.801380836038796 },
    { id: 51, Nombre: "cabaña_010 ", Sector: "Rincon alto", Subtipo: "Cabañas/cabins", Tipo: "cabana", Link: null, fono1: "56944984356",  long: -73.53263070307041, lat: -47.796392821223449 },
    { id: 52, Nombre: "cabaña_011", Sector: "Rincon bajo", Subtipo: "Cabañas/cabins", Tipo: "cabana", Link: null, fono1: "56944984356",  long: -73.530933228851723, lat: -47.797025840983011 },
    { id: 53, Nombre: "hospedaje_01", Sector: "Rincon bajo", Subtipo: "Hospedaje/accommodation", Tipo: "cama", Link: null, fono1: "56944984356",  long: -73.534738688233602, lat: -47.797409511118957 },
    { id: 54, Nombre: "hospedaje_02", Sector: "Rincon alto", Subtipo: "Hospedaje/accommodation", Tipo: "cama", Link: null, fono1: "56944984356",  long: -73.532194913519973, lat: -47.795271522141576 },
    { id: 55, Nombre: "hospedaje_03", Sector: "Rincon alto", Subtipo: "Hospedaje/accommodation", Tipo: "cama", Link: null, fono1: "56944984356",long: -73.531935196521644, lat: -47.79607974933765 },
    { id: 56, Nombre: "hospedaje_04", Sector: "Rincon bajo", Subtipo: "Hospedaje/accommodation", Tipo: "cama", Link: null, fono1: "56944984356", long: -73.534026696233937, lat: -47.797085495966407 },
    { id: 57, Nombre: "hospedaje_05", Sector: "Rincon bajo", Subtipo: "Hospedaje/accommodation", Tipo: "cama", Link: null, fono1: "56944984356", long: -73.534188402187539, lat: -47.79703357468096 },
    { id: 58, Nombre: "hospedaje_06", Sector: "Rincon alto", Subtipo: "Hospedaje/accommodation", Tipo: "cama", Link: null, fono1: "56944984356",  long: -73.532071963622045, lat: -47.796284847590464 },
    { id: 59, Nombre: "hospedaje_07", Sector: "Junquillo", Subtipo: "Hospedaje/accommodation", Tipo: "cama", Link: null, fono1: "56944984356", long: -73.543416385781427, lat: -47.805272049620385 },
    { id: 60, Nombre: "hospedaje_08", Sector: "Rincon bajo", Subtipo: "Hospedaje/accommodation", Tipo: "cama", Link: null, fono1: "56944984356",  long: -73.531274438991019, lat: -47.797608169702663 },
    { id: 61, Nombre: "hospedaje_09", Sector: "Junquillo", Subtipo: "Hospedaje/accommodation", Tipo: "cama", Link: null, fono1: "56944984356",  long: -73.542803814935652, lat: -47.805070334169926 },
    { id: 62, Nombre: "hospedaje_010", Sector: "Junquillo", Subtipo: "Hospedaje/accommodation", Tipo: "cama", Link: null, fono1: "56944984356", long: -73.546644762848075, lat: -47.803832355654201 },
    { id: 63, Nombre: "hospedaje_011", Sector: "Rincon bajo", Subtipo: "Hospedaje/accommodation", Tipo: "cama", Link: null, fono1: "56944984356", long: -73.531164186055634, lat: -47.797255844828975 },
    { id: 64, Nombre: "residencial_01", Sector: "Rincon bajo", Subtipo: "Residencial/accommodation", Tipo: "cama", Link: null, fono1: "56944984356",  long: -73.535879329272944, lat: -47.799664295831306 },
    { id: 65, Nombre: "residencial_02", Sector: "Centro", Subtipo: "Residencial/accommodation", Tipo: "cama", Link: null, fono1: "56944984356", long: -73.537329334059876, lat: -47.802166394860663 },
    { id: 66, Nombre: "residencial_03", Sector: "Rincon bajo", Subtipo: "Residencial/accommodation", Tipo: "cama", Link: null, fono1: "56944984356", long: -73.535433349597909, lat: -47.801015364516608 },
    { id: 67, Nombre: "residencial_04", Sector: "Junquillo", Subtipo: "Residencial/accommodation", Tipo: "cama", Link: null, fono1: "56944984356",  long: -73.544142469995208, lat: -47.805438236132233 },
    { id: 68, Nombre: "senderismo_01", Sector: "Rincon alto", Subtipo: "Senderismo/hiking", Tipo: "expediciones", Link: "https://www.instagram.com", fono1: "56944984356",  long: -73.531003510170834, lat: -47.795850132688408 },
    { id: 69, Nombre: "expediciones_01", Sector: "Rincon alto", Subtipo: "Expediciones fluviales/Boat trip", Tipo: "expediciones", Link: "www.instagram.com", fono1: "56944984356", long: -73.53159566655286, lat: -47.795686752708306 },
    { id: 70, Nombre: "expediciones_02", Sector: "Centro", Subtipo: "Expediciones fluviales/Boat trip", Tipo: "expediciones", Link: "https://www.instagram.com", fono1: "56944984356", long: -73.537076904705941, lat: -47.802595070978931 },
    { id: 71, Nombre: "expediciones_03", Sector: "Rincon bajo", Subtipo: "Expediciones fluviales/Boat trip", Tipo: "expediciones", Link: "https://www.instagram.com", fono1: "56944984356",  long: -73.535477947565397, lat: -47.800032772593681 },
    { id: 72, Nombre: "expediciones_04", Sector: "Rincon bajo", Subtipo: "Expediciones fluviales/Boat trip", Tipo: "expediciones", Link: null, fono1: "56944984356", long: -73.530903454064287, lat: -47.797504445689533 },
    { id: 73, Nombre: "expediciones_05", Sector: "Rincón bajo", Subtipo: "Expediciones fluviales/Boat trip", Tipo: "expediciones", Link: "https://www.instagram.com", fono1: "56944984356", long: -73.535543571467301, lat: -47.798566873053261 },

    { id: 74, Nombre: "turismo_rural_01", Sector: "El Quetru", Subtipo: "Turismo rural/Alojamiento", Tipo: "rural", Link: null, fono1: "56944984356",  long: -73.08470955277761, lat: -48.010247350612772 },
    { id: 75, Nombre: "turismo_rural_02", Sector: "Lago Leal", Subtipo: "Turismo rural/Alojamiento", Tipo: "rural", Link: null, fono1: "56944984356", long: -73.122085369944514, lat: -48.025989695211045 },
];

// request a api
app.get('/', (req, res) => {
    res.send('pagina principal api')
});

app.get('/api/operadores/', (req, res) => {
    res.send(operadores);
})

// mostrar
app.get('/api/operadores/:id', (req, res) => {
    const cantante = operadores.find(c => c.id === parseInt(req.params.id));
    if (!cantante) return res.status(404).send('No hay operador con id');
    else res.send(cantante);
})

// agregar - validar long y lat que agregue con .
app.post('/api/operadores', (req, res) => {
    const cantante = {
        id: operadores.length + 1,
        Nombre: req.body.Nombre,
        Subtipo: req.body.Subtipo,
        Sector: req.body.Sector,
        Tipo: req.body.Tipo,
        fono1: parseInt(req.body.fono1),
        long: parseFloat(req.body.long),
        lat: parseFloat(req.body.lat),
    }
    operadores.push(cantante);
    res.send(operadores);
});


// borrar - mejorar el eliminar ya que debe actualizar la api *
app.delete('/api/operadores/:id', (req, res) => {
    const cantante = operadores.find(c => c.id === parseInt(req.params.id));
    if (!cantante) return res.status(404).send('No existe operador');

    const index = operadores.indexOf(cantante);
    operadores.splice(index, 1);
    res.send(cantante);
});

// modificar 

// app.put('/api/productes/:cat/:nom', (req, res)=>{
//     var nouProducte={cat: req.body.cat, 'nom': req.body.nom , 'preu': parseInt(req.body.preu)};
//     var producte = productes.find(a =>a.cat===req.params.cat && a.nom===req.params.nom);
//     var index =productes.indexOf(producte);
//     productes[index]=nouProducte;
// });

// Nombre: req.body.Nombre,
// Subtipo: req.body.Subtipo,
// Sector: req.body.Sector,
// Tipo: req.body.Tipo,
// fono1: parseInt(req.body.fono1),
// long: parseFloat(req.body.long),
// lat: parseFloat(req.body.lat) 

app.put('/api/operadores/:id', (req, res) => {
    const cantante = operadores.find(c => c.id === parseInt(req.params.id));


    const index = operadores.indexOf(cantante);
    const cantantes = {
        id: parseInt(req.params.id),
        Nombre: req.body.Nombre,
        Subtipo: req.body.Subtipo,
        Sector: req.body.Sector,
        Tipo: req.body.Tipo,
        fono1: parseInt(req.body.fono1),
        long: parseFloat(req.body.long),
        lat: parseFloat(req.body.lat) 
    }
    // operadores.push(cantante);
    res.send(operadores[index] = cantantes);

});

// puerto
const port = process.env.port || 4000;
app.listen(port, () => console.log('api up! operadores'));