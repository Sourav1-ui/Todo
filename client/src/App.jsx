import React, { useEffect, useState } from "react";
import Todo from "./component/Todo";
import axios from "axios";
import { baseURL } from "../util/constant";
import Popup from "./component/Popup";


const App = () => {
  const [toDos, setToDos] = useState([]);
  const [input, setInput] = useState("");
  //without reload the todo is update
  const [updateUI, setUpdateUI] = useState(false);
  //when setShowPopup value is true it show popup. <so we pass the setShowPopup inside Todo>
  const [showPopup, setShowPopup] = useState(false);
  //pass data in popud
  const [popupContent, setPopupContent] = useState({});

  //useEffect Hook:
  // Fetches todos from the server using Axios when the updateUI state changes.
  useEffect(() => {
    axios
      .get(`${baseURL}/get`)
      .then((res) => setToDos(res.data))
      .catch((err) => console.log(err));
  }, [updateUI]);

  const saveToDo = () => {
    axios
      .post(`${baseURL}/save`, { toDo: input })
      .then((res) => {
        //print the responce from server side
        console.log(res.data);
        setUpdateUI((prevState) => !prevState)
        //clear the input field
        setInput("");
      })
      .catch((err) => console.log(err));
  };

  return (
    <main>
      <div className="container">
        <h1 className="title">ToDo App</h1>

        <div className="input_holder">
          <input
            value={input}
            onChange={(e) => setInput(e.target.value)}
            type="text"
            placeholder="Add a ToDo..."
          />
          <button onClick={saveToDo}>Add</button>
        </div>

        <div className="list">
          {toDos.map(element => <Todo
            key={element._id}
            text={element.toDo}
            id={element._id}
            setUpdateUI={setUpdateUI}
            setShowPopup={setShowPopup}
            setPopupContent={setPopupContent}
          />)}
        </div>
      </div>
      {/* popup. && means showPopup value is true. intialy showPopup value is false, so popup is not show */}
      {showPopup && <Popup setShowPopup={setShowPopup} popupContent={popupContent} setUpdateUI={setUpdateUI} />}
    </main>
  );
};

export default App;

