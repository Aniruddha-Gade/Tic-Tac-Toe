
const GameBoard = ({ board, currentPlayer, winner, winningCells, resetGame, handleCellClick }) => {

    // const { board , currentPlayer, winner, winningCells,resetGame,handleCellClick } = props;

    return (
        <div className="text-center ">
            {
                winner ? winner === 'Draw' ?
                    (<p className="text-lg font-semibold mt-[10px] mb-[15px] flex items-center justify-center gap-2">It's a Draw 💀</p>) :
                    (
                        <p className='text-lg font-semibold mt-[10px] mb-[15px] flex items-center justify-center gap-2 ' >
                            Player
                            <span className={`${winner === 'X' ? 'text-[#ff5722]' : 'text-[#2196f3]'} `}
                            >{winner}</span> wins !
                        </p>
                    )

                    :
                    (
                        <p
                            className={` text-lg font-semibold mt-[10px] mb-[15px] flex items-center justify-center gap-2 `}
                        >
                            Cureent Player :
                            <span className={`${currentPlayer === 'X' ? 'text-[#ff5722]' : 'text-[#2196f3]'}`}>
                                {currentPlayer}</span>
                        </p>

                    )
            }

            <div className="grid grid-cols-3 gap-[14px]  mb-[40px]  place-items-center w-full ">
                {
                    board.map((cell, index) => (
                        <div key={index}

                            className={`flex justify-center items-center cursor-pointer bg-[#fff] text-[#333] rounded-lg
                             shadow-2xl w-16 h-16 text-4xl
                            hover:bg-[#f1f1f1] duration-300 ${cell === 'X' ? ' text-[#ff5722]' : 'text-[#2196f3]'}
                            ${winningCells.includes(index) ? 'winning' : ''} ${cell}  `}


                            onClick={() => handleCellClick(index)}
                        >
                            {cell}
                        </div>
                    ))
                }

            </div>


            {/* {
                winner && (
                    <div className="text-2xl mt-2.5"  disabled={!winner}>
                        <button onClick={resetGame}
                            className="bg-[#9544ff] p-5 text-[#fff] border-none outline-none rounded-md text-base
                    hover:bg-[#8427ff] duration-300"
                       
                        >
                            Play Again ?

                        </button>
                    </div>)
            } */}


            {
                <div className="text-2xl mt-2.5">
                    <button
                        onClick={resetGame}
                        className={` ${winner ? 'bg-[#9544ff] hover:bg-[#8427ff]' : ''}  p-5 text-[#fff] border-none outline-none rounded-md text-base  duration-300 font-semibold ${!winner ? 'bg-[#a165f0] cursor-not-allowed' : ''}`}
                        disabled={!winner}
                    >
                        Play Again
                    </button>
                </div>
            }
        </div>
    )
}

export default GameBoard;