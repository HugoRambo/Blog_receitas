
import styles from './Register.module.css'
import {  useState, useEffect} from "react"


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

  //Botao de validar todos dados em formulário
  // (e) é para nao enviar formulário
  const handleSubmit = (e) => {
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
  console.log(user)
  }

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
          <button className='btn'>Cadastrar</button>
          {/*colocar mensagem de erro abaixo do  botao*/ }
          {error && <p className="error"> {error}</p>}

        </form>
    </div>
  )
}

export default Register