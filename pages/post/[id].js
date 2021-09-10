import axios from 'axios'
import { useRouter } from 'next/router'
import Link from 'next/link'



export async function getServerSideProps(context) {

    const id = context.query.id

    const post = await axios.get(`http://localhost:3000/api/post/${id}`);
    return {
        props: {
            post: post.data
        },
    }
}

const Post = (props) => {

  return (
      <>
        <p><strong>Id:</strong> {props.post.id}</p>
        <p><strong>Titulo:</strong> {props.post.title}</p>
        <p><strong>Corpo:</strong> {props.post.body}</p>
        <Link href='/'>Voltar</Link>
      </>
  )
}

export default Post