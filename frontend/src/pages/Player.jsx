import { Container, Row, Col, Card, Button, Stack } from "react-bootstrap";
import FlippableCard from '../components/card/FlippableCard'; 
import ListGroup from 'react-bootstrap/ListGroup';
import Modal from 'react-bootstrap/Modal';
import { useState } from 'react';
import Form from 'react-bootstrap/Form';
import useAuth from "../hooks/auth";

const Player = () => {

  const [showInvite, setShowInvite] = useState(false);
    const handleClose = () => setShowInvite(false);
    const handleShow = () => setShowInvite(true);
    const [invite, setInvite] = useState(false);
    const {isSignedIn} = useAuth();

    function changeInviteShow(){
    
      setInvite(!invite);
      setShowInvite(false);
  }
    return (
        <>
        <Container className="mt-5" >
      <Row className="gutters-sm">
        <Col md={4} className="mb-3">
          <Card>
            <Card.Body>
              <div className="d-flex flex-column align-items-center text-center">
                <img
                  src="https://images.lifestyleasia.com/wp-content/uploads/sites/3/2022/12/31011513/harry-potter-films.jpeg"
                  className="rounded-circle"
                  width="150"
                />
                <div className="mt-3">
                  <h4>Harry Potter</h4>
                  <p className="text-secondary mb-1">@hpotter</p>
                  
                  <p className="text-secondary font-size-sm mb-1">
                    Toronto, CA
                  </p>
                  <p className="text-secondary font-size-sm mb-2"><a href={"mailto:"} className="text-secondary text-decoration-none">hpotter@hogwarts.gr</a></p>
                  {isSignedIn && (
                  <Button variant={invite === false ? "btn btn-outline-success" : "btn btn-outline-danger"} onClick={handleShow}>{invite === false ? "Invite" : "Uninvite"}</Button>
                  )}
                  {" "}
                
                </div>
              </div>
            </Card.Body>
          </Card>
          <Card className="mt-3">
            <Card.Body>
              <ul className="list-group list-group-flush">

                <h4 className="text-center pt-1 pb-3">Sports</h4>
                <li className="list-group-item d-flex justify-content-between align-items-center flex-wrap">
                  <h6 className="mb-0">
                    
                    Soccer Team
                  </h6>
                  <a href="/team/1">
                  <span className="text-secondary">Chelsea</span></a>
                </li>
                <li className="list-group-item d-flex justify-content-between align-items-center flex-wrap">
                  <h6 className="mb-0">
                    
                    Jersey Number
                  </h6>
                  <span className="text-secondary">47</span>
                </li>
                <li className="list-group-item d-flex justify-content-between align-items-center flex-wrap">
                  <h6 className="mb-0">
                    
                    Status
                  </h6>
                  <span className="text-secondary">Active</span>
                </li>
                
              </ul>
            </Card.Body>
          </Card>
          <Card className="mt-3">
            <Card.Body>
              <h4 className="text-center">Past Matches</h4>
                   {/* Past Matches Here */}
                   <ListGroup>
            <ListGroup.Item action variant="danger" href="/match/1"  className='mt-2'>
              <Row className='text-center'>
              <Col>
              20.06.23
              </Col>
              <Col>
              Real Madrid
              </Col>
              <Col md>
              1-4
              </Col>
              <Col>
              Toronto
              </Col>
              </Row>
            </ListGroup.Item>
            <ListGroup.Item action variant="success" href="/match/1" className='mt-2'>      
            <Row className='text-center'>
              <Col>
              20.06.23
              </Col>
              <Col>
              Real Madrid
              </Col>
              <Col md>
              4-1
              </Col>
              <Col>
              Toronto
              </Col>
              </Row>          
          </ListGroup.Item>
          </ListGroup>
            </Card.Body>
          </Card>
        </Col>
        <Col md={8}>
          <Card>
            
              <h4 className="center-header">Statistics</h4>
              
              <div className="denemerow12">
                {/* This part will repeat */}
              <div className="d-block denemecolumn12">
        <h1 className=" text-center" style={{fontSize:"9rem", fontFamily:"Saira Extra Condensed", color:"indigo"}}>72</h1>
        <div className="text-center w-50 mx-auto"><h6 className="border-top border-bottom">Goals</h6></div>
      </div>
{/* Repeat end */}
<div className="d-block denemecolumn12 ">
        <h1 className=" text-center" style={{fontSize:"9rem", fontFamily:"Saira Extra Condensed", color:"indigo"}}>1.15</h1>
        <div className="text-center w-50 mx-auto"><h6 className="border-top border-bottom">Avg Goal Per Game</h6></div>
      </div>
      <div className="d-block denemecolumn12">
        <h1 className=" text-center" style={{fontSize:"9rem", fontFamily:"Saira Extra Condensed", color:"indigo"}}>30</h1>
        <div className="text-center w-50 mx-auto"><h6 className="border-top border-bottom">Assists</h6></div>
      </div>
      <div className="d-block denemecolumn12">
        <h1 className=" text-center" style={{fontSize:"9rem", fontFamily:"Saira Extra Condensed", color:"indigo"}}>150</h1>
        <div className="text-center w-50 mx-auto"><h6 className="border-top border-bottom">Shots</h6></div>
      </div>

      
      </div>
    
        </Card>

          <Card className="mt-5">
            <Card.Body className="justify-content-center align-items-center text-center">
            <h4 className="center-header">Active Leagues</h4>
              <Row ><Col>
              <div className="col d-flex flex-column flex-md-row justify-content-around align-items-center mx-5 mb-5">
            <FlippableCard imageUrl="/basketball_pic2.jpg" cardText="Jordan Warriors"/>
            <FlippableCard imageUrl="/basketball_pic2.jpg" cardText="Jordan Warriors"/>
          </div>
    </Col>
          <hr />      
</Row>

              <h4 className="center-header">Past Leagues</h4>
              <Row className="justify-content-center">
              <Row>
        <Col sm={12} >
          <ListGroup>
            <ListGroup.Item action href="/league/1"  className='mt-2'>
              <Row className='text-center'>
              <Col md={2}>
                Do or Do not
              </Col>
              <Col md={2}>
              20.06.23
              </Col>
              <Col md={3}>
              2nd Place
              </Col>
              <Col md={3}>
              6 Wins
              </Col>
              <Col md={2}>
              Toronto
              </Col>
              </Row>
            </ListGroup.Item>
            </ListGroup>
            </Col>
            </Row>
            

                
            
                
              </Row>
             
            </Card.Body>
          </Card>
        </Col>
        
      </Row>
    </Container>



{/* Modal opening up after clicking Join */}
<Modal show={showInvite} onHide={handleClose}>
      <Modal.Header closeButton>
          <Modal.Title>Message</Modal.Title>
        </Modal.Header>
        <Modal.Body>
          <Form>
            
            <Form.Group
              className="mb-3"
              controlId="exampleForm.ControlTextarea1"
            >
              <Form.Label>Explain shortly why you want to {invite===false ? "invite" : "uninvite"} this player to your team.</Form.Label>
              <Form.Control as="textarea" rows={3} />
            </Form.Group>
          </Form>
        </Modal.Body>
        <Modal.Footer>
          <Button variant="secondary" onClick={handleClose}>
            Cancel
          </Button>
          <Button variant={invite===false ? "success" : "danger"} onClick={changeInviteShow}>
          {invite===false ? "Invite" : "Uninvite"}
          </Button>
        </Modal.Footer>
      </Modal>

        </>
    )
}

export default Player; 