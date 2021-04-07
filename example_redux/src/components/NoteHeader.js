import React from "react";

function NoteHeader(props) {
  return (
    <nav className="navbar navbar-expand-sm navbar-dark bg-dark mb-4">
      <a className="navbar-brand" href="_bla">
        Hai Pro
      </a>
      <button className="navbar-toggler d-lg-none" type="button" />
      <div
        className="collapse navbar-collapse justify-content-end"
        id="collapsibleNavId"
      >
        <ul className="navbar-nav mt-2 mt-lg-0">
          <li className="nav-item active">
            <a className="nav-link" href="_bla">
              Home <span className="sr-only">(current)</span>
            </a>
          </li>
          <li className="nav-item">
            <a className="nav-link" href="_bla">
              List Note
            </a>
          </li>
        </ul>
      </div>
    </nav>
  );
}

export default NoteHeader;
