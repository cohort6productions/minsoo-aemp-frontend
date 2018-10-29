import * as React from "react";
import "./Team.scss";

import { Card, CardImg, CardSubtitle, CardTitle } from "reactstrap";

import facebook from "src/Components/Team/img/facebook.svg";
import instagram from "src/Components/Team/img/instagram.svg";
import linkedin from "src/Components/Team/img/linkedin.svg";
import twitter from "src/Components/Team/img/twitter.svg";

import { ITeamProps } from "src/Interfaces/Interfaces";

export default class Team extends React.Component<ITeamProps> {
  constructor(props: ITeamProps) {
    super(props);
  }
  public render() {
    return (
      <div>
        <Card>
          <CardImg
            width="100%"
            src="https://placeholdit.imgix.net/~text?txtsize=33&txt=318%C3%97180&w=318&h=180"
          />
          <CardTitle>{this.props.name}</CardTitle>
          <CardSubtitle>{this.props.title}</CardSubtitle>
          <img src={facebook} />
          <img src={instagram} />
          <img src={linkedin} />
          <img src={twitter} />
        </Card>
      </div>
    );
  }
}
