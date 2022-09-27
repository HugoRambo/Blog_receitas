
import styles from './Register.module.css'
import {  useState, useEffect} from "react"
import { AuthErrorCodes } from 'firebase/auth'
import { useAuthentication } from '../../hooks/useAuthentication'


const Register = () => {
  //Nome do usuário
  const [displayName, setDisplayName] = useState("")
  //Email do usuário
  
  const [email, setEmail] = useState("")
  //Senha usuário
  
  const [password, setPassword] =useState("")
  //Senha confirmação do usuário
  
  const [confirmPassword, setConfirmPassword] = useState("")  
  
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
    displayName,
    email,
    password
  }
  if(password !== confirmPassword){
    setError("As senhas precisam ser iguais")
    return
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
    <div className={styles.register}>
        <h1>Cadastra-se para postar</h1>
        <p>Crie seu usuário e compartilhe suas receitas</p>
        <form onSubmit={handleSubmit}>
          <label>
            <span>
              Nome:</span>
            <input type="text" name="displayName" required placeholder='Nome do Usuário'
            /*Adicionar um value com os valores, criandos em useE*/
            value={displayName}
            onChange={(e) =>setDisplayName(e.target.value)}
            /*Aqui no onChange, pego o valor que é colocar dentro do meu input...*/ 
              
            />
          
          </label>

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
          <label >
            <span>
              Confirmação de senha
            </span>
            <input type="password"  name="confirmPassowrd" required placeholder='Confirme sua senha'
            value={confirmPassword}
            onChange={(e) => setConfirmPassword(e.target.value)}/>
          </label>
          {/*colocar mensagem de erro abaixo do  botao*/ }
          {!loading && <button className="btn">Cadastrar</button>}
          {loading && <button className="btn" disabled>Aguarde</button>}
          {error && <p className="error"> {error}</p>}

        </form>
    </div>
  )
}

export default Register