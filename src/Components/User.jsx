import React, { useState } from 'react'
import './User.css'
import videoBg from '../assets/v.mp4'
import { toast, Zoom } from 'react-toastify'


const User = () => {

  // ======== Custom State ========== //

  const [email, setEmail]          = useState('')
  const [errormail , setErrormail] = useState('')
  const [pass , setPass]           = useState('')
  const [errorpass , setErrorpass] = useState('')


// ============== All Function part ======= //
 
 const handelemail =(item)=>{
  setEmail (item.target.value)
  setErrormail('')
 }

const handelpass =(item)=>{

  setPass(item.target.value)
  setErrorpass('')
}


 const submit = (e)=>{

    e.preventDefault()

  if(email == ''){
    setErrormail('Please enter your mail')
  }
  else{
    setErrormail('')
  }

  if(pass == ''){
    setErrorpass('Please enter your pass')
  }
  else{
    setErrorpass('')

    toast.success('Login Successful !', {
      position: "top-center",
      autoClose: 5000,
      hideProgressBar: false,
      closeOnClick: true,
      pauseOnHover: true,
      draggable: true,
      progress: undefined,
      theme: "light",
      transition: Zoom,
      });
  }

 }


  return (
 <>
     <div className="div">
     <video className='fixed w-full h-screen object-cover z-[-999]' src={videoBg} autoPlay loop muted/>
     <div className="overlay bg-black/30 z-[-4] flex w-full h-screen fixed"></div>
     </div> 

      <div className="madina_main_form_all">

      <div className="all_form">

        <div className="madina_form">

          <div className="left_side">
             <img src="public/W.png" alt="img" />
          </div>

          <div className="main_form">

            {/* ==== Heading======== */}

            <h1>Login</h1>
            <div className="lg">
              <div className="l"></div>
              <div className="l"></div>
            </div>

            {/* ===== form========= */}
            <form>
              {/* ====== Email Input */}

              <div className="email_p">
              <h2>Email or Phone Number</h2>
              <input onChange={(e)=>handelemail(e)} type="email"/>
              <p className='error'>{errormail}</p>
              </div>
              {/* ====== Password input */}

              <div className="pass_p">

              <h2>Password</h2>
              <input onChange={handelpass} type="password"/>
              <p className='error'>{errorpass}</p>

              </div>

              {/* ====== Checkbox ======== */}
              <div className="pass">
                <div className="c_k">
                <input className='checkbox' type="checkbox" />
                <h3>Remember Password</h3>
              </div>
              <div className="p_p">
              <h4><i>forget password ?</i></h4>
              </div>
              </div>
            </form>
            {/* =========== button ========= */}
            <div className="button">
              <button onClick={submit} className='b'>login</button>
            </div>
            <p>Don't have an account ?<span><i></i></span></p>
          </div>
        

        </div>

      </div>


      </div>
     

 
 </>
  )
}

export default User