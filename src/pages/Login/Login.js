
import styles from './Login.module.css'

import {  useState, useEffect} from "react"
import { AuthErrorCodes } from 'firebase/auth'
import { useAuthentication } from '../../hooks/useAuthentication'

const Login = () => {
  
  
  const [email, setEmail] = useState("")
  //Senha usuário
  
  const [password, setPassword] =useState("")
  //Senha confirmação do usuário
 

  //Verificação de algum erro 
  const [error, setError] = useState("")

  //Trago do meu useAuthentication algumas informações, visto que já tem um erro de front, eu renomei para erro de back
  const {createUser, error: authError, loading}= useAuthentication()




  //Botao de validar todos dados em formulário
  // (e) é para nao enviar formulário
  const handleSubmit = async (e) => {
    e.preventDefault()
    setError("")
  //Quando envio formulário eu apago os erros. 

  const user = {
    email,
    password
  }
  

  //Espero a resposta do firebase
  const res = await createUser(user)


  console.log(res)
  }
  //Criar um useEffect aqui que valida qual tipo de erro é e cham o do hook 
  useEffect(() => {
    if(authError){
      setError(authError)
    }
  }, [authError])
  return (
    <div className={styles.login}>
        
        <h1>Entrar</h1>
        <p>Faça o login para poder utilizar o sistema</p>
        <form onSubmit={handleSubmit}>
         

          <label>
            <span>
              Email:</span>
            <input type="email" name="email" required placeholder='E-email do usuário'
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            />
          </label>

          <label>
            <span>
              Senha:
            </span>
            <input type="password" name="password" required placeholder='Insira sua senha'
            value={password}
            onChange={(e) => setPassword(e.target.value)}
            />
          </label>
          
          {/*colocar mensagem de erro abaixo do  botao*/ }
          {!loading && <button className="btn">Entrar</button>}
          {loading && <button className="btn" disabled>Aguarde</button>}
          {error && <p className="error"> {error}</p>}

        </form>
    
    </div>
  )
}

export default Login