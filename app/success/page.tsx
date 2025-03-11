export default function SuccessPage() {
  return (
    <div className="min-h-screen bg-gray-100 flex items-center justify-center p-4">
      <div className="bg-white shadow-md rounded-lg p-8 max-w-md w-full text-center">
        <h1 className="text-3xl font-bold text-green-600 mb-4">¡Pago Exitoso!</h1>
        <p className="text-gray-700 mb-6">
          Gracias por tu compra de la camiseta Delest. 
          Pronto recibirás un correo electrónico con los detalles de tu pedido.
        </p>
        <a 
          href="/" 
          className="bg-blue-500 text-white py-2 px-4 rounded hover:bg-blue-600"
        >
          Volver al Inicio
        </a>
      </div>
    </div>
  );
} 