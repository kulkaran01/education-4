import { Check } from 'lucide-react';

export function PricingSection() {
  const plans = [
    {
      name: 'Starter',
      price: '₹9,999',
      period: 'per course',
      description: 'Perfect for trying out one course',
      features: [
        'Access to 1 course',
        'Course completion certificate',
        'Community access',
        'Self-paced learning',
        'Basic project reviews'
      ],
      highlighted: false
    },
    {
      name: 'Pro',
      price: '₹24,999',
      period: 'for 6 months',
      description: 'Best value for serious learners',
      features: [
        'Access to all courses',
        'Live mentorship sessions',
        'Priority project reviews',
        'Resume & portfolio building',
        'Job placement support',
        'Interview preparation'
      ],
      highlighted: true
    },
    {
      name: 'Mentor Plus',
      price: '₹49,999',
      period: 'for 1 year',
      description: 'Premium support & guaranteed outcomes',
      features: [
        'Everything in Pro',
        'Dedicated 1-on-1 mentor',
        'Guaranteed job placement',
        'Unlimited mock interviews',
        'Lifetime alumni access',
        'Career coaching sessions'
      ],
      highlighted: false
    }
  ];

  return (
    <section id="pricing" className="bg-white py-20 px-8">
      <div className="max-w-[1440px] mx-auto">
        <div className="text-center mb-12">
          <h2 className="text-[#020617] mb-4">
            Simple, Transparent Pricing
          </h2>
          <p className="text-gray-600 max-w-2xl mx-auto">
            Choose the plan that works best for you. All plans include 7-day free trial.
          </p>
        </div>

        <div className="grid grid-cols-3 gap-8">
          {plans.map((plan, index) => (
            <div
              key={index}
              className={`rounded-2xl p-8 border-2 transition-all hover:shadow-xl ${
                plan.highlighted
                  ? 'border-[#5B21B6] bg-gradient-to-b from-[#5B21B6]/5 to-transparent shadow-lg scale-105'
                  : 'border-gray-200 hover:border-[#5B21B6]/50'
              }`}
            >
              {plan.highlighted && (
                <div className="mb-4">
                  <span className="inline-block px-4 py-1 rounded-full bg-[#A3E635] text-[#5B21B6] text-sm">
                    Most Popular
                  </span>
                </div>
              )}

              <h3 className="text-gray-900 mb-2">{plan.name}</h3>
              <p className="text-gray-600 text-sm mb-6">{plan.description}</p>

              <div className="mb-6">
                <span className="text-[#5B21B6] text-4xl">{plan.price}</span>
                <span className="text-gray-600 text-sm ml-2">{plan.period}</span>
              </div>

              <button
                className={`w-full py-3 rounded-lg transition-all mb-8 ${
                  plan.highlighted
                    ? 'bg-[#5B21B6] text-white hover:bg-[#4c1d95] shadow-lg hover:shadow-xl'
                    : 'bg-gray-100 text-gray-900 hover:bg-gray-200'
                }`}
              >
                Start Free Trial
              </button>

              <div className="space-y-3">
                {plan.features.map((feature, featureIndex) => (
                  <div key={featureIndex} className="flex items-start gap-3">
                    <Check className="w-5 h-5 text-[#A3E635] flex-shrink-0 mt-0.5" />
                    <span className="text-gray-700 text-sm">{feature}</span>
                  </div>
                ))}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
