/// Componente SectionTitle para estilizar os títulos das seções da aplicação
export function SectionTitle({ children }) {
  return (
    <h2 className="
      text-2xl
      font-bold
      text-zinc-100
      mb-4
    ">
      {children}
    </h2>
  )
}