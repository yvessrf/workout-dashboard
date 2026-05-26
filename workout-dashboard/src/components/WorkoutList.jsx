export default function WorkoutList({

  workouts

}) {

  return (

    <section style={styles.formCard}>

      <h2>Histórico de treinos</h2>

      <div style={styles.workoutList}>

        {workouts.map((workout) => (

          <div
            key={workout.id}
            style={styles.workoutItem}
          >

            <strong>
              {workout.exercise}
            </strong>

            <p>
              {workout.weight}kg × {workout.reps}
            </p>

          </div>

        ))}

      </div>

    </section>

  )

}

const styles = {

  formCard: {

    background: "rgba(255,255,255,0.08)",

    padding: "24px",

    borderRadius: "24px",

    backdropFilter: "blur(10px)",

    marginTop: "30px"

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