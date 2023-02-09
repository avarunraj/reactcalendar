import "./App.css";
import { Calendar } from "./Components/Calendar";

const App = () => {
  let tomorrow = new Date();
  tomorrow.setDate(tomorrow.getDate() + 1);
  return (
    <div className="App">
      <Calendar date={tomorrow} />
    </div>
  );
};

export default App;
