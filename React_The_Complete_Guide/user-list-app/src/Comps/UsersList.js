import "./usersList.css"

import UserListItem from "../UI/UserListItem"

const UsersList = (props) => {
  console.log(props.usersList)

  return (
    <div className="usersList">
      {props.usersList.map((data, index) => {
        return <UserListItem data={data} key={index} />
      })}
    </div>
  )
}

export default UsersList
