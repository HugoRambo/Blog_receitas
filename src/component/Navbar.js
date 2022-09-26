import { NavLink } from 'react-router-dom'


import styles from './Navbar.module.css'

const Navbar = () => {
  return (
  <nav className={styles.navbar} >
      <NavLink  className={styles.brand} to="/">
        Mini <span>Blog</span>
      </NavLink>
      <ul className={styles.links_list}>
        <li>
          <NavLink to="/" 
          className={({isActive}) => (isActive ? styles.active: "")}>
            Home
          </NavLink>
        </li>
          <li>
            <NavLink to= "/login">
            Entrar
          </NavLink>
          </li>
          <li>
            <NavLink to= "/register">

            Cadastrar
            </NavLink>
          </li>
          <li>
            <NavLink to= "/about">

            Sobre
            </NavLink>
          </li>
      </ul>
  </nav>
  
)}

export default Navbar