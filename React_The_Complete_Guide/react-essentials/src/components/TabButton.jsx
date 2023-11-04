export default function TabButton({ onSelect, value, isSelected }) {
  return (
    <li>
      <button
        className={isSelected ? "active" : ""}
        type="button"
        onClick={() => onSelect(value)}
      >
        {value}
      </button>
    </li>
  )
}
