import React, { useState } from 'react'

export const ProfilePage = () => {
    const [Email,setEmail] = useState('')

    const handleSubmit = (e) => {

    }
return(
    <div className='bg-black'>
    <div>
      <h1 class="text-5xl flex justify-center text-white p-5">Profile Info</h1>
    <div class="flex flex-col items-center border border-black border-solid shadow-lg container w-500 bg-pink min-w-[437] rounded-lg">
    <h1 class=" text-black container object-right-bottom">*Required Fields</h1>
    <form className="flex justify-around  gap-x-44 flex-wrap " onSubmit={handleSubmit}>

      <label className="text-white">Change Email*:
        <br />
        <input className="min-w-[250] p-3 rounded-md opacity-50"type="text" name="email" placeholder='Enter Email' value={Email} onChange={(e) => setEmail(e.target.value)}/>
      </label>
      <form>
      <label className="text-white">Confirm Change*:
        <br />
        <input  className="min-w-[250] p-3 rounded-md opacity-50" type="text" name="email" placeholder='Enter Email'/>
      </label>

      </form>
    </form>

    <button className='bg-black text-white border-r-5 p-3 m-5 rounded-xl'>Save Changes</button>
    <form className="flex justify-around gap-x-44 flex-wrap">
      <label className="text-white">Change Username:
        <br />
        <input className="min-w-[250] p-3 rounded-md opacity-50"type="text" name="email" placeholder='Current Username'/>
      </label>
      <form>
      <label className="text-white">Confirm*:
        <br />
        <input  className="min-w-[250] p-3 rounded-md opacity-50" type="text" name="email" placeholder='New Username'/>
      </label>

      </form>
    </form>

    <button className='bg-black text-white border-r-5 p-3 m-5 rounded-xl'>Save Changes</button>
    <a href='#' className='text-white'>Change Password</a>
    </div>
    </div>
    </div>
)

}

export default ProfilePage