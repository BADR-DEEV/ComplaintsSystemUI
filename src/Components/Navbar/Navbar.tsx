import "./navbar.scss"
import logoImg from '../../assets/logo.svg'
import SettingsIcon from '@mui/icons-material/Settings';
import NotificationsNoneIcon from '@mui/icons-material/NotificationsNone';
import PersonOutlineIcon from '@mui/icons-material/PersonOutline';
import SearchIcon from '@mui/icons-material/Search';
import SettingsOutlinedIcon from '@mui/icons-material/SettingsOutlined';
export const Navbar = () => {
  return (
    <div className="navbar">
      <div className="logo">
        <img src={logoImg} alt="" />
        <span>Tickety</span>
      </div>
      <div className="icons">
      <SearchIcon/>
        {/* <img src="" alt="" className="icon"/>
        <img src="" alt="" className="icon"/> */}
        <div className="notification">
        <NotificationsNoneIcon/>
        <span>1</span>


        </div>
        <div className="user">
          <PersonOutlineIcon/>
          <span>Badr</span>
          
        </div>
        {/* <img src="" alt="" className="icon"/> */}
        <div className="settings">
        <SettingsOutlinedIcon/>
        </div>
      </div>
    </div>
  )
}
