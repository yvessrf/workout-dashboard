import TopHeader from "../components/TopHeader"

import {

    House,
    PlusSquare,
    ChartColumn

} from "lucide-react"

export default function MainLayout({
    // Recebe os filhos (conteúdo das páginas) e o estado de navegação para controlar a página atual
    children,

    currentPage,
    setCurrentPage

}) {

    const navItems = [

        {
            label: "Feed",
            icon: House
        },

        {
            label: "Adicionar",
            icon: PlusSquare
        },

        {
            label: "Progresso",
            icon: ChartColumn
        }

    ]

    return (

        <div className="flex bg-zinc-100 min-h-screen">

            {/* SIDEBAR */}

            <aside
                className="
          w-64
          min-h-screen

          bg-white

          border-r
          border-zinc-200

          p-6

          flex
          flex-col

          fixed
          left-0
          top-0
        "
            >

                <div className="mb-12">

                    <h1
                        className="
              text-4xl
             
              text-black-500
            "
                    >

                        Seu treino

                    </h1>

                    <p
                        className="
              text-zinc-400
              mt-2
            "
                    >

                        Workout Dashboard

                    </p>

                </div>

                <nav className="space-y-3">

                    {navItems.map((item) => {

                        const Icon = item.icon

                        return (

                            <button

                                key={item.label}

                                onClick={() =>
                                    setCurrentPage(item.label)
                                }

                                className={`
                  w-full

                  flex
                  items-center
                  gap-3

                  px-4
                  py-3

                  rounded-2xl

                  transition-all

                  ${currentPage === item.label

                                        ? `
                        bg-orange-500
                        text-white
                      `

                                        : `
                        text-zinc-600
                        hover:bg-zinc-100
                      `
                                    }
                `}
                            >

                                <Icon size={20} />

                                <span className="font-medium">

                                    {item.label}

                                </span>

                            </button>

                        )

                    })}

                </nav>

            </aside>

            {/* CONTEÚDO */}

            <div
                className="
          flex-1

          ml-64

          p-8
        "
            >

                <TopHeader />

                <div
                    className="
            max-w-7xl
            mx-auto
          "
                >

                    {children}

                </div>

            </div>

        </div>

    )

}
