const express = require('express');
const router = express.Router();
const routerApi = require('.');
const facturaSchema = require('../models/factura.model');

//Filtro para buscar facturas a través de la referencia 

router.get('/:ref', (req, res) => {
    const { refid } = req.params;
    facturaSchema.find({ 'Line.ExpenseDetail.Customer.Ref.value': refid })
        .then((data) => res.json(data))
        .catch((error) => res.json({ message: error }));
});

//Métodos CRUD 

router.get('/all', (req, res) => {
    facturaSchema.find()
        .then((data) => res.json(data))
        .catch((error) => res.json({ message: error }));
});

router.post('/create', (req, res) => {
    const factura = facturaSchema(req.body);
    factura.save()
        .then((data) => res.json(data))
        .catch((error) => res.json({ message: error }));

});

// router.put('/edit/:ref', (req, res) => {
//     const { ref } = req.params;
//     const {
//         DueDate,
//         DNI,
//         Status,
//         Line = {
//             Amount,
//             DetailType,
//             ExpenseDetail = { Customer = { value, name, Ref = { value, name } } },
//             Account = { value, name },
//             LineStatus = { value, name }
//         },
//         Vendor = { value, name },
//         TotalAmt,
//     } = req.body;
//     facturaSchema
//         .updateOne(
//             { _id: ref },
//             { $set: { DueDate, DNI, Status, Line, Vendor, TotalAmt } }
//         )
//         .then((data) => res.json(data))
//         .catch((error) => res.json({ message: error }));
// });

router.delete('/delete/:ref', (req, res) => {
    const { ref } = req.params;
    facturaSchema
        .deleteOne({ _id: ref })
        .then((data) => res.json(data))
        .catch((error) => res.json({ message: error }));
});

module.exports = router; 