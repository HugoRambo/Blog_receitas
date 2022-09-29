// CSS
import styles from "./Home.module.css";

// hooks

import { useNavigate, Link } from "react-router-dom";
import { useState } from "react";
// react


// components


const Home = () => {
  const [query, setQuery] = useState("")
  const [posts] =useState([])
  
  const navigate = useNavigate()
  
  const handleSubmit = (e) => {
    e.preventDefault()
    if(query){
      return navigate(`/search?q=${query}`)
    }
  }

  return (
    <div className={styles.home}>
      <h1>Veja os nossos posts mais recentes</h1>
      <form className={styles.search_form} onSubmit={handleSubmit}>
        <input
          type="text"
          placeholder="Ou busque por tags..."
          onChange={(e) => setQuery(e.target.value)}
        />
        <button className="btn btn-dark">Pesquisar</button>
      </form>
      <div className="post-list">
        {}
        {posts && posts.length === 0 && (
          <div className={styles.noposts}>
            <p>Não foram encontrados posts</p>
            <Link to="/posts/create" className="btn">
              Criar primeiro post
            </Link>
          </div>
        )}
        {}
      </div>
    </div>
  );
};
export default Home;
