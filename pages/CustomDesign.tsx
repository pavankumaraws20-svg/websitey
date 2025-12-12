import React, { useState } from 'react';
import { GoogleGenAI, Type } from "@google/genai";
import Section from '../components/Section';
import { DesignSpec } from '../types';
import { Sparkles, PenTool, Loader2, ArrowRight } from 'lucide-react';

const CustomDesign: React.FC = () => {
  const [idea, setIdea] = useState('');
  const [loading, setLoading] = useState(false);
  const [result, setResult] = useState<DesignSpec | null>(null);
  const [error, setError] = useState('');

  const handleGenerate = async () => {
    if (!idea.trim()) return;

    setLoading(true);
    setError('');
    setResult(null);

    try {
      const apiKey = process.env.API_KEY; 
      
      if (!apiKey) {
          throw new Error("API Key not found. Please contact support.");
      }

      const ai = new GoogleGenAI({ apiKey });

      const model = "gemini-2.5-flash";
      const prompt = `You are a master jeweler consultant. A customer wants a custom jewelry piece described as: "${idea}". 
      
      Please analyze this request and create a technical specification for a goldsmith. 
      Return ONLY a JSON object with the following schema:
      {
        "conceptName": "A creative name for the piece",
        "description": "A refined, luxurious description of the visual design",
        "suggestedMaterials": ["List of materials, e.g., 22K Gold, Ruby, etc."],
        "estimatedWeight": "Approximate weight in grams",
        "craftsmanshipNotes": "Technical notes on setting style, finish, or technique (e.g., Filigree, Kundan)"
      }`;

      const response = await ai.models.generateContent({
        model,
        contents: prompt,
        config: {
            responseMimeType: "application/json",
            responseSchema: {
                type: Type.OBJECT,
                properties: {
                    conceptName: { type: Type.STRING },
                    description: { type: Type.STRING },
                    suggestedMaterials: { type: Type.ARRAY, items: { type: Type.STRING } },
                    estimatedWeight: { type: Type.STRING },
                    craftsmanshipNotes: { type: Type.STRING }
                }
            }
        }
      });

      const text = response.text;
      if (text) {
        const data = JSON.parse(text) as DesignSpec;
        setResult(data);
      } else {
        throw new Error("No response from design assistant.");
      }

    } catch (err) {
      console.error(err);
      setError("We couldn't generate a design right now. Please try again or visit our store.");
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="min-h-screen bg-gray-50">
       <div className="bg-maroon-900 text-white pt-40 pb-16 text-center">
            <h1 className="text-4xl font-serif font-bold">Custom Design Studio</h1>
            <p className="text-gold-300 mt-2">Bring your dream jewelry to life with AI assistance</p>
       </div>

       <Section>
           <div className="max-w-3xl mx-auto">
                <div className="bg-white p-8 rounded-lg shadow-lg border border-gray-100">
                    <div className="flex items-center gap-3 mb-6">
                        <div className="p-3 bg-gold-100 rounded-full text-maroon-900">
                            <Sparkles size={24} />
                        </div>
                        <div>
                            <h2 className="text-xl font-bold font-serif text-gray-900">AI Design Consultant</h2>
                            <p className="text-sm text-gray-500">Describe your idea, and we'll create a specification for our artisans.</p>
                        </div>
                    </div>

                    <div className="space-y-4">
                        <textarea
                            value={idea}
                            onChange={(e) => setIdea(e.target.value)}
                            placeholder="e.g. A vintage style gold necklace with peacock motifs and small rubies, heavy look but lightweight..."
                            className="w-full h-32 p-4 border border-gray-300 rounded-md focus:ring-2 focus:ring-maroon-900 focus:border-transparent resize-none"
                        />
                        <button
                            onClick={handleGenerate}
                            disabled={loading || !idea.trim()}
                            className={`w-full py-3 rounded-md font-bold uppercase tracking-wider flex items-center justify-center gap-2 transition-all ${
                                loading || !idea.trim()
                                ? 'bg-gray-300 text-gray-500 cursor-not-allowed'
                                : 'bg-maroon-900 text-white hover:bg-maroon-800'
                            }`}
                        >
                            {loading ? <Loader2 className="animate-spin" /> : <PenTool size={18} />}
                            {loading ? 'Consulting Artisans...' : 'Generate Design Concept'}
                        </button>
                    </div>

                    {error && (
                        <div className="mt-4 p-4 bg-red-50 text-red-700 rounded-md text-sm">
                            {error}
                        </div>
                    )}
                </div>

                {result && (
                    <div className="mt-8 bg-white overflow-hidden rounded-lg shadow-xl border-t-4 border-gold-500 animate-fade-in-up">
                        <div className="p-8">
                            <h3 className="text-2xl font-serif font-bold text-maroon-900 mb-2">{result.conceptName}</h3>
                            <div className="h-1 w-20 bg-gold-500 mb-6"></div>
                            
                            <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                                <div>
                                    <h4 className="font-bold text-gray-900 mb-2 uppercase text-xs tracking-wider">Visual Description</h4>
                                    <p className="text-gray-700 leading-relaxed mb-6">{result.description}</p>
                                    
                                    <h4 className="font-bold text-gray-900 mb-2 uppercase text-xs tracking-wider">Technical Notes</h4>
                                    <p className="text-gray-600 text-sm italic border-l-2 border-gray-200 pl-3">
                                        {result.craftsmanshipNotes}
                                    </p>
                                </div>
                                <div className="bg-gray-50 p-6 rounded-md">
                                    <div className="mb-4">
                                        <h4 className="font-bold text-gray-900 mb-2 uppercase text-xs tracking-wider">Estimated Weight</h4>
                                        <p className="text-xl font-serif text-maroon-900">{result.estimatedWeight}</p>
                                    </div>
                                    <div>
                                        <h4 className="font-bold text-gray-900 mb-2 uppercase text-xs tracking-wider">Recommended Materials</h4>
                                        <ul className="list-disc list-inside space-y-1 text-gray-700">
                                            {result.suggestedMaterials.map((mat, i) => (
                                                <li key={i}>{mat}</li>
                                            ))}
                                        </ul>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div className="bg-gold-50 p-4 border-t border-gold-100 flex justify-between items-center flex-wrap gap-4">
                            <p className="text-sm text-maroon-900 font-medium">Like this concept? Book an appointment to realize it.</p>
                            <a href="/contact" className="inline-flex items-center text-maroon-900 font-bold text-sm hover:underline">
                                Contact Store <ArrowRight size={16} className="ml-1" />
                            </a>
                        </div>
                    </div>
                )}
           </div>
       </Section>
    </div>
  );
};

export default CustomDesign;