import React, { useState } from "react";

export default function App() {
  const [prompt, setPrompt] = useState("");
  const [image, setImage] = useState(null);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(null);

  const API_URL = "https://api-inference.huggingface.co/models/stabilityai/stable-diffusion-2 ";
  const API_KEY = process.env.REACT_APP_HUGGING_FACE_API_KEY; // Configure no .env

  const handleGenerateImage = async () => {
    if (!prompt.trim()) return alert("Digite uma descrição!");
    
    setLoading(true);
    setError(null);
    
    try {
      const response = await fetch(API_URL, {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
          "Authorization": `Bearer ${API_KEY}`
        },
        body: JSON.stringify({ inputs: prompt })
      });
      
      if (!response.ok) throw new Error("Erro na geração da imagem");
      
      const blob = await response.blob();
      const imageUrl = URL.createObjectURL(blob);
      setImage(imageUrl);
    } catch (err) {
      setError("Falha ao gerar imagem. Tente novamente.");
      console.error(err);
    } finally {
      setLoading(false);
    }
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
        {/* ... [SVG icons do código anterior] ... */}
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

        {error && <p className="text-red-500 mt-4">{error}</p>}

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
