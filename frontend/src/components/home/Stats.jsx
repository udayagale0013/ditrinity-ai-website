function Stats() {
  const stats = [
    { number: "50+", title: "Global Clients" },
    { number: "100+", title: "Projects Delivered" },
    { number: "10+", title: "AI Solutions" },
    { number: "24/7", title: "Support" },
  ];

  return (
    <section className="bg-[#0B1220] py-20">
      <div className="max-w-7xl mx-auto grid grid-cols-2 md:grid-cols-4 gap-8 px-8">

        {stats.map((item, index) => (
          <div
            key={index}
            className="bg-[#111827] rounded-2xl p-8 text-center hover:scale-105 duration-300"
          >
            <h2 className="text-5xl font-bold text-blue-500">
              {item.number}
            </h2>

            <p className="text-gray-300 mt-3">
              {item.title}
            </p>
          </div>
        ))}

      </div>
    </section>
  );
}

export default Stats;