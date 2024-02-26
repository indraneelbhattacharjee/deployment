import React from "react";




export const ProfilePage = (props) => {
    
    return (
        <div className="box-border bg-black h-auto">
        <div className="flex items-center justify-center w-auto" id="profilename">
        <header>
          <h1>Profile Info</h1>
        </header>
      </div>
<div className="flex justify-center gap-40 items-center content-around w-auto" id="mainContainer">

      <div className="flex flex-col w-auto text-white overflow-x-auto overflow-y-auto" id="left">

<h1 className="pb-5"id="rfield">*REQUIRED FIELDS</h1>
<label className="text-white" for="fname">First Name </label>
<input type="text" id="fname" fname="fname" />
      <div className="flex flex-col bg-black w-auto pt-20" id="leftbottom">
      <label for="username">Username* </label>
<input type="text" id="username" username="username" />
      </div>
      </div>
      
<div className="flex flex-col w-auto text-white overflow-x-auto overflow-y-auto mt-[85]" id="left">

<label className="text-white" for="fname">First Name </label>
<input className="mb-1" type="text" id="fname" fname="fname" />
      <div className="flex flex-col bg-black w-auto pt-20" id="leftbottom">
      <label for="username">Username* </label>
<input type="text" id="username" username="username" />
      </div>
</div>

    </div>
    <div className="flex justify-center items-center" id="button">
    <button className="bg-red-500 p-2 rounded-lg text-white w-auto mt-5">Save Changes</button>
    </div>
    <div className="flex items-center justify-center w-auto" id="profilename">
        <header>
          <h1>Profile Name</h1>
        </header>
      </div>
    <div className = " flex justify-center gap-40 items-center content-around w-auto" id="mainContainer">
      <div className="flex flex-col w-auto text-white overflow-x-auto overflow-y-auto" id="left">
<label for="name">Name: </label>
<input type="text" id="name" name="name" />
      <div className="flex flex-col bg-black w-auto pt-20" id="leftbottom">
      <label for="name">Name: </label>
<input type="text" id="name" name="name" />
      </div>
      </div>
      <div className="flex flex-col w-auto text-white overflow-x-auto overflow-y-auto" id="left">
    <label for="name">New Password: </label>
    
    <input type="text" id="name" name="name" />
    
    <div className="flex flex-col bg-black w-auto pt-20" id="leftbottom">
    
    <label for="name">New Password: </label>
    
    <input type="text" id="name" name="name" />
      </div>
      </div>

    </div>
    
    <div className="flex justify-center items-center" id="button">
    <button className="bg-red-500 p-2 rounded-lg text-white w-auto mt-5" >Save Changes</button>
    </div>
  
    </div>
    );

};

export default ProfilePage;