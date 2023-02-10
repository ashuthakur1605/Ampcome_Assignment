import React from 'react'
// import DoctorDashbord from './DoctorDashbord'
import Frame from './Html/Frame.jpg'
import './Html/Css/index.css'
function Login() {

    
  return (
    <div className="login">
        <div className="Container-1">

            <div className="Rectangle">

                <div className="Welcome">Welcome To App Name</div>
                <div className="Text">Get ahead of the curve. Join the next genration of health heroes</div>

                <div className="Frame"><img src={Frame} alt=""/></div>

            </div>
        </div>

        <div className="Container-2">

            <div className="SignIn-Form">
                <p>Sign-in to your account</p>
            </div>

            <div className="Input">
                <div className="User">
                    <input className="UserName" type="UserName" placeholder="Username"/>
                </div>

                <div className="Pass">
                    <input className="PassWord" type="UserName" placeholder="Password"/>
                </div>


            </div>


            <select className="Select-Unit">
                <option className="Select-Unit-Name" value=""> Select Unit Name</option>

            </select>

            <div className="SignIn">
                <button className="SignIn-button">Sign in</button>
            </div>


        </div>
    </div>
  )
}

export default Login