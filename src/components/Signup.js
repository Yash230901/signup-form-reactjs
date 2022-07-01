import React from 'react'
import { useForm } from 'react-hook-form'
import "./Signup.css"
const Signup = () => {
    const { register,reset, handleSubmit,formState:{errors} } = useForm();
    const onSubmit = (data) => {
        console.log(data);
        console.log(data[Object.keys(data)[0]])//printing the user firstname
        alert("welcome to the website "+data[Object.keys(data)[0]])
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
                            <input name="firstName" type="text"  className='first' placeholder="First name"  {...register("firstName",{required:true})} />
                            <input name="lastName" type="text"  className='last' placeholder="Last name" {...register("lastName",{required:true})} />
                        </div>
                        <input  name="email" type="email" id='email' placeholder="Email Address" {...register("email",{required:true})} />
                        <input  name='password' type="password" autoComplete='off'id='password' placeholder='Password' {...register("password",{required:true})} />
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