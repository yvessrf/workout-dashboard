export default function Navbar({
    // Recebe a página atual e a função para atualizar a página como props
    currentPage,
    setCurrentPage
}) {
    // Define os itens de navegação
    const navItems = [
        "Feed",
        "Adicionar",
        "Progresso"
    ]
    // Retorna o JSX do componente Navbar, com os botões de navegação
    return (
        <header className="w-full bg-white border-b border-zinc-200">

            <div className="
          max-w-7xl
          mx-auto
          px-6
          py-4
          flex
          items-center
          justify-between
        ">

                <h1
                    className="
            text-3xl
            font-bold
            text-orange-500
          "
                >
                    Acompanhe seu Treino!
                </h1>
               
                <nav className="flex items-center gap-3">
                  
                    {navItems.map((item) => (

                        <button

                            key={item}

                            onClick={() =>
                                setCurrentPage(item)
                            }
                            // Aplica estilos diferentes para o item de navegação ativo
                            // Se o item for a página atual, aplica um estilo de destaque, caso contrário, aplica um estilo de hover
                            // Usa template literals para construir a classe CSS dinamicamente com base na condição
                            className={`
                px-5
                py-2
                rounded-xl
                transition-all
                
                ${currentPage === item
                                    ? "bg-zinc-100 font-semibold"
                                    : "hover:bg-zinc-100"
                                }
              `}
                        >

                            {item}

                        </button>

                    ))}

                </nav>

            </div>

        </header>

    )

}
