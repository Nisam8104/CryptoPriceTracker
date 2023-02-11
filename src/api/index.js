const CryptoApi= async()=>{
    fetch("https://api.wazirx.com/sapi/v1/tickers/24hr", requestOptions)
  .then(response => response.text())
  .then(result => console.log(result))
  .catch(error => console.log('error', error));
}
export default CryptoApi;