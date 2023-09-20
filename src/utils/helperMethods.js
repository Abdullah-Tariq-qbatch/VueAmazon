export function numberWithCommas(x) {
  return x.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ",");
}


export function isSuccess(response) {
  return response.status >= 200 && response.status <= 299;
}

export function generateRange(start, end) {
  if (typeof start !== 'number' || typeof end !== 'number' || start > end) {
    return [];
  }
  const result = [];
  for (let i = start; i <= end; i++) {
    result.push(i);
  }
  return result;
}
