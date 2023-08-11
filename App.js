import React from 'react'
// import Gomycode from './gomycode'
// import UseRedusa from './Ref'
import UseRedusa from './UseRedu/UseRedusa'
import 'font-awesome/css/font-awesome.min.css'; 
import 'font-awesome/css/font-awesome.min.css';
import { products } from './GoMyCode/product'; 
import Descript from './GoMyCode/Descript';
import Image from './GoMyCode/Image';
import Name from './GoMyCode/Name';
import Price from './GoMyCode/Price';
import Button from 'react-bootstrap/Button';
import Card from 'react-bootstrap/Card';
import './App.css'
import Col from 'react-bootstrap/Col';
import Row from 'react-bootstrap/Row';
import OverlayTrigger from 'react-bootstrap/OverlayTrigger';
import Tooltip from 'react-bootstrap/Tooltip';
// import Button from 'react-bootstrap/Button';
// import Col from 'react-bootstrap/Col';
import Form from 'react-bootstrap/Form';
import InputGroup from 'react-bootstrap/InputGroup';
// import Row from 'react-bootstrap/Row';
import * as formik from 'formik';
import * as yup from 'yup';





function App() {

  let firstName = 'Johnmary';
    const { Formik } = formik;

  const schema = yup.object().shape({
    firstName: yup.string().required("hello there"),
  });

    return (
      <>
        <div className='app'>
          <h1>Your Spicy Meal</h1>
    <Row xs={1} md={2} className="g-4">
            {Array.from({ length: 4 }).map((products, idx) => (
              <Col key={idx}  >
                <div className="cardss">
                  <Card>
                    <span style={{ width: '100%', height: '250px' }} className='img' variant="top">
                      <Image />
                    </span >
                    <Card.Body>
                      <div className='titl'>
                        <Card.Title>< Name /></Card.Title></div>
                      <Card.Text>
                        <div className='desc'>
                          <Descript />
                        </div>
                        <span className='pri'>
                          < Price />
                        </span>
                      </Card.Text>
                    </Card.Body>
                  </Card>
                  {/* <div className='message'> */}
                  <OverlayTrigger
                    placement="bottom"
                    overlay={<Tooltip id="button-tooltip-2"><span className='tip'>Hello {firstName}<span >
                      <img className="pics" src="https://i.pinimg.com/236x/8e/d1/11/8ed111d3b562b703ea9fd03521515b16.jpg" alt="img" />
                    </span></span></Tooltip>}
                  >
                    {({ ref, ...triggerHandler }) => (
                      <Button
                        style={{ height: '50px', width: '80px' }}
                        variant="info"
          
                        {...triggerHandler}
                        className="d-inline-flex align-items-center"
                      >
                        <span className="ms-1">message</span>
                      </Button>
                    )}
                  </OverlayTrigger>
                  <div>
     <Formik
      validationSchema={schema}
      onSubmit={console.log}
      initialValues={{
        firstName: '',
      }}>
{({ handleSubmit, handleChange, values, touched, errors }) => (
<Form noValidate onSubmit={handleSubmit}>
<Row className="mb-3">
<Form.Group as={Col} md="4" controlId="validationFormik01">
<Form.Label>First name</Form.Label>
<Form.Control
  type="text"
  name="firstName"
  value={values.firstName}
  onChange={handleChange}
  isValid={touched.firstName && !errors.firstName}
                              />
  {touched.firstName && errors.firstName && <h2>hello there</h2>}
  <Form.Control.Feedback><img src='https://i.pinimg.com/236x/b9/da/38/b9da389ba099a5525297192a49d402e1.jpg' alt="img" /></Form.Control.Feedback>
</Form.Group>
</Row>
<Button className='submit' type="submit">Submit form</Button>
                        </Form>
                      )}
          </Formik>
                  </div>
                </div>
              </Col>
            ))}
          </Row>
    </div>
    </>
  )
}

export default App
                // {/* <Gomycode /> */}
                // {/* < Nav /> */}
                // {/* < UseRedusa /> */}