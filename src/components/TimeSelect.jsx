import InputLabel from './InputLabel'

const TimeSelect = ({ ref, ...rest }) => {
  return (
    <div className="flex flex-col gap-1 text-left">
      <InputLabel html="time">Horário</InputLabel>

      <select
        ref={ref}
        id="time"
        className="rounded-lg border border-solid px-4 py-3 outline-brand-primary placeholder:text-sm placeholder:text-brand-dark-gray"
        {...rest}
      >
        <option value="morning">Manhã</option>
        <option value="afternoon">Tarde</option>
        <option value="evening">Noite</option>
      </select>

      {rest.errorMessage && (
        <p className="text-left text-xs text-red-500">{rest.errorMessage}</p>
      )}
    </div>
  )
}

export default TimeSelect
