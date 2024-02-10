import { useState } from "react";
import "./App.css";

import bearKissingGif from "./assets/bear-kissing-gif.gif";
import bearRosesGif from "./assets/cute-love-bear-roses-gif.gif";


const phrases = [
  "No",
  "Are you sure?",
  "Really sure?",
  "Pookie please",
  "Don't do this to me",
  "I'm gonna cry...",
  "You are breaking my heart;(",
];
function App() {
  const [yesPressed, setYesPressed] = useState(false);
  const [noCount, setNoCount] = useState(0);
  const [noDisabled, setNoDisabled] = useState(false);
  const yesButtonSize = noCount * 10 + 16;

  function getNoButtonText() {
    return phrases[noCount % phrases.length];
  }
  function handleNoCount() {
    if (noCount < phrases.length) setNoCount(noCount + 1);
    else setNoDisabled(false);
  }
  function handleYesPressed() {
    setYesPressed((pressed) => !pressed);
  }

  return (
    <>
      <div>
        {yesPressed ? (
          <>
            <img
              className="img-2"
              src={bearKissingGif}
              alt="bears kissing"
            />
            <h2>OK Yay!!!!</h2>
          </>
        ) : (
          <>
            <img
              className="img-1"
              src={bearRosesGif}
              alt="bear-roses"
            />
            <h2>Will you be my valentine?</h2>
            <div>
              <button
                className="button-yes"
                onClick={handleYesPressed}
                style={{ fontSize: yesButtonSize }}
              >
                Yes
              </button>
              <button className="button-no" onClick={handleNoCount}>
                {getNoButtonText()}
              </button>
            </div>
          </>
        )}
      </div>
      {yesPressed && <p className="footer">-Made with ❤️ by ram</p>}
      
    </>
  );
}

export default App;
