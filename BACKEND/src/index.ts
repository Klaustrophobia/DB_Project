import express, { Express, Request, Response } from 'express';
import dotenv from 'dotenv';

import usuariosRouter from './routers/usuarios.router';
import repositoriosRouter from './routers/repositorios.router';
import gistRouter from './routers/gist.router';
import seguidoresRouter from './routers/seguidores.router';
import comentariosRouter from './routers/comentario.router';
import proyectosRouter from './routers/proyectos.router';
import sponsor_otros_userRouter from './routers/sponsor_otros_user.router';
import sponsor_elegibleRouter  from './routers/sponsor_elegible.router';
import sponsor_propioRouter  from './routers/sponsor_propio.router';
import organizacionRouter from './routers/organizacion.router'; 
import equipoRouter from './routers/equipo.router';
import Miembro_equipoRouter  from './routers/miembro_equipo.router';
import labelsRouter from './routers/labels.router';
import fileRouter from './routers/file.router';
import milestoneRouter from './routers/milestone.router';
import tagRouter from './routers/tag.router';
import registro_paquetesRouter from './routers/registro_paquetes.router';
import alerta_seguridadRouter from './routers/alerta_seguridad.router';
import branchRouter from './routers/branch.router';
import secretosRouter from './routers/secretos.router';
import issuesRouter from './routers/issues.router';
import configRouter from './routers/config.router';
import colaboradoresRouter from './routers/colaboradores.router';
import pull_requestRouter from './routers/pull_request.router';
import contribuidoresRouter from './routers/contribuidores.router';
import deploymentRouter from './routers/deployment.router';
import discussionRouter from './routers/discussion.router';
import discuss_comentRouter from './routers/discuss_coment.router';
import starsRouter from './routers/stars.router';
import commitsRouter from './routers/commits.router';
import file_modifRouter from './routers/file_modif.router';

//import { Database } from './utils/database';
import { connectToDB, closeDB } from './utils/database';
import cors from 'cors';

dotenv.config();

//const database:Database = new Database(); 
const app: Express = express();
const port = process.env.PORT;

app.use(cors());
app.use(express.json());
app.use(express.urlencoded({extended:true})); 


/*1*/app.use('/usuarios', usuariosRouter);
/*2*/app.use('/repositorios', repositoriosRouter);
/*3*/app.use('/gist', gistRouter);
/*4*/app.use('/seguidores', seguidoresRouter);
/*5*/app.use('/comentarios', comentariosRouter);
/*6*/app.use('/proyectos', proyectosRouter);
/*7*/app.use('/sponsor_otros_user', sponsor_otros_userRouter);
/*8*/app.use('/sponsor_elegible', sponsor_elegibleRouter);
/*9*/app.use('/sponsor_propio', sponsor_propioRouter);
/*10*/app.use('/organizacion', organizacionRouter);
/*11*/app.use('/equipo', equipoRouter);
/*12*/app.use('/miembro_equipo', Miembro_equipoRouter);
/*13*/app.use('/labels', labelsRouter);
/*14*/app.use('/file', fileRouter);
/*15*/app.use('/milestone', milestoneRouter);
/*16*/app.use('/tags', tagRouter);
/*17*/app.use('/registro_paquetes', registro_paquetesRouter);
/*18*/app.use('/alerta', alerta_seguridadRouter);
/*19*/app.use('/branch', branchRouter);
/*20*/app.use('/secretos', secretosRouter);
/*21*/app.use('/issues', issuesRouter);
/*22*/app.use('/config', configRouter);
/*23*/app.use('/colaboradores', colaboradoresRouter);
/*24*/app.use('/pull_request', pull_requestRouter);
/*25*/app.use('/contribuidores', contribuidoresRouter);
/*26*/app.use('/deployment', deploymentRouter);
/*27*/app.use('/discussion', discussionRouter);
/*28*/app.use('/discuss_coment', discuss_comentRouter);
/*29*/app.use('/stars', starsRouter);
/*30*/app.use('/commits', commitsRouter);
/*31*/app.use('/file_modif', file_modifRouter);


app.get('/', (req: Request, res: Response) => {
  res.send('el backend del proyectoo, que onda');
});

app.listen(port, async () => {
  console.log(`⚡️servidor levantado http://localhost:${port}`);
  console.log('que onda mi ing');
  await connectToDB();
});

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

