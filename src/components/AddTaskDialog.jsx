import PropTypes from 'prop-types'
import { useEffect, useRef, useState } from 'react'
import { createPortal } from 'react-dom'
import { v4 } from 'uuid'

import { LoaderIcon } from '../assets/icons'
import { createTask } from '../services/tasks'
import Button from './Button'
import Input from './Input'
import TimeSelect from './TimeSelect'

const AddTaskDialog = ({
  isOpen,
  handleClose,
  onSubmitSucess,
  onSubmitError,
}) => {
  const [showAnimation, setShowAnimation] = useState(false)
  const descriptionRef = useRef(null)
  const titleRef = useRef(null)
  const timeRef = useRef(null)
  const [errors, setErros] = useState([])
  const [submitIsLoading, setsubmitIsLoading] = useState(false)

  useEffect(() => {
    if (isOpen) {
      setShowAnimation(true)
    }
    if (!isOpen) {
      if (titleRef.current) titleRef.current.value = ''
      if (descriptionRef.current) descriptionRef.current.value = ''
    }
  }, [isOpen])
  if (!isOpen) return null

  const handleSaveClick = () => {
    const newErros = []
    const title = titleRef.current.value
    const description = descriptionRef.current.value
    const time = timeRef.current.value

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
    handleSubmitClick({
      id: v4(),
      title,
      description,
      status: 'not_started',
      time,
    })
  }

  const handleSubmitClick = async (task) => {
    if (submitIsLoading) return
    setsubmitIsLoading(true)
    const response = await createTask(task)

    if (!response.ok) {
      setsubmitIsLoading(false)
      return onSubmitError()
    }
    await onSubmitSucess()
    setsubmitIsLoading(false)
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
            ref={titleRef}
            errorMessage={titleError?.message}
            disabled={submitIsLoading}
          />
          <TimeSelect
            ref={timeRef}
            errorMessage={timeError?.message}
            disabled={submitIsLoading}
          />
          <Input
            placeholder="Descreva a tarefa"
            label="Descrição"
            id="description"
            ref={descriptionRef}
            errorMessage={descriptionError?.message}
            disabled={submitIsLoading}
          />
          <div className="flex gap-3">
            <Button
              size="large"
              className="w-full"
              color="secondary"
              onClick={handleClose}
            >
              Cancelar
            </Button>
            <Button
              size="large"
              className="w-full"
              onClick={handleSaveClick}
              disabled={submitIsLoading}
            >
              {submitIsLoading ? (
                <LoaderIcon className="animate-spin text-brand-white" />
              ) : (
                'Salvar'
              )}
            </Button>
          </div>
        </div>
      </div>
    </div>
  )

  return createPortal(dialogNewTask, document.body)
}

AddTaskDialog.PropTypes = {
  isOpen: PropTypes.bool.isRequired,
  handleClose: PropTypes.func.isRequired,
  handleSubmit: PropTypes.func.isRequired,
}

export default AddTaskDialog
