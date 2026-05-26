export default function WorkoutForm({

  addWorkout,

  exercise,
  setExercise,

  weight,
  setWeight,

  reps,
  setReps

}) {

  return (

    <section style={styles.formCard}>

      <h2>Registrar treino</h2>

      <form
        style={styles.form}
        onSubmit={addWorkout}
      >

        <input
          style={styles.input}
          type="text"
          placeholder="Exercício"

          value={exercise}

          onChange={(event) =>
            setExercise(event.target.value)
          }
        />

        <input
          style={styles.input}
          type="number"
          placeholder="Carga (kg)"

          value={weight}

          onChange={(event) =>
            setWeight(event.target.value)
          }
        />

        <input
          style={styles.input}
          type="number"
          placeholder="Repetições"

          value={reps}

          onChange={(event) =>
            setReps(event.target.value)
          }
        />

        <button style={styles.submitButton}>
          Adicionar treino
        </button>

      </form>

    </section>

  )

}

const styles = {

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

  }

}