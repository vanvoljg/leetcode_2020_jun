/**
 * @param {string} s
 * @param {string} t
 * @return {boolean}
 */
var isSubsequence = function (s, t) {
  if (s.length == 0) return true; // Empty substring always matches
  if (s.length > t.length) return false; // s longer than t cannot ever match
  let j = 0;

  for (let i = 0; i < t.length; i++) {
    if (t[i] == s[j]) j++;
    if (j >= s.length) return true;
  }

  return false;
};
