import React from 'react';

export default function Services() {
  const specializzazioni = [
    {
      title: "Diagnostica con Lampada a Fessura",
      description: "Esame biomicroscopico approfondito del segmento anteriore e posteriore dell'occhio per la diagnosi tempestiva di ogni anomalia oculare.",
      image: "https://images.unsplash.com/photo-1579684385127-1ef15d508118?auto=format&fit=crop&w=600&q=80"
    },
    {
      title: "Imaging OCT & OCT-A",
      description: "Tomografia ottica a radiazione coerente per lo studio strutturale e vascolare degli strati retinici micrometrici, fondamentale per maculopatie e glaucoma.",
      image: "https://images.unsplash.com/photo-1551288049-bebda4e38f71?auto=format&fit=crop&w=600&q=80"
    },
    {
      title: "Retina Medica & Maculopatie",
      description: "Prevenzione, monitoraggio e gestione terapeutica avanzata della retinopatia diabetica, delle occlusioni vascolari e della degenerazione maculare.",
      image: "https://images.unsplash.com/photo-1530026405186-ed1ea0ac7a63?auto=format&fit=crop&w=600&q=80"
    }
  ];

  return (
    <section id="servizi" className="bg-slate-50 py-24">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="mx-auto max-w-3xl text-center mb-16">
          <h2 className="text-3xl font-bold tracking-tight text-slate-900 sm:text-4xl">
            Competenze Cliniche e Diagnostica
          </h2>
          <p className="mt-4 text-lg text-slate-600">
            Tecnologie di ultima generazione applicate alla salute della tua vista.
          </p>
        </div>

        <div className="grid grid-cols-1 gap-8 md:grid-cols-3">
          {specializzazioni.map((item, index) => (
            <div key={index} className="flex flex-col overflow-hidden rounded-2xl bg-white shadow-sm border border-slate-100 transition-all duration-200 hover:shadow-md">
              <div className="h-48 w-full overflow-hidden bg-slate-100">
                <img 
                  src={item.image} 
                  alt={item.title} 
                  className="h-full w-full object-cover transition-transform duration-300 hover:scale-105"
                />
              </div>
              <div className="flex flex-1 flex-col p-6">
                <h3 className="text-xl font-bold text-slate-900 mb-2">{item.title}</h3>
                <p className="text-sm leading-relaxed text-slate-600 flex-1">{item.description}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}