import React from 'react'
import '../Html/Css/DoctorDashbord.css'
import Group7455 from '../Html/public/Group7455.svg'
import Group7457 from '../Html/public/Group7457.svg'
import Group7456 from '../Html/public/Group7456.svg'
import Group7454 from '../Html/public/Group7454.svg'
function DoctorsAppointment() {
  return (
    <div className="Appointments">
      <div className="Appoint">Appointments
      </div>

     <div className="lineA"></div>

      <div className='waiting'>waiting queue(6)</div>
      <div className='Viewq'>View queue</div>
      

      <div className="Prajeesh">
        <img src={Group7454} alt="" />
      </div>

      <div className='RishaMahin'>
        <img src={Group7455} alt="" />
        
      </div>

      <div className='Riju'>
      <img src={Group7456} alt="" />
        
      </div>

      <div className='Setia'>
      <img src={Group7457} alt="" />
        
      </div>

      <div className="lineB"></div>

      <div className="Viewall">View all Appointments</div>
    
    </div>

  )
}

export default DoctorsAppointment







