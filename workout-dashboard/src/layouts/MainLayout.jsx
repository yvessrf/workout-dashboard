import TopHeader from "../components/TopHeader"
import { NavLink } from "react-router-dom"

import {

    House,
    PlusSquare,
    ChartColumn

} from "lucide-react"



export default function MainLayout({
    // Recebe os filhos (conteúdo das páginas) e o estado de navegação para controlar a página atual
    children,


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

        <div className="
  flex
  min-h-screen

  bg-zinc-100
  dark:bg-zinc-950

  text-black
  dark:text-white
">

            {/* SIDEBAR */}

            <aside
                className="
          w-64
          min-h-screen

         bg-card-light
dark:bg-card-dark

          border-r
         border-border-light
dark:border-border-dark

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

                            <NavLink

                                to={
                                    item.label === "Feed"

                                        ? "/feed"

                                        : item.label === "Adicionar"

                                            ? "/add"

                                            : "/progress"
                                }

                                key={item.label}

                                className={({ isActive }) => `
    w-full

    flex
    items-center
    gap-3

    px-4
    py-3

    rounded-2xl

    transition-all

    ${isActive

                                        ? `
          bg-orange-500
          text-white
        `

                                        : `
          text-zinc-600 dark:text-zinc-300
          hover:bg-zinc-100 dark:hover:bg-zinc-800
        `
                                    }
  `}
                            >

                                <Icon size={20} />

                                <span className="font-medium">

                                    {item.label}

                                </span>

                            </NavLink>
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
