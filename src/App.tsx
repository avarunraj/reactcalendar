import "./App.css";
import { Calendar } from "./Components/Calendar";

const App = () => {
  let day = new Date(2023, 2, 11);
  return (
    <div className="App">
      <Calendar date={day} />
    </div>
  );
};

export default App;
