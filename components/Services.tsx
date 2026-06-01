import { services } from '@/data/content';

export default function Services() {
  return (
    <section id="prestazioni" className="py-20 bg-slate-50">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center max-w-3xl mx-auto mb-16">
          <h2 className="text-3xl font-bold text-slate-900 mb-4">Prestazioni e Aree di Interesse</h2>
          <p className="text-slate-600">
            Dalla visita di base alla diagnostica per immagini complessa, un approccio evidence-based per la salute della tua vista.
          </p>
        </div>
        
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {services.map((s) => (
            <div key={s.id} className="bg-white p-8 rounded-2xl shadow-sm border border-slate-100 hover:shadow-md transition-shadow">
              <h3 className="text-xl font-bold text-slate-900 mb-3">{s.title}</h3>
              <p className="text-slate-600 mb-4 text-sm leading-relaxed">{s.desc}</p>
              <div className="bg-slate-50 p-3 rounded-lg border border-slate-100">
                <span className="block text-xs font-semibold text-slate-500 uppercase mb-1">Quando è utile</span>
                <span className="text-sm text-slate-700">{s.useful}</span>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}