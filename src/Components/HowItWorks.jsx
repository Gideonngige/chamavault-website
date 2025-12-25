export default function HowItWorks() {
  return (
    <section className="py-20">
      <div className="max-w-7xl mx-auto px-6 text-center">
        <h2 className="text-3xl font-bold mb-12">How It Works</h2>
        <div className="grid md:grid-cols-3 gap-8">
          {["Create Group", "Invite Members", "Save & Invest"].map(step => (
            <div key={step} className="p-6 border rounded-xl">
              <h3 className="font-semibold text-xl mb-2">{step}</h3>
              <p className="text-gray-600">
                Simple steps to start your chama journey.
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
