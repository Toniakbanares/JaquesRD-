import React, { useState } from "react";

export default function App() {
  const [prompt, setPrompt] = useState("");
  const [image, setImage] = useState(null);

  const handleGenerateImage = () => {
    if (!prompt.trim()) {
      alert("Por favor, digite uma descrição.");
      return;
    }

    // Simulação de geração de imagem (substituir por integração real com o flux)
    setImage(`https://placehold.co/600x400?text=${encodeURIComponent(prompt)}`);
  };

  return (
    <div className="min-h-screen bg-gray-100 text-gray-800">
      {/* Header */}
      <header className="bg-green-500 text-white py-4 text-center">
        <h1 className="text-3xl font-bold">Bem-vindo ao Jaquesrd</h1>
        <p className="mt-2">Crie imagens incríveis com inteligência artificial</p>
      </header>

      {/* Navigation */}
      <nav className="flex justify-center bg-gray-800 text-white">
        <a href="#inicio" className="px-4 py-2 hover:bg-gray-700">
          Início
        </a>
        <a href="#sobre" className="px-4 py-2 hover:bg-gray-700">
          Sobre
        </a>
        <a href="#contato" className="px-4 py-2 hover:bg-gray-700">
          Contato
        </a>
      </nav>

      {/* Main Content */}
      <div className="container mx-auto px-4 py-8">
        {/* Icons Section */}
        <div className="flex justify-center gap-6 mb-8">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            className="h-8 w-8 text-green-500 cursor-pointer"
            viewBox="0 0 20 20"
            fill="currentColor"
          >
            <path d="M10.707 2.293a1 1 0 00-1.414 0l-7 7a1 1 0 001.414 1.414L4 10.414V17a1 1 0 001 1h2a1 1 0 001-1v-2a1 1 0 011-1h2a1 1 0 011 1v2a1 1 0 001 1h2a1 1 0 001-1v-6.586l.293.293a1 1 0 001.414-1.414l-7-7z" />
          </svg>
          <svg
            xmlns="http://www.w3.org/2000/svg"
            className="h-8 w-8 text-green-500 cursor-pointer"
            viewBox="0 0 20 20"
            fill="currentColor"
          >
            <path
              fillRule="evenodd"
              d="M18 10a8 8 0 11
