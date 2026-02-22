import { useState } from "react";

function App() {
  const [nombre, setNombre] = useState("");
  const [email, setEmail] = useState("");
  const [mensaje, setMensaje] = useState("");
  const [enviado, setEnviado] = useState(false);

  // Esta es la funcion para validar Email
  const validarEmail = (email) => {
    return /\S+@\S+\.\S+/.test(email);
  };

  // Esta es la funcion para validar el formulario en general
  const formularioValido =
    nombre.trim() !== "" &&
    validarEmail(email) &&
    mensaje.trim() !== "";

  const handleSubmit = (e) => {
    e.preventDefault();

    if (formularioValido) {
      setEnviado(true);
      setNombre("");
      setEmail("");
      setMensaje("");
    }
  };

  return (
    <div className="min-h-screen flex items-center justify-center bg-gray-100 p-4">
      <div className="bg-white shadow-lg rounded-xl p-8 w-full max-w-md">
        <h2 className="text-2xl font-bold mb-4 text-center">
          Contacto con Carlos
        </h2>

        {enviado && (
          <p className="bg-green-100 text-green-700 p-2 rounded mb-4 text-center">
            ¡Gracias por tu mensaje!
          </p>
        )}

        <form onSubmit={handleSubmit} className="space-y-4">
          <input
            type="text"
            placeholder="Nombre"
            value={nombre}
            onChange={(e) => setNombre(e.target.value)}
            className="w-full p-2 border rounded focus:outline-none focus:ring-2 focus:ring-blue-400"
          />

          <input
            type="email"
            placeholder="Email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            className="w-full p-2 border rounded focus:outline-none focus:ring-2 focus:ring-blue-400"
          />

          <textarea
            placeholder="Mensaje"
            value={mensaje}
            onChange={(e) => setMensaje(e.target.value)}
            className="w-full p-2 border rounded focus:outline-none focus:ring-2 focus:ring-blue-400"
            rows="4"
          />

          <button
            type="submit"
            disabled={!formularioValido}
            className={`w-full p-2 rounded text-white font-semibold transition ${
              formularioValido
                ? "bg-blue-600 hover:bg-blue-700"
                : "bg-gray-400 cursor-not-allowed"
            }`}
          >
            Enviar
          </button>
        </form>
      </div>
    </div>
  );
}

export default App;