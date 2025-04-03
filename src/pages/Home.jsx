import { instructions } from "../utils/instructions";
import bg from '../assets/bg.png';
import { useState } from "react";

const Home = () => {
  const [activeSheet, setActiveSheet] = useState("Planilha Base");
  const [searchTerm, setSearchTerm] = useState("");

  const stepsToShow = searchTerm
    ? instructions.flatMap(ins => 
        ins.steps.map(step => ({ ...step, sheetTitle: ins.title }))
      ).filter(step =>
        step.subtitle.toLowerCase().includes(searchTerm.toLowerCase()) ||
        (Array.isArray(step.text) && step.text.some(text =>
          text.toLowerCase().includes(searchTerm.toLowerCase())
        ))
      )
    : (instructions.find(ins => ins.title === activeSheet)?.steps || []);

  return (
    <section className="p-4 flex max-w-7xl m-auto" style={{ height: "calc(100vh - 80px)" }}>
      <section className="w-7/12 rounded-bl-2xl rounded-tl-2xl bg-main p-4 overflow-y-auto">
        <section className="flex flex-col mb-4">
          <div className="flex-1 text-white p-2 font-semibold text-md w-fit">
            Pesquise por palavras-chave
          </div>
          <input
            type="text"
            className="bg-white p-2 shadow-sm rounded-xl"
            placeholder="Pesquisar..."
            value={searchTerm}
            onChange={(e) => setSearchTerm(e.target.value)}
          />
        </section>

        <section className="flex flex-col mb-4">
          <div className="flex-1 text-white p-2 font-semibold text-md w-fit">
            Sobre qual planilha está em dúvida?
          </div>
          <select
            className="bg-white p-2 shadow-sm rounded-xl"
            value={activeSheet}
            onChange={(e) => setActiveSheet(e.target.value)}
          >
            {instructions.map((ins, index) => (
              <option key={index}>{ins.title}</option>
            ))}
          </select>
        </section>

        <section>
          <h1 className="text-2xl text-white">
            {searchTerm ? "Resultados da busca" : activeSheet}
          </h1>
          <section>
            {stepsToShow.length > 0 ? (
              stepsToShow.map((step, index) => (
                <section key={index} className="border mb-4 rounded-xl shadow-xl bg-white p-4">
                  {searchTerm && (
                    <p className="text-sm italic text-gray-500">
                      📄 {step.sheetTitle}
                    </p>
                  )}
                  <h2 className="text-lg mb-4 font-bold">{step.subtitle}</h2>
                  {step.text?.map((text, i) => (
                    <p key={i} className="text-md mb-2">{text}</p>
                  ))}
                  {step.list && (
                    <section>
                      <span className="text-sm italic text-main">Passo a Passo:</span>
                      <ul className="list-decimal list-inside border rounded-sm p-2 mb-4">
                        {step.list.map((item, i) => (
                          <li key={i} className="text-sm mb-2">{item}</li>
                        ))}
                      </ul>
                    </section>
                  )}
                  {step.images && (
                    <section>
                      <span className="text-sm italic text-main">Imagens:</span>
                      <section className="flex overflow-x-auto items-start gap-4 bg-opaque rounded-sm p-2">
                        {step.images.map((img, i) => (
                          <img key={i} src={img} alt={`Imagem ${i}`} />
                        ))}
                      </section>
                    </section>
                  )}
                </section>
              ))
            ) : (
              <p className="text-white text-center">Nenhum resultado encontrado.</p>
            )}
          </section>
        </section>
      </section>

      <section
        className="w-5/12 bg-cover bg-no-repeat rounded-br-2xl rounded-tr-2xl"
        style={{ backgroundImage: `url(${bg})` }}
      ></section>
    </section>
  );
};

export default Home;
