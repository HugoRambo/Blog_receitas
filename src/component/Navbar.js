import { NavLink } from 'react-router-dom'

import styles from './Navbar.module.css'

import {  useAuthentication } from "../hooks/useAuthentication"

//Pegar valor do contexto
import {  useAuthValue  } from"../context/AuthContenxt"

const Navbar = () => {
  //Pego usuário que vem 
  const { user} = useAuthValue()

  //Links de logar ou criar, não fazem sentido caso usuário já esteja logado. 
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
        {/*Crio uma condicional se não tem usuário ele cria*/ }
        {!user && (
          <>
            <li>
            <NavLink to= "/login"
            className={({isActive}) => (isActive ? styles.active: "")}>
            Entrar
            </NavLink>
          </li>
            <li>
            <NavLink to= "/register"
            className={({isActive}) => (isActive ? styles.active: "")}>

            Cadastrar
            </NavLink>
            </li>
          </>
        )}
        {user && (
            <>
            <li>
            <NavLink to= "/posts/create"
            className={({isActive}) => (isActive ? styles.active : "")}
            >
            Novo post
            </NavLink>
          </li>
            <li>
            <NavLink to= "/dashboard"
            className={({isActive}) => (isActive ? styles.active : "")}
            >  

            Dashoboard
            </NavLink>
            </li>
          </>
        )}
          <li>
            <NavLink to= "/about"
            className={({isActive}) => (isActive ? styles.active: "")}>

            Sobre
            </NavLink>
          </li>
      </ul>
  </nav>
  
)}

export default Navbar