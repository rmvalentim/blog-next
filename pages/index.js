import axios from 'axios'
import Link from 'next/link'

export async function getServerSideProps(context) {

    const posts = await axios.get('http://localhost:3000/api/posts');
    return {
        props: {
            posts: posts.data
        },
    }
}


const Index = (props) => {

    return (
        <div class="container mx-auto">
            <h2>Posts do Blog</h2>
            <table>
                <thead>
                    <tr>
                        <td>Id</td>
                        <td>Title</td>
                    </tr>
                </thead>
                <tbody>
                    {
                        props.posts.map((item) => {
                            return (
                                <tr key={item.id}>
                                    <td>{item.id}</td>
                                    <td><Link href={`/post/${encodeURIComponent(item.id)}`}>{item.title}</Link></td>
                                </tr>
                            )

                        })
                    }
                </tbody>
            </table>
        </div>
    )
}



export default Index;