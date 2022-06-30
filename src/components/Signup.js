import React from 'react'
import { useForm } from 'react-hook-form'
import "./Signup.css"
const Signup = () => {
    const { register,reset, handleSubmit,formState:{errors} } = useForm();
    const onSubmit = (data) => {
        console.log(data);
        reset();
    }
    return (
        <section className="container">
            <div className='row'>
                <div className='content'>
                    <h1>the best offer <br /> <span>for your business</span></h1>
                    <p>Notice the use of %PUBLIC_URL% in the tags above.
                        It will be replaced with the URL of the `public` folder during the build.
                        Only files inside the `public` folder can</p>
                </div>
                <div className="form-container">
                    <form onSubmit={handleSubmit(onSubmit)}  >
                        <div className='names'>
                            <input name="firstName" type="text" required className='first' placeholder="First name"  {...register("firstName")} />
                            <input name="lastName" type="text" required className='last' placeholder="Last name" {...register("lastName")} />
                        </div>
                        <input  name="email" type="email" required id='email' placeholder="Email Address" {...register("email")} />
                        <input  name='password' type="password" autoComplete='off' required id='password' placeholder='Password' {...register("password")} />
                        <button type='submit' id='submit-btn'>SIGN UP</button>
                        <h3>or signup with:</h3>
                        <div className='social'>
                            <i className="fa fa-brands fa-google"></i>
                            <i className="fa fa-brands fa-facebook-f"></i>
                            <i className="fa fa-brands fa-twitter"></i>
                            <i className="fa fa-brands fa-github"></i>
                        </div>
                    </form>
                </div>
            </div>
        </section>
    )
}

export default Signup