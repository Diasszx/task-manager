import PropTypes from 'prop-types'
import { useEffect, useState } from 'react'
import { createPortal } from 'react-dom'
import { useForm } from 'react-hook-form'
import { v4 } from 'uuid'

import { LoaderIcon } from '../assets/icons'
import { createTask } from '../services/tasks'
import Button from './Button'
import Input from './Input'
import TimeSelect from './TimeSelect'

const AddTaskDialog = ({ isOpen, handleClose, onSubmitSucess }) => {
  const {
    handleSubmit,
    register,
    reset,
    formState: { errors, isSubmitting },
  } = useForm()
  const [showAnimation, setShowAnimation] = useState(false)

  useEffect(() => {
    if (isOpen) {
      setShowAnimation(true)
    }
    if (!isOpen) {
      reset()
    }
  }, [isOpen, reset])

  if (!isOpen) return null

  const handleSubmitClick = async (data) => {
    if (isSubmitting) return
    console.log(data)

    const newTask = {
      id: v4(),
      status: 'not_started',
      ...data,
    }
    await createTask(newTask)
    await onSubmitSucess(newTask)
    reset()
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
        <h2 className="text-xl font-semibold text-brand-dark-blue">
          Nova Tarefa
        </h2>
        <p className="mb-4 mt-1 text-sm text-brand-dark-gray">
          Insira as Informações abaixo
        </p>
        <form onSubmit={handleSubmit(handleSubmitClick)}>
          <div className="flex w-[336] flex-col space-y-4">
            <Input
              placeholder="Título da tarefa"
              label="Título"
              id="title"
              disabled={isSubmitting}
              {...register('title', {
                required: 'O título é obrigatório!',
                validate: (value) => {
                  if (!value.trim()) {
                    return 'O título não pode ser vazio!'
                  }
                  return true
                },
              })}
              errorMessage={errors?.title?.message}
            />
            <TimeSelect
              errorMessage={errors?.time?.message}
              disabled={isSubmitting}
              {...register('time', {
                required: 'O horário é obrigatório!',
                validate: (value) => {
                  if (!value.trim()) {
                    return 'O tempo não pode ser vazio'
                  }
                  return true
                },
              })}
            />
            <Input
              placeholder="Descreva a tarefa"
              label="Descrição"
              id="description"
              errorMessage={errors?.description?.message}
              disabled={isSubmitting}
              {...register('description', {
                required: 'A descrição é obrigatória!',
                validate: (value) => {
                  if (!value.trim()) {
                    return 'A descrição não pode ser vazia!'
                  }
                  return true
                },
              })}
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
                type="submit"
                disabled={isSubmitting}
              >
                {isSubmitting ? (
                  <LoaderIcon className="animate-spin text-brand-white" />
                ) : (
                  'Salvar'
                )}
              </Button>
            </div>
          </div>
        </form>
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
