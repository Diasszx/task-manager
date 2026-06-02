import PropTypes from 'prop-types'
const InputLabel = ({ children, ...rest }) => {
  return (
    <label className="text-sm font-semibold text-brand-dark-blue" {...rest}>
      {children}
    </label>
  )
}

InputLabel.PropTypes = {
  children: PropTypes.node.isRequired,
}
export default InputLabel
