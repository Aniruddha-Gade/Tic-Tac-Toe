import TicTacToe from "./components/TicTacToe";
import React from 'react'


function App() {



  return (
    <div className="flex flex-col justify-center items-center h-screen  bg-[#f1edff] relative z-30">

      <div className="circle fixed w-32 h-32 top-[12%] right-[3%] 
       sm:w-64 sm:h-64  sm:top-4 sm:right-1/4 rounded-full z-[-1]"></div>


      <div className='bg-[#d5b4ff] rounded-2xl w-[19rem] sm:w-[24rem] p-3 py-5 sm:py-9'>
        <TicTacToe />
      </div>
    </div>
  );
}

export default App;
