import "./userListItem.css"

const UserListItem = (props) => {
  // const [name, age] = props.data
  console.log(props.data)

  return (
    <li className="list-item">
      <p className="list-item__text">{props.data.name} ({props.data.age} years old)</p>
    </li>
  )
}

export default UserListItem
