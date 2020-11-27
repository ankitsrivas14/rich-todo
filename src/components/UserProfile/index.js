const UserProfile = ({ profile, taskCount }) => {
  return (
    <div className="user-profile">
      <div className="user-name">
        <h2><span>Hello</span> <span>{profile.name}</span></h2>
        <p>You have {taskCount} tasks</p>
      </div>
      <img src="img/user-pic.jpg" />
    </div>
  )
}

export default UserProfile;
