import React from 'react';
import logo from './logo.svg';
import './App.css';
import { right } from 'quixote/src/descriptors/element_edge';

var status = {
  1: 'In Progress',
  2: 'completed',
  3: 'cancelled',
}


var Appointments = {
  'name':"Alan Ford",
  'employeeid':"1234567890",
  'email':"person@example.com",
  'appointment':new Date().toLocaleDateString(),
  'phone':'123456789',
  'status':status[1],
  'Door':"Mark",
  'Time':new Date().toLocaleTimeString(),
  'avatar':'https://www.w3schools.com/howto/img_avatar.png',
  'title':'Hey this is title text',
  'description':"Lorem ipsum lorem isLorem ipsumLorem ipsumLorem Lorem ipsum lorem isLorem ipsumLorem ipsumLorem ",
}

var arrow="<";
var rightArrow = '>';

function App() {
  return (
    <div className="site-container">
    {/* Start Your code here */}
    <div className='order-details'>
      <div className='nav'>
        <div className='nav-container'>
          <a className='nav-arrow arrow' href='#'>{arrow}</a>
          <h1 className='nav-title'>
            {
              Appointments.name
            }
          </h1>
          <span className='nav-text'>{Appointments.employeeid}</span>
          <button className='btn nav-btn'>Print</button>
        </div>

      </div>

    <div className='container'>
      <div className='customer-info block'>
        <p className='text'>
          <span>Appointment On </span>
          {Appointments.Time} {Appointments.appointment}
        </p>

        <p className='text'>
          <span>Email: </span>
          {Appointments.email}
        </p>

        <p className='text'>
          <span>Phone </span>
          {Appointments.phone}
        </p>

      </div>

      <div className='order-info grid block'>
        <div className='unit one-third'>
          <p className='text text-label'>Status</p>
          <p className='text order-status'>{Appointments.status}</p>

        </div>

        <div className='unit one-third'>
          <p className='text text-label'>Door</p>
          <p className='text order-status'>{Appointments.Door}</p>

        </div>

        <div className='unit one-third'>
          <p className='text text-label'>Time</p>
          <p className='text order-status'>{Appointments.Time}</p>

        </div>

      </div>

      <ul className='product-list block'>
        <li className='product'>
          <label className='img custom-checkbox'>
            <input type='checkbox' className='product-input' value=''></input>
            <span className='custom-checkbox-indicator'></span>
            <img className='avatar' src={Appointments.avatar} width='150' height='150' alt='profile image'></img>
          </label>
        </li>

        <li>
          <a href='#' className='product-desc'>
            

            <div className='product-info'>
              <h3 className='product-title text '>{Appointments.title}</h3>
              <p className='text-help text'>
                {Appointments.description}
              </p>
            </div>
          </a>
        </li>

        <li>
        <span className='product-arrow arrow'>
              {rightArrow}
        </span>
        </li>
      </ul>

    </div>
    </div>
    </div>
  );
}

export default App;
