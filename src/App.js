import './App.css';
import Clock from './clock-component';
import CustomClock from './clock-component-inherited';

function App() {
  return (
    <div className="App">
      <Clock/>
      <CustomClock/>
    </div>
  );
}

export default App;
