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
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = __importDefault(require("express"));
const dotenv_1 = __importDefault(require("dotenv"));
const usuarios_router_1 = __importDefault(require("./routers/usuarios.router"));
const repositorios_router_1 = __importDefault(require("./routers/repositorios.router"));
const gist_router_1 = __importDefault(require("./routers/gist.router"));
const seguidores_router_1 = __importDefault(require("./routers/seguidores.router"));
const comentario_router_1 = __importDefault(require("./routers/comentario.router"));
const proyectos_router_1 = __importDefault(require("./routers/proyectos.router"));
const sponsor_otros_user_router_1 = __importDefault(require("./routers/sponsor_otros_user.router"));
const sponsor_elegible_router_1 = __importDefault(require("./routers/sponsor_elegible.router"));
const sponsor_propio_router_1 = __importDefault(require("./routers/sponsor_propio.router"));
const organizacion_router_1 = __importDefault(require("./routers/organizacion.router"));
const equipo_router_1 = __importDefault(require("./routers/equipo.router"));
const miembro_equipo_router_1 = __importDefault(require("./routers/miembro_equipo.router"));
const labels_router_1 = __importDefault(require("./routers/labels.router"));
const file_router_1 = __importDefault(require("./routers/file.router"));
const milestone_router_1 = __importDefault(require("./routers/milestone.router"));
const tag_router_1 = __importDefault(require("./routers/tag.router"));
const registro_paquetes_router_1 = __importDefault(require("./routers/registro_paquetes.router"));
const alerta_seguridad_router_1 = __importDefault(require("./routers/alerta_seguridad.router"));
const branch_router_1 = __importDefault(require("./routers/branch.router"));
const secretos_router_1 = __importDefault(require("./routers/secretos.router"));
const issues_router_1 = __importDefault(require("./routers/issues.router"));
const config_router_1 = __importDefault(require("./routers/config.router"));
const colaboradores_router_1 = __importDefault(require("./routers/colaboradores.router"));
const pull_request_router_1 = __importDefault(require("./routers/pull_request.router"));
const contribuidores_router_1 = __importDefault(require("./routers/contribuidores.router"));
const deployment_router_1 = __importDefault(require("./routers/deployment.router"));
const discussion_router_1 = __importDefault(require("./routers/discussion.router"));
const discuss_coment_router_1 = __importDefault(require("./routers/discuss_coment.router"));
const stars_router_1 = __importDefault(require("./routers/stars.router"));
const commits_router_1 = __importDefault(require("./routers/commits.router"));
const file_modif_router_1 = __importDefault(require("./routers/file_modif.router"));
//import { Database } from './utils/database';
const database_1 = require("./utils/database");
const cors_1 = __importDefault(require("cors"));
dotenv_1.default.config();
//const database:Database = new Database(); 
const app = (0, express_1.default)();
const port = process.env.PORT;
app.use((0, cors_1.default)());
app.use(express_1.default.json());
app.use(express_1.default.urlencoded({ extended: true }));
/*1*/ app.use('/usuarios', usuarios_router_1.default);
/*2*/ app.use('/repositorios', repositorios_router_1.default);
/*3*/ app.use('/gist', gist_router_1.default);
/*4*/ app.use('/seguidores', seguidores_router_1.default);
/*5*/ app.use('/comentarios', comentario_router_1.default);
/*6*/ app.use('/proyectos', proyectos_router_1.default);
/*7*/ app.use('/sponsor_otros_user', sponsor_otros_user_router_1.default);
/*8*/ app.use('/sponsor_elegible', sponsor_elegible_router_1.default);
/*9*/ app.use('/sponsor_propio', sponsor_propio_router_1.default);
/*10*/ app.use('/organizacion', organizacion_router_1.default);
/*11*/ app.use('/equipo', equipo_router_1.default);
/*12*/ app.use('/miembro_equipo', miembro_equipo_router_1.default);
/*13*/ app.use('/labels', labels_router_1.default);
/*14*/ app.use('/file', file_router_1.default);
/*15*/ app.use('/milestone', milestone_router_1.default);
/*16*/ app.use('/tags', tag_router_1.default);
/*17*/ app.use('/registro_paquetes', registro_paquetes_router_1.default);
/*18*/ app.use('/alerta', alerta_seguridad_router_1.default);
/*19*/ app.use('/branch', branch_router_1.default);
/*20*/ app.use('/secretos', secretos_router_1.default);
/*21*/ app.use('/issues', issues_router_1.default);
/*22*/ app.use('/config', config_router_1.default);
/*23*/ app.use('/colaboradores', colaboradores_router_1.default);
/*24*/ app.use('/pull_request', pull_request_router_1.default);
/*25*/ app.use('/contribuidores', contribuidores_router_1.default);
/*26*/ app.use('/deployment', deployment_router_1.default);
/*27*/ app.use('/discussion', discussion_router_1.default);
/*28*/ app.use('/discuss_coment', discuss_coment_router_1.default);
/*29*/ app.use('/stars', stars_router_1.default);
/*30*/ app.use('/commits', commits_router_1.default);
/*31*/ app.use('/file_modif', file_modif_router_1.default);
app.get('/', (req, res) => {
    res.send('el backend del proyectoo, que onda');
});
app.listen(port, () => __awaiter(void 0, void 0, void 0, function* () {
    console.log(`⚡️servidor levantado http://localhost:${port}`);
    console.log('que onda mi ing');
    yield (0, database_1.connectToDB)();
}));
// Manejar cierre del servidor
/*process.on('SIGINT', async () => {
  await closeDB(); // Cerrar conexión con la base de datos Oracle
  console.log('Servidor Express cerrado y conexión con la base de datos Oracle cerrada.');
  process.exit();
});*/
/*app.listen(port, () => {
  console.log(`⚡️servidor levantado http://localhost:${port}`);
  console.log('que onda mi ing');
});*/
