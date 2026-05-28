import StatsCards from "../components/StatsCards"
import WorkoutList from "../components/WorkoutList"

export default function Feed({
// Recebe a lista de treinos como prop
  workouts

}) {

  return (

    <div className="space-y-6">
       
      <StatsCards workouts={workouts} />
      <WorkoutList workouts={workouts} />

    </div>

  )

}