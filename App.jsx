import React, { useState } from "react";

export default function App() {
  const [prompt, setPrompt] = useState("");
  const [image, setImage] = useState(null);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState("");

  const API_URL = "https://api-inference.huggingface.co/models/stabilityai/stable-diffusion-xl-base-1.0 ";
  const API_KEY = process.env.REACT_APP_HUGGINGFACE_API_KEY;

  const handleGenerateImage = async () => {
    if (!prompt.trim()) return alert("Digite uma descrição!");

    setLoading(true);
    setError("");
    setImage(null);

    try {
      const response = await fetch(API_URL, {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
          "Authorization": `Bearer ${API_KEY}`
        },
        body: JSON.stringify({ 
          inputs: prompt,
          parameters: { width: 512, height: 512 }
        })
      });

      if (!response.ok) {
        const errorData = await response.json();
        throw new Error(errorData.error || "Erro ao gerar imagem");
      }

      const blob = await response.blob();
      const imageUrl = URL.createObjectURL(blob);
      setImage(imageUrl);
    } catch (err) {
      setError(err.message);
      console.error(err);
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-gray-50 to-gray-200">
      {/* Header */}
      <header className="bg-green-600 text-white py-6 text-center shadow-md">
        <h1 className="text-4xl font-bold">Jaquesrd</h1>
        <p className="mt-2 text-lg">Crie imagens com IA</p>
      </header>

      {/* Ícones */}
      <div className="flex justify-center gap-8 my-10">
        <svg className="h-10 w-10 text-green-600 hover:scale-110 transition-transform" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
          <path d="M3 9.5l9-7 9 7v9a2 2 0 01-2 2h-14a2 2 0 01-2-2v-9z" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
        </svg>
        <svg className="h-10 w-10 text-green-600 hover:scale-110 transition-transform" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
          <circle cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="2"/>
          <path d="M12 16v-4M12 8h.01" stroke="currentColor" strokeWidth="2" strokeLinecap="round"/>
        </svg>
        <svg className="h-10 w-10 text-green-600 hover:scale-110 transition-transform" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
          <path d="M20 4H4c-1.1 0-2 .9-2 2v12c0 1.1.9 2 2 2h16c1.1 0 2-.9 2-2V6c0-1.1-.9-2-2-2zm0 14H4V8l8 5 8-5v10z" fill="currentColor"/>
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
          disabled={loading}
          className={`w-full py-2 px-4 rounded transition ${
            loading 
              ? "bg-gray-400 cursor-not-allowed" 
              : "bg-green-600 hover:bg-green-700 text-white"
          }`}
        >
          {loading ? "Gerando..." : "Criar Imagem"}
        </button>

        {error && (
          <p className="text-red-500 mt-4 animate-pulse">
            {error} 🚨 Tente outra descrição ou verifique sua conexão.
          </p>
        )}

        {loading && (
          <div className="mt-6 flex justify-center">
            <div className="w-12 h-12 border-4 border-green-200 border-t-green-600 rounded-full animate-spin"></div>
          </div>
        )}

        {image && (
          <div className="mt-6">
            <img 
              src={image} 
              alt="Gerada pela IA" 
              className="w-full rounded-md shadow-lg" 
              onLoad={() => URL.revokeObjectURL(image)} // Libera memória após carregamento
            />
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
