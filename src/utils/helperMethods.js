export function numberWithCommas(x) {
  return x.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ",");
}


export function isSuccess(response) {
  return response.status >= 200 && response.status <= 299;
}
