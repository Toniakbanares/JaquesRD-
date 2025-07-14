import React, { useState } from "react";

export default function App() {
  const [prompt, setPrompt] = useState("");
  const [image, setImage] = useState(null);

  const handleGenerateImage = () => {
    if (!prompt.trim()) return alert("Digite uma descrição!");
    setImage(`https://placehold.co/600x400?text=${encodeURIComponent(prompt)}`);
  };

  return (
    <div className="min-h-screen bg-gray-100">
      {/* Header */}
      <header className="bg-green-600 text-white py-6 text-center">
        <h1 className="text-4xl font-bold">Jaquesrd</h1>
        <p className="mt-2">Crie imagens com IA</p>
      </header>

      {/* Ícones */}
      <div className="flex justify-center gap-8 my-10">
        <svg
          xmlns="http://www.w3.org/2000/svg"
          className="h-10 w-10 text-green-600 cursor-pointer hover:scale-110 transition"
          viewBox="0 0 20 20"
          fill="currentColor"
        >
          <path d="M10.707 2.293a1 1 0 00-1.414 0l-7 7a1 1 0 001.414 1.414L4 10.414V17a1 1 0 001 1h2a1 1 0 001-1v-2a1 1 0 011-1h2a1 1 0 011 1v2a1 1 0 001 1h2a1 1 0 001-1v-6.586l.293.293a1 1 0 001.414-1.414l-7-7z" />
        </svg>
        <svg
          xmlns="http://www.w3.org/2000/svg"
          className="h-10 w-10 text-green-600 cursor-pointer hover:scale-110 transition"
          viewBox="0 0 20 20"
          fill="currentColor"
        >
          <path d="M9 2a1 1 0 000 2h2a1 1 0 100-2H9z" />
          <path fillRule="evenodd" d="M4 5a2 2 0 012-2 3 3 0 003 3h2a3 3 0 003-3 2 2 0 012 2v11a2 2 0 01-2 2H6a2 2 0 01-2-2V5zm3 4a1 1 0 000 2h.01a1 1 0 100-2H7zm3 0a1 1 0 000 2h3a1 1 0 100-2h-3zm-3 4a1 1 0 100 2h.01a1 1 0 100-2H7zm3 0a1 1 0 100 2h3a1 1 0 100-2h-3z" clipRule="evenodd" />
        </svg>
        <svg
          xmlns="http://www.w3.org/2000/svg"
          className="h-10 w-10 text-green-600 cursor-pointer hover:scale-110 transition"
          viewBox="0 0 20 20"
          fill="currentColor"
        >
          <path d="M2.003 5.884L10 9.882l7.997-3.998A2 2 0 0016 4H4a2 2 0 00-1.997 1.884z" />
          <path d="M18 8.118l-8 4-8-4V14a2 2 0 002 2h12a2 2 0 002-2V8.118z" />
        </svg>
      </div>

      {/* Chatbot */}
      <div className="max-w-2xl mx-auto p-6 bg-white rounded-lg shadow-xl">
        <h2 className="text-2xl font-semibold mb-4">Gerar Imagem</h2>
        <input
          type="text"
          value={prompt}
          onChange={(e) => setPrompt(e.target.value)}
          placeholder="Descreva sua imagem..."
          className="w-full px-4 py-2 border border-gray-300 rounded mb-4 focus:outline-none focus:border-green-500"
        />
        <button
          onClick={handleGenerateImage}
          className="w-full bg-green-600 text-white py-2 px-4 rounded hover:bg-green-700 transition"
        >
          Criar Imagem
        </button>

        {image && (
          <div className="mt-6">
            <img src={image} alt="Gerada" className="w-full rounded-md" />
          </div>
        )}
      </div>

      {/* Footer */}
      <footer className="text-center py-4 mt-10 bg-gray-800 text-white">
        &copy; 2023 Jaquesrd
      </footer>
    </div>
  );
}
