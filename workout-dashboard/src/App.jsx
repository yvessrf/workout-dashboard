import { AnimatePresence, motion } from "framer-motion"
import { useEffect, useState } from "react"

import MainLayout from "./layouts/MainLayout"

import Feed from "./pages/Feed"
import AddWorkout from "./pages/AddWorkout"
import Progress from "./pages/Progress"
import {

  Routes,
  Route,
  Navigate

} from "react-router-dom"
import goals from "../data/goals"


export default function App() {
  // Estado para controlar a página atual exibida


  // Estado para armazenar a lista de treinos, inicializado a partir do localStorage
  const [workouts, setWorkouts] =
    useState(() => {

      const savedWorkouts =
        localStorage.getItem("workouts")

      return savedWorkouts
        ? JSON.parse(savedWorkouts)
        : []

    })
  // Estados para controlar os campos do formulário de adicionar treino
  const [exercise, setExercise] =
    useState("")
  // Estado para controlar o campo de peso do formulário
  const [weight, setWeight] =
    useState("")
  // Estado para controlar o campo de repetições do formulário
  const [reps, setReps] =
    useState("")

  useEffect(() => {

    localStorage.setItem(
      "workouts",
      JSON.stringify(workouts)
    )

  }, [workouts])
  // Função para adicionar um novo treino à lista de treinos
  function addWorkout(event) {
    // Previne o comportamento padrão do formulário, que é recarregar a página
    event.preventDefault()
    // Cria um novo objeto de treino com os dados do formulário e um ID único baseado no timestamp
    const newWorkout = {

      id: Date.now(),

      exercise,
      weight,
      reps,
      date: new Date().toISOString()

    }
    // Atualiza a lista de treinos adicionando o novo treino, usando o operador spread para manter os treinos anteriores
    setWorkouts([
      ...workouts,
      newWorkout
    ])
    // Limpa os campos do formulário após adicionar o treino
    setExercise("")
    setWeight("")
    setReps("")
    // Volta para a página de feed para mostrar o treino recém-adicionado
    setCurrentPage("Feed")

  }

  return (


    <MainLayout>

      <Routes>

        <Route

          path="/"

          element={
            <Navigate to="/feed" />
          }

        />

        <Route

          path="/feed"

          element={

            <Feed workouts={workouts} />

          }

        />

        <Route

          path="/add"

          element={

            <AddWorkout

              addWorkout={addWorkout}

              exercise={exercise}
              setExercise={setExercise}

              weight={weight}
              setWeight={setWeight}

              reps={reps}
              setReps={setReps}

            />

          }

        />

        <Route

          path="/progress"

          element={

            <Progress workouts={workouts} />

          }

        />

        

      </Routes>

    </MainLayout>

  )
}