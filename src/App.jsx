import { useState } from "react";
import { Calculator, Display, Keypad } from "./components";

function App() {
  const [display, setDisplay] = useState("");
  const [topDisplay, setTopDisplay] = useState("");

  return (
    <div className="bg-gradient-to-r from-blue-400 to-blue-100 h-screen w-full flex justify-center items-center select-none">
      {/* <div className='bg-white h-fit rounded-2xl px-6 py-8 flex flex-col gap-4'>
        <Display display={display} topDisplay={topDisplay} />
        <Keypad display={display} topDisplay={topDisplay} setDisplay={setDisplay} setTopDisplay={setTopDisplay} />
      </div> */}
      <Calculator />
    </div>
  );
}

export default App;
