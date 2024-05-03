"use strict";
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.eliminarSponsor_elegible = exports.actualizarSponsor_elegible = exports.agregarSponsor_elegible = exports.obtenerSponsor_elegibles = exports.obtenerSponsor_elegible = void 0;
const sponsor_elegible_schema_1 = require("../model/sponsor_elegible.schema");
const obtenerSponsor_elegible = (req, res) => {
    sponsor_elegible_schema_1.Sponsor_elegibleSchema.findOne({ id_sponsor_elegible: req.params.id_sponsor_elegible }).then(result => {
        res.send(result);
        res.end();
    })
        .catch(error => console.error(error));
};
exports.obtenerSponsor_elegible = obtenerSponsor_elegible;
const obtenerSponsor_elegibles = (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    sponsor_elegible_schema_1.Sponsor_elegibleSchema.find().then(result => {
        res.send(result);
        res.end();
    })
        .catch(error => console.error(error));
});
exports.obtenerSponsor_elegibles = obtenerSponsor_elegibles;
const agregarSponsor_elegible = (req, res) => {
    const p = new sponsor_elegible_schema_1.Sponsor_elegibleSchema({
        "id_sponsor_elegible": req.body.id_sponsor_elegible,
        "descripcion": req.body.descripcion
    });
    p.save().then(saveResponse => {
        res.send(saveResponse);
        res.end();
    }).catch(error => {
        res.send({ message: 'hubo un error al guardar', error });
        res.end();
    });
};
exports.agregarSponsor_elegible = agregarSponsor_elegible;
const actualizarSponsor_elegible = (req, res) => {
    sponsor_elegible_schema_1.Sponsor_elegibleSchema.updateOne({ id_sponsor_elegible: req.params.id_sponsor_elegible }, {
        id_sponsor_elegible: req.body.id_sponsor_elegible,
        descripcion: req.body.descripcion
    }).then(updateResponse => {
        res.send({ message: 'actualizado', updateResponse });
        res.end();
    }).catch(error => {
        res.send({ message: 'hubo un error al actualizar', error });
        res.end();
    });
};
exports.actualizarSponsor_elegible = actualizarSponsor_elegible;
const eliminarSponsor_elegible = (req, res) => {
    sponsor_elegible_schema_1.Sponsor_elegibleSchema.deleteOne({ id_sponsor_elegible: req.params.id_sponsor_elegible })
        .then(removeResult => {
        res.send({ message: 'eliminado', removeResult });
        res.end();
    });
};
exports.eliminarSponsor_elegible = eliminarSponsor_elegible;
