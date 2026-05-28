// Componente que exibe um calendário de frequência de treinos, mostrando os últimos 30 dias e destacando os dias em que houve treino registrado
export default function WorkoutCalendar({

  workouts

}) {

  const days = Array.from(
    { length: 30 },
    (_, index) => {

      const date = new Date()

      date.setDate(
        date.getDate() - index
      )

      return date

    }
  ).reverse()

  function hasWorkout(day) {

    return workouts.some((workout) => {

      const workoutDate =
        new Date(workout.date)

      return (
        workoutDate.toDateString() ===
        day.toDateString()
      )

    })

  }

  return (

    <section
      className="
        bg-white

        rounded-3xl

        border
        border-zinc-200

        p-8

        mt-6
      "
    >

      <div className="mb-8">

        <h2
          className="
            text-3xl
            font-bold
            mb-2
          "
        >

          Frequência

        </h2>

        <p className="text-zinc-500">

          Seus últimos 30 dias

        </p>

      </div>

      <div
        className="
          grid
          grid-cols-5
          md:grid-cols-10
          gap-3
        "
      >

        {days.map((day, index) => {

          const trained =
            hasWorkout(day)

          return (

            <div

              key={index}

              className={`
                aspect-square

                rounded-2xl

                flex
                items-center
                justify-center

                text-xs
                font-medium

                transition-all

                ${
                  trained

                    ? `
                      bg-orange-500
                      text-white
                    `

                    : `
                      bg-zinc-100
                      text-zinc-400
                    `
                }
              `}
            >

              {day.getDate()}

            </div>

          )

        })}

      </div>

    </section>

  )

}