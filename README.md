TODO UPDATE WHIT THE ACTUAL APP

# CosasApp

El fin de este proyecto al menos en mi caso es aprender a usar un framework para crear una app multiplataforma como es IONIC. Este framework a su vez usa otro framework por debajo como Angular, aunque es posible usarlo con otras tecnologias. Asi que mis 3 objetivos son :

1. realizar la app solicitada en el ejercicio
2. salir de mi zona de confort y aprender algo nuevo, al menos ver como funciona
3. valorar la experiencia con las diferentes tecnologias y ver que me aporta


En este proyecto vamos a realizar una aplicación que nos guarde nuestras cosas, por que ya hay aplicaciones muy especificas que guardan cosas muy especificas y esta sera de proposito 🦸 ULTRA GENERAL 🦸




## Comenzando 🚀

Como ves el repositorio tiene 3 carpetas

- frontend --> donde estara la app hecha con ionic
- backend --> aqui montaremos nuestra api-Rest con node
- postman --> archivos para que importes tantos el enviroment como la coleccion para probar en tu loca


### Pre-requisitos 📋

para tener funcional el proyecto debes tener en cuenta lo siguiente

1. instalar node en su version LTS
2. instalar dependencias de cada uno de los proyectos
3. configurar variables de entorno para el back
4. tener preparada tu base de datos, esta parte se define mejor en el readme del back
5. importar la coleccion y variables de postman


### Instalación 🔧

1. Instalar node en su version LTS

esto dependera de en que sistema operativo estes trabajando asi que te dejo el enlace aqui abajo

## [👉 NODE 👈](https://nodejs.org/es/)

---

2. instalar dependencias

si no has trabajado nunca con node no te preocupes. Las dependencias en cualquier proyecto es como su nombre indica una entidad necesaria para que el proyecto funcione.

en node estas dependencias se llaman modulos y los modulos no es mas que un codigo que cumple una funcion determinada.

para instalar esos modulos lo que necesitamos es instalarlos y para esto cuando instalamos node tambien istalamos npm, que para simplificar es un herramienta para gestionar modulos de node. [Si quieres mas info miralo 👀 aqui 👀](https://docs.npmjs.com/about-npm)

❗ Al lio que lo de arriba es una chapa, mira el ejemplo abajo

```bash
# primero colocate en la raiz del proyecto y luego lanza el siguiente comando

~ npm install

# esto instalara todas las dependcias que estan el package.json de la raiz del proyecto

```

ahora bien hay peculiaridades mira las del :

## [back](./backend_tibur/readme.md)
## [front](./front_tibur/cosas/readme.md)


## Pruebas de la api 🧪

te dejo 2 caminos pero recuerda la base de datos de primera esta pelada asi que te recomiendo que primero lances un par de POST o en la coleccion `createCosa`

- primera opcion, pincha aqui cuando tengas el back levantado. Luego podras pinchar sobre `view in collection` y te abrira una pestaña.
[![Run in Postman](https://run.pstmn.io/button.svg)](https://app.getpostman.com/run-collection/17204381-45f06cbc-a9a4-454e-ba3a-3f50059bc66c?action=collection%2Ffork&collection-url=entityId%3D17204381-45f06cbc-a9a4-454e-ba3a-3f50059bc66c%26entityType%3Dcollection%26workspaceId%3Da72a82a2-694e-44b1-b16f-f33fab87ebdb#?env%5BCosasEnviroment%5D=W3sia2V5IjoiQkFTSUNfUk9PVCIsInZhbHVlIjoiaHR0cDovL2xvY2FsaG9zdDo4MDgwL2FwaS9jb3NhIiwiZW5hYmxlZCI6dHJ1ZSwidHlwZSI6ImRlZmF1bHQiLCJzZXNzaW9uVmFsdWUiOiJodHRwOi8vbG9jYWxob3N0OjgwODAvYXBpL2Nvc2EiLCJzZXNzaW9uSW5kZXgiOjB9XQ==)

- segunda opcion

1. importa la coleccion y variables de postmant que estan en la carpeta postman
2. lanza los endpoint, todos estan preparados para simplemente lanzarlos




## Construido con 🛠️

### front
- IONIC
- angular

### back
- express
- sequelize
- cors
- dotenv

## Autor ✒️

Adriel Arocha Oronoz

---
⌨️ con 💜 por [Adriel87](https://github.com/adriel87) 


