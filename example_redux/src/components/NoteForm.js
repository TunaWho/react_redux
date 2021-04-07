import React, { useEffect, useRef, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { editData, formVisible } from "./NewSlice";
import { useForm } from "react-hook-form";

function NoteForm(props) {
  const EditNote = useSelector((state) => state.Notes.EditObject);
  const { register, handleSubmit, setValue, reset } = useForm();
  const dispatch = useDispatch();
  const [state, setState] = useState(null);
  const TypingTimeoutRef = useRef();

  useEffect(() => {
    if (EditNote) {
      setValue("title", EditNote.title);
      setValue("content", EditNote.content);
      setState({
        ...state,
        id: EditNote.id,
        title: EditNote.title,
        content: EditNote.content,
      });
    }
  }, [EditNote]);

  const editClick = () => {
    const action = editData(state);
    dispatch(action);
    dispatch(formVisible(false));
  };

  const isChange = (e) => {
    const name = e.target.name;
    const value = e.target.value;
    if (TypingTimeoutRef.current) {
      clearTimeout(TypingTimeoutRef.current);
    }

    TypingTimeoutRef.current = setTimeout(() => {
      setState({
        ...state,
        [name]: value,
      });
    }, 400);
  };

  return (
    <div className="col-sm-4">
      <h3>Update Note</h3>
      <form onSubmit={handleSubmit}>
        <div className="form-group">
          <label>Note title</label>
          <input
            type="text"
            name="title"
            id="title"
            className="form-control"
            placeholder="title"
            onChange={isChange}
            ref={register}
          />
          <small id="helpId" className="text-muted">
            Them tieu de vao
          </small>
        </div>
        <div className="form-group">
          <label>Note content</label>
          <textarea
            type="text"
            name="content"
            id="content"
            className="form-control"
            placeholder="content"
            ref={register}
            onChange={isChange}
          />
          <small id="helpId" className="text-muted">
            Them content
          </small>
        </div>
        <button
          type="button"
          className="btn btn-block btn-primary"
          onClick={editClick}
        >
          Save
        </button>
        <button
          type="button"
          className="btn btn-block btn-danger"
          onClick={() => dispatch(formVisible(false))}
        >
          Close
        </button>
      </form>
    </div>
  );
}

export default NoteForm;
