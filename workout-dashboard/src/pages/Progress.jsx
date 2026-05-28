import ProgressChart from "../components/ProgressChart"
import WorkoutCalendar from "../components/WorkoutCalendar"

export default function Progress({
// Recebe a lista de treinos como prop
  workouts

}) {

  return (
    <div className="space-y-6">
    // Exibe o gráfico de progresso, passando os treinos registrados como prop para o componente ProgressChart
    <ProgressChart workouts={workouts} />

     <WorkoutCalendar workouts={workouts} />
     </div>

  )

}