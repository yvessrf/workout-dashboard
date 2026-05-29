import { useContext } from "react"
import { ThemeContext } from "../context/ThemeContext"
import { Moon, Sun } from "lucide-react"

import {

  Search,
  Bell

} from "lucide-react"

export default function TopHeader() {

  const today = new Date()

  const { theme, toggleTheme } =
    useContext(ThemeContext)



  const formattedDate =
    today.toLocaleDateString(
      "pt-BR",
      {

        weekday: "long",
        day: "numeric",

        month: "long"

      }
    )

  return (

    <header
      className="
        flex
        flex-col
        lg:flex-row

        lg:items-center
        lg:justify-between

        gap-6

        mb-8
      "
    >

      <div>



        <p
          className="
            text-zinc-500
            capitalize
            mb-2
          "
        >

          {formattedDate}

        </p>

        <h1
          className="
            text-4xl
            font-bold
            text-zinc-900
          "
        >

          Bem-vindo de volta 👋

        </h1>

      </div>

      <div
        className="
          flex
          items-center
          gap-4
        "
      >

        <div
          className="
            bg-white

            border
            border-zinc-200

            rounded-2xl

            px-4
            h-14

            flex
            items-center
            gap-3

            w-full
            lg:w-80
          "
        >

          <Search
            size={18}
            className="
              text-zinc-400
            "
          />

          <input

            type="text"

            placeholder="
              Buscar treino...
            "

            className="
              flex-1

              bg-transparent

              outline-none

              text-sm
            "
          />

        </div>

        <button
          className="
            w-14
            h-14

            bg-white

            rounded-2xl

            border
            border-zinc-200

            flex
            items-center
            justify-center

            hover:bg-zinc-50

            transition-all
          "
        >

          <Bell
            className="
              text-zinc-600
            "
          />

        </button>

        <button
          onClick={toggleTheme}
          className="
    p-2
    rounded-2xl
    
    dark:bg-zinc-800
    bg-white
    w-14
    h-14
    flex
            items-center
            justify-center


    transition-colors
  "
        >

          {theme === "light"

            ? <Moon size={20} />

            : <Sun size={20} />

          }

        </button>

        <div
          className="
            w-14
            h-14

            rounded-2xl

            bg-orange-500

            flex
            items-center
            justify-center

            text-white
            font-bold
            text-lg
          "
        >

          Y

        </div>



      </div>

    </header>

  )

}