import {db} from "../firebase/config"

//Criando a autenticação
import { async } from '@firebase/util'
import {
    getAuth,
    createUserWithEmailAndPassword,
    signInWithEmailAndPassword,
    updateProfile,
    signOut
}from 'firebase/auth'

import {useState, useEffect} from 'react'
//Configurando minha authenticação 
export const useAuthentication = () =>{
    const [error, setError] = useState(null)
    const [loading, setLoading] =useState(null)

    // cleanup
    // deal with memory leak
    //Cancelar que não for preciso do componente
    const [cancelled, setCancelled] = useState(false)
    const auth = getAuth()
    //Criando função para reaproveitar depois
    function checkIfIsCancelled() {
        if (cancelled) {
            return
        }
    }
    //Registro 
    const createUser = async (data) =>{
        checkIfIsCancelled()
        // se não tiver cancelado, eu torno ela true
        setLoading(true)
        setError(null)
        //Validação usando o try catch
        try {
            //Await devido ter que esperar usuário chegar
            //Try tento criar o usuário
            const {user} = await createUserWithEmailAndPassword(
                auth,
                data.email,
                data.password
            )
            //quando chegar o usuário
            await updateProfile(user, {
                displayName: data.displayName
            })
            setLoading(false)

            return user
            //No cath caso não funcione ele cai aqui 
        }catch (error) {
            console.log(error.message)
            console.log(typeof error.message)
            //Adicionando mensagem de erro
            let systemErrorMessage
            if (error.message.includes("Password")) {
                systemErrorMessage = "A senha precisa conter pelo menos 6 digitos"
            } else if (error.message.includes("email-already")){
                systemErrorMessage = "E-mail já cadastrado. "
            }else {
                systemErrorMessage = "Ocorreu um erro, pr favpr tente mais tarde"
            }
            setLoading(false)
            setError(systemErrorMessage)
        } 
    
    }
    //Sair ou logout 
    const logout = () => {
        
        checkIfIsCancelled() 

        //chamo a função signout e passo a autenticação nela
        signOut(auth)
    }
    //login -entrar
    const login = async(data) =>{
        checkIfIsCancelled()
        setLoading(true)
        setError(false)
        try {
            //Verificaçao dos dados.
            await signInWithEmailAndPassword(auth, data.email, data.password)
            setLoading(false)
        }catch (error){
            let systemErrorMessage
            if(error.message.includes("user-not-found")){
                systemErrorMessage = "Usuário não encontrando."   
            }else if(error.message.includes("wrong-password")){
                systemErrorMessage ="Senha incorreta"
            }else {
                systemErrorMessage ="Ocorreu um erro, por favor tente mais tarde."
            }
        setError(systemErrorMessage)
        setLoading(false)
        }

    }



    //Adicionar o use Effect como true quando cancelo
    useEffect(() =>{
        return () => setCancelled(true)
    }, [])
    
    //Acabou esse proceso eu retorno os outros itens
    return {
        auth,
        createUser,
        error,
        loading,
        logout,
        login,
    }
}