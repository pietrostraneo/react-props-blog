import styleHeader from './Header.module.scss';
import { Link } from "react-router-dom";

export default function Header() {
    return (
        <div className="container">
            <div className="row">
                <div className="col-12 d-flex justify-content-between text-white align-items-center">

                    <div className="logo">
                        <img src="/logo.png" alt="" className={`img-fluid ${styleHeader.jumbo_img}`} />
                    </div>

                    <div className="nav d-flex gap-4 align-items-center">
                        <ul className="list-unstyled d-flex gap-5 justify-content-center align-items-center">
                            <li><Link to="/" className='text-white text-decoration-none'>Home</Link></li>
                            <li><Link to="/latest" className='text-white text-decoration-none'>Latest</Link></li>
                            <li><Link to="/contacts" className='text-white text-decoration-none'>Contacts</Link></li>
                            <li><Link to="/about" className='text-white text-decoration-none'>About us</Link></li>
                        </ul>
                        <ul className="list-unstyled d-flex gap-2 justify-content-center align-items-center">
                            <li><i className={`fas fa-magnifying-glass ${styleHeader.buttons}`}></i></li>
                            <li><Link to="/latest" className='text-white text-decoration-none'><i className={`fas fa-bookmark ${styleHeader.buttons}`}></i></Link></li>
                            <li><Link to="/login" className='text-white text-decoration-none'><i className={`fas fa-user ${styleHeader.buttons}`}></i></Link></li>
                        </ul>
                    </div >
                </div>
            </div>

        </div >

    )
}