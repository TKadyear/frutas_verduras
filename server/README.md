# Frutas y verduras backend
Esto es solo un ejemplo de cómo puede ser un readme de un backend.
## Cómo ejecutar

### Requisitos 
Tener node instalado y Docker para la base de datos.

#### MySql
Estando dentro de la carpeta de `server`

Construye la imagen de la base de datos:
```
docker build -t frutas-mysql .
```
NOTA: Si se quiere cambiar la contraseña y otras variables de la base de datos mirar: https://docs.docker.com/build/building/variables/#env-usage-example


Ejecuta la imagen de la base de datos:
```
docker run --rm -it -p 8080:3306 --name frutas-mysql-db frutas-mysql
```

#### Servidor

Antes de nada, create un archivo `.env`, basándote en el ejemplo de `.env.template`.

Comandos:

```sh
# Compila Typescript en javascript
npm run build
# Manten un "watcher" para que los cambios en  Typescript pasen a javascript 
npm run build:watch
# Ejecuta el servidor en  javascript
npm run serve
```
