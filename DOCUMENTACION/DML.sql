--------------------------------------------------------
--  File created - Thursday-April-04-2024   
--------------------------------------------------------
REM INSERTING into C##GITHUB.TBL_ALERTA_SEGURIDAD
SET DEFINE OFF;
Insert into C##GITHUB.TBL_ALERTA_SEGURIDAD (ID_ALERTA,ID_REPOSITORIO,DESCRIPCION,GRAVEDAD,FECHA_CREACION) values (1,1,'Vulnerabilidad XSS','Alta',to_date('10-MAR-24','DD-MON-RR'));
Insert into C##GITHUB.TBL_ALERTA_SEGURIDAD (ID_ALERTA,ID_REPOSITORIO,DESCRIPCION,GRAVEDAD,FECHA_CREACION) values (2,2,'Inyecci�n SQL','Media',to_date('15-MAR-24','DD-MON-RR'));
Insert into C##GITHUB.TBL_ALERTA_SEGURIDAD (ID_ALERTA,ID_REPOSITORIO,DESCRIPCION,GRAVEDAD,FECHA_CREACION) values (3,3,'Exp. datos sensibles','Alta',to_date('20-MAR-24','DD-MON-RR'));
Insert into C##GITHUB.TBL_ALERTA_SEGURIDAD (ID_ALERTA,ID_REPOSITORIO,DESCRIPCION,GRAVEDAD,FECHA_CREACION) values (4,4,'Falta autenticaci�n','Baja',to_date('25-MAR-24','DD-MON-RR'));
Insert into C##GITHUB.TBL_ALERTA_SEGURIDAD (ID_ALERTA,ID_REPOSITORIO,DESCRIPCION,GRAVEDAD,FECHA_CREACION) values (5,5,'Buf overflow vulner.','Alta',to_date('30-MAR-24','DD-MON-RR'));
REM INSERTING into C##GITHUB.TBL_BRANCH
SET DEFINE OFF;
Insert into C##GITHUB.TBL_BRANCH (ID_BRANCH,ID_REPOSITORIO,NOMBRE,FECHA_CREACION) values (1,1,'branch_principal',to_date('10-MAR-24','DD-MON-RR'));
Insert into C##GITHUB.TBL_BRANCH (ID_BRANCH,ID_REPOSITORIO,NOMBRE,FECHA_CREACION) values (2,2,'feature_desarrollo',to_date('15-MAR-24','DD-MON-RR'));
Insert into C##GITHUB.TBL_BRANCH (ID_BRANCH,ID_REPOSITORIO,NOMBRE,FECHA_CREACION) values (3,3,'bugfix',to_date('20-MAR-24','DD-MON-RR'));
Insert into C##GITHUB.TBL_BRANCH (ID_BRANCH,ID_REPOSITORIO,NOMBRE,FECHA_CREACION) values (4,4,'hotfix',to_date('25-MAR-24','DD-MON-RR'));
Insert into C##GITHUB.TBL_BRANCH (ID_BRANCH,ID_REPOSITORIO,NOMBRE,FECHA_CREACION) values (5,5,'main',to_date('30-MAR-24','DD-MON-RR'));
REM INSERTING into C##GITHUB.TBL_COLABORADORES
SET DEFINE OFF;
Insert into C##GITHUB.TBL_COLABORADORES (ID_COLABORADOR,ID_REPOSITORIO,NIVEL_PERMISO,FECHA_UNION,ULTIMA_FECHA_ACCESO,STATUS,COMENTARIOS) values (1,1,'Admin',to_date('10-MAR-24','DD-MON-RR'),to_date('30-MAR-24','DD-MON-RR'),'Activo','Usuario clave en el desarrollo');
Insert into C##GITHUB.TBL_COLABORADORES (ID_COLABORADOR,ID_REPOSITORIO,NIVEL_PERMISO,FECHA_UNION,ULTIMA_FECHA_ACCESO,STATUS,COMENTARIOS) values (2,2,'Escritura',to_date('15-MAR-24','DD-MON-RR'),to_date('25-MAR-24','DD-MON-RR'),'Inactivo','Colaborador en el pasado');
Insert into C##GITHUB.TBL_COLABORADORES (ID_COLABORADOR,ID_REPOSITORIO,NIVEL_PERMISO,FECHA_UNION,ULTIMA_FECHA_ACCESO,STATUS,COMENTARIOS) values (3,3,'Lectura',to_date('20-MAR-24','DD-MON-RR'),to_date('30-MAR-24','DD-MON-RR'),'Activo','Nuevo miembro del equipo');
Insert into C##GITHUB.TBL_COLABORADORES (ID_COLABORADOR,ID_REPOSITORIO,NIVEL_PERMISO,FECHA_UNION,ULTIMA_FECHA_ACCESO,STATUS,COMENTARIOS) values (4,4,'Escritura',to_date('25-MAR-24','DD-MON-RR'),to_date('28-MAR-24','DD-MON-RR'),'Inactivo','Colaborador temporal');
Insert into C##GITHUB.TBL_COLABORADORES (ID_COLABORADOR,ID_REPOSITORIO,NIVEL_PERMISO,FECHA_UNION,ULTIMA_FECHA_ACCESO,STATUS,COMENTARIOS) values (5,5,'Lectura',to_date('30-MAR-24','DD-MON-RR'),to_date('30-MAR-24','DD-MON-RR'),'Activo','Comparte informaci�n relevante');
REM INSERTING into C##GITHUB.TBL_COMENTARIOS
SET DEFINE OFF;
Insert into C##GITHUB.TBL_COMENTARIOS (ID_COMENTARIO,ID_USUARIO,FECHA_COMENTARIO,COMENTARIO) values (1,1,to_date('15-MAR-24','DD-MON-RR'),'�Gran trabajo en este proyecto! Me encanta c�mo has implementado la funcionalidad de b�squeda.');
Insert into C##GITHUB.TBL_COMENTARIOS (ID_COMENTARIO,ID_USUARIO,FECHA_COMENTARIO,COMENTARIO) values (2,2,to_date('20-MAR-24','DD-MON-RR'),'�Alguien puede ayudarme con un problema de rendimiento que he encontrado en este c�digo?');
Insert into C##GITHUB.TBL_COMENTARIOS (ID_COMENTARIO,ID_USUARIO,FECHA_COMENTARIO,COMENTARIO) values (3,3,to_date('25-MAR-24','DD-MON-RR'),'Este proyecto me ha sido de mucha utilidad. �Gracias por compartirlo!');
Insert into C##GITHUB.TBL_COMENTARIOS (ID_COMENTARIO,ID_USUARIO,FECHA_COMENTARIO,COMENTARIO) values (4,4,to_date('01-APR-24','DD-MON-RR'),'�Hay alguna documentaci�n disponible para entender mejor la arquitectura de este proyecto?');
Insert into C##GITHUB.TBL_COMENTARIOS (ID_COMENTARIO,ID_USUARIO,FECHA_COMENTARIO,COMENTARIO) values (5,5,to_date('05-APR-24','DD-MON-RR'),'�Felicitaciones por alcanzar este hito importante en el desarrollo!');
REM INSERTING into C##GITHUB.TBL_COMMITS
SET DEFINE OFF;
Insert into C##GITHUB.TBL_COMMITS (ID_COMMIT,ID_USUARIO,ID_REPOSITORIO,COMMIT_MESSAGE,COMMIT_DATE,CHANGES_COUNT) values (1,1,1,'Correcci�n de errores de sintaxis',to_date('15-MAR-24','DD-MON-RR'),10);
Insert into C##GITHUB.TBL_COMMITS (ID_COMMIT,ID_USUARIO,ID_REPOSITORIO,COMMIT_MESSAGE,COMMIT_DATE,CHANGES_COUNT) values (2,2,2,'Agregada nueva funcionalidad de autenticaci�n',to_date('18-MAR-24','DD-MON-RR'),8);
Insert into C##GITHUB.TBL_COMMITS (ID_COMMIT,ID_USUARIO,ID_REPOSITORIO,COMMIT_MESSAGE,COMMIT_DATE,CHANGES_COUNT) values (3,3,3,'Optimizaci�n de consultas SQL',to_date('20-MAR-24','DD-MON-RR'),5);
Insert into C##GITHUB.TBL_COMMITS (ID_COMMIT,ID_USUARIO,ID_REPOSITORIO,COMMIT_MESSAGE,COMMIT_DATE,CHANGES_COUNT) values (4,4,4,'Refactorizaci�n de c�digo para mejorar rendimiento',to_date('25-MAR-24','DD-MON-RR'),12);
Insert into C##GITHUB.TBL_COMMITS (ID_COMMIT,ID_USUARIO,ID_REPOSITORIO,COMMIT_MESSAGE,COMMIT_DATE,CHANGES_COUNT) values (5,5,5,'Agregadas nuevas pruebas unitarias',to_date('30-MAR-24','DD-MON-RR'),7);
REM INSERTING into C##GITHUB.TBL_CONFIG_ACCESO_REPOSITORIO
SET DEFINE OFF;
Insert into C##GITHUB.TBL_CONFIG_ACCESO_REPOSITORIO (ID_CONFIGURACION,ID_REPOSITORIO,TIPO_ACCESO,FECHA_CREACION) values (1,1,'Privado',to_date('10-MAR-24','DD-MON-RR'));
Insert into C##GITHUB.TBL_CONFIG_ACCESO_REPOSITORIO (ID_CONFIGURACION,ID_REPOSITORIO,TIPO_ACCESO,FECHA_CREACION) values (2,2,'P�blico',to_date('15-MAR-24','DD-MON-RR'));
Insert into C##GITHUB.TBL_CONFIG_ACCESO_REPOSITORIO (ID_CONFIGURACION,ID_REPOSITORIO,TIPO_ACCESO,FECHA_CREACION) values (3,3,'Privado',to_date('20-MAR-24','DD-MON-RR'));
Insert into C##GITHUB.TBL_CONFIG_ACCESO_REPOSITORIO (ID_CONFIGURACION,ID_REPOSITORIO,TIPO_ACCESO,FECHA_CREACION) values (4,4,'P�blico',to_date('25-MAR-24','DD-MON-RR'));
Insert into C##GITHUB.TBL_CONFIG_ACCESO_REPOSITORIO (ID_CONFIGURACION,ID_REPOSITORIO,TIPO_ACCESO,FECHA_CREACION) values (5,5,'Privado',to_date('30-MAR-24','DD-MON-RR'));
REM INSERTING into C##GITHUB.TBL_CONTRIBUIDORES
SET DEFINE OFF;
REM INSERTING into C##GITHUB.TBL_DEPLOYMENT
SET DEFINE OFF;
Insert into C##GITHUB.TBL_DEPLOYMENT (ID_DEPLOY,ID_USUARIO,ID_REPOSITORIO,ENTORNO,DATE_DEPLOY,STATUS) values (1,1,1,'Producci�n',to_date('10-MAR-24','DD-MON-RR'),'Exitoso');
Insert into C##GITHUB.TBL_DEPLOYMENT (ID_DEPLOY,ID_USUARIO,ID_REPOSITORIO,ENTORNO,DATE_DEPLOY,STATUS) values (2,2,2,'Desarrollo',to_date('15-MAR-24','DD-MON-RR'),'Pendiente');
Insert into C##GITHUB.TBL_DEPLOYMENT (ID_DEPLOY,ID_USUARIO,ID_REPOSITORIO,ENTORNO,DATE_DEPLOY,STATUS) values (3,3,3,'Pruebas',to_date('20-MAR-24','DD-MON-RR'),'Fallido');
Insert into C##GITHUB.TBL_DEPLOYMENT (ID_DEPLOY,ID_USUARIO,ID_REPOSITORIO,ENTORNO,DATE_DEPLOY,STATUS) values (4,4,4,'Producci�n',to_date('25-MAR-24','DD-MON-RR'),'Exitoso');
Insert into C##GITHUB.TBL_DEPLOYMENT (ID_DEPLOY,ID_USUARIO,ID_REPOSITORIO,ENTORNO,DATE_DEPLOY,STATUS) values (5,5,5,'Desarrollo',to_date('30-MAR-24','DD-MON-RR'),'Exitoso');
REM INSERTING into C##GITHUB.TBL_DISCUSSION
SET DEFINE OFF;
Insert into C##GITHUB.TBL_DISCUSSION (ID_DISCUSION,ID_USUARIO,ID_REPOSITORIO,TITULO,CONTENIDO,FECHA_CREACION) values (1,1,1,'Duda sobre func','No entiendo c�mo funciona esta funci�n espec�fica del c�digo.',to_date('10-MAR-24','DD-MON-RR'));
Insert into C##GITHUB.TBL_DISCUSSION (ID_DISCUSION,ID_USUARIO,ID_REPOSITORIO,TITULO,CONTENIDO,FECHA_CREACION) values (2,2,2,'Problema rend','�Alguien ha experimentado un rendimiento deficiente en la aplicaci�n?',to_date('15-MAR-24','DD-MON-RR'));
Insert into C##GITHUB.TBL_DISCUSSION (ID_DISCUSION,ID_USUARIO,ID_REPOSITORIO,TITULO,CONTENIDO,FECHA_CREACION) values (3,3,3,'Solicitud col','Estoy buscando colaboradores para trabajar en este proyecto.',to_date('20-MAR-24','DD-MON-RR'));
Insert into C##GITHUB.TBL_DISCUSSION (ID_DISCUSION,ID_USUARIO,ID_REPOSITORIO,TITULO,CONTENIDO,FECHA_CREACION) values (4,4,4,'Update doc','He actualizado la documentaci�n del proyecto, �alguien puede revisarla?',to_date('25-MAR-24','DD-MON-RR'));
Insert into C##GITHUB.TBL_DISCUSSION (ID_DISCUSION,ID_USUARIO,ID_REPOSITORIO,TITULO,CONTENIDO,FECHA_CREACION) values (5,5,5,'Solicitud ret','�Alguien puede darme retroalimentaci�n sobre el dise�o de la interfaz de usuario?',to_date('30-MAR-24','DD-MON-RR'));
REM INSERTING into C##GITHUB.TBL_DISCUSS_COMMENT
SET DEFINE OFF;
Insert into C##GITHUB.TBL_DISCUSS_COMMENT (ID_COMENTARIO,ID_USUARIO,ID_DISCUSION,CONTENIDO,FECHA_CREACION) values (1,1,1,'�Excelente pregunta!',to_date('10-MAR-24','DD-MON-RR'));
Insert into C##GITHUB.TBL_DISCUSS_COMMENT (ID_COMENTARIO,ID_USUARIO,ID_DISCUSION,CONTENIDO,FECHA_CREACION) values (2,2,1,'Creo que deber�as revisar la documentaci�n para obtener m�s detalles.',to_date('12-MAR-24','DD-MON-RR'));
Insert into C##GITHUB.TBL_DISCUSS_COMMENT (ID_COMENTARIO,ID_USUARIO,ID_DISCUSION,CONTENIDO,FECHA_CREACION) values (3,3,2,'He experimentado el mismo problema. �Alguien tiene una soluci�n?',to_date('15-MAR-24','DD-MON-RR'));
Insert into C##GITHUB.TBL_DISCUSS_COMMENT (ID_COMENTARIO,ID_USUARIO,ID_DISCUSION,CONTENIDO,FECHA_CREACION) values (4,4,3,'Me gustar�a unirme como colaborador. �Qu� debo hacer?',to_date('18-MAR-24','DD-MON-RR'));
Insert into C##GITHUB.TBL_DISCUSS_COMMENT (ID_COMENTARIO,ID_USUARIO,ID_DISCUSION,CONTENIDO,FECHA_CREACION) values (5,5,4,'Puedo revisar la documentaci�n por ti y darte comentarios.',to_date('20-MAR-24','DD-MON-RR'));
REM INSERTING into C##GITHUB.TBL_EQUIPO
SET DEFINE OFF;
Insert into C##GITHUB.TBL_EQUIPO (ID_EQUIPO,ID_ORGANIZACION,NOMBRE_EQUIPO,DESCRIPTION,FECHA_CREACION) values (1,1,'Equipo de Desarrollo','Equipo encargado del desarrollo de aplicaciones',to_date('10-MAR-24','DD-MON-RR'));
Insert into C##GITHUB.TBL_EQUIPO (ID_EQUIPO,ID_ORGANIZACION,NOMBRE_EQUIPO,DESCRIPTION,FECHA_CREACION) values (2,1,'Equipo de Soporte','Equipo encargado de brindar soporte t�cnico a los usuarios',to_date('15-MAR-24','DD-MON-RR'));
Insert into C##GITHUB.TBL_EQUIPO (ID_EQUIPO,ID_ORGANIZACION,NOMBRE_EQUIPO,DESCRIPTION,FECHA_CREACION) values (4,3,'Equipo de QA','Equipo de aseguramiento de calidad encargado de realizar pruebas',to_date('25-MAR-24','DD-MON-RR'));
Insert into C##GITHUB.TBL_EQUIPO (ID_EQUIPO,ID_ORGANIZACION,NOMBRE_EQUIPO,DESCRIPTION,FECHA_CREACION) values (3,2,'Equipo An�lisis','Equipo an�lisis de datos y informes',to_date('20-MAR-24','DD-MON-RR'));
Insert into C##GITHUB.TBL_EQUIPO (ID_EQUIPO,ID_ORGANIZACION,NOMBRE_EQUIPO,DESCRIPTION,FECHA_CREACION) values (5,4,'Equipo Doc','Equipo de los procesos y procedimientos',to_date('30-MAR-24','DD-MON-RR'));
REM INSERTING into C##GITHUB.TBL_FILE
SET DEFINE OFF;
Insert into C##GITHUB.TBL_FILE (ID_FILE,ID_REPOSITORIO,NOMBRE_ARCHIVO,EXTENSION,TAMANIO,DATE_LAST_MODIF) values (1,1,'script','js',1024,to_date('15-MAR-24','DD-MON-RR'));
Insert into C##GITHUB.TBL_FILE (ID_FILE,ID_REPOSITORIO,NOMBRE_ARCHIVO,EXTENSION,TAMANIO,DATE_LAST_MODIF) values (2,1,'estilos','css',512,to_date('16-MAR-24','DD-MON-RR'));
Insert into C##GITHUB.TBL_FILE (ID_FILE,ID_REPOSITORIO,NOMBRE_ARCHIVO,EXTENSION,TAMANIO,DATE_LAST_MODIF) values (3,2,'index','html',2048,to_date('17-MAR-24','DD-MON-RR'));
Insert into C##GITHUB.TBL_FILE (ID_FILE,ID_REPOSITORIO,NOMBRE_ARCHIVO,EXTENSION,TAMANIO,DATE_LAST_MODIF) values (4,2,'modelo','py',768,to_date('18-MAR-24','DD-MON-RR'));
Insert into C##GITHUB.TBL_FILE (ID_FILE,ID_REPOSITORIO,NOMBRE_ARCHIVO,EXTENSION,TAMANIO,DATE_LAST_MODIF) values (5,3,'documento','pdf',4096,to_date('19-MAR-24','DD-MON-RR'));
REM INSERTING into C##GITHUB.TBL_FILE_MODIF
SET DEFINE OFF;
Insert into C##GITHUB.TBL_FILE_MODIF (ID_MODIFICATION,ID_COMMIT,FILE_PATH,LINES_ADDED,LINES_DELETED,MODIF_TYPE) values (1,1,'/src/main/java/com/example/App.java','25','10','Modification');
Insert into C##GITHUB.TBL_FILE_MODIF (ID_MODIFICATION,ID_COMMIT,FILE_PATH,LINES_ADDED,LINES_DELETED,MODIF_TYPE) values (2,2,'/src/main/resources/application.properties','5','0','Addition');
Insert into C##GITHUB.TBL_FILE_MODIF (ID_MODIFICATION,ID_COMMIT,FILE_PATH,LINES_ADDED,LINES_DELETED,MODIF_TYPE) values (3,3,'/src/test/java/com/example/AppTest.java','15','5','Modification');
Insert into C##GITHUB.TBL_FILE_MODIF (ID_MODIFICATION,ID_COMMIT,FILE_PATH,LINES_ADDED,LINES_DELETED,MODIF_TYPE) values (4,4,'/src/main/resources/templates/index.html','10','2','Modification');
Insert into C##GITHUB.TBL_FILE_MODIF (ID_MODIFICATION,ID_COMMIT,FILE_PATH,LINES_ADDED,LINES_DELETED,MODIF_TYPE) values (5,5,'/src/main/java/com/example/Utils.java','20','8','Modification');
REM INSERTING into C##GITHUB.TBL_GIST
SET DEFINE OFF;
Insert into C##GITHUB.TBL_GIST (ID_GIST,ID_USUARIO,DESCRIPTION_GIST,FECHA_CREATION) values (1,1,'C�digo para implementar un algoritmo de ordenamiento',to_date('15-MAR-24','DD-MON-RR'));
Insert into C##GITHUB.TBL_GIST (ID_GIST,ID_USUARIO,DESCRIPTION_GIST,FECHA_CREATION) values (2,2,'Fragmento de c�digo para manejo de errores en Python',to_date('20-MAR-24','DD-MON-RR'));
Insert into C##GITHUB.TBL_GIST (ID_GIST,ID_USUARIO,DESCRIPTION_GIST,FECHA_CREATION) values (3,3,'Script de SQL para generar informes de ventas',to_date('25-MAR-24','DD-MON-RR'));
Insert into C##GITHUB.TBL_GIST (ID_GIST,ID_USUARIO,DESCRIPTION_GIST,FECHA_CREATION) values (4,4,'C�digo en JavaScript para validaci�n de formularios',to_date('01-APR-24','DD-MON-RR'));
Insert into C##GITHUB.TBL_GIST (ID_GIST,ID_USUARIO,DESCRIPTION_GIST,FECHA_CREATION) values (5,5,'Funci�n en C para calcular el factorial de un n�mero',to_date('05-APR-24','DD-MON-RR'));
REM INSERTING into C##GITHUB.TBL_ISSUES
SET DEFINE OFF;
Insert into C##GITHUB.TBL_ISSUES (ID_ISSUES,ID_REPOSITORIO,TITULO_ISSUE,DESCRIPCION_ISSUE,ESTADO_ISSUE,FECHA_CREACION_ISSUE,FECHA_CIERRE_ISSUE,ULTIMA_FECHA_ACTUALIZACION) values (1,1,'Problema rendimiento','El sistema experimenta una ralentizaci�n durante la carga de datos','Abierto',to_date('10-MAR-24','DD-MON-RR'),null,to_date('10-MAR-24','DD-MON-RR'));
Insert into C##GITHUB.TBL_ISSUES (ID_ISSUES,ID_REPOSITORIO,TITULO_ISSUE,DESCRIPCION_ISSUE,ESTADO_ISSUE,FECHA_CREACION_ISSUE,FECHA_CIERRE_ISSUE,ULTIMA_FECHA_ACTUALIZACION) values (2,2,'Error autenticaci�n','Los usuarios no pueden iniciar sesi�n en la aplicaci�n','Abierto',to_date('15-MAR-24','DD-MON-RR'),null,to_date('15-MAR-24','DD-MON-RR'));
Insert into C##GITHUB.TBL_ISSUES (ID_ISSUES,ID_REPOSITORIO,TITULO_ISSUE,DESCRIPCION_ISSUE,ESTADO_ISSUE,FECHA_CREACION_ISSUE,FECHA_CIERRE_ISSUE,ULTIMA_FECHA_ACTUALIZACION) values (3,3,'Compatibilidad nav.','El sistema no es compatible con ciertas versiones de navegadores web','Abierto',to_date('20-MAR-24','DD-MON-RR'),null,to_date('20-MAR-24','DD-MON-RR'));
Insert into C##GITHUB.TBL_ISSUES (ID_ISSUES,ID_REPOSITORIO,TITULO_ISSUE,DESCRIPCION_ISSUE,ESTADO_ISSUE,FECHA_CREACION_ISSUE,FECHA_CIERRE_ISSUE,ULTIMA_FECHA_ACTUALIZACION) values (4,4,'Error validaci�n','El sistema no valida correctamente ciertos tipos de datos','Cerrado',to_date('25-MAR-24','DD-MON-RR'),to_date('28-MAR-24','DD-MON-RR'),to_date('28-MAR-24','DD-MON-RR'));
Insert into C##GITHUB.TBL_ISSUES (ID_ISSUES,ID_REPOSITORIO,TITULO_ISSUE,DESCRIPCION_ISSUE,ESTADO_ISSUE,FECHA_CREACION_ISSUE,FECHA_CIERRE_ISSUE,ULTIMA_FECHA_ACTUALIZACION) values (5,5,'Error interfaz','La interfaz de usuario no se ve correctamente en pantallas peque�as','Abierto',to_date('30-MAR-24','DD-MON-RR'),null,to_date('30-MAR-24','DD-MON-RR'));
REM INSERTING into C##GITHUB.TBL_LABELS
SET DEFINE OFF;
Insert into C##GITHUB.TBL_LABELS (ID_LABEL,ID_REPOSITORIO,NOMBRE,DESCRPTION,FECHA_CREACION,FECHA_ULT_ACT,NIVEL_PRIORIDAD,RESTRCCIONES,SCOPE) values (1,1,'bug','Errores identificados en el c�digo',to_date('15-MAR-24','DD-MON-RR'),to_date('20-MAR-24','DD-MON-RR'),'Alta','Solo para errores cr�ticos','P�blico');
REM INSERTING into C##GITHUB.TBL_MIEMBRO_EQUIPO
SET DEFINE OFF;
Insert into C##GITHUB.TBL_MIEMBRO_EQUIPO (ID_MIEMBRO,ID_EQUIPO,ROL) values (1,1,'Desarrollador');
Insert into C##GITHUB.TBL_MIEMBRO_EQUIPO (ID_MIEMBRO,ID_EQUIPO,ROL) values (2,1,'Dise�ador');
Insert into C##GITHUB.TBL_MIEMBRO_EQUIPO (ID_MIEMBRO,ID_EQUIPO,ROL) values (3,2,'Analista');
Insert into C##GITHUB.TBL_MIEMBRO_EQUIPO (ID_MIEMBRO,ID_EQUIPO,ROL) values (4,3,'QA Engineer');
Insert into C##GITHUB.TBL_MIEMBRO_EQUIPO (ID_MIEMBRO,ID_EQUIPO,ROL) values (5,4,'Documentador');
REM INSERTING into C##GITHUB.TBL_MILESTONES
SET DEFINE OFF;
Insert into C##GITHUB.TBL_MILESTONES (ID_MILESTONE,ID_REPOSITORIO,TITTLE_MILESTONE,DESCRIPTION_MILESTONE,DUE_DATE) values (1,1,'Versi�n 1.0','Lanzamiento inicial',to_date('10-MAR-24','DD-MON-RR'));
Insert into C##GITHUB.TBL_MILESTONES (ID_MILESTONE,ID_REPOSITORIO,TITTLE_MILESTONE,DESCRIPTION_MILESTONE,DUE_DATE) values (3,3,'Actualizaci�n','Mejoras en el dise�o',to_date('20-MAR-24','DD-MON-RR'));
Insert into C##GITHUB.TBL_MILESTONES (ID_MILESTONE,ID_REPOSITORIO,TITTLE_MILESTONE,DESCRIPTION_MILESTONE,DUE_DATE) values (4,4,'Correcci�n','Resoluci�n de errores',to_date('25-MAR-24','DD-MON-RR'));
Insert into C##GITHUB.TBL_MILESTONES (ID_MILESTONE,ID_REPOSITORIO,TITTLE_MILESTONE,DESCRIPTION_MILESTONE,DUE_DATE) values (5,5,'Optimizaci�n','Mejoras de rendimiento',to_date('30-MAR-24','DD-MON-RR'));
Insert into C##GITHUB.TBL_MILESTONES (ID_MILESTONE,ID_REPOSITORIO,TITTLE_MILESTONE,DESCRIPTION_MILESTONE,DUE_DATE) values (2,2,'Funcionalidad','Implementaci�n funcionalidad',to_date('15-MAR-24','DD-MON-RR'));
REM INSERTING into C##GITHUB.TBL_ORGANIZACION
SET DEFINE OFF;
Insert into C##GITHUB.TBL_ORGANIZACION (ID_ORGANIZACION,ID_USUARIO,NOMBRE,DESCRIPCION,FECHA_CREACION,LOCACION,WEBSITE,NUMERO_MIEMBROS) values (1,1,'Tech Innovators','Organizaci�n dedicada a la innovaci�n tecnol�gica',to_date('10-MAR-24','DD-MON-RR'),'San Francisco, CA','http://www.techinnovators.com',50);
Insert into C##GITHUB.TBL_ORGANIZACION (ID_ORGANIZACION,ID_USUARIO,NOMBRE,DESCRIPCION,FECHA_CREACION,LOCACION,WEBSITE,NUMERO_MIEMBROS) values (2,2,'Data Analytics Group','Grupo enfocado en an�lisis de datos y ciencia de datos',to_date('15-MAR-24','DD-MON-RR'),'New York, NY','http://www.dataanalyticsgroup.com',30);
Insert into C##GITHUB.TBL_ORGANIZACION (ID_ORGANIZACION,ID_USUARIO,NOMBRE,DESCRIPCION,FECHA_CREACION,LOCACION,WEBSITE,NUMERO_MIEMBROS) values (3,3,'Software Development Club','Club para entusiastas del desarrollo de software',to_date('20-MAR-24','DD-MON-RR'),'Los Angeles, CA','http://www.softwareclub.com',40);
Insert into C##GITHUB.TBL_ORGANIZACION (ID_ORGANIZACION,ID_USUARIO,NOMBRE,DESCRIPCION,FECHA_CREACION,LOCACION,WEBSITE,NUMERO_MIEMBROS) values (4,4,'Open Source Community','Comunidad dedicada a proyectos de c�digo abierto',to_date('25-MAR-24','DD-MON-RR'),'Seattle, WA','http://www.opensourcecommunity.com',60);
Insert into C##GITHUB.TBL_ORGANIZACION (ID_ORGANIZACION,ID_USUARIO,NOMBRE,DESCRIPCION,FECHA_CREACION,LOCACION,WEBSITE,NUMERO_MIEMBROS) values (5,5,'Artificial Intelligence Society','Sociedad centrada en la inteligencia artificial y el aprendizaje autom�tico',to_date('30-MAR-24','DD-MON-RR'),'Boston, MA','http://www.aisociety.com',25);
REM INSERTING into C##GITHUB.TBL_PROYECTOS
SET DEFINE OFF;
Insert into C##GITHUB.TBL_PROYECTOS (ID_PROYECTO,ID_USUARIO,NOMBRE,DESCRIPTION_PROYECTO,FECHA_CREACION) values (1,1,'Proyecto1','Descripci�n del Proyecto 1',to_date('15-MAR-24','DD-MON-RR'));
Insert into C##GITHUB.TBL_PROYECTOS (ID_PROYECTO,ID_USUARIO,NOMBRE,DESCRIPTION_PROYECTO,FECHA_CREACION) values (2,2,'Proyecto2','Descripci�n del Proyecto 2',to_date('20-MAR-24','DD-MON-RR'));
Insert into C##GITHUB.TBL_PROYECTOS (ID_PROYECTO,ID_USUARIO,NOMBRE,DESCRIPTION_PROYECTO,FECHA_CREACION) values (3,3,'Proyecto3','Descripci�n del Proyecto 3',to_date('25-MAR-24','DD-MON-RR'));
Insert into C##GITHUB.TBL_PROYECTOS (ID_PROYECTO,ID_USUARIO,NOMBRE,DESCRIPTION_PROYECTO,FECHA_CREACION) values (4,4,'Proyecto4','Descripci�n del Proyecto 4',to_date('01-APR-24','DD-MON-RR'));
Insert into C##GITHUB.TBL_PROYECTOS (ID_PROYECTO,ID_USUARIO,NOMBRE,DESCRIPTION_PROYECTO,FECHA_CREACION) values (5,5,'Proyecto5','Descripci�n del Proyecto 5',to_date('05-APR-24','DD-MON-RR'));
REM INSERTING into C##GITHUB.TBL_PULL_REQUEST
SET DEFINE OFF;
Insert into C##GITHUB.TBL_PULL_REQUEST (ID_PULL_REQUEST,ID_REPOSITORIO,TITULO,DESCRIPTION,ESTADO,FECHA_CREACION,FECHA_CIERRE,FECHA_MERGE,RAMA_BASE,NUMERO_COMMITS,REVIEW_STATUS) values (1,1,'Implementaci�n de nueva funcionalidad','Se ha implementado una nueva funcionalidad en el sistema','Abierto',to_date('10-MAR-24','DD-MON-RR'),null,null,'main',5,'Pendiente revisi�n');
Insert into C##GITHUB.TBL_PULL_REQUEST (ID_PULL_REQUEST,ID_REPOSITORIO,TITULO,DESCRIPTION,ESTADO,FECHA_CREACION,FECHA_CIERRE,FECHA_MERGE,RAMA_BASE,NUMERO_COMMITS,REVIEW_STATUS) values (2,2,'Correcci�n de errores de seguridad','Se han corregido errores de seguridad identificados','Abierto',to_date('15-MAR-24','DD-MON-RR'),null,null,'main',3,'Pendiente revisi�n');
Insert into C##GITHUB.TBL_PULL_REQUEST (ID_PULL_REQUEST,ID_REPOSITORIO,TITULO,DESCRIPTION,ESTADO,FECHA_CREACION,FECHA_CIERRE,FECHA_MERGE,RAMA_BASE,NUMERO_COMMITS,REVIEW_STATUS) values (3,3,'Mejora de rendimiento en backend','Optimizaci�n del rendimiento del backend para reducir los tiempos de respuesta','Cerrado',to_date('20-MAR-24','DD-MON-RR'),to_date('25-MAR-24','DD-MON-RR'),to_date('25-MAR-24','DD-MON-RR'),'main',7,'Aprobado');
Insert into C##GITHUB.TBL_PULL_REQUEST (ID_PULL_REQUEST,ID_REPOSITORIO,TITULO,DESCRIPTION,ESTADO,FECHA_CREACION,FECHA_CIERRE,FECHA_MERGE,RAMA_BASE,NUMERO_COMMITS,REVIEW_STATUS) values (4,4,'Actualizaci�n de librer�as externas','Se han actualizado las librer�as externas a sus versiones m�s recientes','Cerrado',to_date('25-MAR-24','DD-MON-RR'),to_date('28-MAR-24','DD-MON-RR'),to_date('28-MAR-24','DD-MON-RR'),'main',2,'Aprobado');
Insert into C##GITHUB.TBL_PULL_REQUEST (ID_PULL_REQUEST,ID_REPOSITORIO,TITULO,DESCRIPTION,ESTADO,FECHA_CREACION,FECHA_CIERRE,FECHA_MERGE,RAMA_BASE,NUMERO_COMMITS,REVIEW_STATUS) values (5,5,'A�adir nueva funcionalidad de usuario','Se ha a�adido una nueva funcionalidad para mejorar la experiencia del usuario','Abierto',to_date('30-MAR-24','DD-MON-RR'),null,null,'main',4,'Pendiente revisi�n');
REM INSERTING into C##GITHUB.TBL_REGISTRO_PAQUETES
SET DEFINE OFF;
Insert into C##GITHUB.TBL_REGISTRO_PAQUETES (ID_REGISTRO,ID_REPOSITORIO,NOMBRE_PAQUETE,VERSION_PAQUETE,FECHA_CREACION) values (1,1,'Paquete1','1.0.0',to_date('10-MAR-24','DD-MON-RR'));
Insert into C##GITHUB.TBL_REGISTRO_PAQUETES (ID_REGISTRO,ID_REPOSITORIO,NOMBRE_PAQUETE,VERSION_PAQUETE,FECHA_CREACION) values (2,2,'Paquete2','2.1.0',to_date('15-MAR-24','DD-MON-RR'));
Insert into C##GITHUB.TBL_REGISTRO_PAQUETES (ID_REGISTRO,ID_REPOSITORIO,NOMBRE_PAQUETE,VERSION_PAQUETE,FECHA_CREACION) values (3,3,'Paquete3','3.0.1',to_date('20-MAR-24','DD-MON-RR'));
Insert into C##GITHUB.TBL_REGISTRO_PAQUETES (ID_REGISTRO,ID_REPOSITORIO,NOMBRE_PAQUETE,VERSION_PAQUETE,FECHA_CREACION) values (4,4,'Paquete4','1.2.3',to_date('25-MAR-24','DD-MON-RR'));
Insert into C##GITHUB.TBL_REGISTRO_PAQUETES (ID_REGISTRO,ID_REPOSITORIO,NOMBRE_PAQUETE,VERSION_PAQUETE,FECHA_CREACION) values (5,5,'Paquete5','2.0.0',to_date('30-MAR-24','DD-MON-RR'));
REM INSERTING into C##GITHUB.TBL_REPOSITORIO
SET DEFINE OFF;
Insert into C##GITHUB.TBL_REPOSITORIO (ID_REPOSITORIO,ID_USUARIO,NOMBRE_REPOSITORIO,DESCRIPCION,FECHA_CREACION_REPOSITORIO,FECHA_ULTIMA_ACTUALIZACION,NUMERO_ESTRELLAS,NUMERO_FORKS,LENGUAJE_PRINCIPAL,CANTIDAD_PULLS,CANTIDAD_ISSUES) values (1,1,'Data_Analysis','Proyecto de an�lisis de datos utilizando Python y pandas',to_date('10-MAR-24','DD-MON-RR'),to_date('20-MAR-24','DD-MON-RR'),25,10,'Python',15,5);
Insert into C##GITHUB.TBL_REPOSITORIO (ID_REPOSITORIO,ID_USUARIO,NOMBRE_REPOSITORIO,DESCRIPCION,FECHA_CREACION_REPOSITORIO,FECHA_ULTIMA_ACTUALIZACION,NUMERO_ESTRELLAS,NUMERO_FORKS,LENGUAJE_PRINCIPAL,CANTIDAD_PULLS,CANTIDAD_ISSUES) values (2,2,'Web_Project','Desarrollo de una aplicaci�n web utilizando JavaScript y Node.js',to_date('12-MAR-24','DD-MON-RR'),to_date('22-MAR-24','DD-MON-RR'),18,7,'JavaScript',20,8);
Insert into C##GITHUB.TBL_REPOSITORIO (ID_REPOSITORIO,ID_USUARIO,NOMBRE_REPOSITORIO,DESCRIPCION,FECHA_CREACION_REPOSITORIO,FECHA_ULTIMA_ACTUALIZACION,NUMERO_ESTRELLAS,NUMERO_FORKS,LENGUAJE_PRINCIPAL,CANTIDAD_PULLS,CANTIDAD_ISSUES) values (3,3,'Mobile_App','Desarrollo de una aplicaci�n m�vil para iOS utilizando Swift',to_date('14-MAR-24','DD-MON-RR'),to_date('24-MAR-24','DD-MON-RR'),22,6,'Swift',18,6);
Insert into C##GITHUB.TBL_REPOSITORIO (ID_REPOSITORIO,ID_USUARIO,NOMBRE_REPOSITORIO,DESCRIPCION,FECHA_CREACION_REPOSITORIO,FECHA_ULTIMA_ACTUALIZACION,NUMERO_ESTRELLAS,NUMERO_FORKS,LENGUAJE_PRINCIPAL,CANTIDAD_PULLS,CANTIDAD_ISSUES) values (4,4,'ML_Project','Proyecto de aprendizaje autom�tico utilizando R y TensorFlow',to_date('16-MAR-24','DD-MON-RR'),to_date('26-MAR-24','DD-MON-RR'),30,12,'R',25,10);
Insert into C##GITHUB.TBL_REPOSITORIO (ID_REPOSITORIO,ID_USUARIO,NOMBRE_REPOSITORIO,DESCRIPCION,FECHA_CREACION_REPOSITORIO,FECHA_ULTIMA_ACTUALIZACION,NUMERO_ESTRELLAS,NUMERO_FORKS,LENGUAJE_PRINCIPAL,CANTIDAD_PULLS,CANTIDAD_ISSUES) values (5,5,'Game_Development','Desarrollo de un juego utilizando Unity y C#',to_date('18-MAR-24','DD-MON-RR'),to_date('28-MAR-24','DD-MON-RR'),28,9,'C#',22,7);
REM INSERTING into C##GITHUB.TBL_SECRETOS
SET DEFINE OFF;
Insert into C##GITHUB.TBL_SECRETOS (ID_SECRETS,ID_REPOSITORIO,NOMBRE,VALOR,FECHA_CREACION) values (1,1,'API_KEY','abc123xyz',to_date('10-MAR-24','DD-MON-RR'));
Insert into C##GITHUB.TBL_SECRETOS (ID_SECRETS,ID_REPOSITORIO,NOMBRE,VALOR,FECHA_CREACION) values (2,2,'PASSWORD_DB','securepass',to_date('15-MAR-24','DD-MON-RR'));
Insert into C##GITHUB.TBL_SECRETOS (ID_SECRETS,ID_REPOSITORIO,NOMBRE,VALOR,FECHA_CREACION) values (3,3,'API_TOKEN','token123',to_date('20-MAR-24','DD-MON-RR'));
Insert into C##GITHUB.TBL_SECRETOS (ID_SECRETS,ID_REPOSITORIO,NOMBRE,VALOR,FECHA_CREACION) values (4,4,'SSH_KEY','ssh123',to_date('25-MAR-24','DD-MON-RR'));
Insert into C##GITHUB.TBL_SECRETOS (ID_SECRETS,ID_REPOSITORIO,NOMBRE,VALOR,FECHA_CREACION) values (5,5,'JWT_SECRET','jwtsecret',to_date('30-MAR-24','DD-MON-RR'));
REM INSERTING into C##GITHUB.TBL_SEGUIDORES
SET DEFINE OFF;
Insert into C##GITHUB.TBL_SEGUIDORES (ID_SEGUIDOR,ID_USUARIO,FECHA_SEGUIDO,VISIBILIDAD) values (1,2,to_date('15-MAR-24','DD-MON-RR'),'P�blico');
Insert into C##GITHUB.TBL_SEGUIDORES (ID_SEGUIDOR,ID_USUARIO,FECHA_SEGUIDO,VISIBILIDAD) values (2,3,to_date('20-MAR-24','DD-MON-RR'),'Privado');
Insert into C##GITHUB.TBL_SEGUIDORES (ID_SEGUIDOR,ID_USUARIO,FECHA_SEGUIDO,VISIBILIDAD) values (3,4,to_date('25-MAR-24','DD-MON-RR'),'P�blico');
Insert into C##GITHUB.TBL_SEGUIDORES (ID_SEGUIDOR,ID_USUARIO,FECHA_SEGUIDO,VISIBILIDAD) values (4,5,to_date('01-APR-24','DD-MON-RR'),'Privado');
Insert into C##GITHUB.TBL_SEGUIDORES (ID_SEGUIDOR,ID_USUARIO,FECHA_SEGUIDO,VISIBILIDAD) values (5,1,to_date('05-APR-24','DD-MON-RR'),'P�blico');
REM INSERTING into C##GITHUB.TBL_SPONSOR_ELEGIBLE
SET DEFINE OFF;
Insert into C##GITHUB.TBL_SPONSOR_ELEGIBLE (ID_SPONSOR_ELEGIBLE,DESCRIPCION) values (1,'Patrocinador A');
Insert into C##GITHUB.TBL_SPONSOR_ELEGIBLE (ID_SPONSOR_ELEGIBLE,DESCRIPCION) values (2,'Patrocinador B');
Insert into C##GITHUB.TBL_SPONSOR_ELEGIBLE (ID_SPONSOR_ELEGIBLE,DESCRIPCION) values (3,'Patrocinador C');
Insert into C##GITHUB.TBL_SPONSOR_ELEGIBLE (ID_SPONSOR_ELEGIBLE,DESCRIPCION) values (4,'Patrocinador D');
Insert into C##GITHUB.TBL_SPONSOR_ELEGIBLE (ID_SPONSOR_ELEGIBLE,DESCRIPCION) values (5,'Patrocinador E');
REM INSERTING into C##GITHUB.TBL_SPONSOR_OTROS_USERS
SET DEFINE OFF;
Insert into C##GITHUB.TBL_SPONSOR_OTROS_USERS (ID_SPONSOR_OTROS,ID_PROYECTO,LISTA_SPONSOR) values (1,1,'Patrocinador1, Patrocinador2, Patrocinador3');
Insert into C##GITHUB.TBL_SPONSOR_OTROS_USERS (ID_SPONSOR_OTROS,ID_PROYECTO,LISTA_SPONSOR) values (2,2,'Patrocinador4, Patrocinador5');
Insert into C##GITHUB.TBL_SPONSOR_OTROS_USERS (ID_SPONSOR_OTROS,ID_PROYECTO,LISTA_SPONSOR) values (3,3,'Patrocinador6');
Insert into C##GITHUB.TBL_SPONSOR_OTROS_USERS (ID_SPONSOR_OTROS,ID_PROYECTO,LISTA_SPONSOR) values (4,4,'Patrocinador7, Patrocinador8, Patrocinador9');
Insert into C##GITHUB.TBL_SPONSOR_OTROS_USERS (ID_SPONSOR_OTROS,ID_PROYECTO,LISTA_SPONSOR) values (5,5,'Patrocinador10, Patrocinador11');
REM INSERTING into C##GITHUB.TBL_SPONSOR_PROPIO
SET DEFINE OFF;
Insert into C##GITHUB.TBL_SPONSOR_PROPIO (ID_SPONSOR_PROPIO,ID_SPONSOR_ELEGIBLE,ID_USUARIO) values (1,1,1);
Insert into C##GITHUB.TBL_SPONSOR_PROPIO (ID_SPONSOR_PROPIO,ID_SPONSOR_ELEGIBLE,ID_USUARIO) values (2,2,2);
Insert into C##GITHUB.TBL_SPONSOR_PROPIO (ID_SPONSOR_PROPIO,ID_SPONSOR_ELEGIBLE,ID_USUARIO) values (3,3,3);
Insert into C##GITHUB.TBL_SPONSOR_PROPIO (ID_SPONSOR_PROPIO,ID_SPONSOR_ELEGIBLE,ID_USUARIO) values (4,4,4);
Insert into C##GITHUB.TBL_SPONSOR_PROPIO (ID_SPONSOR_PROPIO,ID_SPONSOR_ELEGIBLE,ID_USUARIO) values (5,5,5);
REM INSERTING into C##GITHUB.TBL_STARS
SET DEFINE OFF;
Insert into C##GITHUB.TBL_STARS (ID_ESTRELLA,ID_USUARIO,ID_REPOSITORIO,FECHA_ESTRELLA) values (1,1,1,to_date('15-MAR-24','DD-MON-RR'));
REM INSERTING into C##GITHUB.TBL_TAGS
SET DEFINE OFF;
Insert into C##GITHUB.TBL_TAGS (ID_TAG,ID_REPOSITORIO,TITULO,CONTENIDO,FECHA_CREACION) values (2,2,'Navegabilidad','Mejoras en la navegabilidad del sitio',to_date('15-MAR-24','DD-MON-RR'));
Insert into C##GITHUB.TBL_TAGS (ID_TAG,ID_REPOSITORIO,TITULO,CONTENIDO,FECHA_CREACION) values (4,4,'Interfaz','Dise�o de interfaz de usuario moderna',to_date('25-MAR-24','DD-MON-RR'));
Insert into C##GITHUB.TBL_TAGS (ID_TAG,ID_REPOSITORIO,TITULO,CONTENIDO,FECHA_CREACION) values (1,1,'Seguridad','Actualizaci�n de pol�ticas',to_date('10-MAR-24','DD-MON-RR'));
Insert into C##GITHUB.TBL_TAGS (ID_TAG,ID_REPOSITORIO,TITULO,CONTENIDO,FECHA_CREACION) values (3,3,'Rendimiento','Optimizaci�n en el backend',to_date('20-MAR-24','DD-MON-RR'));
Insert into C##GITHUB.TBL_TAGS (ID_TAG,ID_REPOSITORIO,TITULO,CONTENIDO,FECHA_CREACION) values (5,5,'Documentaci�n','Actualizaci�n del proyecto',to_date('30-MAR-24','DD-MON-RR'));
REM INSERTING into C##GITHUB.TBL_USUARIOS
SET DEFINE OFF;
Insert into C##GITHUB.TBL_USUARIOS (ID_USUARIO,NOMBRE,APELLIDO,CORREO,CONTRASENIA,FECHA_CREACION,UBICACION,BIOGRAFIA) values (1,'LUNA','MARTINEZ','LUNAMARTINEZ@EXAMPLE.COM','PASS123',to_date('13-MAR-22','DD-MON-RR'),'NICARAGUA','BIO1');
Insert into C##GITHUB.TBL_USUARIOS (ID_USUARIO,NOMBRE,APELLIDO,CORREO,CONTRASENIA,FECHA_CREACION,UBICACION,BIOGRAFIA) values (2,'ALEXIS','JUAREZ','ALJUAREZ@EXAMPLE.COM','PASSWORD',to_date('14-APR-22','DD-MON-RR'),'EL SALVADOR','BIO2');
Insert into C##GITHUB.TBL_USUARIOS (ID_USUARIO,NOMBRE,APELLIDO,CORREO,CONTRASENIA,FECHA_CREACION,UBICACION,BIOGRAFIA) values (3,'HAROLD','COELLO','HACOELLO@EXAMPLE.COM','CONTRASENIA',to_date('10-MAR-23','DD-MON-RR'),'GUATEMALA','BIO3');
Insert into C##GITHUB.TBL_USUARIOS (ID_USUARIO,NOMBRE,APELLIDO,CORREO,CONTRASENIA,FECHA_CREACION,UBICACION,BIOGRAFIA) values (4,'GABRIEL','GOMEZ','GGOMEZ@EXAMPLE.COM','WORD123',to_date('24-MAY-23','DD-MON-RR'),'HONDURAS','BIO4');
Insert into C##GITHUB.TBL_USUARIOS (ID_USUARIO,NOMBRE,APELLIDO,CORREO,CONTRASENIA,FECHA_CREACION,UBICACION,BIOGRAFIA) values (5,'DALAS','BOLANIOS','BOLANIOSDD@EXAMPLE.COM','PASSWORD123',to_date('24-OCT-23','DD-MON-RR'),'COSTA RICA','BIO5');
