export function Input({

  placeholder,
  value,
  onChange,
  type = "text",

}) {

  return (

    <input

      type={type}

      placeholder={placeholder}

      value={value}

      onChange={onChange}

      className="

        w-full

        px-4
        py-3

        rounded-xl

        border

        border-border-light
        dark:border-border-dark

        bg-card-light
        dark:bg-card-dark

        text-black
        dark:text-white

        outline-none

        focus:ring-2
        focus:ring-orange-500

      "

    />

  )

}