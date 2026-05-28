import WorkoutForm from "../components/WorkoutForm";

export default function AddWorkout(props){
    return(
        // Exibe o formulário para adicionar um novo treino, passando as props necessárias para o componente WorkoutForm
        <WorkoutForm {...props} />
    )
}