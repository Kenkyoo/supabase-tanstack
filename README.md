# TanStack Start + Supabase + Rick and Morty API

Una aplicación full-stack moderna construida con TanStack Start, React 19, Supabase y Material-UI que consume la API de Rick and Morty.

## 🚀 Demo

**Deploy en vivo:** [https://app-tanstack.netlify.app/](https://app-tanstack.netlify.app/)

## ✨ Características

- 🔥 **TanStack Start** - Framework full-stack con enrutamiento file-based
- ⚡ **Vite** - Build tool ultra rápido
- ⚛️ **React 19** - Última versión de React
- 🗄️ **Supabase** - Backend as a Service con autenticación y base de datos
- 🎨 **Material-UI (MUI)** - Componentes UI modernos y accesibles
- 🎯 **TailwindCSS** - Estilos utility-first
- 🔄 **Server Functions** - API endpoints con type-safety
- 📱 **Responsive Design** - Optimizado para todos los dispositivos

## 🛠️ Stack Tecnológico

- **Frontend:** React 19, TanStack Router, Material-UI
- **Backend:** TanStack Start (Server Functions), Supabase
- **Estilos:** TailwindCSS 4, Emotion
- **API:** Rick and Morty API
- **Deploy:** Netlify
- **TypeScript:** Type-safety completo

## 📦 Instalación

1. **Clona el repositorio**

```bash
git clone https://github.com/Kenkyoo/supabase-tanstack.git
cd supabase-tanstack
```

2. **Instala las dependencias**

```bash
npm install
```

3. **Configura las variables de entorno**

Crea un archivo `.env` en la raíz del proyecto:

```env
VITE_SUPABASE_URL=tu_supabase_url
VITE_SUPABASE_ANON_KEY=tu_supabase_anon_key
```

4. **Inicia el servidor de desarrollo**

```bash
npm run dev
```

La aplicación estará disponible en `http://localhost:3000`

## 📝 Scripts Disponibles

```bash
npm run dev      # Inicia el servidor de desarrollo
npm run build    # Construye la aplicación para producción
npm run start    # Inicia el servidor de producción
```

## 🏗️ Estructura del Proyecto

```
supabase-tanstack/
├── app/
│   ├── routes/          # Rutas de la aplicación
│   ├── api/             # Server functions y lógica del servidor
│   └── components/      # Componentes reutilizables
├── public/              # Archivos estáticos
└── package.json
```

## 🔑 Funcionalidades Principales

### Server Functions

El proyecto utiliza TanStack Start Server Functions para crear endpoints type-safe:

```typescript
// Obtener un personaje individual
export const fetchPost = createServerFn({ method: "GET" })
  .inputValidator((d: string) => d)
  .handler(async ({ data: postId }) => {
    const post = await axios
      .get<PostType>(`https://rickandmortyapi.com/api/character/${postId}`)
      .then((r) => r.data);
    return post;
  });

// Obtener lista de personajes
export const fetchPosts = createServerFn({ method: "GET" })
  .handler(async () => {
    return axios
      .get<RickMortyResponse>("https://rickandmortyapi.com/api/character")
      .then((r) => r.data.results.slice(0, 19));
  });
```

### Integración con Supabase

- Autenticación de usuarios
- Base de datos en tiempo real
- SSR con `@supabase/ssr`

## 🌐 Deploy

La aplicación está configurada para deployarse en Netlify usando el plugin oficial de TanStack Start:

```json
{
  "devDependencies": {
    "@netlify/vite-plugin-tanstack-start": "^1.1.9"
  }
}
```

## 🤝 Contribuir

Las contribuciones son bienvenidas. Por favor:

1. Fork el proyecto
2. Crea una rama para tu feature (`git checkout -b feature/AmazingFeature`)
3. Commit tus cambios (`git commit -m 'Add some AmazingFeature'`)
4. Push a la rama (`git push origin feature/AmazingFeature`)
5. Abre un Pull Request

## 📄 Licencia

Este proyecto está bajo la Licencia ISC.

## 👤 Autor

**Kenkyoo**

- GitHub: [@Kenkyoo](https://github.com/Kenkyoo)

## 🙏 Agradecimientos

- [TanStack](https://tanstack.com/) - Por el increíble framework
- [Supabase](https://supabase.com/) - Por la infraestructura backend
- [Rick and Morty API](https://rickandmortyapi.com/) - Por la API pública
- [Material-UI](https://mui.com/) - Por los componentes UI

---

⭐ Si este proyecto te resultó útil, considera darle una estrella en GitHub!