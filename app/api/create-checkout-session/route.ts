import { NextRequest, NextResponse } from 'next/server';
import Stripe from 'stripe';

// Inicializar Stripe con tu clave secreta
const stripe = new Stripe(process.env.STRIPE_SECRET_KEY || '', {
  apiVersion: '2023-10-16',
});

export async function POST(request: NextRequest) {
  try {
    const body = await request.json();
    const { color, size, quantity } = body;

    // Crear una sesión de pago con Stripe
    const session = await stripe.checkout.sessions.create({
      payment_method_types: ['card'],
      line_items: [
        {
          price_data: {
            currency: 'eur',
            product_data: {
              name: `Camiseta Delest - ${color} - Talla ${size}`,
            },
            unit_amount: 2500, // 25€ en céntimos
          },
          quantity: quantity,
        },
      ],
      mode: 'payment',
      success_url: `${process.env.NEXT_PUBLIC_BASE_URL}/success`,
      cancel_url: `${process.env.NEXT_PUBLIC_BASE_URL}`,
      metadata: {
        color,
        size,
        quantity: quantity.toString(),
      },
    });

    return NextResponse.json({ 
      id: session.id 
    }, { status: 200 });
  } catch (error) {
    console.error('Error al crear sesión de pago:', error);
    return NextResponse.json({ 
      message: 'Error al crear sesión de pago' 
    }, { status: 500 });
  }
} 