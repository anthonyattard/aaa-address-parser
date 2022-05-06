function isAAA(string) {
  return string === "AAA";
}

function parseCity(string) {
  var city = string.split(/,\s/).at(-2);
  return city;
}

function parseState(string) {
  let regexState =
    /(A[KLRZ]|C[AOT]|D[CE]|FL|GA|HI|I[ADLN]|K[SY]|LA|M[ADEINOST]|N[CDEHJMVY]|O[HKR]|PA|RI|S[CD]|T[NX]|UT|V[AT]|W[AIVY])/g;
  let state = string.match(regexState);
  return state;
}

function parseZip(string) {
  let regexZip = /\d{5}?/g;
  var stateZip = string.split(/,\s/).at(-1);
  let zip = stateZip.match(regexZip);
  return zip;
}

module.exports = { isAAA, parseCity, parseState, parseZip };
