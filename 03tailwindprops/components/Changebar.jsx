import React from 'react'

const Changebar = () => {
    const bgChange  = (color) =>{
        document.querySelector('body').style.backgroundColor = color;
    }
    return (
        <div className="flex space-x-4 bg-slate-700 p-4 rounded-3xl bottom-10 fixed left-1/2 -translate-x-1/2">
            <button 
            onClick={() => bgChange('Red')}
            className=" bg-red-500 px-4 py-2 rounded-xl text-white">
                Red
            </button>
            <button onClick={() => bgChange('Black')} className="bg-black text-white px-4 py-2 rounded-xl">
                Black
            </button>
            <button onClick={() => bgChange('Blue')} className="bg-blue-500 px-4 py-2 rounded-xl text-white">
                Blue
            </button>
            <button onClick={() => bgChange('Pink')} className="bg-pink-500 px-4 py-2 rounded-xl text-white">
                Pink
            </button>
            <button onClick={() => bgChange('Lavender')} className="bg-violet-600 px-4 py-2 rounded-xl text-white outline-none">
                Lavendar
            </button>
            <button onClick={() => bgChange('White')} className="bg-white text-black px-4 py-2 rounded-xl">
                White
            </button>
            <button onClick={() => bgChange('Yellow')} className="bg-yellow-500 px-4 py-2 rounded-xl text-black">
                Yellow
            </button>
            <button onClick={() => bgChange('green')} className="bg-green-500 px-4 py-2 rounded-xl text-white">
                Green
            </button>
            <button onClick={() => bgChange('purple')} className="bg-purple-500 px-4 py-2 rounded-xl text-white">
                Purple
            </button>

        </div>
    )
}

export default Changebar