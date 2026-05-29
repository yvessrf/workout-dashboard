import { createContext, useEffect, useState } from "react"

export const ThemeContext = createContext()

export function ThemeProvider({ children }) {

  const [theme, setTheme] = useState(() => {

  const savedTheme =
    localStorage.getItem("theme")

  return savedTheme || "light"

})

  function toggleTheme() {

    setTheme((prevTheme) =>
      prevTheme === "light"
        ? "dark"
        : "light"
    )

  }

  useEffect(() => {

    const html = document.documentElement

    if (theme === "dark") {

      html.classList.add("dark")

    } else {

      html.classList.remove("dark")

    }

    localStorage.setItem("theme", theme)

  }, [theme])

  return (

    <ThemeContext.Provider
      value={{
        theme,
        toggleTheme,
      }}
    >

      {children}

    </ThemeContext.Provider>

  )

}