export default function Team() {
  const team = [
    {
      name: "Kelvin Muriungi",
      role: "Chief Executive Officer (CEO)",
      image: "/team/kelvin.jpeg",
    },
    {
      name: "Kelvin Koome",
      role: "Chief Technology Officer (CTO)",
      image: "/team/koome.jpeg",
    },
    {
      name: "Gideon Ushindi",
      role: "Lead Software Engineer",
      image: "/team/gideonushindi.jpeg",
    },
  ]

  return (
    <section className="py-20 bg-gray-50">
      <div className="max-w-7xl mx-auto px-6 text-center">
        <h2 className="text-3xl font-bold mb-12">Our Team</h2>

        <div className="grid md:grid-cols-3 gap-8">
          {team.map((member) => (
            <div
              key={member.name}
              className="bg-white p-6 rounded-xl shadow hover:shadow-lg transition"
            >
              {/* Image */}
              <div className="flex justify-center mb-4">
                <img
                  src={member.image}
                  alt={member.name}
                  className="w-24 h-24 rounded-full object-cover border-4 border-yellow-100"
                />
              </div>

              {/* Name */}
              <h3 className="font-semibold text-lg">
                {member.name}
              </h3>

              {/* Role */}
              <p className="text-yellow-600 text-sm">
                {member.role}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
