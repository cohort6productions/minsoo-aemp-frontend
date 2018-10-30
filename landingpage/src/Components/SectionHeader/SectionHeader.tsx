// Importing modules
import * as React from "react";

// Importing styling and static assets
import "./SectionHeader.scss";

// Importing reduc and friends
// Importing react routering

// Importing UI elements
import { Card } from "reactstrap";

// Importing interfaces
import { ISectionHeaderProps } from "src/Interfaces/Interfaces";

export default class SectionHeader extends React.Component<
  ISectionHeaderProps
> {
  constructor(props: ISectionHeaderProps) {
    super(props);
  }
  public render() {
    return (
      <div>
        <h2 className="sectionHeader"> {this.props.header} </h2>
        <Card
          className="line"
          style={{ backgroundColor: "orange", width: "35%" }}
        />
        <h3 className="sectionSubHeader"> {this.props.subHeader} </h3>
      </div>
    );
  }
}
