import { useState, useEffect } from 'react'
import WorkoutForm from "./components/WorkoutForm"
import WorkoutList from "./components/WorkoutList"


export default function App() {
  // Estado para armazenar a lista de treinos
  // Inicializa o estado com os treinos salvos no localStorage, se existirem
  const [workouts, setWorkouts] = useState(()=>{
    const savedWorkouts = localStorage.getItem("workouts")
    return savedWorkouts ? JSON.parse(savedWorkouts) : []
  })


  const [exercise, setExercise] = useState("")
  const [weight, setWeight] = useState("")
  const [reps, setReps] = useState("")

  // useEffect para salvar os treinos no localStorage sempre que a lista de treinos for atualizada
  useEffect(() => {
    localStorage.setItem("workouts", JSON.stringify(workouts))
  }, [workouts])

  // Função para adicionar um novo treino
  function addWorkout(event) {
    event.preventDefault()
    const newWorkout = {
      id: Date.now(),
      exercise,
      weight,
      reps
    }
    // Atualiza a lista de treinos com o novo treino
    setWorkouts([...workouts, newWorkout])
    setExercise("")
    setWeight("")
    setReps("")
  }


  return (
    <div style={styles.app}>
      <header style={styles.header}>
        <div>
          <h1 style={styles.title}>
            Workout Dashboard
          </h1>
          <p style={styles.subtitle}>
            Acompanhe seus treinos e evolução
          </p>
        </div>
        <button style={styles.button}>
          🌙
        </button>
      </header>
      <section style={styles.statsGrid}>
        <div style={styles.card}>
          <h2>12</h2>
          <p>Treinos no mês</p>
        </div>
        <div style={styles.card}>
          <h2>84%</h2>
          <p>Frequência</p>
        </div>
        <div style={styles.card}>
          <h2>+18kg</h2>
          <p>PR Supino</p>
        </div>
      </section>
      <section style={styles.formCard}>

        <h2>Registrar treino</h2>

        <WorkoutForm

          addWorkout={addWorkout}

          exercise={exercise}
          setExercise={setExercise}

          weight={weight}
          setWeight={setWeight}

          reps={reps}
          setReps={setReps}

        />

        <WorkoutList workouts={workouts} />

      </section>
    </div>
  )
}

const styles = {

  app: {

    minHeight: "100vh",

    background:
      "linear-gradient(135deg, #0f172a, #1e293b)",

    color: "white",

    fontFamily: "Arial, sans-serif",

    padding: "40px"

  },

  header: {

    display: "flex",

    justifyContent: "space-between",

    alignItems: "center",

    marginBottom: "40px"

  },

  title: {

    fontSize: "36px",

    marginBottom: "8px"

  },

  subtitle: {

    opacity: 0.7

  },

  button: {

    background: "#334155",

    border: "none",

    color: "white",

    padding: "12px 16px",

    borderRadius: "12px",

    cursor: "pointer"

  },

  statsGrid: {

    display: "grid",

    gridTemplateColumns:
      "repeat(auto-fit, minmax(220px, 1fr))",

    gap: "20px",

    marginBottom: "40px"

  },

  card: {

    background: "rgba(255,255,255,0.08)",

    backdropFilter: "blur(10px)",

    padding: "24px",

    borderRadius: "24px",

    border: "1px solid rgba(255,255,255,0.08)"

  },

  formCard: {

    background: "rgba(255,255,255,0.08)",

    padding: "24px",

    borderRadius: "24px",

    backdropFilter: "blur(10px)"

  },

  form: {

    display: "grid",

    gap: "16px",

    marginTop: "20px"

  },

  input: {

    padding: "14px",

    borderRadius: "12px",

    border: "none",

    outline: "none",

    background: "rgba(255,255,255,0.08)",

    color: "white"

  },

  submitButton: {

    background: "#3b82f6",

    border: "none",

    padding: "14px",

    borderRadius: "12px",

    color: "white",

    fontWeight: "bold",

    cursor: "pointer"

  },
  workoutList: {

    display: "grid",

    gap: "16px",

    marginTop: "20px"

  },

  workoutItem: {

    background: "rgba(255,255,255,0.06)",

    padding: "16px",

    borderRadius: "16px"

  }

}
