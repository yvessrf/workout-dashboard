export function Button({

  children,
  className = "",
  onClick,

}) {

  return (

    <button

      onClick={onClick}

      className={`

        px-4
        py-2

        rounded-xl

        bg-orange-500
        hover:bg-orange-600

        text-white
        font-medium

        transition-colors

        ${className}

      `}
    >

      {children}

    </button>

  )

}