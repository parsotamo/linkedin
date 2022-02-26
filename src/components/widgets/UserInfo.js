
const UserInfo = (props) => {
  return (
    <div className={`user-info ${props.className}`}>
     { props.static ?
       <>
            <img loading="lazy" className="user-avatar" src={props.static.image} alt="User Avatar" />
          <div className='user-info-details'>
          <h4>{props.static.name}</h4>
          {props.children}
          </div>
        </>
            :
            <>
            <img loading="lazy" src={props.photo ? props.photo: "/images/user.svg"} alt="User Avatar" onError={e => {
              e.target.src = props.photo;
            }} />
        <div className='user-info-details'>
          {props.username && <h4 className={`user-info-details-name ${props.className}`}>{props.username}</h4>}
          {props.children}
          </div>
        </>
      }
    </div>
  )
}

export default UserInfo