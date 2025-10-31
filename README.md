# 🖋️ Librería Papel y Tinta

**Librería Papel y Tinta** es un eCommerce moderno enfocado en la venta de útiles escolares, accesorios y artículos de papelería.  
Desarrollado con **React** y **Firebase**, este proyecto combina una interfaz simple, rápida y funcional con una experiencia de compra intuitiva.

---

## 🚀 Demo

👉 [www.libreria-papel-y-tinta-9qfeykx37-lucas-projects-eeeeec83.vercel.app/](https://libreria-papel-y-tinta-9qfeykx37-lucas-projects-eeeeec83.vercel.app/)

---

## 🧠 Tecnologías principales

- Frontend: React + Vite
- Routing: React Router
- Backend: Firebase
- UI Feedback: SweetAlert2
- Estado global: Context API
- Estilos: CSS modular y responsive design

---

## 📦 Instalación y ejecución local

Cloná el repositorio e instalá las dependencias:

```bash
# 1️⃣ Clonar el repositorio
git clone https://github.com/LucasJeremiasAT/Libreria-Papel-Y-Tinta

# 2️⃣ Ingresar al directorio del proyecto
cd Libreria-Papel-Y-Tinta

# 3️⃣ Instalar dependencias
npm install

# 4️⃣ Iniciar el entorno de desarrollo
npm run dev

* Luego accedé desde tu navegador a:
👉 http://localhost:5173

🧩 Arquitectura del proyecto

📦 src
├── 📁 components
│ ├── 📁 CartContainer
│ │ ├── 📄 CartContainer.css
│ │ ├── 📄 CartContainer.jsx
│ │ ├── 📄 FormCheckout.css
│ │ └── 📄 FormCheckout.jsx
│ │
│ ├── 📁 ItemDetailContainer
│ │ ├── 📄 ItemCount.css
│ │ ├── 📄 ItemCount.jsx
│ │ ├── 📄 ItemDetailContainer.css
│ │ └── 📄 ItemDetailContainer.jsx
│ │
│ ├── 📁 ItemListContainer
│ │ ├── 📄 Item.css
│ │ ├── 📄 Item.jsx
│ │ ├── 📄 ItemListContainer.css
│ │ └── 📄 ItemListContainer.jsx
│ │
│ ├── 📁 Navbar
│ │ ├── 📄 NavBar.css
│ │ └── 📄 NavBar.jsx
│ │ 
│ ├── 📄 CartWidget.jsx
│ ├── 📄 ItemColorPick.jsx
│ └── 📄 NotFound.jsx
│ 
├── 📁 context
│ ├── 📄 cartContext.css
│ └── 📄 cartContext.jsx
│
├── 📁 data
│ ├── 📄 firebase.js
│ └── 📄 mockAPI.js
│
├── 📄 App.css
├── 📄 App.jsx
├── 📄 index.css
└── 📄 main.jsx

🗂️ Descripción de carpetas

| Carpeta | Descripción |
|----------|-------------|
| **components/** | Contiene todos los componentes reutilizables del proyecto. Cada subcarpeta representa una parte funcional del eCommerce. |
| **CartContainer/** | Maneja el flujo de compra y el formulario de checkout. |
| **ItemDetailContainer/** | Muestra la información detallada de cada producto y permite seleccionar cantidad. |
| **ItemListContainer/** | Renderiza el listado general de productos y vistas filtradas por categoría. |
| **Navbar/** | Contiene el menú principal y elementos de navegación del sitio. |
| **CartWidget.jsx** | Muestra el ícono y contador del carrito dentro del navbar. |
| **ItemColorPick.jsx** | Permite seleccionar variantes de color de los productos (si aplica). |
| **NotFound.jsx** | Página de error 404 para rutas no existentes. |
| **context/** | Implementa el Context API para manejar el estado global del carrito. |
| **data/** | Archivos de configuración y datos: conexión con Firebase y mock API local. |
| **App.jsx / App.css** | Componente raíz de la aplicación y sus estilos globales. |
| **main.jsx** | Punto de entrada principal donde se monta la app en el DOM. |
| **index.css** | Estilos base y normalización de la aplicación. |

* Funcionalidades destacadas
* Funcionalidad	Descripción
🏠 Navbar dinámica	Incluye navegación entre Home, Categorías y Carrito
🛍️ Categorías organizadas	Productos agrupados por tipo: útiles, accesorios y papelería
🛒 Carrito de compras funcional	Añadí, eliminá y actualizá productos en tiempo real
📦 Checkout con formulario	Completa tu compra con validación de datos
🔥 Integración con Firebase	Base de datos, autenticación y almacenamiento
🍬 Alertas interactivas	Uso de SweetAlert2 para feedback visual

( - Próximamente se agregarán imágenes de la interfaz del eCommerce)

👨‍💻 Autor

* Desarrollado por Lucas Anacondio
🌐 Sitio web: https://libreria-papel-y-tinta-9qfeykx37-lucas-projects-eeeeec83.vercel.app/
📬 Contacto: lucasjanacondiot@gmail.com

📝 Licencia

* Este proyecto se distribuye bajo la licencia MIT. Podés usarlo, modificarlo y compartirlo libremente.

