import "./styles.css";
import Check from "./check";
import { useState } from "react";

export default function App() {
  const [list, setList] = useState([]);

  function isChecked(e) {
    if (!e.target.checked) {
      if (!list.length) return;
      setList(list.filter((l) => l !== e.target.value));
    } else {
      setList((l) => [...l, e.target.value]);
    }
  }
  return (
    <div className="App">
      <div>
        {list.map((l, i) => {
          return <div key={i}>{l}</div>;
        })}
      </div>
      <Check vall="One" isChecked={isChecked} />
      <Check vall="Two" isChecked={isChecked} />
    </div>
  );
}
