import { NextRequest, NextResponse } from 'next/server';
import nodemailer from 'nodemailer';

export async function POST(request: NextRequest) {
  try {
    const body = await request.json();
    const { 
      color, 
      size, 
      quantity = 1,
      name = '',
      email = '',
      phone = '',
      shippingMethod = 'recogida',
      totalPrice = 0,
      comments = '',
      referralCode = '',
      referralDiscount = false,
      destinationEmail = 'delestrock@gmail.com',
      emailSubject = 'Reserva Camiseta Delest',
      facebookPixel = ''
    } = body;

    // Validar campos obligatorios
    if (!color || !size || !name || !email) {
      return NextResponse.json({ 
        message: 'Faltan datos obligatorios',
        details: { color, size, name, email }
      }, { status: 400 });
    }

    // Verificar variables de entorno
    if (!process.env.EMAIL_USER || !process.env.EMAIL_PASS) {
      return NextResponse.json({ 
        message: 'Error de configuración del servidor',
        details: 'Faltan credenciales de correo electrónico'
      }, { status: 500 });
    }

    // Configurar el transporte de correo
    const transporter = nodemailer.createTransport({
      service: 'gmail',
      auth: {
        user: process.env.EMAIL_USER,
        pass: process.env.EMAIL_PASS
      }
    });

    // Preparar detalles de la reserva
    const reservationDetails = `
      Detalles de la Reserva:
      - Nombre: ${name}
      - Correo: ${email}
      - Teléfono: ${phone || 'No proporcionado'}
      - Camiseta: Delest
      - Color: ${color}
      - Talla: ${size}
      - Cantidad: ${quantity}
      - Método de Envío: ${shippingMethod}
      - Precio Total: ${totalPrice}€
      ${comments ? `- Comentarios: ${comments}` : ''}
      ${referralCode ? `- Código de Referido: ${referralCode}` : ''}
      ${referralDiscount ? '- Descuento de Referido: Aplicado (-2€)' : ''}
      ${facebookPixel ? `- Facebook Pixel: ${facebookPixel}` : ''}
    `;

    // Correo para el grupo
    const mailOptionsGroup = {
      from: process.env.EMAIL_USER,
      to: destinationEmail,
      subject: emailSubject,
      text: reservationDetails,
      html: `
        <h2>Nueva Reserva de Camiseta</h2>
        <pre>${reservationDetails}</pre>
      `
    };

    // Correo de confirmación para el cliente
    const mailOptionsClient = {
      from: process.env.EMAIL_USER,
      to: email,
      subject: 'Confirmación de Reserva - Camiseta Delest',
      text: `
        Hola ${name},

        Gracias por reservar tu camiseta Delest.

        ${reservationDetails}

        Nos pondremos en contacto contigo pronto para confirmar los detalles de pago y entrega.

        Gracias por apoyar a la escena musical independiente!

        Saludos,
        Equipo Delest
      `,
      html: `
        <h2>Confirmación de Reserva</h2>
        <p>Hola ${name},</p>
        <p>Gracias por reservar tu camiseta Delest.</p>
        <pre>${reservationDetails}</pre>
        <p>Nos pondremos en contacto contigo pronto para confirmar los detalles de pago y entrega.</p>
        <p>Gracias por apoyar a la escena musical independiente!</p>
        <p>Saludos,<br>Equipo Delest</p>
      `
    };

    try {
      // Enviar correos
      await Promise.all([
        transporter.sendMail(mailOptionsGroup),
        transporter.sendMail(mailOptionsClient)
      ]);
    } catch (emailError: unknown) {
      const errorMessage = emailError instanceof Error ? emailError.message : String(emailError);
      console.error('Error al enviar correos:', errorMessage);
      return NextResponse.json({ 
        message: 'Error al enviar correos de confirmación',
        details: errorMessage
      }, { status: 500 });
    }

    return NextResponse.json({ 
      message: 'Reserva realizada con éxito' 
    }, { status: 200 });
  } catch (error: unknown) {
    const errorMessage = error instanceof Error ? error.message : String(error);
    console.error('Error al procesar la reserva:', errorMessage);
    return NextResponse.json({ 
      message: 'Error al procesar la reserva',
      details: errorMessage
    }, { status: 500 });
  }
} 