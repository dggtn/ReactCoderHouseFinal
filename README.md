# Proyecto Final - E-Commerce en React

## Descripción del Proyecto

Este es un proyecto de e-commerce desarrollado con **React**, que simula una tienda online donde los usuarios pueden comprar productos. El proyecto incluye un catálogo de productos, un carrito de compras interactivo y una página de detalles del producto. Es un ejercicio final que pone en práctica conceptos como **estado global con Context API**, **componentización**, y **manejo de rutas**.

## Componentes Principales

El proyecto está compuesto por los siguientes componentes esenciales:

- **Navbar**: Barra de navegación con enlaces a las secciones principales de la tienda.
- **Catálogo**: Muestra una lista de productos disponibles para la venta.
- **Detalle de Producto**: Permite ver más información detallada sobre cada producto.
- **CartContext**: Contexto que maneja el estado del carrito de compras.
- **CartWidget**: Muestra el ícono del carrito con el número de productos agregados.

Los siguientes componentes se desarrollaron siguiendo la estructura recomendada en la consigna:

- **NavBar**
- **CartWidget**
- **ItemListContainer**
- **ItemList**
- **ItemDetailContainer**
- **ItemDetail**
- **ItemQuantitySelector**
- **Description**
- **AddItemButton**
- **Checkout**
- **Brief (detalle de compra)**

## Estructura del Proyecto

```bash
src/
├── components/
│   ├── Navbar.js
│   ├── CartWidget.js
│   ├── ItemListContainer.js
│   ├── ItemList.js
│   ├── ItemDetailContainer.js
│   ├── ItemDetail.js
│   ├── ItemQuantitySelector.js
│   ├── Description.js
│   ├── AddItemButton.js
│   └── Checkout.js
├── context/
│   └── CartContext.js
├── App.js
├── index.js
├── styles/
│   └── App.css
└── assets/
  └── images/
Descripción de Componentes
NavBar: Contiene enlaces de navegación a las diferentes secciones de la tienda. También incluye un ícono que muestra el número de artículos en el carrito.

CartWidget: Un componente que muestra el ícono del carrito y el número total de productos que el usuario ha agregado.

ItemListContainer: Este componente es el encargado de renderizar el catálogo de productos, cargando dinámicamente los productos desde una fuente de datos (puede ser una API o un archivo estático).

ItemList: Muestra la lista de productos disponibles en el catálogo. Cada producto es representado por un componente Item.

ItemDetailContainer: Muestra los detalles completos de un producto cuando el usuario hace clic sobre un ítem del catálogo.

ItemDetail: Contiene la información detallada de un producto, incluyendo su imagen, descripción, y precio.

ItemQuantitySelector: Permite al usuario seleccionar la cantidad de productos que desea agregar al carrito.

Description: Una breve descripción de los productos o de la tienda en general.

AddItemButton: Un botón para agregar productos al carrito de compras.

Checkout: Muestra los productos agregados al carrito y permite proceder con la compra.

Brief: Muestra un resumen de la compra antes de finalizar el pedido.

Instrucciones de Instalación
Para poder ejecutar el proyecto en tu máquina local, sigue estos pasos:

Clona el repositorio:

bash
Copiar código
git clone https://github.com/tu_usuario/ReactCoderHouseFinal.git
Accede a la carpeta del proyecto:

bash
Copiar código
cd ReactCoderHouseFinal
Instala las dependencias: Asegúrate de tener Node.js instalado. Luego, ejecuta el siguiente comando para instalar las dependencias del proyecto:

bash
Copiar código
npm install
Ejecuta la aplicación: Una vez que las dependencias estén instaladas, puedes ejecutar la aplicación con:

bash
Copiar código
npm start
Esto abrirá el navegador y podrás ver la aplicación funcionando en http://localhost:3000.

Flujo de la Aplicación
Página de inicio: Al cargar la página, los usuarios pueden ver el catálogo de productos disponibles. Al hacer clic en un producto, serán redirigidos a la página de detalles.

Página de Detalles del Producto: Muestra información detallada sobre el producto seleccionado, con la opción de agregarlo al carrito. El usuario puede seleccionar la cantidad de productos a agregar.

Carrito de Compras: Los productos agregados al carrito estarán disponibles en el CartWidget (en la navbar). Al hacer clic en el carrito, el usuario puede ver los productos agregados, cambiar cantidades, o proceder al Checkout.

Checkout: Muestra el resumen de los productos en el carrito y ofrece la opción de finalizar la compra.

Video / GIF de la Aplicación
A continuación, se puede incluir un GIF o video demostrando la navegabilidad y los flujos básicos de la aplicación. Esto ayudará a los evaluadores a entender cómo interactuar con la aplicación.


Contribuciones
Si deseas contribuir a este proyecto, sigue estos pasos:

Haz un fork del repositorio.
Crea una nueva rama (git checkout -b feature/nueva-funcionalidad).
Realiza tus cambios y haz commit (git commit -am 'Agrega nueva funcionalidad').
Empuja los cambios a tu repositorio (git push origin feature/nueva-funcionalidad).
Abre un pull request en el repositorio original.
Licencia
Este proyecto está bajo la licencia MIT. Consulta el archivo LICENSE para más detalles.


# React + Vite

This template provides a minimal setup to get React working in Vite with HMR and some ESLint rules.

Currently, two official plugins are available:

- [@vitejs/plugin-react](https://github.com/vitejs/vite-plugin-react/blob/main/packages/plugin-react/README.md) uses [Babel](https://babeljs.io/) for Fast Refresh
- [@vitejs/plugin-react-swc](https://github.com/vitejs/vite-plugin-react-swc) uses [SWC](https://swc.rs/) for Fast Refresh
