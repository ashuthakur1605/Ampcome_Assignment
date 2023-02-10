import React from 'react'
import './Html/Css/DoctorDashbord.css'
import DoctorsAppointment from './DoctorDashbord-Components/DoctorsAppointment'
import Schedule from './DoctorDashbord-Components/Schedule'
import SideBar from './DoctorDashbord-Components/SideBar'
import Rectangle from './Html/public/Rectangle152.png'
import gorup1114 from './Html/public/group-1114.svg'
import gorup1113 from './Html/public/group-1113.svg'
import gorup1118 from './Html/public/group-1118.svg'
import summaryicon from './Html/public/summaryicon.svg'
import component59 from './Html/public/component-59.svg'
import graph from './Html/public/Graph.png'
// import gorup1115 from './Html/public/group-1115.png'
// import gorup1116 from './Html/public/group-1116.png'
// import gorup1117 from './Html/public/group-1117.png'
function DoctorDashbord() {
  return (
    <div className="Dashbord">
      <div className="container-1">
        <p className="welcome">Welcome Anil Kumar</p>
        <p className="cardiology">Cardiology</p>


      </div>


      <div><SideBar /></div>























      <div className="patientsDatails"></div>



      <div className="Total-earnings">
        <img src={component59} alt="" />
        <div className="text">Total Earnings</div>
        <div className="int">₹4000</div>
        <select class="form-select" aria-label="Default select example">
          
          <option selected>PRK Hospital</option>
          <option value="1">One</option>
        </select>
        <select class="form-select2" aria-label="Default select example">
          
          <option selected>Last 7 days</option>
          <option value="1">One</option>
        </select>

      </div>

      <div className="patientsHistory">
        <div className="c1">Appointments</div>
        <div className="c2">EMR Finalised</div>
        <div className="c3">Patient Registrations</div>
        <div className="c4">KR4ALL Visits</div>

        <div className="i1">54</div>
        <div className="i2">47</div>
        <div className="i3">120</div>
        <div className="i4">30</div>


      </div>

      <div><DoctorsAppointment /></div>


      <div><Schedule /></div>


      <article className="Article">
        <img src={Rectangle} alt=''/>
        {/* <div className="Articon1"><img src={gorup1112} alt="" /></div> */}
        {/* <div className="Articon2"></div>
        <div className="Articon3"></div>
        <div className="Articon4"></div>
        <div className="Articon5"></div> */}
  
        
        <div className='activity'><img src={gorup1113} alt="" />activity</div>
        <div className='UserActivity1'><img src={gorup1114} alt="" />User Activity -  12:32 <br />
        Vivek Kumar accepted the invitation</div>
        <div className='UserActivity2'><img src={gorup1114} alt="" />User Activity -  8:16 <br />
        Ritu M, blocked their calendar for 15th September</div>
        <div className='Summary'><img src={summaryicon} alt="" />Summary -  8:00<br />
        Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do incididunt</div>
        <div className='ApplicationUpdate'><img src={gorup1118} alt="" />Application Update -  yesterday <br />
        Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do incididunt</div>
        <div className='UserActivity3'><img src={gorup1114} alt="" />User Activity -  2 days ago <br />Vivek Kumar accepted the invitation</div>
      </article>

      <div className="Consultationhistory">
        <div className="chistory">consultation History</div>
        <div className="Chline"></div>
        <div className="graph"><img src={graph} alt="" /></div>
      </div>
    </div>
  )
}

export default DoctorDashbord