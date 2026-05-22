const SidebarButton = ({ children, variant }) => {
  return (
    <a
      href=""
      className={`rounded-lg px-6 py-3 text-[#35383E] ${
        variant != 'unselected' ? 'bg-[#E6F7F8]' : 'bg-white'
      }`}
    >
      {children}
    </a>
  )
}

export default SidebarButton
