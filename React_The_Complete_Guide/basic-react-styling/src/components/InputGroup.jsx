export default function InputGroup({ label, invalid, ...props }) {
  let labelClasses = "block mb-2 text-xs font-bold tracking-wide uppercase"
  let inputClasses = "w-full px-3 py-2 leading-tight border rounded shadow "

  if (invalid) {
    labelClasses += " text-red-400"
    inputClasses += " text-red-500 bg-red-100 border-red-300"
  } else {
    labelClasses += " text-stone-300"
    inputClasses += " text-gray-700 bg-stone-300 border-transparent"
  }

  return (
    <p>
      <label className={labelClasses}>{label}</label>
      <input className="w-full px-3 py-2 leading-tight text-gray-700 border rounded shadow bg-stone-300" {...props} />
    </p>
  )
}
