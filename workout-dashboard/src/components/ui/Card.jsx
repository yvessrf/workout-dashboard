export function Card({ children, className = "" }) {

  return (

    <div
      className={`
        
        rounded-2xl
        
        border
        
        border-border-light
        dark:border-border-dark
        
        bg-card-light
        dark:bg-card-dark
        
        p-4
        
        shadow-sm
        
        ${className}
      `}
    >

      {children}

    </div>

  )

}