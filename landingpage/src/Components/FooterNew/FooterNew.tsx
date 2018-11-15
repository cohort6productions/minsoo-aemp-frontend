import * as History from "history";
import * as React from "react";
import "./FooterNew.scss";

import { withRouter } from "react-router";

import {
  Button,
  Col,
  Input,
  InputGroup,
  InputGroupAddon,
  Row
} from "reactstrap";

import Facebook from "./Images/facebook.svg";
import Instagram from "./Images/instagram.svg";
import Linkedin from "./Images/linkedin.svg";
import Logo from "./Images/logo-hwz-org@0.5x.png";
import Twitter from "./Images/twitter.svg";

import Jumbotron from "reactstrap/lib/Jumbotron";

// Importing interfaces
interface IFooterProps {
  history: History.History;
}

class Footer extends React.Component<IFooterProps> {
  constructor(props: IFooterProps) {
    super(props);
  }

  public toPrivacy = () => {
    this.props.history.push("/policy/privacy_policy");
  };
  public toTerms = () => {
    this.props.history.push("/policy/terms_and_conditions");
  };
  public toCookie = () => {
    this.props.history.push("/policy/cookie_policy");
  };
  public toProjects = () => {
    this.props.history.push("/policy/privacy_policy");
  };
  public toCreators = () => {
    this.props.history.push("/policy/privacy_policy");
  };

  public render() {
    return (
      <Jumbotron
        className="bg-transparent
      "
      >
        <div id="siteMapGrid">
          <img className="siteMapHeader" src={Logo} alt="" id="logo" />
          <h4 className="siteMapHeader" id="search">
            Search
          </h4>
          <h4 className="siteMapHeader" id="policies">
            Policies
          </h4>
          <h4 className="siteMapHeader" id="sub">
            Subscribe and Follow
          </h4>
          <div className="colFlexStart botMg5vh" id="logoCont">
            <a href="mailto:info@ambrasia.com">info@ambrasia.com</a>
          </div>
          <div className="colFlexStart botMg5vh" id="searchCont">
            <a className="footerLink" onClick={this.toCreators}>
              Creators
            </a>
            <a className="footerLink" onClick={this.toProjects}>
              Projects
            </a>
          </div>
          <div className="colFlexStart botMg5vh" id="policiesCont">
            <a className="footerLink" onClick={this.toPrivacy}>
              Privacy Policy
            </a>
            <a className="footerLink" onClick={this.toTerms}>
              Terms and Conditions
            </a>
            <a className="footerLink" onClick={this.toCookie}>
              Cookie Policy
            </a>
          </div>
          <div className="colFlexStart" id="followUsCont">
            <div className="rowFlexSpcBtw halfWidth" id="footerSocial">
              <a href="#" className="social">
                <img src={Facebook} alt="Aemp Facebook" className="icons" />
              </a>
              <a href="#" className="social">
                <img src={Twitter} alt="Aemp Twitter" className="icons" />
              </a>
              <a href="#" className="social">
                <img src={Linkedin} alt="Aemp LinkedIn" className="icons" />
              </a>
              <a href="#" className="social">
                <img src={Instagram} alt="Aemp Instagram" className="icons" />
              </a>
            </div>

            <InputGroup>
              <Input placeholder="Be the first to know" />
              <InputGroupAddon addonType="append">
                <Button className="button" color="secondary" id="buttonArrow">
                  Subscribe
                </Button>
              </InputGroupAddon>
            </InputGroup>
          </div>
          <div className="subCont" />
        </div>

        <div id="divisionLine" />
        <Row id="disclaimer">
          <Col sm="12" md="6" id="leftDisclaimer">
            <p className="text-liteBlue">
              Made with &#10084; by{" "}
              <a
                className="text-liteBlue"
                href="https://www.cohort6productions.com"
              >
                Cohort 6 Productions
              </a>
            </p>
          </Col>
          <Col sm="12" md="6" id="rightDisclaimer">
            <p className="text-liteBlue">
              @2018 Ambrasia Multimedia Limited All rights reserved
            </p>
          </Col>
        </Row>
      </Jumbotron>
    );
  }
}

export default withRouter(Footer as any);
