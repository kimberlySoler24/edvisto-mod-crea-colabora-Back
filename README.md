<a name="readme-top"></a>


<!-- PROJECT LOGO -->
<br />
<div align="center">
  <a href="https://github.com/github_username/repo_name">
    <img src="images/logo.png" alt="Logo" width="80" height="80">
  </a>

<h3 align="center">EdVisto Módulo crear y colaborar </h3>

  <p align="center">
    En este repositorio encontrarás el código correspondiente al desarrollo bakend del módulo crear y colaborar, trabajado por el team 1.
  </p>
</div>



<!-- TABLE OF CONTENTS -->
<details>
  <summary>Tabla de contenido</summary>
  <ol>
    <li>
      <a href="#about-the-project">Acerca del proyecto</a>
      <ul>
        <li><a href="#built-with">Construido con</a></li>
      </ul>
    </li>
    <li>
      <a href="#getting-started">Guia de inicial</a>
      <ul>
        <li><a href="#prerequisites">Prerequisitos</a></li>
        <li><a href="#installation">Instalación</a></li>
      </ul>
    </li>
    <li><a href="#usage">Uso</a></li>
    <li><a href="#roadmap">Mapa de Rutas</a></li>
    <li><a href="#contributing">Contribuyentes</a></li>
    <li><a href="#license">Licencia</a></li>
    <li><a href="#contact">Contactos</a></li>
    <li><a href="#acknowledgments">Agradecimientos</a></li>
  </ol>
</details>



<!-- ABOUT THE PROJECT -->
## Acerca del Proyecto

En el equipo TEAM 1 "Módulo de Crear y Colaborar", tuvimos la fortuna de poder trabajar mediante el uso de la API KEY de OPENAI que nos suministra en un periodo de tres meses de forma gratuita, para generar respuestas e historias con fines educativos para los niños; con el fin de concientizar sobre los fenómenos naturales que se presentan en nuestro planeta por diferentes factores. Adicionalmente, encontrarán el uso de API REST para permitir conectar los componentes creados en el Frontend con el respectivo backend.

<p align="right">(<a href="#readme-top">volver arriba</a>)</p>


### Construido con

* ![Node.js](https://nodejs.org/en)
* ![Expres]https://expressjs.com/]
* ![Dotenv][https://www.npmjs.com/package/dotenv]
* ![Nodemon][https://www.npmjs.com/package/nodemon]
* ![OpenAI][https://www.npmjs.com/package/openai]
* ![MongoDB][https://www.mongodb.com/es]

<p align="right">(<a href="#readme-top">volver arriba</a>)</p>



<!-- GETTING STARTED -->
## Guia de inicial

Para poder usar este repositorio local se recomienda hacer los siguientes pasos:

### Prerequisitos

1. cree una copia del repositorio en su repositorio, para ello debe ingresar a este repositorio y dar clic en el botón que dice "FORK".
2. Una vez teniendo la copia en el repositorio de su github, clone el proyecto en su repositorio local con `git clone <link copia del repositorio>`.
3. Abra la carpeta donde clonó el repositorio y en el espacio donde describe la ruta de la carpeta escriba "cmd"
4. A continuación se abrirá la consola de windows, escribir en la consola "code ." 
5. El proyecto se abrirá en visual studio code, con todos los archivos del directorio.
6. dirijase al archivo principal denominado "app.js"
7. con "CTRL + J" abra la terminal en visual studio code e instale los siguientes paquetes, los cuales le permitirán el uso adecuado del proyecto.


### Instalacion

Para que el proyecto funcione, es importante validar todas las versiones de las dependencias usadas en el proyecto e instalarlas:
1. Ingresar al archivo package.json donde describe la información de las versiones usadas sobre las dependencias del proyecto.
2. Instalar paquete express
   ```sh
   npm install express@4.18.2
   ```
3. Instalar dependencia dotenv
   ```sh
   npm install dotenv@16.3.1
   ```
4. Instalar dependencia mongoose
   ```sh
   npm install mongoose@8.0.0
   ```
5. Instalar dependencia nodemon
   ```sh
   npm install nodemon@3.0.1
   ```
6. Instalar dependencia openai
   ```sh
   npm install openai@4.14.2
   ```
7. Crear un archivo .env para guardar las variables de entorno de uso privado para implementación de la API KEY de openAI y la base de datos de mongoDB :
creación variables de api key
```sh
# VARIABLES DE AMBIENTE PARA INTELIGENCIA ARTIFICIAL
OPENAI_API_KEY= "pegar el link de la API KEY creada en openAI"
ORGANIZATION_OPEN_AI= "pegar el link de la organización"

# VARIABLES PARA USO DE BASE DE DATOS EN MONGO DB
MONGODB_URI= "copiar ruta de base de datos creada en mongoDB donde se almacenará toda la información respectiva."
```

<p align="right">(<a href="#readme-top">volver arriba</a>)</p>



<!-- USAGE EXAMPLES -->
## Usos

Utilice este espacio para mostrar ejemplos útiles de cómo se puede utilizar un proyecto. Las capturas de pantalla, ejemplos de código y demostraciones adicionales funcionan bien en este espacio. También puede vincular a más recursos.

_Para obtener más ejemplos, consulte la [Documentation](https://example.com)

<p align="right">(<a href="#readme-top">volver arriba</a>)</p>



<!-- ROADMAP -->
## Mapa de Ruta

- [ ] Feature 1
- [ ] Feature 2
- [ ] Feature 3
    - [ ] Nested Feature

Consulte los  [open issues](https://github.com/github_username/repo_name/issues) para obtener una lista completa de las funciones propuestas (y problemas conocidos).

<p align="right">(<a href="#readme-top">volver arriba</a>)</p>



<!-- CONTRIBUTING -->
## Contribuidores

Las contribuciones son las que hacen de la comunidad de código abierto un lugar increíble para aprender, inspirar y crear. Cualquier contribución que hagas será **muy apreciada**.

Si tiene alguna sugerencia que pueda mejorar esto, bifurque el repositorio y cree una solicitud de extracción. También puedes simplemente abrir un problema con la etiqueta "mejora".
¡No olvides darle una estrella al proyecto! ¡Gracias de nuevo!

1. Fork the Project
2. Create your Feature Branch (`git checkout -b feature/AmazingFeature`)
3. Commit your Changes (`git commit -m 'Add some AmazingFeature'`)
4. Push to the Branch (`git push origin feature/AmazingFeature`)
5. Open a Pull Request

<p align="right">(<a href="#readme-top">volver arriba</a>)</p>



<!-- LICENSE -->
## Licencia

Distributed under the MIT License. See `LICENSE.txt` for more information.

<p align="right">(<a href="#readme-top">volver arriba</a>)</p>



<!-- CONTACT -->
## Contactos

Su nombre - [@twitter_handle](https://twitter.com/twitter_handle) - email@email_client.com

Enlace del proyecto: [https://github.com/github_username/repo_name](https://github.com/github_username/repo_name)

<p align="right">(<a href="#readme-top">volver arriba</a>)</p>



<!-- ACKNOWLEDGMENTS -->
## Agradecimientos

* []()
* []()
* []()

<p align="right">(<a href="#readme-top">volver arriba</a>)</p>



<!-- MARKDOWN LINKS & IMAGES -->
<!-- https://www.markdownguide.org/basic-syntax/#reference-style-links -->
[contributors-shield]: https://img.shields.io/github/contributors/github_username/repo_name.svg?style=for-the-badge
[contributors-url]: https://github.com/github_username/repo_name/graphs/contributors
[forks-shield]: https://img.shields.io/github/forks/github_username/repo_name.svg?style=for-the-badge
[forks-url]: https://github.com/github_username/repo_name/network/members
[stars-shield]: https://img.shields.io/github/stars/github_username/repo_name.svg?style=for-the-badge
[stars-url]: https://github.com/github_username/repo_name/stargazers
[issues-shield]: https://img.shields.io/github/issues/github_username/repo_name.svg?style=for-the-badge
[issues-url]: https://github.com/github_username/repo_name/issues
[license-shield]: https://img.shields.io/github/license/github_username/repo_name.svg?style=for-the-badge
[license-url]: https://github.com/github_username/repo_name/blob/master/LICENSE.txt
[linkedin-shield]: https://img.shields.io/badge/-LinkedIn-black.svg?style=for-the-badge&logo=linkedin&colorB=555
[linkedin-url]: https://linkedin.com/in/linkedin_username
[product-screenshot]: images/screenshot.png
[Next.js]: https://img.shields.io/badge/next.js-000000?style=for-the-badge&logo=nextdotjs&logoColor=white
[Next-url]: https://nextjs.org/
[React.js]: https://img.shields.io/badge/React-20232A?style=for-the-badge&logo=react&logoColor=61DAFB
[React-url]: https://reactjs.org/
[Vue.js]: https://img.shields.io/badge/Vue.js-35495E?style=for-the-badge&logo=vuedotjs&logoColor=4FC08D
[Vue-url]: https://vuejs.org/
[Angular.io]: https://img.shields.io/badge/Angular-DD0031?style=for-the-badge&logo=angular&logoColor=white
[Angular-url]: https://angular.io/
[Svelte.dev]: https://img.shields.io/badge/Svelte-4A4A55?style=for-the-badge&logo=svelte&logoColor=FF3E00
[Svelte-url]: https://svelte.dev/
[Laravel.com]: https://img.shields.io/badge/Laravel-FF2D20?style=for-the-badge&logo=laravel&logoColor=white
[Laravel-url]: https://laravel.com
[Bootstrap.com]: https://img.shields.io/badge/Bootstrap-563D7C?style=for-the-badge&logo=bootstrap&logoColor=white
[Bootstrap-url]: https://getbootstrap.com
[JQuery.com]: https://img.shields.io/badge/jQuery-0769AD?style=for-the-badge&logo=jquery&logoColor=white
[JQuery-url]: https://jquery.com 



