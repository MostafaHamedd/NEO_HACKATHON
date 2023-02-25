import React from "react";
import SectionsRow from "../../components/sectionsRow.component";
export default function SectionsPage() {
  return (
    <div className="col align-items-center">
      <div className="row courseRow align-items-center">
        <div className="col">CRN</div>
        <div className="col">Subj</div>
        <div className="col">Crse</div>
        <div className="col">Sec</div>
        <div className="col">Cmp</div>
        <div className="col">Cred</div>
        <div className="col">Title</div>
        <div className="col">Days</div>
        <div className="col">Time</div>
        <div className="col">Cap</div>
        <div className="col">Act</div>
        <div className="col">Rem</div>
        <div className="col">Instructor</div>
        <div className="col">Date(mm/dd)</div>
        <div className="col">Action</div>
      </div>
      <SectionsRow
        CRN="5023"
        Subj="COMP"
        Crse="4380"
        Title="Databases Implementation"
      />
    </div>
  );
}
