import styles from './PosDtail.module.css'
import React from 'react'
import { Link } from 'react-router-dom'
import { post } from 'server/router'

const PostDetail = ({post}) => {
//Vem recebendo de props de post esses valores  
    return (
    <div>
        <img src={post.image} alt= {post.title}/>
        <h2>{post.title}</h2>
        <p>{post.createdBy}</p>
        <div>
            {post.tagsArray.map((tag) =>(
                <p key={tag}><span>#</span>{tag}</p>
            ))}

        </div>
        {/*Quando usuário clicar, é direcionado a um Link*/ }
        <Link to={`/post/${post.id}`} className="btn btn-outline">
            Ler
        </Link>
    </div>
  )
}

export default PostDetail