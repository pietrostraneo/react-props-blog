import loginStyle from './Login.module.scss'
import { useState } from 'react'
import { Link } from 'react-router-dom'

export default function Login() {
    return (
        <>
            <div className="container">
                <div className="row mt-5 justify-content-center text-white">

                    <div className="col-12 col-md-8 mb-4">
                        <h3 className='fw-bold'>Login to Innov8Tech</h3>
                    </div>

                    <div className="col-12 col-md-8">
                        <form action="http://localhost:3000/auth/login" method="post">

                            <div className='mb-3'>
                                <label htmlFor="email" className='text-white fw-medium d-block mb-2'>Email</label>
                                <input type="email" name="email" id="email" placeholder='Insert your email' className={`${loginStyle.input} p-2`} />
                            </div>

                            <div className='mb-3'>
                                <label htmlFor="password" className='text-white fw-medium d-block mb-2'>Password</label>
                                <input type="password" name="password" id="password" placeholder='Insert your password' className={`${loginStyle.input} p-2`} />
                            </div>

                            <button type="submit" className='btn btn-outline-success w-50 mb-4'>Login</button>

                            <div className="sign-up">
                                <p className={`${loginStyle.sub_color}`}>Don't you have an account? <Link to="/sign-up">Sign Up</Link></p>

                            </div>

                        </form>
                    </div>
                </div>
            </div >
        </>
    )
}