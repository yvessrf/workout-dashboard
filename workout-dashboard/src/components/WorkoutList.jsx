import {

  Dumbbell,
  Repeat,
  Weight

} from "lucide-react"

export default function WorkoutList({

  workouts

}) {

  return (

    <section
      className="
        bg-white
        rounded-3xl
        border
        border-zinc-200
        p-8
      "
    >

      <div
        className="
          flex
          items-center
          justify-between
          mb-8
        "
      >

        <div>

          <h2
            className="
              text-3xl
              font-bold
              mb-1
            "
          >

            Histórico

          </h2>

          <p className="text-zinc-500">

            Seus últimos treinos

          </p>

        </div>

        <div
          className="
            w-12
            h-12
            rounded-2xl

            bg-orange-100

            flex
            items-center
            justify-center
          "
        >

          <Dumbbell
            className="
              text-orange-500
            "
          />

        </div>

      </div>

      <div className="space-y-4">

        {workouts.length === 0 && (

          <div
            className="
              py-20
              text-center
              text-zinc-400
            "
          >

            Nenhum treino registrado

          </div>

        )}

        {workouts
          .slice()
          .reverse()
          .map((workout) => (

            <div

              key={workout.id}

              className="
                p-5
                rounded-2xl

                border
                border-zinc-200

                hover:border-orange-300
                hover:shadow-md

                transition-all
              "
            >

              <div
                className="
                  flex
                  items-start
                  justify-between
                "
              >

                <div>

                  <h3
                    className="
                      text-xl
                      font-semibold
                      mb-3
                    "
                  >

                    {workout.exercise}

                  </h3>

                  <div
                    className="
                      flex
                      items-center
                      gap-3
                      flex-wrap
                    "
                  >

                    <div
                      className="
                        flex
                        items-center
                        gap-2

                        bg-zinc-100

                        px-3
                        py-2

                        rounded-xl

                        text-sm
                      "
                    >

                      <Weight size={16} />

                      {workout.weight}kg

                    </div>

                    <div
                      className="
                        flex
                        items-center
                        gap-2

                        bg-zinc-100

                        px-3
                        py-2

                        rounded-xl

                        text-sm
                      "
                    >

                      <Repeat size={16} />

                      {workout.reps} reps

                    </div>

                  </div>

                </div>

                <span
                  className="
                    text-sm
                    text-zinc-400
                  "
                >

                  Hoje

                </span>

              </div>

            </div>

          ))}

      </div>

    </section>

  )

}