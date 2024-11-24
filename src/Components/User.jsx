import React from 'react'
import './User.css'
import videoBg from '../assets/v.mp4'

const User = () => {




  return (
 <>
     <div className="div">
     <video className='fixed object-cover z-[-999]' src={videoBg} autoPlay loop muted/>
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
              <input type="email"/>
              <p></p>
              </div>
              {/* ====== Password input */}

              <div className="pass_p">

              <h2>Password</h2>
              <input type="password"/>
              <p></p>

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
              <button className='b'>login</button>
            </div>
            <p>Don't have an account ?<span><i> Create one</i></span></p>
          </div>

        </div>

      </div>


      </div>
     

 
 </>
  )
}

export default User