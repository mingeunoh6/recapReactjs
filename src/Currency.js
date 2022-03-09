import { useState, useEffect } from "react";

const Currency = () => {
  const [won, setWon] = useState("");
  const [currency, setCurrency] = useState([]);
  const [USDcurrency, setUSDcurrency] = useState("");

  const wonChange = (e) => {
    setWon(e.target.value);
    console.log(won);
  };

  const onExchange = (e) => {
    e.preventDefault();
  };

  useEffect(()=>{
      
  },[])

  //currencyUSD
  useEffect(() => {
    const url = "/site/program/financial/exchangeJSON?authkey=UkgNzqfGBWvnpoJ1U28kT83Vp830x7q7&searchdate=20180102&data=AP01"
    fetch(
      url
    ).then((response)=>console.log(response));
  }, []);



  return (
    <div>
      <h1>Currency</h1>
      <form onSubmit={onExchange}>
        <input id="WonInput" value={won} onChange={wonChange}></input>
        <label htmlFor="WonInput">WON</label>

        <input id="USDInput" ></input>
        <label htmlFor="USDInput">USD</label>

        <button>exchange</button>
      </form>
    </div>
  );
};

export default Currency;
