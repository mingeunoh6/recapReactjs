import { useState, useEffect } from "react";

const Coin = () => {
  const [loading, setLoading] = useState(true);
  const [coinInfo, setCoinInfo] = useState([]);

  useEffect(() => {
    fetch("https://api.coinpaprika.com/v1/tickers").then((response) =>
      response.json().then((json) => {
        setCoinInfo(json);
        setLoading(false);
      })
    );
  }, []);

  return (
    <div>
      <h2>Coins! {loading ? "" : `(${coinInfo.length})`} </h2>
      {loading ? (
        <strong>loading</strong>
      ) : (
        <select>
          {coinInfo.map((coin) => (
            <option>
              {coin.name} ({coin.symbol}): ${coin.quotes.USD.price}
            </option>
          ))}
        </select>
      )}
    </div>
  );
};

export default Coin;
