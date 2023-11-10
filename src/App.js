

function App() {
  return (
    <div className="h-screen bg-black min-w-[35rem]">
      <div className=" m-auto text-[4rem] underline underline-offset-[1rem] bg-slate-200 overflow-x-auto ">
        <h1>Contact Us</h1>
      </div>
    <div className="flex flex-col justify-center items-center bg-slate-200 min-w-[35rem]">      
      <div className="flex flex-col m-auto">
        <label for="fname" >Enter Name: </label>
        <input className="w-[35rem]"type='text' id="fname" name="fname"></input>
      </div>
      <div className="flex flex-col min-w-[72] m-auto">
        <label for="email" >Enter Email: </label>
        <input className="w-[35rem]" type='text' id="email" name="email"></input>
      </div>
      <div className="flex flex-col min-w-[72] m-auto">
      <label for="message" >Enter Message </label>
      <input className="w-[35rem] py-7"type='text' id="message" name="message"></input>
        <div className="flex flex-col items-end overflow-x-auto">
        <button className="bg-[#FA6360] text-white mt-2 p-2 min-w-[10rem] overflow-x-auto">Send</button>
        </div>
      </div>
    </div>
    </div>
  )
}

export default App;
