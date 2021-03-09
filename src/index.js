import React, { useState } from "react";
import ReactDOM from "react-dom";
const list = [
  {
    id: "a",
    value: "Robin"
  },
  {
    id: "b",
    value: "Dennis"
  }
];

const App = () => {
  const [itemArray, setItemArray] = useState(list);
  const [item, setItem] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();
    setItemArray((prevState) => [...itemArray, { id: 22, value: item }]);
    clearState();
  };
  const handleChange = (e) => {
    setItem(e.target.value);
  };
  const clearState = () => setItem("");
  const deleteItem = (id) => {
    let newArray = itemArray.filter((item) => item.id !== id);
    setItemArray(newArray);
  };

  return (
    <div className="App">
      <form onSubmit={handleSubmit}>
        <input
          type="text"
          className="form-control"
          name="item"
          onChange={handleChange}
          value={item}
        />
        <button type="submit">Submit</button>
      </form>
      <ul>
        {itemArray &&
          itemArray.map((item) => (
            <li key={item.id} onClick={() => deleteItem(item.id)}>
              {item.value}
            </li>
          ))}
      </ul>
    </div>
  );
};

const rootElement = document.getElementById("root");
ReactDOM.render(<App />, rootElement);
