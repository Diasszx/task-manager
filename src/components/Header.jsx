import { useState } from 'react'
import { toast } from 'sonner'

import { AddIcon, TrashIcon } from '../assets/icons'
import AddTaskDialog from './AddTaskDialog'
import Button from './Button'

function Header({ title, subtitle }) {
  const [addTaskDialogIsOpen, setaddTaskDialogIsOpen] = useState(false)
  const onTaskSubmitError = () => {
    return toast.error('Erro ao adicionar tarefa. Por favor, tente novamente')
  }
  return (
    <div className="mb-6 flex w-full justify-between">
      <div className="gap-1">
        <span className="text-xs font-semibold text-brand-primary">
          {subtitle}
        </span>
        <h2 className="text-xl font-semibold">{title}</h2>
      </div>
      <div className="flex items-center gap-3">
        <Button color="ghost">
          Limpar Tarefas <TrashIcon />
        </Button>
        <Button color="primary" onClick={() => setaddTaskDialogIsOpen(true)}>
          Nova Tarefa
          <AddIcon />
        </Button>
        <AddTaskDialog
          isOpen={addTaskDialogIsOpen}
          handleClose={() => setaddTaskDialogIsOpen(false)}
          onSubmitError={onTaskSubmitError}
        ></AddTaskDialog>
      </div>
    </div>
  )
}

export default Header
