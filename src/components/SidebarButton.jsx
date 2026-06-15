import PropTypes from 'prop-types'
import { tv } from 'tailwind-variants'

const SidebarButton = ({ children, color }) => {
  const sideBarButton = tv({
    base: 'flex items-center gap-2 rounded-lg px-6 py-3',
    variants: {
      color: {
        selected: 'bg-[#E6F7F8] text-brand-primary',
        unselected: 'bg-white text-brand-dark-blue',
      },
    },
  })

  return (
    <div href="#" className={sideBarButton({ color })}>
      {children}
    </div>
  )
}

SidebarButton.PropTypes = {
  children: PropTypes.node.isRequired,
  color: PropTypes.string.isRequired,
}

export default SidebarButton
