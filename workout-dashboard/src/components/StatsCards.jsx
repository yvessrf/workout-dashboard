import { motion } from "framer-motion"
import {

    CalendarDays,
    Flame,
    TrendingUp,
    Dumbbell

} from "lucide-react"

export default function StatsCards({

    workouts

}) {
    // Calcula as estatísticas com base nos treinos registrados
    const totalWorkouts = workouts.length

    const totalVolume = workouts.reduce(
        (total, workout) => {

            return total +
                (
                    Number(workout.weight) *
                    Number(workout.reps)
                )

        },
        0
    )
    // Calcula o número de exercícios únicos realizados, usando um Set para garantir a unicidade
    const uniqueExercises = new Set(

        workouts.map(
            (workout) => workout.exercise
        )

    ).size
    // Define as estatísticas a serem exibidas nos cards, incluindo título, valor, subtítulo, ícone e cores
    const stats = [

        {

            title: "Treinos",
            value: totalWorkouts,

            subtitle: "registrados",

            icon: CalendarDays,

            color: "text-blue-500",
            bg: "bg-blue-100"

        },

        {

            title: "Volume",

            value:
                `${(totalVolume / 1000).toFixed(1)}`,

            subtitle: "toneladas",

            icon: Flame,

            color: "text-orange-500",
            bg: "bg-orange-100"

        },

        {

            title: "Exercícios",

            value: uniqueExercises,

            subtitle: "realizados",

            icon: Dumbbell,

            color: "text-violet-500",
            bg: "bg-violet-100"

        }

    ]

    return (

        <section
            className="
        grid
        grid-cols-1
        md:grid-cols-2
        xl:grid-cols-3
        gap-6
      "
        >

            {stats.map((stat, index) => {

                const Icon = stat.icon

                return (

                    <motion.div
                        initial={{
                            opacity: 0,
                            y: 30
                        }}

                        animate={{
                            opacity: 1,
                            y: 0
                        }}

                        transition={{
                            duration: 0.4,
                            delay: index * 0.1
                        }}

                        key={stat.title}

                        className="
    bg-white
    rounded-3xl
    p-6

    border
    border-zinc-200

    hover:shadow-lg

    transition-all
  "

                    >

                        <div
                            className={`
                w-12
                h-12
                rounded-2xl
                flex
                items-center
                justify-center
                mb-5

                ${stat.bg}
              `}
                        >

                            <Icon
                                className={`
                  ${stat.color}
                `}
                            />

                        </div>

                        <h2
                            className={`
                text-5xl
                font-bold
                mb-2

                ${stat.color}
              `}
                        >

                            {stat.value}

                        </h2>

                        <p
                            className="
                text-lg
                font-medium
                text-zinc-700
              "
                        >

                            {stat.title}

                        </p>

                        <span
                            className="
                text-zinc-400
                text-sm
              "
                        >

                            {stat.subtitle}

                        </span>

                    </motion.div>

                )

            })}

        </section>

    )

}