import React, { useEffect, useState } from 'react';
import feedStyle from './Feed.module.scss';
import Loader from '../Loader/Loader';
import axios from 'axios';

export default function Feed() {
    const [post, setPost] = useState([]);

    useEffect(() => {
        async function fetchPost() {
            try {
                let response = await axios.get('http://localhost:3000/posts');
                let { data } = response.data;
                setPost(data);
            } catch (error) {
                console.error('Errore durante il fetch dei post:', error);
            }
        }

        fetchPost();
        console.log(post)
    }, []);

    return (
        <>
            <div className="container">
                <div className="row mt-4 justify-content-center text-white">

                    <div className="col-12 col-md-8 mb-4">
                        <h3>Latest Post</h3>
                    </div>


                    {post.length > 0 ? (
                        post.map((p, index) => (
                            <div key={index} className={`col-12 col-md-8 d-flex mb-5 ${feedStyle.post_feed}`}>
                                <div class="img me-4">
                                    <img src={p.image} alt="" className={`img-fluid ${feedStyle.poster}`} />
                                </div>
                                <div className={feedStyle.summary}>
                                    <h4>{p.title}</h4>
                                    <p className="text-secondary-emphasis mt-2">{p.content.substring(0, 100)}...</p>
                                    <div className={`d-flex align-items-center mt-3 gap-3`}>
                                        <button className="btn btn-outline-success p-1">Read more</button>
                                        <i className={`fas fa-bookmark ${feedStyle.fa_bookmark}`}></i>
                                    </div>
                                </div>
                            </div>
                        ))
                    ) : (
                        <div className="col-12 col-md-8 mt-5 d-flex justify-content-center">
                            <Loader />
                        </div>
                    )
                    }

                </div>
            </div>

        </>

    );
}
