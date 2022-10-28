import React from 'react';
import '@fortawesome/fontawesome-free/css/all.min.css';
import 'bootstrap-css-only/css/bootstrap.min.css';
import 'mdbreact/dist/css/mdb.css';
import { MDBFooter } from "mdb-react-ui-kit";
import {
  MDBContainer,
  MDBIcon,
  MDBInput,
  MDBCol,
  MDBRow,
  MDBBtn
} from 'mdb-react-ui-kit';

export const Footer = () => {
  return (
    <footer className="fixed-bottom">
      <MDBFooter className='text-center' color='white' bgColor='dark'>
      <MDBContainer className='p-2'>
        <section className='mb-1'>

          <MDBBtn outline color="light" floating className='m-1' href='#https://www.linkedin.com/in/justin-kang-1419a9232/' role='button'>
            <MDBIcon fab icon='linkedin-in' />
          </MDBBtn>

          <MDBBtn outline color="light" floating className='m-1' href='#https://github.com/iinukng?tab=repositories' role='button'>
            <MDBIcon fab icon='github' />
          </MDBBtn>
        </section>

      </MDBContainer>
    </MDBFooter>
    </footer>
  );
}

export default Footer;