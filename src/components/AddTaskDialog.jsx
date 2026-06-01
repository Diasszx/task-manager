import { useEffect, useState } from 'react'
import { createPortal } from 'react-dom'
import { v4 } from 'uuid'

import Button from './Button'
import Input from './Input'
import TimeSelect from './TimeSelect'

const AddTaskDialog = ({ isOpen, handleClose, handleSubmit }) => {
  const [showAnimation, setShowAnimation] = useState(false)
  const [description, setDescription] = useState('')
  const [title, setTitle] = useState('')
  const [time, setTime] = useState('morning')
  const [errors, setErros] = useState([])

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

  const handleClearInputError = (inputName) => {
    setErros((currentErrors) =>
      currentErrors.filter((error) => error.inputName !== inputName)
    )
  }

  const handleSaveClick = () => {
    const newErros = []

    if (!title.trim()) {
      newErros.push({ inputName: 'title', message: 'O título é obrigatório!' })
    }

    if (!description.trim()) {
      newErros.push({
        inputName: 'description',
        message: 'A descrição é obrigatória!',
      })
    }

    if (!time) {
      newErros.push({ inputName: 'time', message: 'O horário é obrigatório!' })
    }

    if (newErros.length > 0) {
      setErros(newErros)
      return
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

  const titleError = errors.find((error) => error.inputName === 'title')
  const descriptionError = errors.find(
    (error) => error.inputName === 'description'
  )
  const timeError = errors.find((error) => error.inputName === 'time')

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
        <h2 className="text-xl font-semibold text-brand-dark-blue">
          Nova Tarefa
        </h2>
        <p className="mb-4 mt-1 text-sm text-brand-dark-gray">
          Insira as Informações abaixo
        </p>

        <div className="flex w-[336] flex-col space-y-4">
          <Input
            placeholder="Título da tarefa"
            label="Título"
            id="title"
            value={title}
            onChange={(event) => {
              setTitle(event.target.value)
              handleClearInputError('title')
            }}
            errorMessage={titleError?.message}
          />
          <TimeSelect
            value={time}
            onChange={(event) => {
              setTime(event.target.value)
              handleClearInputError('time')
            }}
            errorMessage={timeError?.message}
          />
          <Input
            placeholder="Descreva a tarefa"
            label="Descrição"
            id="description"
            value={description}
            onChange={(event) => {
              setDescription(event.target.value)
              handleClearInputError('description')
            }}
            errorMessage={descriptionError?.message}
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
