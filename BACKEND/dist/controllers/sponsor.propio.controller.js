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
exports.eliminarSponsor_propio = exports.actualizarSponsor_propio = exports.agregarSponsor_propio = exports.obtenerSponsor_propios = exports.obtenerSponsor_propio = void 0;
const sponsor_propio_schema_1 = require("../model/sponsor_propio.schema");
const obtenerSponsor_propio = (req, res) => {
    sponsor_propio_schema_1.Sponsor_propioSchema.findOne({ id_sponsor_propio: req.params.id_sponsor_propio }).then(result => {
        res.send(result);
        res.end();
    })
        .catch(error => console.error(error));
};
exports.obtenerSponsor_propio = obtenerSponsor_propio;
const obtenerSponsor_propios = (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    sponsor_propio_schema_1.Sponsor_propioSchema.find().then(result => {
        res.send(result);
        res.end();
    })
        .catch(error => console.error(error));
});
exports.obtenerSponsor_propios = obtenerSponsor_propios;
const agregarSponsor_propio = (req, res) => {
    const p = new sponsor_propio_schema_1.Sponsor_propioSchema({
        "id_sponsor_propio": req.params.id_sponsor_propio,
        "id_sponsor_elegible": req.params.id_sponsor_elegible,
        "id_usuario": req.params.id_usuario
    });
    p.save().then(saveResponse => {
        res.send(saveResponse);
        res.end();
    }).catch(error => {
        res.send({ message: 'hubo un error al guardar', error });
        res.end();
    });
};
exports.agregarSponsor_propio = agregarSponsor_propio;
const actualizarSponsor_propio = (req, res) => {
    sponsor_propio_schema_1.Sponsor_propioSchema.updateOne({ id_sponsor_propio: req.params.id_sponsor_propio }, {
        id_sponsor_propio: req.params.id_sponsor_propio,
        id_sponsor_elegible: req.params.id_sponsor_elegible,
        id_usuario: req.params.id_usuario
    }).then(updateResponse => {
        res.send({ message: 'actualizado', updateResponse });
        res.end();
    }).catch(error => {
        res.send({ message: 'hubo un error al actualizar', error });
        res.end();
    });
};
exports.actualizarSponsor_propio = actualizarSponsor_propio;
const eliminarSponsor_propio = (req, res) => {
    sponsor_propio_schema_1.Sponsor_propioSchema.deleteOne({ id_sponsor_propio: req.params.id_sponsor_propio })
        .then(removeResult => {
        res.send({ message: 'eliminado', removeResult });
        res.end();
    });
};
exports.eliminarSponsor_propio = eliminarSponsor_propio;
