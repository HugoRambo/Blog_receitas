
import './App.css';
import {BrowserRouter, Routes, Route, Navigate} from 'react-router-dom'

//Função que mapeia se a autenticação do usuário foi feita com sucesso
import { onAuthStateChanged } from 'firebase/auth';
//Vou importar o hook que eu criei para validação 
import { useAuthentication } from './hooks/useAuthentication';

//hooks
import {  useState, useEffect} from "react"

//context
import {  AuthProvider }from "./context/AuthContenxt" 


//Pages
import Home from './pages/Home/Home';
import About from './pages/About/About';
import Navbar from './component/Navbar'
import Footer from './component/Footer';
import Login from './pages/Login/Login';
import Register from './pages/Register/Register';


function App() {
  //Começo sem usuário.
  const [user, setUser] =useState(undefined)
  
  //Invoco meu hook de autenticação
  const {auth} = useAuthentication()
  
  const loadingUser = user === undefined 
  
  //Sempre que mudar a autenticação vai ser mudado nosso useEffect
  useEffect(() => {
    onAuthStateChanged(auth, (user) =>{
      setUser(user)
    })
    //Aqui passo o usuário que quero colocar na variavel setuser

  }, [auth])
  
  
  //Se esta carregando usuário eu 
  if(loadingUser){
    return <p>Carregando...</p>
  }

  return (
    <div className="App">
      <AuthProvider value={{user}}>
      <BrowserRouter>
      <Navbar/>
        <div className='container'>
            <Routes>
              <Route path='/' element={<Home/>}></Route>
              <Route path= '/about' element={<About/>}></Route>
              <Route path= '/login' element={<Login/>}></Route>
              <Route path= '/register' element={<Register/>}></Route>
            </Routes>
        </div>
        <Footer/>
      </BrowserRouter>
      </AuthProvider>
      
    </div>
  );
}

export default App;
