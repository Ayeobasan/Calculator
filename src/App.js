import "./App.css";
import Button from "./Components/Button";
import ButtonBox from "./Components/ButtonBox";
import Screen from "./Components/Screen";
import Wraper from "./Components/Wraper";
import CalProvider from "./Context/CalContext";
import "./index.css";

const btnValues = [
  ["C", "+-", "%", "/"],
  [7, 8, 9, "x"],
  [4, 5, 6, "-"],
  [1, 2, 3, "+"],
  [0, ".", "="],
];

function App() {
  return (
    <CalProvider >
      <Wraper>
        <Screen />
        <ButtonBox>
          {
            btnValues.flat().map((btn,i)=>(
              <Button value={btn}
              key={i} />
            ))
          }
        </ButtonBox>
      </Wraper>
    </CalProvider>
  );
}

export default App;
