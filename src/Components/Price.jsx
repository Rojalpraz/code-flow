import { Check, Star } from 'lucide-react';
import React from 'react'

function Price() {
 const plans = [
  {
    name: "Starter",
    price: "29.99",
    description: "Perfect for individuals and small teams",
    features: [
      "Up to 5 team members",
      "10GB storage",
      "Basic analytics",
      "Email support",
      "API access",
      "Mobile app",
    ],
    mostPopular: false,
  },
  {
    name: "Professional",
    price: "79.99",
    description: "Best for growing businesses",
    features: [
      "Up to 25 team members",
      "100GB storage",
      "Advanced analytics",
      "Priority support",
      "API access",
      "Mobile app",
      "Custom integrations",
      "Advanced security",
    ],
    mostPopular: true,
  },
  {
    name: "Enterprise",
    price: "199.99",
    description: "For large organizations",
    features: [
      "Unlimited team members",
      "Unlimited storage",
      "Enterprise analytics",
      "24/7 phone support",
      "API access",
      "Mobile app",
      "Custom integrations",
      "Advanced security",
      "Dedicated account manager",
      "Custom SLA",
    ],
    mostPopular: false,
  },
];

  return (
    <section  id="pricing"
      className="py-16 md:py-20 px-10 md:px-6 lg:px-8 relative">
         <div className="mb-20">
          <div className="text-center text-5xl space-y-0.5 font-semibold">
            <span className="block"> Simple, Transparent </span>
            <span className="text-blue-400">Pricing Plans</span>
           
          </div>
           <p className='text-center mt-5 text-gray-400 text-lg md:text-xl'>Choose the perfect plan for your needs. All plans include a 14-day free trial.</p>
        </div>
        <div className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 md:gap-8 lg:gap-6' >
          {plans.map((plan, index) => (
            <div key={index} className={`relative bg-slate-900/50 backdop-blur-sm border rounded-xl sm:rounded-2xl p-6 sm:p-8 flex flex-col h-full ${plan.mostPopular ? "border-blue-500 shadow-2xl shadow-blue-500/20 lg:scale-105" : "border-slate-800 hover:border-slate-700"}`}>
              {plan.mostPopular && (
                <div className='absolute -top-2 sm:-top-3 left-1/2  -translate-x-1/2  '>
                  <div className='flex items-center rounded-3xl gap-1 px-3 sm:px-4 py-1 sm:py-1.5 bg-sky-600'><Star className='w-3 h-3 fill-yellow-300 '/>
                  <span className='text-xs'> Most Popular</span></div>
                </div>
              )}
              <div className='text-center space-y-2'>
                <h2 className='text-xl font-semibold '>{plan.name}</h2>
                <p className='text-gray-400 text-xs'>{plan.description}</p>
                <div className='mt-5'>
                <p className='text-sky-400 text-4xl'>${plan.price}<span className='text-gray-400 text-sm'>/month</span></p></div>
              </div>
              <div className='mt-9 flex-1 flex flex-col' >
                <div className='flex-1'>
                {plan.features.map((feature, index) => (
                  <div key={index} className='flex items-center gap-2 mb-3'>
                    <Check className='w-6 h-6 p-1 rounded-full bg-sky-500/30'/>
                    <p className='text-sm'>{feature}</p>
                    </div>
                   
                    
                ))}
                
                </div>
                 <button className={`mt-6 ${plan.mostPopular ? "bg-sky-500 " : "bg-slate-800 "}border border-gray-700 p-3 w-full rounded-2xl hover:cursor-pointer hover:scale-110 duration-400 `}>Get started</button>
              </div>
              
            </div>
          ))}
        
        </div>
        <h1 className='text-center mt-14 mb-4 text-gray-400 text-lg'>Need a custom plan? <a href='' className='text-sky-500 hover:text-blue-600'> Contact our sales team</a></h1>
    </section>
  )
}

export default Price
