
CREATE USER C##GITHUB
IDENTIFIED BY "oracle"
DEFAULT TABLESPACE USERS
TEMPORARY TABLESPACE TEMP;
--asignar cuota ilimitada al tablespace por defecto  
ALTER USER C##GITHUB QUOTA UNLIMITED ON USERS;

--Asignar privilegios basicos
GRANT create session TO C##GITHUB;
GRANT create table TO C##GITHUB;
GRANT create view TO C##GITHUB;
GRANT create any trigger TO C##GITHUB;
GRANT create any procedure TO C##GITHUB;
GRANT create sequence TO C##GITHUB;
GRANT create synonym TO C##GITHUB;