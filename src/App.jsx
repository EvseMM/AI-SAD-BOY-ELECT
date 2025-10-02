import React from 'react'
import {useState} from "react";
import {askAi} from './lib/ai'

export default function App() {
  const [ prompt, setPrompt] = useState("")
  const [response, setResponse] = useState("")
  const [isLoading, setIsloading] = useState(false)
  const handleInputChange = (e) => {
    setPrompt(e.target.value);
  }
  const handleSubmit = async (e) => {
    e.preventDefault();
    setIsloading(true)
    const response = await askAi (prompt);
    setResponse (response)
    setPrompt("");
    setIsloading(flase)
    
  }
  return (
    <div className="min-h-screen flex items-center justify-center bg-gray-50 p-4 sm:p-6">
  {/* Card Container */}
  <div className="bg-white p-8 rounded-xl shadow-2xl w-full max-w-sm transform transition-all duration-300 hover:shadow-2xl/75">
    
    {/* Title */}
    <h1 className="text-3xl font-extrabold text-gray-900 mb-6 text-center tracking-tight">
      SAD BOY
    </h1>

    {/* Form */}
    <form onSubmit={handleSubmit} className="space-y-5">
      
      {/* Input Field */}
      <input
        value={prompt}
        onChange={handleInputChange}
        placeholder="Type your prompt here"
        className="w-full p-4 border border-gray-200 rounded-lg text-gray-800 placeholder-gray-400 
                   focus:outline-none focus:ring-4 focus:ring-indigo-200 focus:border-indigo-400 
                   transition duration-150 ease-in-out disabled:bg-gray-50 disabled:cursor-not-allowed"
        disabled={isLoading}
      />
      
      {/* Submit Button */}
      <button
        type="submit"
        className="w-full bg-indigo-600 text-white font-semibold py-3 rounded-lg 
                   hover:bg-indigo-700 active:bg-indigo-800 focus:outline-none focus:ring-4 focus:ring-indigo-300 
                   transition duration-200 ease-in-out transform hover:scale-[1.01] 
                   disabled:bg-gray-400 disabled:shadow-none disabled:transform-none"
        disabled={isLoading}
      >
        {isLoading ? (
          <span className="flex items-center justify-center">
            <svg className="animate-spin -ml-1 mr-3 h-5 w-5 text-white" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24">
              <circle className="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="4"></circle>
              <path className="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"></path>
            </svg>
            Generating...
          </span>
        ) : (
          "Submit"
        )}
      </button>
    </form>
    
    {/* Response Output */}
    {response && (
      <div className="mt-6 pt-4 border-t border-gray-100">
        <p className="text-gray-800 whitespace-pre-wrap leading-relaxed">
          {response}
        </p>
      </div>
    )}
  </div>
</div>
  );
}
