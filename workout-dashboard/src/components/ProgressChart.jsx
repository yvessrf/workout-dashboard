import {

  Chart as ChartJS,

  CategoryScale,
  LinearScale,

  PointElement,
  LineElement,

  Tooltip,
  Legend

} from "chart.js"

import { Line } from "react-chartjs-2"

import { useState } from "react"

import {

  TrendingUp,
  Calendar

} from "lucide-react"

ChartJS.register(

  CategoryScale,
  LinearScale,

  PointElement,
  LineElement,

  Tooltip,
  Legend

)

export default function ProgressChart({

  workouts

}) {

  const [period, setPeriod] =
    useState("weekly")

  const labels = workouts.map(
    (_, index) => `#${index + 1}`
  )

  const weights = workouts.map(
    (workout) =>
      Number(workout.weight)
  )

  const data = {

    labels,

    datasets: [

      {

        label: "Carga",

        data: weights,

        borderColor: "#f97316",

        backgroundColor: "#f97316",

        tension: 0.4,

        pointRadius: 5,

        pointHoverRadius: 7

      }

    ]

  }

  const options = {

    responsive: true,

    maintainAspectRatio: false,

    plugins: {

      legend: {

        display: false

      }

    },

    scales: {

      x: {

        grid: {

          display: false

        },

        ticks: {

          color: "#71717a"

        }

      },

      y: {

        grid: {

          color: "#f4f4f5"

        },

        ticks: {

          color: "#71717a"

        }

      }

    }

  }

  const maxWeight =
    Math.max(...weights, 0)

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

      <div
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

          <div
            className="
              flex
              items-center
              gap-3
              mb-3
            "
          >

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

              <TrendingUp
                className="
                  text-orange-500
                "
              />

            </div>

            <div>

              <h2
                className="
                  text-3xl
                  font-bold
                "
              >

                Evolução

              </h2>

              <p
                className="
                  text-zinc-500
                "
              >

                Progressão de carga

              </p>

            </div>

          </div>

        </div>

        <div
          className="
            flex
            items-center
            gap-3
          "
        >

          <button

            onClick={() =>
              setPeriod("weekly")
            }

            className={`
              px-5
              py-3

              rounded-2xl

              transition-all

              ${
                period === "weekly"

                  ? `
                    bg-orange-500
                    text-white
                  `

                  : `
                    bg-zinc-100
                    text-zinc-600
                  `
              }
            `}
          >

            Semanal

          </button>

          <button

            onClick={() =>
              setPeriod("monthly")
            }

            className={`
              px-5
              py-3

              rounded-2xl

              transition-all

              ${
                period === "monthly"

                  ? `
                    bg-orange-500
                    text-white
                  `

                  : `
                    bg-zinc-100
                    text-zinc-600
                  `
              }
            `}
          >

            Mensal

          </button>

        </div>

      </div>

      <div
        className="
          grid
          grid-cols-1
          md:grid-cols-3
          gap-4
          mb-8
        "
      >

        <div
          className="
            bg-zinc-50

            rounded-2xl

            p-5
          "
        >

          <p
            className="
              text-zinc-500
              mb-2
            "
          >

            Maior carga

          </p>

          <h3
            className="
              text-3xl
              font-bold
            "
          >

            {maxWeight}kg

          </h3>

        </div>

        <div
          className="
            bg-zinc-50

            rounded-2xl

            p-5
          "
        >

          <p
            className="
              text-zinc-500
              mb-2
            "
          >

            Treinos

          </p>

          <h3
            className="
              text-3xl
              font-bold
            "
          >

            {workouts.length}

          </h3>

        </div>

        <div
          className="
            bg-zinc-50

            rounded-2xl

            p-5
          "
        >

          <p
            className="
              text-zinc-500
              mb-2
            "
          >

            Frequência

          </p>

          <h3
            className="
              text-3xl
              font-bold
            "
          >

            4x

          </h3>

        </div>

      </div>

      <div
        className="
          h-[400px]
        "
      >

        <Line
          data={data}
          options={options}
        />

      </div>

    </section>

  )

}