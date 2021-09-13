/*!

=========================================================
* Argon Design System React - v1.1.0
=========================================================

* Product Page: https://www.creative-tim.com/product/argon-design-system-react
* Copyright 2020 Creative Tim (https://www.creative-tim.com)
* Licensed under MIT (https://github.com/creativetimofficial/argon-design-system-react/blob/main/LICENSE.md)

* Coded by Creative Tim

=========================================================

* The above copyright notice and this permission notice shall be included in all copies or substantial portions of the Software.

*/
import React from "react";
// nodejs library that concatenates classes
import classnames from "classnames";
import movieNest from "assets/img/theme/MovieNest.jpg";
import travelInJordan from "assets/img/theme/TravelinJordan.jpg";
import busMall from "assets/img/theme/BusMall.jpg";
import cocktailApp from "assets/img/theme/cocktailApp.jpg";
import galleryOfHornes from "assets/img/theme/galleryOfHornes.jpg";
// reactstrap components
import {
  Badge,
  Button,
  Card,
  CardBody,
  CardImg,
  FormGroup,
  Input,
  InputGroupAddon,
  InputGroupText,
  InputGroup,
  Container,
  Row,
  Col,
} from "reactstrap";

// core components
import DemoNavbar from "components/Navbars/DemoNavbar.js";
import CardsFooter from "components/Footers/CardsFooter.js";

// index page sections
import Download from "../IndexSections/Download.js";

class Landing extends React.Component {
  state = {};
  componentDidMount() {
    document.documentElement.scrollTop = 0;
    document.scrollingElement.scrollTop = 0;
    this.refs.main.scrollTop = 0;
  }
  render() {
    return (
      <>
        <DemoNavbar />
        <main ref="main">
          <div className="position-relative">
            {/* shape Hero */}
            <section className="section section-lg section-shaped pb-250">
              <div className="shape shape-style-1 shape-default">
                <span />
                <span />
                <span />
                <span />
                <span />
                <span />
                <span />
                <span />
                <span />
              </div>
              <Container className="py-lg-md d-flex">
                <div className="col px-0">
                  <Row>
                    <Col lg="6">
                      <h1 className="display-3 text-white">
                        Fresh Full-stack Developer{" "}
                      </h1>
                      <p className="lead text-white">
                        Hi, my name is Abdalrhman and I am 27 years old. I
                        graduated from Tafila Technical University in 2019 as a
                        mechanical engineer, and now I am shifting my career to
                        become a professional software developer.
                      </p>
                    </Col>
                  </Row>
                </div>
              </Container>
              {/* SVG separator */}
              <div className="separator separator-bottom separator-skew">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  preserveAspectRatio="none"
                  version="1.1"
                  viewBox="0 0 2560 100"
                  x="0"
                  y="0"
                >
                  <polygon
                    className="fill-white"
                    points="2560 0 2560 100 0 100"
                  />
                </svg>
              </div>
            </section>
            {/* 1st Hero Variation */}
          </div>
          <section className="section section-lg pt-lg-0 mt--200">
            <Container>
              <Row className="justify-content-center">
                <Col lg="12">
                  <Row className="row-grid">
                    <Col lg="4">
                      <Card className="card-lift--hover shadow border-0">
                        <CardBody className="py-5">
                          <h6 className="text-primary text-uppercase">
                            Movie Nest
                          </h6>
                          <p className="description mt-3"></p>
                          <img
                            style={{ width: "100%" }}
                            src={movieNest}
                            alt="..."
                          />
                          <Button
                            className="mt-4"
                            color="primary"
                            onClick={() =>
                              window.open("https://movienest301.netlify.app/")
                            }
                          >
                            Show Application
                          </Button>
                        </CardBody>
                      </Card>
                    </Col>
                    <Col lg="4">
                      <Card className="card-lift--hover shadow border-0">
                        <CardBody className="py-5">
                          <h6 className="text-success text-uppercase">
                            Travel in Jordan
                          </h6>
                          <p className="description mt-3"></p>
                          <img
                            style={{ width: "100%" }}
                            src={travelInJordan}
                            alt="..."
                          />
                          <Button
                            className="mt-4"
                            color="success"
                            onClick={() =>
                              window.open(
                                "https://travel-in-jordan.github.io/travel-in-jordan/"
                              )
                            }
                          >
                            Show Website
                          </Button>
                        </CardBody>
                      </Card>
                    </Col>
                    <Col lg="4">
                      <Card className="card-lift--hover shadow border-0">
                        <CardBody className="py-5">
                          <h6 className="text-warning text-uppercase">
                            Bus Mall
                          </h6>
                          <p className="description mt-3"></p>
                          <img
                            style={{ width: "100%" }}
                            src={busMall}
                            alt="..."
                          />
                          <Button
                            className="mt-4"
                            color="warning"
                            href="#pablo"
                            onClick={() =>
                              window.open(
                                "https://abdalrhmanbanyissa.github.io/bus-mall/"
                              )
                            }
                          >
                            Show Website
                          </Button>
                        </CardBody>
                      </Card>
                    </Col>
                  </Row>
                </Col>
              </Row>
            </Container>
          </section>
          <section className="section section-lg">
            <Container>
              <Row className="row-grid align-items-center">
                <Col className="order-md-2" md="6">
                  <img
                    alt="..."
                    className="img-fluid floating"
                    src={galleryOfHornes}
                  />
                  <img
                    alt="..."
                    className="img-fluid floating"
                    src={cocktailApp}
                  />
                </Col>
                <Col className="order-md-1" md="6">
                  <div className="pr-md-5">
                    <div className="icon icon-lg icon-shape icon-shape-success shadow rounded-circle mb-5">
                      <i className="ni ni-settings-gear-65" />
                    </div>
                    <h3>More Projects</h3>
                    <ul className="list-unstyled mt-5">
                      <li className="py-2">
                        <div className="d-flex align-items-center">
                          <div>
                            <Badge
                              className="badge-circle mr-3"
                              color="success"
                            >
                              <i className="ni ni-satisfied" />
                            </Badge>
                          </div>
                          <div>
                            <a
                              onClick={() =>
                                window.open(
                                  "https://coctails-app-ui.netlify.app/"
                                )
                              }
                              style={{ cursor: "pointer" }}
                            >
                              Cocktail App
                            </a>
                          </div>
                        </div>
                      </li>
                      <li className="py-2">
                        <div className="d-flex align-items-center">
                          <div>
                            <Badge
                              className="badge-circle mr-3"
                              color="success"
                            >
                              <i className="ni ni-satisfied" />
                            </Badge>
                          </div>
                          <a
                            onClick={() =>
                              window.open(
                                "https://61222884b800f6a5782196ae--gallery-of-hornes-ui.netlify.app/"
                              )
                            }
                            style={{ cursor: "pointer" }}
                          >
                            Gallery of Hornes App
                          </a>
                        </div>
                      </li>
                      <li className="py-2">
                        <div className="d-flex align-items-center">
                          <div>
                            <Badge
                              className="badge-circle mr-3"
                              color="success"
                            >
                              <i className="ni ni-satisfied" />
                            </Badge>
                          </div>
                          <a
                            onClick={() =>
                              window.open(
                                "https://60f8b492a23cce00a014a0a5--can-of-books-ui.netlify.app/"
                              )
                            }
                            style={{ cursor: "pointer" }}
                          >
                            Can of Books App
                          </a>
                        </div>
                      </li>
                    </ul>
                  </div>
                </Col>
              </Row>
            </Container>
          </section>
        </main>
        <CardsFooter />
      </>
    );
  }
}

export default Landing;
