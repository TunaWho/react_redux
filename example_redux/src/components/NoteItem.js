import React from "react";
import PropTypes from "prop-types";
import { useDispatch, useSelector } from "react-redux";
import { formVisible, getEditData } from "./NewSlice";

NoteItem.propTypes = {
  NoteItem: PropTypes.object,
  NoteIndex: PropTypes.number,
};

function NoteItem(props) {
  const { NoteItem, NoteIndex } = props;
  const setVisible = useSelector((state) => state.Notes.visible);
  const dispatch = useDispatch();

  const HandleEditClick = () => {
    if (!setVisible) {
      const action = formVisible(true);
      dispatch(action);
    }
    const action = getEditData(NoteItem);
    dispatch(action);
  };

  return (
    <div className="card">
      <div className="card-header" role="tab" id="note">
        <h5 className="mb-0">
          <a
            data-toggle="collapse"
            data-parent="#noteList"
            href={"#number" + NoteIndex}
            aria-expanded="true"
          >
            {NoteItem.title}
          </a>
          <div className="btn-group float-right">
            <div className="btn btn-outline-primary" onClick={HandleEditClick}>
              Edit
            </div>
            <div className="btn btn-outline-danger">Delete</div>
          </div>
        </h5>
      </div>
      <div id={"number" + NoteIndex} className="collapse in" role="tabpanel">
        <div className="card-body">{NoteItem.content}</div>
      </div>
    </div>
  );
}

export default NoteItem;
