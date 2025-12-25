export default function Features() {
  return (
    <section className="py-20 bg-gray-50">
      <div className="max-w-7xl mx-auto px-6">
        <h2 className="text-3xl font-bold text-center mb-12">Features</h2>
        <div className="grid md:grid-cols-4 gap-6">
          {["Loans", "Investments", "Reports", "Notifications"].map(f => (
            <div key={f} className="bg-white p-6 rounded-xl shadow text-center">
              <h3 className="font-semibold">{f}</h3>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
