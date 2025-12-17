import { ChevronDown, Play, Sparkles } from "lucide-react";
import { useState } from "react";
import React from "react";
import SyntaxHighlighter from "react-syntax-highlighter";
import { codeExamples } from "../Data/code";
import { nightOwl } from "react-syntax-highlighter/dist/esm/styles/hljs";

function Hero() {
    const[activeTab, setActiveTab] = useState("App.jsx");
  return (
    <section id="/" className="relative min-h-screen flex items-center justify-center pt-16 sm:pt-20  px-4 sm:px-6 lg:px-8 overflow-hidden">
      <div className=" mx-auto text-center relative w-full">
        <div className=" mx-auto flex gap-3 flex-col md:grid md:grid-cols-2 text-center md:text-left items-center">
          <div className="md:mx-1 animate-[fadeInUp_1s_ease-out] ">
            <div className=" inline-flex  px-3 md:px-4 bg-blue-500/10 border border-blue-500/20 py-2 md:py-3 items-center rounded-xl mb-4 space-x-2 sm:mb-6">
              <Sparkles className="w-4 h-4 text-blue-400"/><span className="text-xs md:text-sm text-blue-300"> Introducing CodeFlow AI</span>
            </div>
            <h1 className="text-5xl xl:text-6xl space-y-2 font-semibold mb-4 md:mb-8 ">
            <span className="block">Code Faster</span>
            <span className="block text-blue-400">Build Better</span>
            <span className="block"> With CodeFlow AI</span>
            </h1>
            <p className="text-xs text-gray-400 md:text-sm ">
              Accelerate your development workflow with intelligent code
              completion, automated testing, and smart debugging. Ship
              production-ready code 10x faster.
            </p>
            <div className="flex flex-col md:flex-row gap-4">
              <button className="w-full md:w-auto my-3 px-6  md:px-8 py-3 md:py-4   rounded-lg bg-blue-500 p-2 " >Start Coding</button>
            </div>
          </div>
      <div className="w-full relative animate-[fadeInUp_1s_ease-out_0.3s_both]">
        <div className="relative bg-white/5 sm:rounded-2xl rounded-xl  p-2 sm:p-3 shadow-2xl border border-white/10">
          <div className="bg-gray-400/10 rounded-lg overflow-hidden h-70 md:h-[378px] border border-white/5">
            <div className="flex items-center justify-between px-3 md:px-4 py-2 md:py-3 bg-white/5 border-b border-white/20 ">
              <div className="flex items-center gap-0.5 md:gap-1">
                <div className="w-2 h-2 rounded bg-red-500"></div>
                <div className="w-2 h-2 rounded bg-yellow-500"></div>
                <div className="w-2 h-2 rounded bg-green-500"></div>
                 <span className="px-2 text-sm text-gray-300">CodeFlow AI</span>
              </div>
              <ChevronDown className="h-4 w-4 text-gray-400 md:w-7 md:h-5" />
            </div>
            <div className="p-3 sm:p-4 relative h-full">
            <div className="flex gap-1">
                <button onClick={()=>setActiveTab("App.jsx")} className= {` p-3 rounded-t-lg text-xs md:text-sm border ${activeTab === "App.jsx" ? "bg-blue-500/50 text-white border-blue-400/20" : "bg-white/5 text-gray-300 border-white/10"}   hover:scale-110 duration-300 hover:cursor-pointer`} >App.jsx</button>
                <button onClick={()=>setActiveTab("Hero.jsx")}  className= {` p-3 rounded-t-lg text-xs md:text-sm border ${activeTab === "Hero.jsx" ? "bg-blue-500/50 text-white border-blue-400/20" : "bg-white/5 text-gray-300 border-white/10"}   hover:scale-110 duration-300 hover:cursor-pointer`}>Hero.jsx</button>
                <button onClick={()=>setActiveTab("Navbar.jsx")} className= {` p-3 rounded-t-lg text-xs md:text-sm border ${activeTab === "Navbar.jsx" ? "bg-blue-500/50 text-white border-blue-400/20" : "bg-white/5 text-gray-300 border-white/10"}   hover:scale-110 duration-300 hover:cursor-pointer`}>Navbar.jsx</button>
            </div>
            <div className="relative overflow-hidden py-2   ">
                <SyntaxHighlighter language="javascript" style={nightOwl} customStyle={{margin:0,textAlign:"left", fontSize:"10px",lineHeight:"1.4",height:"100%"}} >
                    {codeExamples[activeTab]}
                </SyntaxHighlighter>
            </div>
          </div>
          </div>
          </div>
      </div>
        </div>
      </div>
    </section>
  );
}

export default Hero;
