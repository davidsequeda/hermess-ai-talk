# Hermess — sitio web

Sitio de [hermesstech.com](https://hermesstech.com): Rosa, tutora de inglés con IA que vive en Alexa.

**Stack:** Vite · React 18 · TypeScript · Tailwind · shadcn/ui

## Desarrollo

```sh
npm ci
npm run dev      # http://localhost:8080
npm run build    # genera ./dist
```

## Despliegue

Cada push a `main` ejecuta `.github/workflows/deploy.yml`, que compila el sitio y lo publica en GitHub Pages. El dominio se define en `CNAME`.

## Contenido

- Enlaces compartidos (WhatsApp, privacidad): `src/lib/links.ts`
- Secciones de la página: `src/components/` (orden en `src/pages/Index.tsx`)
