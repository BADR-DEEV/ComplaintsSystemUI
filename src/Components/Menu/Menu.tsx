import React from 'react'
import { Link } from 'react-router-dom'
import HomeOutlinedIcon from '@mui/icons-material/HomeOutlined';
import PersonOutlineOutlinedIcon from '@mui/icons-material/PersonOutlineOutlined';
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
          <Link key = {listItem.id} to={listItem.url} className="listItem">
            <listItem.icon />
            <span className="listItemTitle">{listItem.title}</span>
          </Link>
          ))}
          
        </div>))}

    </div>
  )
}
