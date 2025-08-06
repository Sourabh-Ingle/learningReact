
import "./header.css";
import headerData from './headerData.js';
import { NavLink } from 'react-router-dom';


const Header = () => {
    let navData = headerData();
  return (
      <>
          <div className="container-nav">
              <ul className="HeaderList">
                  {navData.map(data => {
                      console.log(data,"data")
                      return (
                          <li className="navTabs" key={data.id}>
                              <NavLink
                                  to={data.path}
                                  className={({ isActive }) =>
                                      `navLink ${isActive ? 'active  ' : 'inActive'} `
                                 }
                              >
                                  {data.title}
                                  
                              </NavLink>
                          </li>
                      )
                  })}
              </ul>
          </div>
          
    </>
  )
}

export default Header