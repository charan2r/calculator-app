//import logo from './logo.svg';
import './App.css';
import AgeCalculator from './components/AgeCalculator';
import BackgroundAnimation from './components/Animation';
import Calculator from './components/Calculator';

function App() {
  return (
    <div className="flex justify-center items-start space-x-4 p-5">
      <BackgroundAnimation />
      <div className="w-2/5 mt-20">
          <Calculator />
      </div>
      <div className="w-2/5 mt-20">
          <AgeCalculator />
      </div>
    </div>
  );
}

export default App;
