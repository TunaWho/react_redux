import NoteContent from "./NoteContent";
import NoteForm from "./NoteForm";
import NoteHeader from "./NoteHeader";
import "../FireBaseConnect";
import { useSelector } from "react-redux";

function App() {
  const setVisible = useSelector((state) => state.Notes.visible);
  const ShowForm = () => (setVisible ? <NoteForm /> : "");
  return (
    <div className="App">
      <NoteHeader />
      <div className="container">
        <div className="row">
          <NoteContent />
          {ShowForm()}
        </div>
      </div>
    </div>
  );
}

export default App;
