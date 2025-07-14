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
    
    try {
      const response = await fetch(API_URL, {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
          "Authorization": `Bearer ${API_KEY}`
        },
        body: JSON.stringify({ inputs: prompt })
      });
      
      if (!response.ok) throw new Error("Erro na API");
      
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
      {/* Seu layout atual */}
      <header className="bg-green-600 text-white py-6 text-center">
        <h1 className="text-3xl font-bold">Jaquesrd</h1>
        <p>Crie imagens com IA</p>
      </header>

      <div className="max-w-2xl mx-auto p-6">
        <input
          type="text"
          value={prompt}
          onChange={(e) => setPrompt(e.target.value)}
          placeholder="Descreva sua imagem..."
          className="w-full px-4 py-2 border rounded mb-4"
        />
        
        <button
          onClick={handleGenerateImage}
          disabled={loading}
          className="w-full bg-green-500 text-white py-2 rounded hover:bg-green-600"
        >
          {loading ? "Gerando..." : "Criar Imagem"}
        </button>

        {loading && <div className="text-center mt-4">🔄 Carregando...</div>}
        {error && <div className="text-red-500 mt-4">{error}</div>}
        
        {image && (
          <div className="mt-6">
            <img src={image} alt="Gerada" className="w-full rounded" />
          </div>
        )}
      </div>
    </div>
  );
}
