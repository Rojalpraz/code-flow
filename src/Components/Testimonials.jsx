import {QuoteIcon, TextQuoteIcon} from "lucide-react";
import React from "react";

function Testimonials() {
  const testimonials = [
    {
      name: "Sarah Chen",
      role: "Senior Developer",
      image:
        "https://images.pexels.com/photos/774909/pexels-photo-774909.jpeg?auto=compress&cs=tinysrgb&w=200",
      content:
        "This AI-powered development platform has revolutionized how we write code. The intelligent suggestions save us hours every day.",
    },
    {
      name: "Marcus Rodriguez",
      role: "Tech Lead",
      image:
        "https://images.pexels.com/photos/220453/pexels-photo-220453.jpeg?auto=compress&cs=tinysrgb&w=200",
      content:
        "The automated testing and debugging features are game-changers. We ship code faster and with more confidence than ever before.",
    },
    {
      name: "Emily Watson",
      role: "CTO",
      image:
        "https://images.pexels.com/photos/415829/pexels-photo-415829.jpeg?auto=compress&cs=tinysrgb&w=200",
      content:
        "Our development velocity increased by 300% since adopting this platform. It's like having a senior developer pair programming with every team member.",
    },
  ];
  return (
    <section
      id="testimonials"
      className="py-16 md:py-20 px-10 md:px-6 lg:px-8 relative"
    >
      <div className=" mx-auto lg:flex lg:gap-12 lg:items-start">
        <div className="w-full lg:w-[65%]  text-4xl md:text-5xl lg:text-6xl text-center lg:text-left animate-[fadeInLeft_1s_ease-out]">
          <h1 className="font-semibold ">
            <span className="block"> What developers</span>
            <span> are saying about us</span>
          </h1>
          <p className="text-gray-400 text-lg md:text-base pt-5 ">
            Everything you need to build, test, and deploy applications with
            AI-powered development tools.
          </p>
        </div>
        <div className="lg:w-[55%] grid grid-rows-3 space-y-7 mt-5 lg:mt-0  ">
          {testimonials.map((t, index) => (
            <div
              key={index}
              className=" p-7 bg-slate-800/35 border border-gray-600 rounded-xl"
              style={{
                animation: "fadeInRight 1s ease-out both",
                animationDelay: `${0.2 + index * 0.2}s`,
              }}
            >
              <div className="flex space-x-3">
                <div className="text-5xl text-sky-500">"</div>
                <div className="flex flex-col">
                  <div>{t.content}</div>
                  <div className="flex gap-3 mt-4 items-center">
                    <img
                      src={t.image}
                      className="w-12 rounded-full h-12 object-cover"
                    />
                    <div className="flex flex-col">
                      <div className="text-sm font-medium">{t.name}</div>
                      <div className="text-xs text-gray-400">{t.role}</div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

export default Testimonials;
