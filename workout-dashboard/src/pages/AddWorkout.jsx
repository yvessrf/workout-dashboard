import WorkoutForm from "../components/WorkoutForm";
import exercises from "../data/exercises";
import { useState } from "react"

export default function AddWorkout(props){
    return(
        // Exibe o formulário para adicionar um novo treino, passando as props necessárias para o componente WorkoutForm
        <WorkoutForm {...props} />
    )
}

