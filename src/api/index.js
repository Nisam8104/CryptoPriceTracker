
const CryptoApi = async() => {
  const response = await fetch(`https://api.wazirx.com/sapi/v1/tickers/24hr?random=${Math.random()}`);
  const result = await response.text();
  const wholeData = JSON.parse(result);
  return wholeData;
};

export{ CryptoApi };