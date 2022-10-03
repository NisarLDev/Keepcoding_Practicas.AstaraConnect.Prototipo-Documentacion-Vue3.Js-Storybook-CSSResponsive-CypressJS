La elección de utilizar exclusivamente la línea de comandos para la realización de la instalación y configuración del Storybook que se ha construido responde, no solo al hecho de tener experiencia en administración de sistemas de Linux (UNIX en general), si no, principalmente, a la necesidad de poder llevar a cabo un control minucioso y exahustivo del proceso. Esto, además, permite recrear fidedignamente, en caso de error, todos los pasos que se han seguido y, así, poder darle una solución más rápida e inmediata, e, incluso, hacer una instalación por ssh o algún método equivalente, en el caso de que, en un momento dado, hubiera que trasladar la infraestructura y dicha operación sólo se pudiera hacer por línea de comandos.
También se han realizado periódicamente, y durante todo el proceso, copias de seguridad locales en el formato de archivador de tipo .tar y con compresión de archivos de tipo zstd. El formato de compresión elegido está desarrollado por Facebook para la optimización de la compresión de un número elevado de archivos de texto plano con gran cantidad de líneas cada uno. Por estas características se adecúa perfectamente a las necesidades de dicho proyecto. 


Sección inicial de la guía

Instalación del servidor de Storybook:


1 - npx degit chromaui/intro-storybook-vue-template taskbox

2 - cd taskbox

3 - npx yarn

4 -  npx yarn test:unit

5 - npx yarn storybook

6 - npx storybook@latest upgrade No hacer este paso ya que deja el paso ocho en mal estado

7 - npm audit fix Tampoco este paso

8 - npx yarn serve

9 - mkdir -p  src/components/
------------------------------------------------------------------------------------------------
------------------------------------------------------------------------------------------------


Inicio de la creación de componentes  el trabajo sobre los mismos:

Get set up:

10 - cat > src/components/Task.vue y luego control d para guardar el contenido

Below we build out Task’s three test states in the story file:

11 - cat > src/components/Task.stories.js copia de seguridad hasta este punto. Falló después de realizar este comando

12 - No hay  que vaciar el contenido de .storybook/main.js con cat > y luego control c

------------------------------------------------------------------------------------------------
------------------------------------------------------------------------------------------------

Sección Config:

13 - nano .storybook/main.js hay que añadir las líneas de texto que especifican al archivo  y luego control d para guardar el contenido

14 -No hay  que vaciar el contenido de .storybook/preview.js con cat > y luego control c

15 - nano .storybook/preview.js hay que añadir las líneas de texto que especifican al archivo  y luego control d para guardar el contenido

16 - Vaciar el contenido de src/components/Task.vue  con cat > y luego control c


Build out the states:

17 - cat > src/components/Task.vue y luego control d para guardar el contenido

Component built!

Catch accessibility issues

Let's see how it works! Run the following command to install the addon:

18 - Añadir complemento con npx yarn add --dev @storybook/addon-a11y



Then, update your Storybook configuration file (.storybook/main.js) to enable it:

19 - Añadir con nano .storybook/main.js y +   '@storybook/addon-a11y', en .storybook/main.js sección addons: [],


20 - Cambiar el color de fondo para mejorar la visibilidad - color: #a0aec0; + color: #4a5568; src/index.css


------------------------------------------------------------------------------------------------
------------------------------------------------------------------------------------------------


Composición del componente:

Get set up:

21 - cat > src/components/TaskList.vue y luego control d para guardar el contenido

Next, create Tasklist’s test states in the story file:

22 - cat > src/components/TaskList.stories.js y luego control d para guardar el contenido

Build out the states:

23 - Sustituir el contenido con cat > src/components/TaskList.vue y luego control d para guardar el contenido


------------------------------------------------------------------------------------------------
------------------------------------------------------------------------------------------------

Datos:


Container components

24 - yarn add vuex@next --save


25 - Sustituir el contenido con cat > src/store.js y luego control d para guardar el contenido


26 - cat > src/components/PureTaskList.vue y luego control d para guardar el contenido



27 - En este punto se ha comprobado el normal funcionamiento del servidor de Storybook con los comandos: npx yarn test:unit y npx yarn storybook

In src/components/TaskList.vue:

28 - Sustituir el contenido con cat > src/components/TaskList.vue y luego control d para guardar el contenido



29 - Sustituir el contenido con cat > src/components/PureTaskList.stories.js y luego control d para guardar el contenido


-----------------------------------------------------------------------------------------------
-----------------------------------------------------------------------------------------------

Pantallas:


Nested container components

30 - cat > src/components/PureInboxScreen.vue  y luego control d para guardar el contenido
  
  
  
31 - cat > src/components/InboxScreen.vue y luego control d para guardar el contenido
  
32 - Sustituir el contenido con cat > src/main.js y luego control d para guardar el contenido
  
33 - Sustituir el contenido con cat > src/App.vue y luego control d para guardar el contenido


34 - cat >  src/components/PureInboxScreen.stories.js y luego control d para guardar el contenido


Supplying context to stories

35 - Añadir contenido con cat > src/components/PureInboxScreen.stories.js y luego control d para guardar el contenido

Write an interaction test using the play function

36 - Añadir contenido con cat > src/components/PureInboxScreen.stories.js y luego control d para guardar el contenido

Automate tests with the test runner

37 - npx yarn add --dev @storybook/test-runner

38 - Añadir contenido en la sección de scripts del archivo package.json  del proyecto con nano

Prueba final:

39 - Iniciar Storybook con el comando npx yarn storybook

40 - Iniciar la prueba con el comando npx yarn test-storybook --watch

------------------------------------------------------------------------------------------------
------------------------------------------------------------------------------------------------
------------------------------------------------------------------------------------------------
------------------------------------------------------------------------------------------------

