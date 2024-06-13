import React, { useEffect, useState } from 'react';
import feedStyle from './Feed.module.scss';
import Loader from '../Loader/Loader';
import axios from 'axios';

import CardPost from '../CardPost/CardPost';

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
                            <CardPost key={index} p={p} />
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
