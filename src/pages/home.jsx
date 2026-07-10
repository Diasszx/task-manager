import { useQuery } from '@tanstack/react-query'

import { LayoutIcon, LoaderIcon2, TaskIcon2, WaterIcon } from '../assets/icons'
import DashboardCards from '../components/DashboardCards'
import Header from '../components/Header'
import TaskItem from '../components/TaskItem'
import { fetchTasks } from '../services/tasks'

const Home = () => {
  const { data: tasks = [] } = useQuery({
    queryKey: ['tasks'],
    queryFn: fetchTasks,
  })
  const totalTask = tasks
  const notStartedTasks = tasks?.filter((task) => task.status === 'not_started')
  const inProgressTasks = tasks?.filter((task) => task.status === 'in_progress')
  const completedTasks = tasks?.filter((task) => task.status === 'done')

  return (
    <div className="w-full px-8 py-16">
      <Header title="Início" subtitle="Início"></Header>
      <div className="mb-6 grid grid-cols-2 gap-3 md:grid-cols-4 md:gap-9">
        <DashboardCards
          icon={<LayoutIcon />}
          mainText={totalTask.length}
          secondaryText="Tarefas disponíveis"
        />
        <DashboardCards
          icon={<TaskIcon2 />}
          mainText={completedTasks.length}
          secondaryText="Tarefas concluídas"
        />
        <DashboardCards
          icon={<LoaderIcon2 />}
          mainText={inProgressTasks.length}
          secondaryText="Tarefas em andamento"
        />
        <DashboardCards
          icon={<TaskIcon2 />}
          mainText={notStartedTasks.length}
          secondaryText="Tarefas não iniciadas"
        />
      </div>

      <div className="flex w-full flex-col space-y-6 rounded-[10px] bg-white p-6">
        <div>
          <h3>Tarefas</h3>
          <span className="text-sm text-brand-dark-gray">
            Resumo das Tarefas disponíveis
          </span>
        </div>
        <div className="space-y-3">
          {tasks.length == 0 && (
            <p className="text-sm text-brand-text-gray">
              Nenhuma tarefa cadastrada.
            </p>
          )}
          {tasks.map((task) => (
            <TaskItem key={task.id} task={task} />
          ))}
        </div>
      </div>
    </div>
  )
}

export default Home
