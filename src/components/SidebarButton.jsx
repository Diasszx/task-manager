const SidebarButton = ({ children, variant }) => {
  const getVariantClasses = () => {
    return variant != 'unselected'
      ? 'bg-[#E6F7F8] text-[#00ADB5]'
      : 'text-[#35383E] bg-white'
  }
  return (
    <a
      href="#"
      className={`flex items-center gap-2 rounded-lg px-6 py-3 ${getVariantClasses()}`}
    >
      {children}
    </a>
  )
}

export default SidebarButton
