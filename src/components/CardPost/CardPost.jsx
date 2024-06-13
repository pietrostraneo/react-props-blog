import postStyle from './CardPost.module.scss'
import feedStyle from '../Feed/Feed.module.scss'

export default function CardPost({ p }) {
    return (
        <div className={`col-12 col-md-8 d-flex mb-5 ${feedStyle.post_feed}`}>
            <div class="img me-4">
                <img src={p.image} alt="" className={`img-fluid ${feedStyle.poster}`} />
            </div>
            <div className={feedStyle.summary}>
                <h4>{p.title}</h4>
                <p className="text-secondary-emphasis mt-2">{p.content.substring(0, 100)}...</p>
                <div className={`d-flex align-items-center mt-3 gap-3`}>
                    {p.published ? (
                        <>
                            <button className="btn btn-outline-success p-1">Read more</button>
                            <i className={`fas fa-bookmark ${feedStyle.fa_bookmark}`}></i>
                        </>
                    ) : (<p>Not published yet</p>)}

                </div>
            </div>
        </div >
    )
}