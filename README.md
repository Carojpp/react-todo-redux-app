# To-Do List en React con Redux

Este es un ejemplo básico de cómo crear una aplicación To-Do List en React utilizando Redux para gestionar el estado de las tareas. A continuación, se detallan los pasos necesarios para configurar este proyecto.

## Pasos para configurar el proyecto

### 1. Instalación de dependencias

Asegúrate de tener Node.js y npm instalados. Luego, crea un proyecto de React con Create React App y agrega las dependencias necesarias:

```bash
npx create-react-app todo-list-redux
cd todo-list-redux
npm install redux react-redux 

```
```bash
my-todo-app/
│
├── src/
│   ├── App.js
│   ├── components/
│   │   ├── Todo.js
│   │   └── TodoList.js
│   ├── redux/
│   │   ├── actions.js
│   │   ├── reducers.js
│   │   └── types.js
│   └── styles.js
│
├── public/
│   ├── index.html
│   └── ...
├── node_modules/
│
├── package.json
├── package-lock.json
└── README.md
```

Ahora, una breve explicación de cada uno de los archivos y carpetas:

src/: Esta carpeta contiene el código fuente principal de tu aplicación.

App.js: Este es el componente principal de tu aplicación React. Aquí se encuentra la lógica principal y la estructura general de la aplicación.

components/: Una carpeta que almacena componentes reutilizables.

Todo.js: Este componente representa una tarea individual en tu lista de tareas. Aquí se muestra el nombre, la descripción y el estado (completado o no) de una tarea.

TodoList.js: Este componente muestra la lista completa de tareas. Puede representar la lista de tareas y controlar la interacción del usuario con ellas.

redux/: Una carpeta que contiene archivos relacionados con Redux, una biblioteca de manejo de estado.

actions.js: En este archivo, definirías las acciones de Redux que pueden ser desencadenadas por eventos en tu aplicación. Por ejemplo, agregar una tarea o marcar una tarea como completada.

reducers.js: Aquí se definen los reducers de Redux, que especifican cómo cambia el estado de la aplicación en respuesta a las acciones. Puedes tener múltiples reducers si es necesario.

types.js: Define tipos de acción que se utilizan en los archivos de acciones y reducers para asegurarse de que las acciones se escriban correctamente y se manejen de manera uniforme.

styles.js: Este archivo puede contener estilos para tus componentes utilizando Styled Components u otra biblioteca de estilos. Puedes definir estilos personalizados para mejorar la apariencia de tu aplicación.

public/: Esta carpeta contiene archivos públicos, como el archivo HTML principal de tu aplicación.

index.html: Este archivo HTML es la página principal de tu aplicación React. Contiene el punto de entrada de tu aplicación y enlaza los scripts necesarios.
node_modules/: Esta carpeta almacena las dependencias instaladas de Node.js. No necesitas administrarla manualmente; npm o yarn la gestionarán automáticamente al instalar paquetes.

package.json y package-lock.json: Estos son archivos de configuración de npm que contienen información sobre las dependencias y scripts del proyecto. package.json también incluye información sobre el nombre del proyecto, la versión y las dependencias.