import styles from "./App.module.css";
import ButtonsContainer from "./components/ButtonsContainer";
import Display from "./components/Display";
import { useState } from "react";
function App() {
  let [activebutton, setactivebutton] = useState("");

  const handleclickbutton = (buttonText) => {
    if (buttonText === "C") {
      setactivebutton("");
    } else if (buttonText === "=") {
      const result = eval(activebutton);
      setactivebutton(result);
    } else {
      const newvalue = activebutton + buttonText;
      setactivebutton(newvalue);
    }
  };
  return (
    <div className={styles.calculator}>
      <Display value={activebutton}></Display>
      <ButtonsContainer
        handleclickButton={handleclickbutton}
      ></ButtonsContainer>
    </div>
  );
}

export default App;
