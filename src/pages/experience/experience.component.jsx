import React from "react";
import Container from "react-bootstrap/Container";
import Jumbotron from "react-bootstrap/Jumbotron";
import Card from "react-bootstrap/Card";

import Tilt from "react-tilt";
import blog_one from "../../assets/img/experience/Capture.PNG";
import blog_two from "../../assets/img/experience/Capture5.PNG";
import blog_three from "../../assets/img/experience/Capture6.PNG";
import "./experience.styles.css";

const Experience = () => {
  return (
    <div id="experience">
      <h1 className="pt-3 text-center font-details-b pb-3 text-light">BLOGS</h1>
      <Jumbotron className="jumbo-style">
        <div className="row">
          <div className="col-md-4">
            <Container>
              <Tilt options={{ max: 25 }}>
                <Card>

                  <Card.Body className="d-flex justify-content-center flex-column">
                    <div>
                      <img src={blog_one} style={{ width: '250px', height: '200px', marginBottom: "15px" }} alt="" />
                      <p style={{ textAlign: "justify" }}> <b>1. What are the difference between normal function and constructor function in JavaScript?</b>
                        <br /> Normal function has to be called. On the  <a href="https://isratjahanruna6.medium.com/10-important-topics-about-javascript-you-should-know-37e2a473b0c"> read more</a>......</p>
                    </div>

                  </Card.Body>

                </Card>
              </Tilt>
            </Container>
          </div>
          <div className="col-md-4">
            <Container>
              <Tilt options={{ max: 25 }}>
                <Card>

                  <Card.Body className="d-flex justify-content-center flex-column">
                    <div>
                      <img src={blog_two} style={{ width: '250px', height: '200px', marginBottom: "15px" }} alt="" />
                      <p style={{ textAlign: "justify" }}> <b>Event Loop in JavaScript: </b>
                        <br /> We can see from this diagram that there are four parts to an event loop: call stack, web API, event queue, and event loop. The call <a href="https://isratjahanruna6.medium.com/lets-explore-javascript-more-3f14ba3865c0">read more</a>......</p>
                    </div>

                  </Card.Body>

                </Card>
              </Tilt>
            </Container>
          </div>
          <div className="col-md-4">
            <Container>
              <Tilt options={{ max: 25 }}>
                <Card>

                  <Card.Body className="d-flex justify-content-center flex-column">
                    <div>
                      <img src={blog_three} style={{ width: '250px', height: '200px', marginBottom: "15px" }} alt="" />
                      <p style={{ textAlign: "justify" }}> <b>1. What is the difference between double equal (==) and triple equal(===)?</b>
                        <br />The main difference between double equal and triple equal is double equal <a href="https://isratjahanruna6.medium.com/10-important-interview-questions-a-bout-javascript-17aafeded7f2">read more</a>......</p>
                    </div>

                  </Card.Body>

                </Card>
              </Tilt>
            </Container>
          </div>
        </div>
      </Jumbotron>
    </div>
  );
};

export default Experience;
