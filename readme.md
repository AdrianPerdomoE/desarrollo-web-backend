# API Restaurante

> API sobre restaurante para el proyecto de desarrollo web.

```
|
|--src
|----controllers
|----routers
|----services
|----index.js
|--.gitignore
```
1. Controllers: Controlar el tráfico de información
2. routers: Declarar las rutas del API
3. services: Servicios que se van a utilizar
4. index.js Inicio del API
5. .gitignore: Ignorar la carga de archivos y/o carpetas al repositorio.

## Estructura que retorna los endpoints
```json
{
    "ok":"Boolean",
    "message":"String",
    "info":"Object"
}
```

# NOTAS
## Comandos 
- `npm init`: Inicializar el proyecto con el package.json
- `npm install NOMBRE`: Instalar las librerías o frameworks en especifico
- `npm install`: Instalar TODAS las librerías o frameworks registradas en el package.json
- `npm run dev` Ejecutar el script que se encuentra en el package.json

## Librerías y frameworks
1. Express: `npm install express --save`  Framework para crear la API
2. nodemon: `npm i nodemon` Herramienta de desarrollo para recargar auto el proyecto


# MODULOS

- Usuarios (CRUD) {id, nombre, correo, universidad, clave}
- Administradores (CRUD) {id, nombre, correo, clave}
- Login () {correo, clave}
- Platos (CRUD) {id, precio, categoria, nombre, vegetariano, descripcion}
- Pedidos  (CRUD) {id, direccion, telefono, medio_pago, platos}
- Seguridad (JWT) { Generacion token }

# Reglas de negocio
- Los usuarios deben de estar registrados para realizar un pedido
- Los usuarios no pueden agregar platos 
-  Los administradores puede gestionar platos



