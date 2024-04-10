export default function Button({ children, textOnly, className, ...props }) {
  let cssClass = textOnly ? "text-button" : "button"

  if (className !== undefined) {
    cssClass += ` ${className}`
  }

  return (
    <button className={cssClass} type="button" {...props}>
      {children}
    </button>
  )
}
