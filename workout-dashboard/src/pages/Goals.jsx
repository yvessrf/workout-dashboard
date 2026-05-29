import goals from "../data/goals"

{goals.map((goal) => (

  <Card key={goal.id}>

    <h3 className="font-semibold">
      {goal.title}
    </h3>

    <p className="mt-2">
      {goal.progress} / {goal.target}
    </p>

  </Card>

))}