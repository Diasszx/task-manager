const Button = ({
  children,
  variant = 'primary',
  className,
  size = 'small',
  ...rest
}) => {
  const getVariantClasses = () => {
    if (variant === 'primary') {
      return 'bg-brand-primary text-white'
    }

    if (variant === 'secondary') {
      return 'bg-brand-light-gray text-brand-dark-blue'
    }

    if (variant === 'ghost') {
      return 'bg-transparent text-brand-dark-gray'
    }
  }

  const getSizeClasses = () => {
    if (size === 'small') {
      return 'py-1 text-xs'
    }

    if (size === 'large') {
      return 'py-3 text-sm'
    }
  }
  return (
    <button
      className={`flex items-center justify-center gap-1 rounded-md px-3 font-semibold transition hover:opacity-70 ${getVariantClasses()} ${getSizeClasses()} ${className}`}
      {...rest}
    >
      {children}
    </button>
  )
}

export default Button
