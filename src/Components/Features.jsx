import {
  Users,
  CreditCard,
  BarChart3,
  Bell,
  ClipboardList,
  Lock,
} from "lucide-react"

export default function Features() {
  const features = [
    {
      title: "Smart Group Management",
      description:
        "Easily create, manage, and organize chama groups with defined roles and permissions.",
      icon: Users,
    },
    {
      title: "Digital Contributions & Loans",
      description:
        "Track member contributions, issue loans, and manage repayments digitally.",
      icon: CreditCard,
    },
    {
      title: "Real-Time Analytics & Reports",
      description:
        "Get instant insights into savings, loans, and performance through visual reports.",
      icon: BarChart3,
    },
    {
      title: "Member Notifications & Transparency",
      description:
        "Members receive updates on contributions, loans, and activities in real time.",
      icon: Bell,
    },
    {
      title: "Automated Record Keeping",
      description:
        "All transactions are recorded automatically, reducing errors and paperwork.",
      icon: ClipboardList,
    },
    {
      title: "Secure Data & Privacy",
      description:
        "Your data is protected with strong encryption and secure access controls.",
      icon: Lock,
    },
  ]

  return (
    <section className="py-20 bg-gray-50">
      <div className="max-w-7xl mx-auto px-6">
        <h2 className="text-3xl font-bold text-center mb-12">
          Features
        </h2>

        <div className="grid md:grid-cols-3 lg:grid-cols-4 gap-6">
          {features.map((feature) => {
            const Icon = feature.icon
            return (
              <div
                key={feature.title}
                className="bg-white p-6 rounded-xl shadow text-center hover:shadow-lg hover:-translate-y-1 transition-all duration-300"
              >
                {/* Icon */}
                <div className="flex justify-center mb-4">
                  <div className="bg-yellow-100 p-4 rounded-full">
                    <Icon className="h-7 w-7 text-yellow-600" />
                  </div>
                </div>

                <h3 className="font-semibold text-lg mb-2">
                  {feature.title}
                </h3>

                <p className="text-gray-600 text-sm">
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
