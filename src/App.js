import "./App.css";
import Calculator from "./components/Calculator";

function App() {
  return (
    <div className="flex flex-col justify-center items-center min-h-screen space-y-16 p-10">
      <div className="w-full max-w-md mt-5">
        <Calculator />
      </div>
    </div>
  );
}

export default App;
