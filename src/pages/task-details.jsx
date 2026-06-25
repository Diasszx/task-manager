import { useForm } from 'react-hook-form'
import { Link, useLoaderData, useNavigate } from 'react-router-dom'
import { toast } from 'sonner'

import { TrashIcon } from '../assets/icons'
import { LoaderIcon } from '../assets/icons'
import ArrowLeftIcon from '../assets/icons/arrow-left.svg?react'
import ChevronRightIcon from '../assets/icons/chevron-right.svg?react'
import Button from '../components/Button'
import Input from '../components/Input'
import TimeSelect from '../components/TimeSelect'
import useDeleteTask from '../hooks/data/use-delete-tasks'
import useUpdateTask from '../hooks/data/use-update-tasks'

const TaskDetailsPage = () => {
  const task = useLoaderData()
  const { mutate: deleteTaskMutation, isPending: isDeleting } = useDeleteTask(
    task.id
  )
  const { mutate: updateTaskMutation, isPending: isUpdating } = useUpdateTask(
    task.id
  )

  const navigate = useNavigate()
  const {
    handleSubmit,
    register,
    formState: { errors },
  } = useForm({
    defaultValues: {
      title: task.title,
      description: task.description,
      time: task.time,
    },
  })

  const handleSubmitClick = async (data) => {
    if (isUpdating) return
    updateTaskMutation(data)
  }

  const onDeleteTaskSucess = async () => {
    if (isDeleting) return
    deleteTaskMutation(undefined, {
      onSuccess: () => {
        toast.success('Tarefa deletada com sucesso!')
        navigate('/tasks')
      },
    })
  }

  return (
    <div className="px-8 py-16">
      <div className="mb-2 flex w-full justify-between">
        <Link
          to="/tasks"
          className="flex h-8 w-8 items-center justify-center rounded-full bg-brand-primary"
        >
          <ArrowLeftIcon />
        </Link>
      </div>

      <div className="mb-6 flex w-full justify-between">
        <div>
          <div className="mb-1 flex items-center gap-1">
            <Link
              to="/tasks"
              className="text-xs font-normal text-brand-text-gray"
            >
              Minhas Tarefas
            </Link>

            <ChevronRightIcon className="h-3 w-3" />

            <span className="text-xs font-semibold text-brand-primary">
              {task.title}
            </span>
          </div>

          <h2 className="text-xl font-semibold">{task.title}</h2>
        </div>

        <div className="flex items-center gap-3">
          <Button
            color="tertiary"
            onClick={onDeleteTaskSucess}
            disabled={isDeleting}
          >
            {isDeleting ? (
              <LoaderIcon className="animate-spin text-brand-white" />
            ) : (
              <>
                <TrashIcon />
                Deletar Tarefa
              </>
            )}
          </Button>
        </div>
      </div>
      <form onSubmit={handleSubmit(handleSubmitClick)}>
        <div className="rounded-xl bg-white p-6">
          <div className="space-y-6">
            <Input
              label="Título"
              id="title"
              {...register('title', {
                required: 'O título é obrigatório!',
                validate: (value) => {
                  if (!value.trim()) {
                    return 'O título não pode ser vazio'
                  }
                  return true
                },
              })}
              errorMessage={errors?.title?.message}
            />
            <TimeSelect
              label="Horário"
              {...register('time', {
                required: 'O horário é obrigatório!',
                validate: (value) => {
                  if (!value.trim()) {
                    return 'O tempo não pode ser vazio'
                  }
                  return true
                },
              })}
              errorMessage={errors?.time?.message}
            />
            <Input
              id="description"
              label="Descrição"
              {...register('description', {
                required: 'A descriçâo é obrigatória!',
                validate: (value) => {
                  if (!value.trim()) {
                    return 'A descriçâo não pode ser vazio'
                  }
                  return true
                },
              })}
              errorMessage={errors?.description?.message}
            />
          </div>
        </div>
        <div className="mt-6 flex w-full justify-end gap-3">
          <Button
            size="large"
            color="primary"
            type="submit"
            disabled={isUpdating}
          >
            {isUpdating ? (
              <LoaderIcon className="animate-spin text-brand-white" />
            ) : (
              'Salvar'
            )}
          </Button>
        </div>
      </form>
    </div>
  )
}

export default TaskDetailsPage
