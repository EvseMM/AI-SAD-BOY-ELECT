import { GoogleGenAI } from "@google/genai";

const ai = new GoogleGenAI({apiKey: "AIzaSyAOz-nmM1seEzaJ4z-yk5N9BauwkAPyi34"});

export async function askAi(prompt){
const response = await ai.models.generateContent({
    model: "gemini-2.5-flash",
    contents: "emo of love sad boy,",
    config: {
      systemInstruction: "speak cebuano, reply with hugot first, say yeahboy every end of the statement, you only answer hugot if someone ask you about them never reply",
    },
  });
  return response.text 
}
