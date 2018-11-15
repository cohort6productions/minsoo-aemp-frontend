import * as React from "react";
import "./FooterSection.scss";

import {
  Button,
  Col,
  Input,
  InputGroup,
  InputGroupAddon,
  Row
} from "reactstrap";
// Importing interfaces

export default class FooterSection extends React.Component {
  public render() {
    return (
      <Row id="footerTop">
        <Col xs="12" sm="12" md="12" lg="6">
          <h2 id="subscribeHeader">Share our vision</h2>
          <p className = "nullMargin">
            We are ambitious about our vision, <br />
            but we need talented people like you to grow.
          </p>
        </Col>
        <Col id="footerJoin" xs="12" sm="12" md="12" lg="6">
          <InputGroup>
            <Input placeholder="Come join our team" />
            <InputGroupAddon addonType="append">
              <Button color="warning button" id="button">
                Join Us
              </Button>
            </InputGroupAddon>
          </InputGroup>
        </Col>
      </Row>
    );
  }
}
