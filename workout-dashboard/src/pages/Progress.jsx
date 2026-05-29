import ProgressChart from "../components/ProgressChart"
import WorkoutCalendar from "../components/WorkoutCalendar"

export default function Progress({
// Recebe a lista de treinos como prop
  workouts

}) {

  return (
    <div className="space-y-6">
    
    <ProgressChart workouts={workouts} />

     <WorkoutCalendar workouts={workouts} />
     </div>

  )

}