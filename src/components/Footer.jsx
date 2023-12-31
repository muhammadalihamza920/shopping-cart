import React from 'react';
import {
  MDBFooter,
  MDBContainer,

  MDBIcon,
  MDBBtn
} from 'mdb-react-ui-kit';
import { useNavigate } from 'react-router-dom';

const Footer = () => {
  const navigate = useNavigate()
  
  return (
    <MDBFooter className='bg-gray-800 text-center text-white '>
      <MDBContainer className='p-4 pb-0'>
        <section className='mb-4'>
          <MDBBtn outline color="light" floating className='m-1' href='#!' role='button'>
            <MDBIcon fab icon='facebook-f' onClick={() => navigate("/adrefrnd")}/>
          </MDBBtn>

          <MDBBtn outline color="light" floating className='m-1' href='#!' role='button'>
            <MDBIcon fab icon='twitter' />
          </MDBBtn>

          <MDBBtn outline color="light" floating className='m-1' href='#!' role='button'>
            <MDBIcon fab icon='google' />
          </MDBBtn>
          <MDBBtn outline color="light" floating className='m-1' href='#!' role='button'>
            <MDBIcon fab icon='instagram' />
          </MDBBtn>

          <MDBBtn outline color="light" floating className='m-1' href='#!' role='button'>
            <MDBIcon fab icon='linkedin-in' onClick={() => navigate("/owner")}/>
          </MDBBtn>

          <MDBBtn outline color="light" floating className='m-1' href='#!' role='button'>
            <MDBIcon fab icon='github' onClick={() => alert("I LOVE YOU FAJAR")} />
          </MDBBtn>
        </section>
      </MDBContainer>

      <div className='text-center p-3' style={{ backgroundColor: 'rgba(0, 0, 0, 0.2)' }}>
        © 2023 Developer : 
        <a className='text-white' onClick={() => navigate("/owner")}>
         Muhammad Ali Hamza
        </a>
      </div>
    </MDBFooter>
  );
}

export default Footer;