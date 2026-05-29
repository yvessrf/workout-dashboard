import { Plus } from "lucide-react"
import { useState } from "react"

import exercises from "../data/exercises"

export default function WorkoutForm({

  
  addWorkout,

  exercise,
  setExercise,

  weight,
  setWeight,

  reps,
  setReps

}) {
const [muscleGroup, setMuscleGroup] =
  useState("")

  return (

    <section
      className="
        max-w-3xl
        mx-auto
      "
    >

      <div
        className="
          bg-white
          rounded-3xl
          border
          border-zinc-200
          p-8
        "
      >

        <h2
          className="
            text-4xl
            font-bold
            mb-10
          "
        >

          Novo Treino

        </h2>

        <form
          onSubmit={addWorkout}
          className="space-y-6"
        >

          <div>

            

            <div className="space-y-4">

              <div>

                <label
                  className="
        block
        mb-2
        text-sm
        font-medium
        text-zinc-700
      "
                >

                  Grupamento muscular

                </label>

                <select

                  value={muscleGroup}

                  onChange={(event) => {

                    setMuscleGroup(
                      event.target.value
                    )

                    setExercise("")
                  }}

                  className="
        w-full

        p-4

        rounded-2xl

        border
        border-zinc-200

        bg-zinc-50

        outline-none

        focus:border-orange-500
      "
                >

                  <option value="">

                    Selecione

                  </option>

                  {Object.keys(exercises).map(
                    (group) => (

                      <option
                        key={group}
                        value={group}
                      >

                        {group}

                      </option>

                    )
                  )}

                </select>

              </div>

              <div>

                <label
                  className="
        block
        mb-2
        text-sm
        font-medium
        text-zinc-700
      "
                >

                  Exercício

                </label>

                <select

                  value={exercise}

                  onChange={(event) =>
                    setExercise(
                      event.target.value
                    )
                  }

                  disabled={!muscleGroup}

                  className="
        w-full

        p-4

        rounded-2xl

        border
        border-zinc-200

        bg-zinc-50

        outline-none

        focus:border-orange-500

        disabled:opacity-50
      "
                >

                  <option value="">

                    Selecione

                  </option>

                  {muscleGroup &&
                    exercises[muscleGroup].map(
                      (exerciseName) => (

                        <option
                          key={exerciseName}
                          value={exerciseName}
                        >

                          {exerciseName}

                        </option>

                      )
                    )
                  }

                </select>

              </div>

            </div>

          </div>

          <div
            className="
              grid
              grid-cols-1
              md:grid-cols-2
              gap-5
            "
          >

            <div>

              <label
                className="
                  block
                  text-sm
                  font-medium
                  text-zinc-700
                  mb-2
                "
              >

                Repetições

              </label>

              <input

                type="number"

                placeholder="12"

                value={reps}

                onChange={(event) =>
                  setReps(
                    event.target.value
                  )
                }

                className="
                  w-full
                  h-14
                  px-4
                  rounded-2xl
                  bg-zinc-100
                  border
                  border-zinc-200
                  outline-none

                  focus:ring-2
                  focus:ring-orange-500

                  transition-all
                "
              />

            </div>

            <div>

              <label
                className="
                  block
                  text-sm
                  font-medium
                  text-zinc-700
                  mb-2
                "
              >

                Carga (kg)

              </label>

              <input

                type="number"

                placeholder="80"

                value={weight}

                onChange={(event) =>
                  setWeight(
                    event.target.value
                  )
                }

                className="
                  w-full
                  h-14
                  px-4
                  rounded-2xl
                  bg-zinc-100
                  border
                  border-zinc-200
                  outline-none

                  focus:ring-2
                  focus:ring-orange-500

                  transition-all
                "
              />

            </div>

          </div>

          <button

            type="submit"

            className="
              w-full
              h-14

              bg-orange-500
              hover:bg-orange-600

              text-white
              font-semibold

              rounded-2xl

              flex
              items-center
              justify-center
              gap-2

              transition-all
            "
          >

            <Plus size={20} />

            Adicionar treino

          </button>

        </form>

      </div>

    </section>

  )

}