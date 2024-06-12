export default function Home() {
  const data = [
    {id: 1, title: "Página: Characters", descriptions: ["Exibir personagens criados, ou mensagem quando não existir", "Criar Personagem - criação de personagem"]},
    {id: 2, title: "Página: Campanhas", descriptions: ["Criar Campanha - criar campanha com personagem ou como mestre"]},
    {id: 3, title: "Página: Wiki", descriptions: ["Página de consultas - Classes, Raças"]},
    {id: 4, title: "Página: Notas", descriptions: ["Página de anotações"]},
    {id: 5, title: "Página: Conta", descriptions: ["Exibir perfil e permitir edição - Nome, E-mail"]},
  ]

  return <div className="container min-h-[calc(100vh-10.4rem)] my-6 lg:min-h-[calc(100vh-10rem)] lg:container">
    <h1 className="mb-6 text-black/80">RPG Maker</h1>
    <div className="flex flex-col gap-6 text-black/70">
      {data && data.length > 0 && data.map((item): any => <div key={`home-map-${item.id}`} className="flex flex-col gap-2">
        <h2 className="text-lg">{item.title}</h2>
        {item?.descriptions && item.descriptions.length > 0 && item.descriptions.map((description, index) => <p key={`description-${item.id}-${index}`}>{description}</p>)}
      </div>)}
    </div>
  </div>
}