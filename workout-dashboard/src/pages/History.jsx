import workouts from "../data/workouts"

import { Card } from "../components/ui/Card"
import { SectionTitle } from "../components/ui/SectionTitle"

export default function History() {

  return (

    <div className="space-y-4">

      <SectionTitle>
        Histórico
      </SectionTitle>

      {workouts.map((workout) => (

        <Card key={workout.id}>

          <h3 className="font-bold text-lg">
            {workout.workoutName}
          </h3>

          <p className="text-zinc-500 dark:text-zinc-400">
            {workout.date}
          </p>

          <p className="mt-2">
            Duração: {workout.duration} min
          </p>

        </Card>

      ))}

    </div>

  )

}