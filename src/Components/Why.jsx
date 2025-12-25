export default function Why() {
  return (
    <section className="py-20 bg-gray-50">
      <div className="max-w-7xl mx-auto px-6 text-center">
        <h2 className="text-3xl font-bold mb-12">Why ChamaVault?</h2>
        <div className="grid md:grid-cols-3 gap-8">
          {["Secure Savings", "Automated Records", "Transparent Management"].map((item) => (
            <div key={item} className="bg-white p-6 rounded-xl shadow">
              <h3 className="font-semibold text-xl mb-3">{item}</h3>
              <p className="text-gray-600">
                Manage your chama with confidence using modern digital tools.
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
