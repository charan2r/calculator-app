import './App.css';
import AgeCalculator from './components/AgeCalculator';
import BackgroundAnimation from './components/Animation';
import Calculator from './components/Calculator';

function App() {
  return (
    <div className="flex flex-col justify-center items-center min-h-screen space-y-16 p-10">
      <BackgroundAnimation />
      <div className="w-full max-w-md mt-5">
        <Calculator />
      </div>
      <div className="w-full max-w-md mt-20">
        <AgeCalculator />
      </div>
    </div>
  );
}

export default App;
