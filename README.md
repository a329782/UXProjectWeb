# Sistema de Administración de Ligas de Fútbol (Repositorio Web)
Este repositorio fue creado para el proyecto semestral de la materia de User Experience donde simulamos un ambiente de trabajo real, utilizando la metodología agil SCRUM, trabajando con un cliente "real" para realizar una aplicación de software para su negocio. Nuestro equipo estaba conformado de un Project Owner, SCRUM Master y un Software Architect. Una vez contactamos con el cliente y establecimos medios de comunicación, empezamos a trabajar en el proyecto.

El repositorio para la parte movil puede encontrarse en la siguiente liga: https://github.com/a329782/UXProjectApp .


## Descripción del proyecto
En cortas palabras, el cliente buscaba modernizar la forma en la que administra su negocio de canchas y ligas de futbol. La forma en la que el cliente administraba su negocio era utilizando lapiz y papel para inscribir jugadores y capitanes, organizar juegos entre equipos, y mantener un sistema de ligas y equipos, teniendo en cuenta que existian multiples sedes, o canchas de futbol, en diferentes locaciones, cada una con sus propias ligas y equipos. Ademas de eso, el cliente también pidió una aplicación movil para los jugadores. En la aplicación los jugadores podrían ver sus estadisticas, sus juegos recientes y futuros, y ademas tener la funcionalidad para confirmar su geolocalización en la cancha.


## Primeros pasos
Comenzamos conversando con el cliente, estableciendo una relación. Lo primero fue definir qué es lo que el cliente quería y cómo lo quería. Y comenzamos a trabajar en un [documento de especificación de requerimientos de software](https://docs.google.com/document/d/e/2PACX-1vQb-tU3OazAzk4_izS9hY0dVeHTkuQtvMWsc3ZOLrXwnvwcKtr94l-94VT-voqM7tSXKgIKCPxVRYW-/pub) (SRS):

![imagen](https://user-images.githubusercontent.com/10736003/217407121-d69eea2c-ed61-43de-a3b5-abda33b5c45e.png)

Una vez que establecimos los requerimientos y reglas de negocio, comenzamos a definir los detalles y tecnologias del proyecto en un [documento de arquitectura de software](https://docs.google.com/document/d/e/2PACX-1vSm7SUUf1KKOgEWXVCt7V8oElmXqQfvKU7N6AQp9EZspVZgifeGGYnFHaXWsUMQ-p78Yo22Srvw9mfj/pub). Decidimos optar por una aplicación web basada en la nube con un patrón de diseño MVC:

![imagen](https://user-images.githubusercontent.com/10736003/217407246-b7f63b2b-486d-479b-a3ae-24b6f82fce87.png)


## Prototipos
Con los requerimientos y la arquitectura definidos, solicitamos al cliente logos e imagenes de su negocio, así como la paleta de colores de su elección y pusimos manos a la obra en realizar prototipos de lo que sería la aplicación movil para jugadores y la pagina web para los administradores de las canchas. Empezamos con prototipos simples tipo wireframe y fuimos evolucionando hasta llegar a los diseños finales y aprobados por el cliente:

![imagen](https://user-images.githubusercontent.com/10736003/217407461-f6d04b3d-c88e-4266-81f0-5663bb8a331a.png)

![imagen](https://user-images.githubusercontent.com/10736003/217407607-b5fb6c2b-fad3-4eca-a55f-03c62b1bb5a0.png)


## Resultados del proyecto
Desafortunadamente, para el final del semestre no tuvimos tiempo de implementar toda la aplicación web. Nos quedamos a la mitad de la implementación del front-end de la parte web y movil (instrucciones de como instalar y correr demos mas abajo en el readme), y no pudimos empezar la parte del back-end.


## Conclusiones
Podemos decir sin lugar a dudas que esta experiencia impactó nuestro punto de vista sobre lo que es trabajar con un cliente y un equipo en un ambiente de desarrollo. Si bien, técnicamente, nuestro proyecto fue un fracaso al no haber cumplido con la fecha limite, nos llevamos una muy buena experiencia de aprendizaje y hasta mejoración personal; utilizamos nuevas tecnologías que no habiamos usado antes, utilizamos la metodología SCRUM, aprendimos sobre patrones de diseño, sesgos cognitivos, responsive design, entre otros conceptos mas.


## Requerimientos del proyecto
Para correr el proyecto es esencial instalar los siguientes programas y actualizaciones:

### **Git y Node JS/NPM**
[Esta guía](https://www.freecodecamp.org/news/how-to-install-node-js-on-ubuntu-and-update-npm-to-the-latest-version/) tiene lo necesario para instalar Node y actualizar NPM, y esta otra [guía oficial de github](https://github.com/git-guides/install-git) contiene lo necesario para instalar git.

### **Clonando el repositorio**
Empezamos por clonar el repositorio actual, podemos utilizar el comando:
```
git clone https://github.com/a329782/UXProjectWeb.git
```

### **Ionic CLI**
```
npm install -g @ionic/cli
```

### **Dependencias del proyecto**
Debido a la forma en la que configuramos el repositorio, se tiene que navegar a la carpeta interna UXProjectWeb:
```
cd ./UXProjectWeb
```
Y una vez ahi podremos instalar las dependencias con:
```
npm install
```


## Corriendo pruebas
Para correr el proyecto simplemente podemos escribir el comando:
```
ionic serve
```
Y se iniciará una pagina en la dirección http://localhost:8100/login y simplemente podemos cliquear el botón de iniciar sesión para continuar sin necesidad de introducir credenciales.

![imagen](https://user-images.githubusercontent.com/10736003/217407692-b44826dc-392a-466a-8026-b662e73c355c.png)

![imagen](https://user-images.githubusercontent.com/10736003/217407796-cdee73e4-374d-4fdc-a26b-7fa7b785cd20.png)


## Construido con
* Visual Studio Code - Editor de texto principal
* xCode - Editor de texto para IOS
* Figma - Herramienta para prototipado
* Ionic - Principal framework de programación
* Angular - Framework secundario


## Autores
* **Humberto Navarro** - [Repositorio](https://github.com/fanpug)
* **Alejandro Díaz** - [Repositorio](https://github.com/a329782)
* **Enrique Fernandez** - [Repositorio](https://github.com/lfernandez17)


## Licencia
El proyecto tiene libre licencia o algo asi ;)


## Agradecimientos
Queremos agradecer nuestro profesor Adrián Alarcón y su colega Rene Rodriguez por brindarnos su tiempo y experiencia para este ejercicio.

Gracias a las personas de PurpleBooth por su plantilla/referencia de como debe ser el [formato de un readme](https://gist.github.com/PurpleBooth/109311bb0361f32d87a2).
