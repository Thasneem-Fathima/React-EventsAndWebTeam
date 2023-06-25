import React from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faPhone, faEnvelope } from '@fortawesome/free-solid-svg-icons';
import p1 from './webteam/mem1.jpg';
import p2 from './webteam/mem2.jpg';
import './Team.css'; 

const frontend = [
  {
    id: 1,
    name: 'THASNEEM FATHIMA M',
    phone: '1234567890',
    email: 'person1@gmail.com',
    image: p1,
  },
  {
    id: 2,
    name: 'Person2',
    phone: '1234567890',
    email: 'person2@gmail.com',
    image: p2,
  },
  {
    id: 3,
    name: 'Person1',
    phone: '1234567890',
    email: 'person1@gmail.com',
    image: p1,
  },
  {
    id: 4,
    name: 'Person2',
    phone: '1234567890',
    email: 'person2@gmail.com',
    image: p2,
  },
  {
    id: 5,
    name: 'Person1',
    phone: '1234567890',
    email: 'person1@gmail.com',
    image: p1,
  },
  {
    id: 6,
    name: 'Person2',
    phone: '1234567890',
    email: 'person2@gmail.com',
    image: p2,
  },
  {
    id: 7,
    name: 'Person1',
    phone: '1234567890',
    email: 'person1@gmail.com',
    image: p1,
  },
];

const backend = [
    {
      id: 1,
      name: 'Person1',
      phone: '1234567890',
      email: 'person1@gmail.com',
      image: p1,
    },
    {
      id: 2,
      name: 'Person2',
      phone: '1234567890',
      email: 'person2@gmail.com',
      image: p2,
    },
    
  ];
  
function WebTeam() {
 
  return (
    <div className="container" style={{color: "#001f4d"}}>
      <h1 className="text-center" style={{marginBottom: "20px" ,marginTop:"20px" }}>Web Team</h1>
      <h2 className="text-center" style={{marginBottom: "30px" ,color:"#001f4d" }}>Front End</h2>
      <div className="row">
        {frontend.map((member) => (
          <div className="col-md-3" key={member.id}>
            <div className="card" style={{marginBottom: "30px", marginRight:"40px",color:"#001f4d"  }}>
            <div className="text-center">
              <img
                className="card-img-top rounded-circle team-member-image"
                src={member.image}
                alt={member.name}
              />
              
              </div>
              <div className="card-body">
                <h5 className="card-title">{member.name}</h5>
                <p className="card-text">
                  <FontAwesomeIcon icon={faPhone} /> {member.phone}<br />
                  <FontAwesomeIcon icon={faEnvelope} /> {member.email}
                </p>
              </div>
            </div>
          </div>
          
        ))}
      </div>
      <div style={{marginBottom: "40px"  }}></div>
      <h2 className="text-center" style={{marginBottom: "30px",color:"#001f4d"  }}>Back End</h2>
      <div className="row">
        {backend.map((member) => (
          <div className="col-md-3" key={member.id}>
            <div className="card" style={{marginBottom: "30px",marginRight:"40px",color:"#001f4d"  }}>
            <div className="text-center">
              <img
                className="card-img-top rounded-circle team-member-image"
                src={member.image}
                alt={member.name}
              />
              </div>
              <div className="card-body">
                <h5 className="card-title">{member.name}</h5>
                <p className="card-text">
                  <FontAwesomeIcon icon={faPhone} /> {member.phone}<br />
                  <FontAwesomeIcon icon={faEnvelope} /> {member.email}
                </p>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}
export default WebTeam;