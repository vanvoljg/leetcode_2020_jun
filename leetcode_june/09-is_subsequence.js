/**
 * @param {string} s
 * @param {string} t
 * @return {boolean}
 */
var isSubsequence = function (s, t) {
  const tEnd = t.length;
  const sEnd = s.length;
  let j = 0;

  // This loop will not check end condition if end of t was reached
  for (let i = 0; i < tEnd; i++) {
    if (j >= sEnd) return true;
    if (t[i] == s[j]) {
      j++;
    }
  }
  
  // Performs the missing end condition check from above loop
  return j >= sEnd;
};
