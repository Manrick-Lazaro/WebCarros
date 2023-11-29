import Container from "../../components/container";

export default function Home(): JSX.Element {
  return (
    <>
      <Container>
        <section className="bg-white p-4 rounded-lg w-full max-w-3xl mx-auto flex justify-center items-center gap-2">
          <input
            type="text"
            placeholder="Digite o nome do carro..."
            className="w-full rounded-lg border-2 h-9 px-3 outline-none"
          />
          <button className="bg-red-500 rounded-lg h-9 px-3 text-white font-medium text-lg">
            Buscar
          </button>
        </section>

        <h1 className="font-bold text-center mt-6 text-2xl mb-4">
          Carros novos e usados em todo o brasil
        </h1>

        <main className="grid grid-cols-1 gap-6 md:grid-cols-2 lg:grid-cols-3">
          <section className="w-full rounded-lg bg-white">
            <img
              src="https://image.webmotors.com.br/_fotos/AnuncioUsados/gigante/2023/202311/20231125/toyota-corolla-2.0-vvtie-flex-xei-direct-shift-wmimagem1205492739.jpg?s=fill&w=249&h=186&q=70"
              alt="item"
              className="w-full rounded-lg max-h-72 mb-2 hover:scale-105 transition-all"
            />
            <p className="font-bold mt-1 mb-2 px-2">Toyota corola</p>

            <div className="flex flex-col px-2">
              <span className="text-zinc-700 mb-6">
                Ano 2016/2016 | 23.240 Km
              </span>
              <strong className="font-medium text-black text-xl">R$ 190.000</strong>
            </div>

            <div className="w-full h-px bg-slate-300 my-2"></div>

            <div className="px-2 pb-2">
              <span className="text-zinc-700">Natal - RN</span>
            </div>
          </section>
        </main>
      </Container>
    </>
  );
}
