import React, { useEffect, useState } from "react";
import firebase from "firebase";
import NoteItem from "./NoteItem";
import { useSelector } from "react-redux";

function NoteContent(props) {
  const [state, setState] = useState(null);
  const note = useSelector((state) => state.Notes.notes);

  useEffect(() => {
    const noteData = async () => {
      var notes = await getDataAPI();
      setState({
        ...state,
        notes,
      });
    };
    noteData();
  }, [note]);

  const getDataAPI = () => {
    var data = firebase.database().ref("note");
    var arrData = [];
    return data
      .once("value")
      .then((snapshot) =>
        snapshot.forEach((note) => {
          arrData.push({
            id: note.key,
            title: note.val().title,
            content: note.val().content,
          });
        })
      )
      .then(() => arrData);
  };

  const loadData = () =>
    state !== null
      ? state.notes.map((value, key) => (
          <NoteItem key={key} NoteItem={value} NoteIndex={key} />
        ))
      : "";

  return (
    <div className="col">
      <div id="noteList" role="tablist" aria-multiselectable="true">
        {loadData()}
      </div>
    </div>
  );
}

export default NoteContent;
