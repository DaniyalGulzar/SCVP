import Head from "next/head";

export default function Feature() {
  const features = [
    { img: "money.png", title: "Save Money" },
    { img: "clock.png", title: "Save Time" },
    { img: "man.png", title: "Save Stress" },
  ];

  return (
    <>
      <Head>
        <title>Features | Autospar</title>
      </Head>
      <main className="container mx-auto p-6 font-roboto">
        <h2 className="text-3xl font-semibold mb-8">Our Features</h2>
        <div className="grid md:grid-cols-3 gap-6">
          {features.map((feature, i) => (
            <div
              key={i}
              className="border border-gray-300 rounded p-4 text-center shadow hover:shadow-lg transition"
            >
              <img
                src={`/images/${feature.img}`}
                alt={feature.title}
                className="mx-auto mb-4 h-20"
              />
              <h5 className="text-xl font-bold mb-2">{feature.title}</h5>
              <p className="text-gray-600">
                It is a long established fact that a reader will be distracted
                by the readable content.
              </p>
            </div>
          ))}
        </div>
      </main>
    </>
  );
}
