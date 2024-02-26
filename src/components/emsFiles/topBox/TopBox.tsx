import { Button } from "@mui/material";
import "./topBox.scss"
import React from "react";

import {topDealUsers} from "../data.ts"

const TopBox = () => {
  return (
    <div className="topBox">
      <h1>Top Deals</h1>
      <textarea id="freeform" name="to-do-textbox" cols="40" rows="5">
        Enter your to-do list for your projects...
      </textarea>
      <br></br>
      <Button
        sx={{ width: 100, height: 35, mt: 2, fontSize: 10 }}
        color="error"
        name="Add Task"
        variant="contained"
      >
        Add Task
      </Button>
      <Button
        sx={{ width: 100, height: 35, mt: 2, mx: 2, fontSize: 10 }}
        color="error"
        name="Delete Task"
        variant="contained"
      >
        Delete Task
      </Button>
      <div className="list">
        {topDealUsers.map(user=>(
          <div className="listItem" key={user.id}>
            <div className="user">
              <img src={user.img} alt="" />
              <div className="userTexts">
                <span className="username">{user.username}</span>
                <span className="email">{user.email}</span>
              </div>
            </div>
            <span className="amount">${user.amount}</span>
          </div>
        ))}
      </div>
    </div>
  )
}

export default TopBox