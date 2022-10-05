import {    useState, useEffect } from "react"
//Tras do DB que criamos
import {    db  } from "../firebase/config"
import Search from "../pages/Search/Search"
import {collection, 
    query, 
    orderBy, 
    onSnapshot, 
    where, 
    querySnapshot} from 'firebase/firestore'


//Collection definir a coleção
//query pegar os dados
//orderby  ondernar as telas
//onSnapshot
//where filtro de resultados

export const useFetchDocuments =    (docCollection, search = null, uid = null)=>{

    const [documents, setDocuments] =useState(null)
    const [error, setError] = useState(null)
    const [loading, setLoading] = useState(null)

    //Dela with memory leak
    const [cancelled, setCancelled] = useState(false)
    //vou mapear varias coisas com useEffect
    useEffect(() => {
        async function loadData(){
            if(cancelled)return
            //Carregando os dados
            setLoading(true)
            const collectionRef = await collection(db, docCollection)
            //Passo o banco de dados e a condição que vem por ele 
    
            //vou tratar erro de busca
            try {
            let q;
                //Busca e dashboard]
                if (search) {
                    q = await query(
                      collectionRef,
                      where("tagsArray", "array-contains", search),
                      orderBy("createdAt", "desc")
                    )
                }
                    else{
                    q = await query(collectionRef, orderBy('createdAt', 'desc'))}
                }
                //await para maperar meus dados, quando alterar algo, ele atualiza
                await onSnapshot(q, (querySnapshot) =>{
                    setDocuments(
                        //Os dados do firebase vem cheio de arquivo, função pra tirar
                        querySnapshot.docs.map((doc) =>({
                            id: doc.id,
                            ...doc.data(),
                        }))
                    )
                })
                setLoading(false)
            } catch (error){
                console.log(error)
                setError(error.message)
                
            }   
            
        }
        loadData()
    }, [docCollection, search, uid, cancelled])
    
    //useEffect para limpar memoria
    useEffect(()=>{
        return () =>setCancelled(true)
    }, [])
    return {    documents, loading, error   }
}