import { ShieldCheck, FileText, Eye } from "lucide-react"

export default function Why() {
  const features = [
    {
      title: "Secure Savings",
      description:
        "Your chama funds and member data are protected with strong security and access control.",
      icon: ShieldCheck,
    },
    {
      title: "Automated Records",
      description:
        "All contributions, loans, and repayments are recorded automatically with no paperwork.",
      icon: FileText,
    },
    {
      title: "Transparent Management",
      description:
        "Members can view transactions and reports anytime, ensuring full transparency.",
      icon: Eye,
    },
  ]

  return (
    <section id="why" className="py-20 bg-gray-50">
      <div className="max-w-7xl mx-auto px-6 text-center">
        <h2 className="text-3xl font-bold mb-12">Why ChamaVault?</h2>

        <div className="grid md:grid-cols-3 gap-8">
          {features.map((feature) => {
            const Icon = feature.icon
            return (
              <div
                key={feature.title}
                className="bg-white p-6 rounded-xl shadow hover:shadow-lg hover:-translate-y-2 transition-all duration-300"
              >
                {/* Icon */}
                <div className="flex justify-center mb-4">
                  <div className="bg-yellow-100 p-4 rounded-full">
                    <Icon className="h-8 w-8 text-yellow-600" />
                  </div>
                </div>

                <h3 className="font-semibold text-xl mb-3">
                  {feature.title}
                </h3>
                <p className="text-gray-600">
                  {feature.description}
                </p>
              </div>
            )
          })}
        </div>
      </div>
    </section>
  )
}
