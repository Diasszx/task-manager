import { useEffect, useState } from 'react'
import { createPortal } from 'react-dom'
import { toast } from 'sonner'
import { v4 } from 'uuid'

import Button from './Button'
import Input from './Input'
import TimeSelect from './TimeSelect'

const AddTaskDialog = ({ isOpen, handleClose, handleSubmit }) => {
  const [showAnimation, setShowAnimation] = useState(false)
  const [description, setDescription] = useState('')
  const [title, setTitle] = useState('')
  const [time, setTime] = useState('morning')

  useEffect(() => {
    if (isOpen) {
      setShowAnimation(true)
    }

    if (!isOpen) {
      setTitle('')
      setDescription('')
    }
  }, [isOpen])

  if (!isOpen) return null

  const handleSaveClick = () => {
    if (!title.trim() || !description.trim() || !time) {
      return toast.error('Preencha todos os campos!')
    }

    handleSubmit({
      id: v4(),
      title,
      description,
      status: 'not_started',
      time,
    })
    handleClose()
  }

  const dialogNewTask = (
    <div
      className="fixed inset-0 flex items-center justify-center backdrop-blur"
      onClick={handleClose}
    >
      <div
        onClick={(event) => event.stopPropagation()}
        className={`h-[400px] w-[350px] rounded-xl bg-white p-5 text-center shadow-lg transition-all duration-200 ${
          showAnimation ? 'scale-100 opacity-100' : 'scale-90 opacity-0'
        }`}
      >
        <h2 className="text-xl font-semibold text-[#35383E]">Nova Tarefa</h2>
        <p className="mb-4 mt-1 text-sm text-[#9A9C9F]">
          Insira as Informações abaixo
        </p>

        <div className="flex w-[336] flex-col space-y-4">
          <Input
            placeholder="Título da tarefa"
            label="Título"
            id="title"
            value={title}
            onChange={(event) => setTitle(event.target.value)}
          />
          <TimeSelect
            value={time}
            onChange={(event) => setTime(event.target.value)}
          />
          <Input
            placeholder="Descreva a tarefa"
            label="Descrição"
            id="description"
            value={description}
            onChange={(event) => setDescription(event.target.value)}
          />
          <div className="flex gap-3">
            <Button
              size="large"
              className="w-full"
              variant="secondary"
              onClick={handleClose}
            >
              Cancelar
            </Button>
            <Button size="large" className="w-full" onClick={handleSaveClick}>
              Salvar
            </Button>
          </div>
        </div>
      </div>
    </div>
  )

  return createPortal(dialogNewTask, document.body)
}

export default AddTaskDialog
