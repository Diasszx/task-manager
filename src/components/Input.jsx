import PropTypes from 'prop-types'

import InputLabel from './InputLabel'

const Input = ({ label, errorMessage, ...rest }) => {
  return (
    <div className="flex flex-col text-left">
      <InputLabel htmlFor={rest.id}>{label}</InputLabel>
      <input
        className="outline-primary rounded-lg border border-solid px-4 py-3 placeholder:text-sm placeholder:text-brand-dark-gray"
        {...rest}
      ></input>
      {errorMessage && (
        <p className="text-left text-xs text-red-500">{errorMessage}</p>
      )}
    </div>
  )
}

InputLabel.PropTypes = {
  label: PropTypes.string.isRequired,
  errorMessage: PropTypes.string,
  placeHolder: PropTypes.string,
  id: PropTypes.string.isRequired,
}

export default Input
