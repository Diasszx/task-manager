import PropTypes from 'prop-types'

const TasksSeparator = ({ title, icon }) => {
  return (
    <div className="flex gap-2 border-b border-solid border-[#F4F4F5] pb-1">
      {icon}
      <p className="text-sm text-[#898f97]">{title}</p>
    </div>
  )
}

TasksSeparator.PropTypes = {
  title: PropTypes.string.isRequired,
  icon: PropTypes.node.isRequired,
}

export default TasksSeparator
