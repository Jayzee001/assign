import React from 'react'
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
import Form from 'react-bootstrap/Form';
import InputGroup from 'react-bootstrap/InputGroup';
import * as formik from 'formik';
import * as yup from 'yup';





function App() {

  let firstName = 'Johnmary';
    const { Formik } = formik;
// this is the message/resp when the field is empty
  const schema = yup.object().shape({
    firstName: yup.string().required("hello there"),
  });

    return (
      <>
        <div className='app'>
          <h1>Your Spicy Meal</h1>
    <Row xs={1} md={2} className="g-4">
      // the reason why the are 4 cards 
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
                // this is the bootstrap function which help in displaying my name when the mouse over on the button message
                  <OverlayTrigger
                    placement="bottom"
//this is where the variable firstname was used and below is the response when we hover above the message button
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
                      //end of the button message function
                      // the div that contain the input, validation and error resp. this was achievable by formik and yuq dependencies which can also be used in the normal way without react 
                  <div>
                      //form 
     <Formik
//the validator
      validationSchema={schema}
      onSubmit={console.log}
// initial state of my input value
      initialValues={{
        firstName: '',
      }}>
//handlers which will assist in the validation 
{({ handleSubmit, handleChange, values, touched, errors }) => (
<Form noValidate onSubmit={handleSubmit}>
<Row className="mb-3">
<Form.Group as={Col} md="4" controlId="validationFormik01">
<Form.Label>First name</Form.Label>
  //the form input using react_bootstrap
<Form.Control
  type="text"
  name="firstName"
  value={values.firstName}
  onChange={handleChange}
  isValid={touched.firstName && !errors.firstName}
                              />
// the error message when the firstname field is empty
  {touched.firstName && errors.firstName && <h2>hello there</h2>}
    // when the input is filled up the message resp is below.
  <Form.Control.Feedback><img src='https://i.pinimg.com/236x/b9/da/38/b9da389ba099a5525297192a49d402e1.jpg' alt="img" /></Form.Control.Feedback>
</Form.Group>
</Row>
<Button className='submit' type="submit">Submit form</Button>
                        </Form>
                      )}
          </Formik>
            //end of the form input.
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
