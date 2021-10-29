import "./styles.css";
import { useState } from "react";

export default function App() {
  const [items, setItems] = useState(null);

  const addUrlTextarea = () => {
    console.log("addUrlTextarea");
    if (!items) {
      setItems([0]);
    } else {
      setItems([...items, items.length]);
    }
  };

  const popUrlTextarea = () => {
    console.log("popUrlTextarea");
    if (!!items) {
      if (items.length <= 1) {
        setItems(null);
      } else {
        setItems(items.slice(0, -1));
      }
    }
  };

  return (
    <div className="App">
      <div className="accessOriginUrls">
        {items ? (
          items?.map((key) => (
            <div className="accessOriginUrl">
              <textarea></textarea>
              <button onClick={addUrlTextarea}>+</button>
              <button onClick={popUrlTextarea}>-</button>
            </div>
          ))
        ) : (
          <button onClick={addUrlTextarea}>+</button>
        )}
      </div>
    </div>
  );
}
