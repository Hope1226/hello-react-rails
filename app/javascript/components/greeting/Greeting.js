import React, { useState, useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { getGreetings } from "../redux/reducer/greeting/greeting";

const Greeting = () => {
  const dispatch = useDispatch();
  const globalState = useSelector((state) => state.greetingReducer);
  const [message, setMessage] = useState('Holla');

  useEffect(() => {
    dispatch(getGreetings())
  }, [])

  const shuffleMessages = () => {
    let rand = Math.floor(Math.random() * globalState.length)
    setMessage(globalState[rand].text)
  };

  return (
    <div className="messages">
      <h1>{message}</h1>
      <button onClick={shuffleMessages}>Change language</button>
   </div>
  );
}

export default Greeting
