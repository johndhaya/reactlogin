// Write your code here
import './index.css'

const Logout = props => {
  const {logout} = props
  return (
    <button type="button" className="logoutBtn" onClick={logout}>
      Logout
    </button>
  )
}
export default Logout
