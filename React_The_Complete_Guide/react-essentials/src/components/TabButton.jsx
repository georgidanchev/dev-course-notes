export default function TabButton({ onSelect, value, isSelected }) {
  return (
    <li>
      <button
        className={isSelected ? "active" : ""}
        onClick={() => onSelect(value)}
        type="button"
      >
        {value}
      </button>
    </li>
  )
}
