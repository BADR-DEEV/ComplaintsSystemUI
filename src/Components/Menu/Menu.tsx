import { Link, NavLink } from 'react-router-dom'
import { menu } from "../../data"
import "./menu.scss"
export const Menu = () => {
  return (
    <div className="menu">
      {menu.map(
        item => (
          <div className="item" key={item.id}>
            <span className="title">
              {item.title}
            </span>
            {item.listItems.map(listItem => (
              <NavLink className='listItem' key={listItem.id} to={listItem.url} style={({ isActive }) => {
                return {
                  fontWeight: isActive ? "bold" : "",
                  backgroundColor: isActive ? "#161d28" : "",
                };
              }}>
                <listItem.icon />
                <span className="listItemTitle">{listItem.title}</span>
              </NavLink>
            ))}
          </div>))}
    </div>
  )
}
