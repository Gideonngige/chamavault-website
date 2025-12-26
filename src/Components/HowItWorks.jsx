import { Users, UserPlus, TrendingUp } from "lucide-react"

export default function HowItWorks() {
  const steps = [
    {
      step: "01",
      title: "Create a Group",
      description:
        "Set up your chama in minutes, define rules, and assign member roles securely.",
      icon: Users,
    },
    {
      step: "02",
      title: "Invite Members",
      description:
        "Add members via invite links or phone numbers and manage access easily.",
      icon: UserPlus,
    },
    {
      step: "03",
      title: "Save & Invest",
      description:
        "Start saving, issue loans, and grow your funds with automated tracking.",
      icon: TrendingUp,
    },
  ]

  return (
    <section id="how" className="py-20 bg-white">
      <div className="max-w-7xl mx-auto px-6">
        {/* Header */}
        <div className="text-center mb-16">
          <h2 className="text-3xl font-bold mb-4">How It Works</h2>
          <p className="text-gray-600 max-w-2xl mx-auto">
            Getting started with ChamaVault is simple and seamless.
            Follow these three easy steps.
          </p>
        </div>

        {/* Steps */}
        <div className="grid md:grid-cols-3 gap-8">
          {steps.map((item) => {
            const Icon = item.icon
            return (
              <div
                key={item.step}
                className="relative bg-gray-50 p-8 rounded-2xl shadow-sm hover:shadow-lg hover:-translate-y-2 transition-all duration-300"
              >
                {/* Step Number */}
                <div className="absolute -top-4 -left-4 bg-yellow-600 text-white w-10 h-10 rounded-full flex items-center justify-center font-bold">
                  {item.step}
                </div>

                {/* Icon */}
                <div className="mb-6">
                  <div className="bg-yellow-100 w-14 h-14 rounded-full flex items-center justify-center">
                    <Icon className="h-7 w-7 text-yellow-600" />
                  </div>
                </div>

                {/* Content */}
                <h3 className="text-xl font-semibold mb-3">
                  {item.title}
                </h3>
                <p className="text-gray-600">
                  {item.description}
                </p>
              </div>
            )
          })}
        </div>
      </div>
    </section>
  )
}
