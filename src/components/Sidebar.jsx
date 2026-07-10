import SidebarContent from './SiderbarContent'

const Sidebar = ({ isOpen, onClose }) => {
  return (
    <>
      {/* Sidebar desktop */}
      <aside className="hidden min-h-screen w-72 shrink-0 bg-white md:block">
        <SidebarContent />
      </aside>

      {/* Fundo escuro mobile */}
      {isOpen && (
        <button
          type="button"
          className="fixed inset-0 z-40 backdrop-blur md:hidden"
          onClick={onClose}
          aria-label="Fechar menu"
        />
      )}

      {/* Sidebar mobile */}
      <aside
        className={`fixed inset-y-0 left-0 z-50 w-72 bg-white transition-transform duration-300 md:hidden ${
          isOpen ? 'translate-x-0' : '-translate-x-full'
        }`}
      >
        <div className="flex justify-end p-4">
          <button
            type="button"
            onClick={onClose}
            aria-label="Fechar menu de navegação"
          ></button>
        </div>

        <SidebarContent onNavigate={onClose} />
      </aside>
    </>
  )
}

export default Sidebar
