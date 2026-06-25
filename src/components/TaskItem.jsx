import PropTypes from 'prop-types'
import { Link } from 'react-router-dom'

import { CheckIcon, DetailIcon, LoaderIcon } from '../assets/icons'
import TrashIcon from '../assets/icons/trash.svg?react'
import useDeleteTask from '../hooks/data/use-delete-tasks'
import Button from './Button'

const TaskItem = ({ task, handleCheckboxClick, onDeleteSucess }) => {
  const { mutate: deleteTaskMutation, isPending: isDeleting } = useDeleteTask(
    task.id
  )

  const handleDeleteClick = async () => {
    if (isDeleting) return
    deleteTaskMutation(undefined, {
      onSuccess: async (_, taskId) => {
        await onDeleteSucess(taskId)
      },
    })
  }

  const getStatusClasses = () => {
    if (task.status === 'done') {
      return 'bg-brand-primary text-black '
    }
    if (task.status === 'in_progress') {
      return 'bg-brand-process text-brand-process'
    }
    if (task.status === 'not_started') {
      return 'bg-brand-dark-blue text-black bg-opacity-10'
    }
  }

  return (
    <div
      className={`flex items-center justify-between gap-2 rounded-lg bg-opacity-10 px-4 py-3 text-sm ${getStatusClasses()}`}
      key={task.id}
    >
      <div className="flex items-center gap-2">
        <label
          className={`relative flex h-7 w-7 cursor-pointer items-center justify-center rounded-lg ${getStatusClasses()}`}
        >
          <input
            type="checkbox"
            checked={task.status == 'in_progress'}
            className="absolute h-full w-full cursor-pointer opacity-0"
            onChange={() => handleCheckboxClick(task.id)}
          />
          {task.status == 'done' && <CheckIcon />}
          {task.status == 'in_progress' && (
            <LoaderIcon className="animate-spin text-brand-white" />
          )}
        </label>
        <span className="text-sm">{task.title}</span>
      </div>
      <div className="flex items-center gap-3">
        <Button color="ghost" onClick={handleDeleteClick} disabled={isDeleting}>
          {isDeleting ? (
            <LoaderIcon className="animate-spin text-brand-text-gray" />
          ) : (
            <TrashIcon className="text-red-500 transition hover:opacity-70" />
          )}
        </Button>

        <Link to={`/task/${task.id}`} className="transition hover:opacity-75">
          <DetailIcon />
        </Link>
      </div>
    </div>
  )
}

TaskItem.PropTypes = {
  task: PropTypes.shape({
    id: PropTypes.string.isRequired,
    title: PropTypes.string.isRequired,
    description: PropTypes.string.isRequired,
    status: PropTypes.oneOf(['done', 'in_progress', 'not_started']).isRequired,
    time: PropTypes.oneOf(['morning', 'afternoon', 'evening']).isRequired,
  }),
  handleCheckboxClick: PropTypes.func.isRequired,
  handleDeleteClick: PropTypes.func.isRequired,
}
export default TaskItem
