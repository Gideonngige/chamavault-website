export default function Team() {
  return (
    <section className="py-20">
      <div className="max-w-7xl mx-auto px-6 text-center">
        <h2 className="text-3xl font-bold mb-12">Our Team</h2>
        <div className="grid md:grid-cols-3 gap-8">
          {["CEO", "CTO", "Lead Engineer"].map(role => (
            <div key={role} className="p-6 border rounded-xl">
              <div className="w-24 h-24 bg-gray-300 rounded-full mx-auto mb-4" />
              <h3 className="font-semibold">{role}</h3>
              <p className="text-gray-500">ChamaVault</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
