import React, { useState } from 'react'

import '../index.css'
function ColorChanger() {
    const [color, setColor]=useState("Olive")
  return (
   <div className='w-full h-screen duration-200' style={{ backgroundColor: color }}>

        <div className="fixed flex flex-wrap justify-center bottom-12 inset-x-0 px-2">
          <div className='flex flex-wrap justify-center gap-3 shadow-lg bg-white rounded-3xl px-3 py-2'>


            <button onClick={() => setColor("red")} className="outline-none px-4 py-1 rounded-full text-white shadow-large " style={{ backgroundColor: "red" }}>Red</button>
            <button onClick={() => setColor("green")} className="outline-none px-4 py-1 rounded-full text-white shadow-large" style={{ backgroundColor: "green" }}>Green</button>
            <button onClick={() => setColor("yellow")} className="outline-none px-4 py-1 rounded-full text-white shadow-large" style={{ backgroundColor: "yellow" }}>Yellow</button>
            <button onClick={() => setColor("pink")} className="outline-none px-4 py-1 rounded-full text-white shadow-large" style={{ backgroundColor: "pink" }}>Pink</button>
            <button onClick={() => setColor("blue")} className="outline-none px-4 py-1 rounded-full text-white shadow-large" style={{ backgroundColor: "blue" }}>Blue</button>
            <button onClick={() => setColor("grey")} className="outline-none px-4 py-1 rounded-full text-white shadow-large" style={{ backgroundColor: "grey" }}>Grey</button>
            <button onClick={() => setColor("purple")} className="outline-none px-4 py-1 rounded-full text-white shadow-large" style={{ backgroundColor: "purple" }}>Purple</button>
            <button onClick={() => setColor("black")} className="outline-none px-4 py-1 rounded-full text-white shadow-large" style={{ backgroundColor: "black" }}>Black</button>
            <button onClick={() => setColor("olive")} className="outline-none px-4 py-1 rounded-full text-white shadow-large" style={{ backgroundColor: "olive" }}>Olive</button>
            <button onClick={() => setColor("brown")} className="outline-none px-4 py-1 rounded-full text-white shadow-large" style={{ backgroundColor: "brown" }}>Brown</button>

          </div>
        </div>
      </div>
  )
}

export default ColorChanger
