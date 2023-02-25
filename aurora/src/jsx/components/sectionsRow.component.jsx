import React, { Component } from "react";

export default class SectionsRow extends Component {
  render() {
    const { CRN, Subj, Crse, Cred, Title, Instructor } = this.props;
    return (
      <div className="row align-items-center sectionsRow">
        <div className="col">{CRN}</div>
        <div className="col">{Subj}</div>
        <div className="col">{Crse}</div>
        <div className="col">A01</div>
        <div className="col">3</div>
        <div className="col">{Title}</div>
        <div className="col">MWF</div>
        <div className="col">10:30 am - 11:20 am</div>
        <div className="col">200</div>
        <div className="col">195</div>
        <div className="col">Adam Pazdor</div>
        <div className="col">01/06-04/07</div>
        <div className="col">240 University College</div>
      </div>
    );
  }
}
