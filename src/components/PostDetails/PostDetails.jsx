import postStyle from './PostDetails.module.scss'
import { useParams } from 'react-router-dom'
import { useState, useEffect } from 'react'
import axios from 'axios'

export default function PostDetails() {
    const { slug } = useParams()
    const [post, setPost] = useState(null)


    useEffect(() => {
        async function fetchPost() {
            try {
                let response = await axios.get(`http://localhost:3000/posts/${slug}`);
                let { data } = response.data;
                setPost(data);
            } catch (error) {
                console.error('Errore durante il fetch dei post:', error);
            }
        }

        fetchPost()
        console.log(post)

    }, [slug])

    function getFormattedDate(p) {
        const date = new Date(p.createdAt)
        const options = { year: 'numeric', month: 'long', day: 'numeric' };
        const formattedDate = new Intl.DateTimeFormat('en-US', options).format(date);
        return formattedDate
    }


    return (
        <>
            {post && (
                <>
                    <div className="container">
                        <div className="row mt-5 justify-content-center text-white">

                            <div className="col-12 col-md-8">
                                <article>

                                    <section>
                                        <h2 className={`fw-bold`}>{post.title}</h2>
                                        <p className={`${postStyle.sub_color}`}>by {post.User.username}</p>
                                        <p className={`${postStyle.sub_color}`}>{getFormattedDate(post)}</p>

                                    </section>

                                    <figure>
                                        <img src={post.image} alt="" className='img-fluid' />
                                    </figure>

                                    <section>
                                        <p>{post.content}</p>
                                    </section>
                                </article>

                            </div>
                        </div>
                    </div>
                </>
            )}
        </>
    )
}