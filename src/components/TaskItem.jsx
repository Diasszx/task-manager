import CheckIcon from '../assets/icons/check.svg?react'
import LoaderIcon from '../assets/icons/loader.svg?react'
import DetailIcon from '../assets/icons/details.svg?react'

const TaskItem = ({ task }) => {
  const getStatusClasses = () => {
    if (task.status === 'done') {
      return 'bg-[#00ADB5] text-[#002C2E] '
    }

    if (task.status === 'in_progress') {
      return 'bg-[#FFAA04] text-[#FFAA04]'
    }

    if (task.status === 'not_started') {
      return 'bg-[#35383E] text-[#002C2E] bg-opacity-10 '
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
          />
          {task.status == 'done' && <CheckIcon />}
          {task.status == 'in_progress' && (
            <LoaderIcon className="animate-spin" />
          )}
        </label>
        <span className="text-sm">{task.title}</span>
      </div>
      <a href="#" className="transition hover:opacity-75">
        <DetailIcon />
      </a>
    </div>
  )
}

export default TaskItem
