function isAAA(string) {
  return string === "AAA";
}

function parseCity(string) {
  let arr = string.split(/,\s/);
  var city = arr[arr.length - 2];
  return city;
}

function parseState(string) {
  let regexState =
    /(A[KLRZ]|C[AOT]|D[CE]|FL|GA|HI|I[ADLN]|K[SY]|LA|M[ADEINOST]|N[CDEHJMVY]|O[HKR]|PA|RI|S[CD]|T[NX]|UT|V[AT]|W[AIVY])/g;
  let state = string.match(regexState);
  return state[0];
}

function parseZip(string) {
  let regexZip = /\d{5}?/g;
  let arr = string.split(/,\s/);
  let stateZip = arr[arr.length - 1];
  let zip = stateZip.match(regexZip);
  return zip[0];
}

module.exports = { isAAA, parseCity, parseState, parseZip };
