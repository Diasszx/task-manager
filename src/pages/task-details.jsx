import { useLoaderData } from 'react-router-dom'

const TaskDetailsPage = () => {
  const task = useLoaderData()

  return (
    <div>
      <h1>{task?.title}</h1>
      <p>{task?.description}</p>
    </div>
  )
}

export default TaskDetailsPage
