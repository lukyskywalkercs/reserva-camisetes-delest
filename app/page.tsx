'use client';

import { useState, FormEvent } from 'react';
import Image from 'next/image';
import Link from 'next/link';
import { Inter } from 'next/font/google';

const inter = Inter({ 
  subsets: ['latin'],
  weight: ['300', '400', '600', '700']
});

// Componente de botones de compartir
const ShareButtons = () => {
  const shareUrl = 'https://delest.com/camiseta'; // Reemplazar con URL real
  const title = 'Camiseta Delest - Edición Limitada';

  const socialPlatforms = [
    {
      name: 'WhatsApp',
      icon: '/icons/whatsapp.svg',
      shareLink: `https://wa.me/34627655213?text=${encodeURIComponent(`${title} - ${shareUrl}`)}`
    },
    {
      name: 'Twitter',
      icon: '/icons/twitter.svg',
      shareLink: `https://twitter.com/intent/tweet?text=${encodeURIComponent(title)}&url=${encodeURIComponent(shareUrl)}`
    },
    {
      name: 'Instagram',
      icon: '/icons/instagram.svg',
      shareLink: `https://www.instagram.com/delestrock`
    },
    {
      name: 'Facebook',
      icon: '/icons/facebook.svg',
      shareLink: `https://www.facebook.com/sharer/sharer.php?u=${encodeURIComponent(shareUrl)}`
    }
  ];

  return (
    <div className="flex space-x-4 justify-center mt-4">
      {socialPlatforms.map((platform) => (
        <Link 
          key={platform.name}
          href={platform.shareLink}
          target="_blank"
          rel="noopener noreferrer"
          className="text-gray-600 hover:text-red-500 transition-colors"
          aria-label={`Compartir en ${platform.name}`}
        >
          <Image
            src={platform.icon} 
            alt={`Compartir en ${platform.name}`} 
            width={24} 
            height={24}
          />
        </Link>
      ))}
    </div>
  );
};

// Componente de redes sociales de Delest
const DelestSocialLinks = () => {
  const socialLinks = [
    {
      name: 'Instagram',
      handle: '@delestrock',
      url: 'https://www.instagram.com/delestrock',
      icon: '/icons/instagram.svg'
    },
    {
      name: 'Spotify',
      handle: 'Delest',
      url: 'https://open.spotify.com/artist/delest', // Reemplazar con URL real
      icon: '/icons/spotify.svg'
    },
    {
      name: 'Facebook',
      handle: 'Delest Rock',
      url: 'https://www.facebook.com/delestrock',
      icon: '/icons/facebook.svg'
    },
    {
      name: 'YouTube',
      handle: 'Delest',
      url: 'https://www.youtube.com/channel/delestrock', // Reemplazar con URL real
      icon: '/icons/youtube.svg'
    }
  ];

  return (
    <div className="mt-6 text-center space-y-4">
      <div>
        <h3 className="text-lg font-semibold text-gray-800 mb-2">Síguenos</h3>
        <div className="flex justify-center space-x-6">
          {socialLinks.map((platform) => (
            <Link
              key={platform.name}
              href={platform.url}
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center text-gray-700 hover:text-gray-900 transition-colors"
            >
              <Image 
                src={platform.icon} 
                alt={platform.name} 
                width={24} 
                height={24} 
                className="mr-2"
              />
              <span className="text-sm">{platform.handle}</span>
            </Link>
          ))}
        </div>
      </div>

      {/* Información de contacto */}
      <div className="bg-gray-50 border border-gray-200 rounded-lg p-4 text-gray-800 space-y-3">
        <h3 className="text-lg font-semibold mb-2 text-center">Contacto</h3>
        
        <div className="space-y-2">
          <div className="flex items-center justify-center space-x-3">
            <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
              <path d="M22 16.92v3a2 2 0 0 1-2.18 2 19.79 19.79 0 0 1-8.63-3.07 19.5 19.5 0 0 1-6-6 19.79 19.79 0 0 1-3.07-8.67A2 2 0 0 1 4.11 2h3a2 2 0 0 1 2 1.72 12.84 12.84 0 0 0 .7 2.81 2 2 0 0 1-.45 2.11L8.09 9.91a16 16 0 0 0 6 6l1.27-1.27a2 2 0 0 1 2.11-.45 12.84 12.84 0 0 0 2.81.7A2 2 0 0 1 22 16.92z"/>
            </svg>
            <span className="text-gray-700">627 65 52 13</span>
          </div>
          
          <div className="flex items-center justify-center space-x-3">
            <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
              <path d="M4 4h16c1.1 0 2 .9 2 2v12c0 1.1-.9 2-2 2H4c-1.1 0-2-.9-2-2V6c0-1.1.9-2 2-2z"/>
              <polyline points="22,6 12,13 2,6"/>
            </svg>
            <span className="text-gray-700">delestrock@gmail.com</span>
          </div>
          
          <div className="flex items-center justify-center space-x-3">
            <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
              <path d="M21 10c0 7-9 13-9 13s-9-6-9-13a9 9 0 0 1 18 0z"/>
              <circle cx="12" cy="10" r="3"/>
            </svg>
            <span className="text-gray-700">Avinguda Dels Germans Bou, 237B, La Púa (local de ensayo)</span>
          </div>
        </div>

        <div className="bg-red-50 border border-red-200 rounded-lg p-3 mt-3 text-center text-red-800">
          <p className="text-sm">
            <strong>Martes y Miércoles:</strong> 20:00 - 22:00h
          </p>
        </div>
      </div>
    </div>
  );
};

export default function HomePage() {
  const [selectedColor, setSelectedColor] = useState('Blanco');
  const [selectedSize, setSelectedSize] = useState('M');
  const [quantity, setQuantity] = useState(1);
  const [selectedView, setSelectedView] = useState<'front' | 'back'>('back');
  
  // Nuevos estados para información de contacto
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [phone, setPhone] = useState('');
  const [isLoading, setIsLoading] = useState(false);
  const [error, setError] = useState<string | null>(null);
  const [isReserveModalOpen, setIsReserveModalOpen] = useState(false);
  const [selectedShipping, setSelectedShipping] = useState('recogida');

  // Añadir nuevo estado para el modal de información de envío
  const [isDeliveryInfoOpen, setIsDeliveryInfoOpen] = useState(false);

  const [referralCode, setReferralCode] = useState('');
  const [referralDiscount, setReferralDiscount] = useState(false);

  const shirts = [
    {
      id: 1,
      name: 'Delest',
      description: 'Edición limitada. Únicamente 100 unidades disponibles.',
      colors: ['Blanco', 'Negro'],
      sizes: ['Niño hasta 6 años', 'S', 'M', 'L', 'XL'],
      price: 18,
      images: {
        blanco: {
          front: '/images/camisetas/FRONT_BLANCA.png',
          back: '/images/camisetas/BACK_BLANCA.png'
        },
        negro: {
          front: '/images/camisetas/FRONT_NEGRA.png',
          back: '/images/camisetas/BACK_NEGRA.png'
        }
      }
    }
  ];

  const shippingOptions = [
    { 
      id: 'recogida', 
      name: 'Recogida en Castellón', 
      price: 0, 
      description: 'Avinguda Dels Germans Bou, 237B, La Púa (local de ensayo) o en los conciertos' 
    },
    { 
      id: 'ordinario', 
      name: 'Envío Ordinario', 
      price: 4, 
      description: 'Entrega estándar (5-7 días)' 
    },
    { 
      id: 'certificado', 
      name: 'Envío Certificado', 
      price: 8, 
      description: 'Entrega garantizada (2-3 días)' 
    }
  ];

  // Función para generar código único de referido
  const generateReferralCode = () => {
    return Math.random().toString(36).substring(2, 8).toUpperCase();
  };

  // Actualizar cálculo de precio total con descuento
  const totalPrice = referralDiscount 
    ? (shirts[0].price - 2) + (selectedShipping ? 
      shippingOptions.find(option => option.id === selectedShipping)?.price || 0 
      : 0)
    : shirts[0].price + (selectedShipping ? 
      shippingOptions.find(option => option.id === selectedShipping)?.price || 0 
      : 0);

  const handleReserve = async (e: FormEvent) => {
    e.preventDefault();
    setIsLoading(true);
    setError(null);

    // Obtener el elemento de comentarios
    const commentsElement = document.getElementById('comments') as HTMLTextAreaElement;
    const comments = commentsElement ? commentsElement.value : '';

    // Validaciones
    if (!name.trim()) {
      setError('Por favor, introduce tu nombre');
      setIsLoading(false);
      return;
    }
    
    if (!selectedColor || !selectedSize) {
      setError('Por favor, selecciona color y talla');
      setIsLoading(false);
      return;
    }
    
    if (!email || !email.includes('@')) {
      setError('Por favor, introduce un correo electrónico válido');
      setIsLoading(false);
      return;
    }
    
    try {
      const response = await fetch('/api/reserve', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({ 
          color: selectedColor, 
          size: selectedSize, 
          quantity,
          name,
          email,
          phone,
          shippingMethod: selectedShipping,
          totalPrice,
          comments,
          referralCode: referralCode || '',
          referralDiscount,
          destinationEmail: 'delestrock@gmail.com',
          emailSubject: 'Reserva Camiseta Delest',
          facebookPixel: '994653918078471'
        }),
      });

      const result = await response.json();

      if (response.ok) {
        // Animación de éxito más elaborada
        const successMessage = `¡Reserva confirmada, ${name}! 
        Camiseta ${selectedColor} - Talla ${selectedSize}
        ${referralDiscount ? 'Descuento aplicado: -2€' : ''}
        Te enviaremos un correo de confirmación a ${email}`;
        
        // Reset form and close modal
        setName('');
        setEmail('');
        setPhone('');
        setIsReserveModalOpen(false);
        
        // Mostrar mensaje de éxito con más detalles
        alert(successMessage);
      } else {
        // Mostrar mensaje de error más detallado
        const errorMessage = result.details || result.message || 
          `Error ${response.status}: ${response.statusText}`;
        setError(errorMessage);
        console.error('Error en la reserva:', errorMessage);
      }
    } catch (error) {
      console.error('Error completo:', error);
      
      // Manejar diferentes tipos de errores
      if (error instanceof TypeError) {
        setError('Error de red. Por favor, comprueba tu conexión.');
      } else if (error instanceof SyntaxError) {
        setError('Error al procesar la respuesta del servidor.');
      } else {
        setError('Error desconocido. Por favor, inténtalo de nuevo.');
      }
    } finally {
      setIsLoading(false);
    }
  };

  // Función para compartir y obtener descuento
  const handleShareAndDiscount = () => {
    const code = generateReferralCode();
    setReferralCode(code);
    setReferralDiscount(true);
    
    // Copiar al portapapeles
    const shareText = `¡Reserva tu camiseta Delest con descuento! Usa mi código ${code} y obtén 2€ de descuento. Reserva aquí: https://delest.com/camiseta`;
    
    // Intentar usar Web Share API si está disponible
    if (navigator.share) {
      navigator.share({
        title: 'Camiseta Delest - Reserva con Descuento',
        text: shareText,
        url: 'https://delest.com/camiseta'
      }).catch(console.error);
    } else {
      // Fallback para copiar al portapapeles
      navigator.clipboard.writeText(shareText).then(() => {
        alert('Código de descuento copiado. ¡Comparte con tus amigos!');
      });
    }
  };

  return (
    <div className={`min-h-screen bg-white ${inter.className}`}>
      {/* Contenido principal */}
      <div className="max-w-6xl mx-auto px-4 py-12 md:py-20">
        <div className="grid md:grid-cols-2 gap-8 lg:gap-12 items-center">
          {/* Imagen de la camiseta */}
          <div className="flex flex-col items-center">
            <div className="w-full max-w-md mb-6">
              <Image 
                src={
                  selectedColor === 'Blanco' 
                    ? shirts[0].images.blanco[selectedView]
                    : shirts[0].images.negro[selectedView]
                } 
                alt={`Camiseta Delest ${selectedColor}`}
                width={500}
                height={500}
                className="w-full h-auto object-cover rounded-lg shadow-lg"
              />
            </div>
            
            {/* Selector de vista */}
            <div className="flex space-x-4 mb-4">
              <button
                onClick={() => setSelectedView('front')}
                className={`px-3 py-1.5 text-xs sm:text-sm rounded-full transition-all ${
                  selectedView === 'front' 
                    ? 'bg-red-500 text-white' 
                    : 'bg-gray-100 text-gray-600 hover:bg-gray-200'
                }`}
              >
                Vista Delantera
              </button>
              <button
                onClick={() => setSelectedView('back')}
                className={`px-3 py-1.5 text-xs sm:text-sm rounded-full transition-all ${
                  selectedView === 'back' 
                    ? 'bg-red-500 text-white' 
                    : 'bg-gray-100 text-gray-600 hover:bg-gray-200'
                }`}
              >
                Vista Trasera
              </button>
            </div>

            {/* Botones de compartir */}
            <ShareButtons />
          </div>

          {/* Detalles y reserva */}
          <div className="w-full">
            <div className="mb-4 text-center">
              <Image 
                src="/images/camisetas/ALTA DEF_ negro_Delest_Logo Design_2021_Grain V2.png"
                alt="Logo Delest"
                width={250}
                height={250}
                className="mx-auto max-w-[200px] sm:max-w-[250px]"
              />
            </div>
            <p className="text-gray-600 mb-6 italic text-center text-sm sm:text-base">
              Reserva ahora sin ningún coste la nueva camiseta ANTIRRITMO de Delest. 
              Paga cuando te la enviemos. 
              Edición limitada.
            </p>
            <div className="text-sm text-gray-600 text-center mb-4 flex justify-center items-center space-x-2">
              <Link 
                href="https://wa.me/34627655213?text=Reserva%20camiseta%20Delest" 
                target="_blank" 
                rel="noopener noreferrer"
                className="text-gray-700 hover:text-green-600 transition-colors underline flex items-center space-x-2"
              >
                <Image 
                  src="/icons/whatsapp.svg" 
                  alt="Whatsapp" 
                  width={24} 
                  height={24} 
                />
                <span className="text-xs sm:text-base font-bold">Reserva camiseta por Whatsapp</span>
              </Link>
            </div>

            {/* Selector de Color */}
            <div className="mb-6">
              <div className="flex justify-center items-center mb-2">
                <div className="h-px bg-gray-300 flex-grow mr-3"></div>
                <span className="text-sm font-medium text-gray-600">Elige tu color</span>
                <div className="h-px bg-gray-300 flex-grow ml-3"></div>
              </div>
              <div className="flex flex-col items-center">
                <div className="flex space-x-3 justify-center mb-2">
                  {shirts[0].colors.map((color) => (
                    <div 
                      key={color} 
                      className="group relative"
                    >
                      <button
                        onClick={() => setSelectedColor(color)}
                        className={`w-8 h-8 sm:w-10 sm:h-10 rounded-full border-2 transition-all ${
                          selectedColor === color 
                            ? 'border-red-500 scale-110' 
                            : 'border-gray-300 hover:border-gray-500'
                        } ${color === 'Blanco' ? 'bg-white' : 'bg-black'}`}
                      />
                      <span className="absolute bottom-[-20px] left-1/2 transform -translate-x-1/2 text-xs text-gray-600 opacity-0 group-hover:opacity-100 transition-opacity">
                        {color}
                      </span>
                    </div>
                  ))}
                </div>
              </div>
            </div>

            {/* Selector de Talla */}
            <div className="mb-6">
              <div className="flex justify-center items-center mb-2">
                <div className="h-px bg-gray-300 flex-grow mr-3"></div>
                <span className="text-sm font-medium text-gray-600">Elige tu talla</span>
                <div className="h-px bg-gray-300 flex-grow ml-3"></div>
              </div>
              <div className="grid grid-cols-3 gap-2">
                {shirts[0].sizes.map((size) => (
                  <button
                    key={size}
                    onClick={() => setSelectedSize(size)}
                    className={`py-1.5 text-xs sm:text-sm rounded-lg transition-all ${
                      selectedSize === size 
                        ? 'bg-red-500 text-white' 
                        : 'bg-gray-100 text-gray-600 hover:bg-gray-200'
                    }`}
                  >
                    {size}
                  </button>
                ))}
              </div>
            </div>

            {/* Información adicional */}
            <div className="text-xs sm:text-sm text-gray-600 space-y-2 mb-4">
              <p>🎸 Comprando merch de los grupos ayudas a financiarnos y a seguir adelante con el proyecto.</p>
              <p>📍 Recogida en Castellón o conciertos</p>
              <p>⏳ Reservas: 5-7 días</p>
            </div>

            {/* Botón de detalles de envío */}
            <div className="mb-4">
              <button 
                onClick={() => setIsDeliveryInfoOpen(!isDeliveryInfoOpen)}
                className="text-red-600 hover:text-red-800 underline transition-colors text-sm"
              >
                Ver detalles de envío
              </button>
            </div>

            {/* Botones de Reserva y Compartir */}
            <div className="flex flex-col sm:flex-row items-center justify-between space-y-4 sm:space-y-0 sm:space-x-4 mb-6">
              <div className="bg-red-50 border border-red-200 rounded-lg px-4 py-2 flex items-center">
                <span className="text-xl sm:text-2xl font-bold text-red-800 mr-2">
                  {referralDiscount ? '16€' : '18€'}
                </span>
                <span className="text-xs sm:text-sm text-red-600">
                  {referralDiscount ? 'Precio con descuento' : 'Edición única'}
                </span>
              </div>
              <div className="flex flex-col sm:flex-row space-y-2 sm:space-y-0 sm:space-x-2 w-full sm:w-auto">
                <button 
                  onClick={() => setIsReserveModalOpen(true)}
                  disabled={!selectedColor || !selectedSize}
                  className="w-full sm:w-auto px-4 py-2 bg-red-500 text-white rounded-full hover:bg-red-600 disabled:bg-red-300 transition-all text-sm"
                >
                  Reservar
                </button>
                <button 
                  onClick={handleShareAndDiscount}
                  className="w-full sm:w-auto px-4 py-2 bg-red-600 text-white rounded-full hover:bg-red-700 transition-all text-sm flex items-center justify-center space-x-2"
                >
                  <svg xmlns="http://www.w3.org/2000/svg" className="h-4 w-4" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                    <path d="M4 12v8a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2v-8"/>
                    <polyline points="16 6 12 2 8 6"/>
                    <line x1="12" y1="2" x2="12" y2="15"/>
                  </svg>
                  <span>Compartir y descuento</span>
                </button>
              </div>
            </div>

            {/* Redes sociales de Delest */}
            <DelestSocialLinks />
          </div>
        </div>
      </div>

      {/* Modal de Reserva */}
      {isReserveModalOpen && (
        <div className="fixed inset-0 bg-white/90 flex items-center justify-center z-50 p-4 overflow-y-auto">
          <div className="bg-white rounded-2xl shadow-2xl w-full max-w-2xl my-8 relative border border-gray-200 overflow-hidden">
            <button 
              onClick={() => setIsReserveModalOpen(false)}
              className="absolute top-4 right-4 text-gray-500 hover:text-gray-800 transition-colors z-10"
            >
              <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
              </svg>
            </button>

            <div className="overflow-y-auto max-h-[90vh] px-8 py-8">
              <div className="text-center mb-6">
                <h2 className="text-2xl font-bold text-gray-800 mb-2">Reserva Oficial de Camiseta Delest</h2>
                <p className="text-gray-600">Completa tus datos para reservar tu edición limitada</p>
              </div>

              <form onSubmit={handleReserve} className="space-y-6">
                {error && (
                  <div className="bg-red-50 border border-red-200 text-red-700 px-4 py-3 rounded-lg">
                    <p className="font-medium">{error}</p>
                  </div>
                )}

                <div className="grid md:grid-cols-2 gap-4">
                  <div>
                    <label htmlFor="name" className="block text-sm font-medium text-gray-700 mb-2">
                      Nombre completo <span className="text-red-500">*</span>
                    </label>
                    <input
                      type="text"
                      id="name"
                      value={name}
                      onChange={(e) => setName(e.target.value)}
                      required
                      placeholder="Nombre y apellidos"
                      className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-red-500 transition-all"
                    />
                  </div>

                  <div>
                    <label htmlFor="email" className="block text-sm font-medium text-gray-700 mb-2">
                      Correo Electrónico <span className="text-red-500">*</span>
                    </label>
                    <input
                      type="email"
                      id="email"
                      value={email}
                      onChange={(e) => setEmail(e.target.value)}
                      required
                      placeholder="tu@email.com"
                      className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-red-500 transition-all"
                    />
                  </div>

                  <div>
                    <label htmlFor="phone" className="block text-sm font-medium text-gray-700 mb-2">
                      Teléfono <span className="text-red-500">*</span>
                    </label>
                    <input
                      type="tel"
                      id="phone"
                      value={phone}
                      onChange={(e) => setPhone(e.target.value)}
                      required
                      placeholder="Número de contacto"
                      className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-red-500 transition-all"
                    />
                  </div>
                </div>

                {/* Sección de Envío */}
                <div className="mb-6">
                  <div className="flex justify-center items-center mb-4">
                    <div className="h-px bg-gray-300 flex-grow mr-3"></div>
                    <span className="text-sm font-medium text-gray-600">Opciones de Envío</span>
                    <div className="h-px bg-gray-300 flex-grow ml-3"></div>
                  </div>
                  <div className="grid md:grid-cols-2 gap-4">
                    {shippingOptions.map((option) => (
                      <div 
                        key={option.id}
                        onClick={() => setSelectedShipping(option.id)}
                        className={`
                          border-2 rounded-lg p-4 cursor-pointer transition-all
                          ${selectedShipping === option.id 
                            ? 'border-red-500 bg-red-50' 
                            : 'border-gray-300 hover:border-gray-400'}
                        `}
                      >
                        <div className="flex justify-between items-center">
                          <div>
                            <h3 className="font-semibold text-gray-800">{option.name}</h3>
                            <p className="text-sm text-gray-600">{option.description}</p>
                          </div>
                          <div className="text-right">
                            <span className="font-bold text-red-700">{option.price === 0 ? 'Gratuito' : `+${option.price}€`}</span>
                          </div>
                        </div>
                      </div>
                    ))}
                  </div>
                </div>

                {/* Sección de Dirección de Envío */}
                <div className={`grid md:grid-cols-2 gap-4 ${selectedShipping === 'recogida' ? 'hidden' : ''}`}>
                  <div>
                    <label htmlFor="address" className="block text-sm font-medium text-gray-700 mb-2">
                      Dirección {selectedShipping !== 'recogida' && <span className="text-red-500">*</span>}
                    </label>
                    <input
                      type="text"
                      id="address"
                      {...(selectedShipping !== 'recogida' ? { required: true } : {})}
                      placeholder="Calle, número, piso"
                      className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-red-500 transition-all"
                    />
                  </div>
                  <div>
                    <label htmlFor="postal-code" className="block text-sm font-medium text-gray-700 mb-2">
                      Código Postal {selectedShipping !== 'recogida' && <span className="text-red-500">*</span>}
                    </label>
                    <input
                      type="text"
                      id="postal-code"
                      {...(selectedShipping !== 'recogida' ? { required: true } : {})}
                      placeholder="Código postal"
                      className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-red-500 transition-all"
                    />
                  </div>
                  <div>
                    <label htmlFor="city" className="block text-sm font-medium text-gray-700 mb-2">
                      Ciudad {selectedShipping !== 'recogida' && <span className="text-red-500">*</span>}
                    </label>
                    <input
                      type="text"
                      id="city"
                      {...(selectedShipping !== 'recogida' ? { required: true } : {})}
                      placeholder="Ciudad"
                      className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-red-500 transition-all"
                    />
                  </div>
                  <div>
                    <label htmlFor="province" className="block text-sm font-medium text-gray-700 mb-2">
                      Provincia {selectedShipping !== 'recogida' && <span className="text-red-500">*</span>}
                    </label>
                    <input
                      type="text"
                      id="province"
                      {...(selectedShipping !== 'recogida' ? { required: true } : {})}
                      placeholder="Provincia"
                      className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-red-500 transition-all"
                    />
                  </div>
                </div>

                {/* Comentarios adicionales */}
                <div className="mb-6">
                  <label htmlFor="comments" className="block text-sm font-medium text-gray-700 mb-2">
                    Comentarios adicionales (opcional)
                  </label>
                  <textarea
                    id="comments"
                    rows={3}
                    placeholder="Información adicional, preferencias especiales..."
                    className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-red-500 transition-all resize-y"
                  ></textarea>
                </div>

                <div className="flex items-center">
                  <input 
                    type="checkbox" 
                    id="terms" 
                    required 
                    className="mr-2 text-red-500 focus:ring-red-500"
                  />
                  <label htmlFor="terms" className="text-sm text-gray-700">
                    Acepto los 
                    <a 
                      href="/politica-privacidad" 
                      target="_blank" 
                      className="text-red-600 hover:text-red-800 ml-1 underline"
                    >
                      términos y condiciones
                    </a>
                  </label>
                </div>

                <button
                  type="submit"
                  disabled={isLoading}
                  className="w-full py-3 bg-red-600 text-white rounded-full hover:bg-red-700 disabled:bg-red-300 transition-all font-semibold"
                >
                  {isLoading ? 'Procesando Reserva...' : 'Confirmar Reserva Oficial'}
                </button>
              </form>
            </div>
          </div>
        </div>
      )}

      {/* Modal de Información de Envío */}
      {isDeliveryInfoOpen && (
        <div className="fixed inset-0 bg-white/90 flex items-center justify-center z-50 p-4 overflow-y-auto">
          <div className="bg-white rounded-2xl shadow-2xl w-full max-w-4xl my-8 relative border border-gray-200 overflow-hidden">
            <button 
              onClick={() => setIsDeliveryInfoOpen(false)}
              className="absolute top-4 right-4 text-gray-500 hover:text-gray-800 transition-colors z-10"
            >
              <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
              </svg>
            </button>

            <div className="overflow-y-auto max-h-[90vh] px-8 py-8">
              <h2 className="text-2xl font-bold text-gray-800 mb-6">Información de Envío</h2>

              <div className="space-y-6 text-gray-700">
                <section>
                  <h3 className="text-xl font-semibold mb-4">Ámbito de Envío</h3>
                  <p className="mb-4">
                    Actualmente, realizamos envíos <strong>únicamente a Península y Baleares</strong>. 
                    Nos centramos en ofrecer un servicio de calidad y proximidad.
                  </p>
                </section>

                <section>
                  <h3 className="text-xl font-semibold mb-4">Plazos de Reserva y Fabricación</h3>
                  <p className="mb-4">
                    Hemos establecido un periodo de reserva limitado para garantizar la exclusividad 
                    de nuestra camiseta ANTIRRITMO. Este tiempo nos permite:
                  </p>
                  <ul className="list-disc list-inside space-y-2">
                    <li>Ajustar la producción según la demanda real</li>
                    <li>Optimizar costes de fabricación</li>
                    <li>Asegurar la calidad de cada unidad</li>
                    <li>Minimizar el impacto ambiental de la producción</li>
                  </ul>
                </section>

                <section>
                  <h3 className="text-xl font-semibold mb-4">Opciones de Envío</h3>
                  <div className="bg-gray-50 border border-gray-200 rounded-lg p-4">
                    <h4 className="font-semibold mb-2">Envío Ordinario</h4>
                    <p>
                      Entendemos que el coste es un factor importante. Por eso, ofrecemos la opción 
                      de envío ordinario, que resulta más económico. Sin embargo, recomendamos 
                      encarecidamente el envío certificado para mayor seguridad.
                    </p>
                  </div>
                  <div className="bg-gray-50 border border-gray-200 rounded-lg p-4 mt-4">
                    <h4 className="font-semibold mb-2">Envío Certificado</h4>
                    <p>
                      Aunque supone un coste adicional, el envío certificado ofrece:
                    </p>
                    <ul className="list-disc list-inside mt-2">
                      <li>Seguimiento del paquete</li>
                      <li>Mayor protección contra pérdidas</li>
                      <li>Confirmación de entrega</li>
                    </ul>
                  </div>
                </section>

                <section>
                  <h3 className="text-xl font-semibold mb-4">Responsabilidad de Envío</h3>
                  <p className="bg-red-50 border border-red-200 rounded-lg p-4 text-red-800">
                    Los envíos se realizan a través de Correos. <strong>No nos hacemos responsables 
                    de pérdidas o deterioros una vez entregado el paquete</strong>. 
                    Recomendamos contratar un seguro adicional si lo considera necesario.
                  </p>
                </section>
              </div>
            </div>
          </div>
        </div>
      )}
    </div>
  );
}
