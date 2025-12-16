import React from "react";
import SyntaxHighlighter from "react-syntax-highlighter";
import {nightOwl} from "react-syntax-highlighter/dist/esm/styles/hljs";

function Feature() {
  const features = [
    {
      title: "AI Code Completion",
      description:
        "Intelligent code suggestions powered by advanced AI that learns from your coding patterns. Get real-time assistance with syntax, logic, and best practices.",
      codeSnippet: `function handleSubmit() {
  // AI suggests next line
  const data = await fetch("/api/submit")
  // Auto-completed by AI
}`,
      imagePosition: "left",
    },
    {
      title: "Automated Testing",
      description:
        "Generate comprehensive test suites automatically. Our AI analyzes your code and creates unit tests, integration tests, and edge case coverage.",
      codeSnippet: `describe("User Authentication", () => {
  // Auto-generated tests
  it("should login successfully", () => {
    // Test implementation
  })
})`,
      imagePosition: "right",
    },
    {
      title: "Smart Debugging",
      description:
        "Identify and fix bugs before they reach production. AI-powered error detection and resolution suggestions help you debug faster.",
      codeSnippet: `// AI suggests fix:
const result = await processData(input)
// Fixed: Added await keyword`,
      imagePosition: "left",
    },
  ];
  return (
    <section
      id="features"
      className="py-16 md:py-20 px-10 md:px-6 lg:px-8 relative"
    >
      <div className="my-9 mx-auto">
        <div className="mb-20  animate-[fadeIn_1s_ease-out]">
          <div className="text-center text-5xl font-semibold">
            <span className="block"> Your Complete Development</span>
            <span className="text-blue-400">Workflow</span>
          </div>
        </div>
        <div className="space-y-16 md:space-y-20 lg:space-y-32">
          {features.map((feature, key) => (
            <div
              key={key}
              className={`flex flex-col md:flex-row items-center gap-8 md:gap-12 ${
                feature.imagePosition === "right" ? "md:flex-row-reverse" : ""
              }`}
              style={{
                animation: `fadeInUp 1s ease-out ${key * 0.3}s both`,
              }}
            >
              <div className="w-full flex-1 ">
                <div className="relative bg-white/5 sm:rounded-2xl rounded-xl  p-2 md:p-6 shadow-2xl border border-white/10">
                  <div className="bg-gray-950 rounded-xl p-3 md:p-4 font-mono text-xs md:text-sm">
                    <div className="flex items-center gap-0.5 mb-2 md:mb-3">
                      <div className="flex items-center gap-1 md:gap-2">
                        <div className="w-2 h-2 rounded bg-red-500"></div>
                        <div className="w-2 h-2 rounded bg-yellow-500"></div>
                        <div className="w-2 h-2 rounded bg-green-500"></div>
                      </div>
                      <span className="ml-2 md:ml-4 text-gray-400 text-xs md:text-sm ">
                        {feature.title}
                      </span>
                    </div>
                    <div>
                      <SyntaxHighlighter
                        language="javascript"
                        style={nightOwl}
                        customStyle={{
                          borderRadius: "8px",
                          margin: 0,
                          fontSize: "11px",
                          background: "transparent",
                          lineHeight: "1.4",
                          height: "100%",
                        }}
                      >
                        {feature.codeSnippet}
                      </SyntaxHighlighter>
                    </div>
                  </div>
                </div>
              </div>
              <div className="flex-1 text-center md:text-left space-y-2 w-full">
                <h3 className="text-5xl md:text-4xl font-semibold">
                  {feature.title}
                </h3>
                <p className="text-gray-400 text-lg md:text-xl  ">
                  {feature.description}
                </p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

export default Feature;
