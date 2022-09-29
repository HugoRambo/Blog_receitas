import React from 'react'
import { useFetchDocuments } from '../../hooks/useFectchDocuments'

import { useQuery } from '../../hooks/useQuery'
const Search = () => {
  const query = useQuery()
  const search= query.get("q")
  
    return (
    <div><h2>
        Search
    </h2>
    <p>{search}</p>
    
    </div>
  )
}

export default Search