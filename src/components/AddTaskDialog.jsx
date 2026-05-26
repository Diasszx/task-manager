import { useEffect, useState } from 'react'
import { createPortal } from 'react-dom'

import Button from './Button'
import Input from './Input'

const AddTaskDialog = ({ isOpen, handleClose }) => {
  const [showAnimation, setShowAnimation] = useState(false)

  useEffect(() => {
    if (isOpen) {
      setShowAnimation(true)
    }
  }, [isOpen])

  if (!isOpen) return null

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
          <Input placeholder="Título da tarefa" label="Título" id="title" />
          <Input placeholder="Selecione" label="Horário" id="time" />
          <Input
            placeholder="Descreva a tarefa"
            label="Descrição"
            id="description"
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
            <Button size="large" className="w-full">
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
