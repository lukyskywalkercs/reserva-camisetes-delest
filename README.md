# Delest Camisetas - Tienda Online

## Descripción
Aplicación web para la venta y reserva de camisetas Delest, con formulario de contacto y pago integrado.

## Características
- Reserva y compra de camisetas
- Selección de color y talla
- Pago con Stripe
- Formulario de contacto
- Responsive design

## Requisitos Previos
- Node.js (v18 o superior)
- npm

## Instalación

1. Clonar el repositorio
```bash
git clone https://github.com/tu-usuario/delest-camisetas.git
cd delest-camisetas
```

2. Instalar dependencias
```bash
npm install
```

3. Configurar variables de entorno
Crea un archivo `.env.local` con las siguientes variables:
```
# Stripe
NEXT_PUBLIC_STRIPE_PUBLISHABLE_KEY=tu_clave_publica_de_stripe
STRIPE_SECRET_KEY=tu_clave_secreta_de_stripe

# URL base
NEXT_PUBLIC_BASE_URL=http://localhost:3000

# Correo electrónico
EMAIL_USER=tu_correo@gmail.com
EMAIL_PASS=tu_contraseña_de_aplicacion
EMAIL_RECIPIENT=correo_de_destino@ejemplo.com
```

4. Ejecutar la aplicación
```bash
npm run dev
```

## Despliegue
- Configurar las variables de entorno en tu plataforma de hosting
- Usar `npm run build` para generar la versión de producción

## Tecnologías
- Next.js
- React
- Tailwind CSS
- Stripe
- Nodemailer

## Licencia
[Especificar la licencia]
