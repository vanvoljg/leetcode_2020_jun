'use strict';
/**
 * @param {string} S
 * @return {string}
 */
const longestDupSubstring = (S) => {
  // Hint suggests using binary searching to find the correct length of the
  // longest substring.
  // Research suggested taking that length and trying all possible substrings
  // of that length

  if (S.length <= 1) return ''; // No way to have a duplicate with 0 or 1 chars
  let l = 0;
  let r = S.length - 1;

  const PRIME = 982451653;
  const R = 26; // Number of letters in the alphabet;

  let powers = [1];
  for (let i = 1; i < S.length; i++) {
    powers[i] = (powers[i - 1] * R) % PRIME;
  }

  let ret = '';
  let len = S.length;
  while (l <= r) {
    len = ((r - l) >> 1) + l;
    let cur = rabinKarp(S, len, PRIME, R, powers);
    console.log({cur, ret, l, r, len});

    if (cur.length > ret.length) {
      ret = cur;
      l = len + 1;
    } else {
      r = len - 1;
    }
  }
  return ret;
};

const rabinKarp = (str, len, q, R, powers) => {
  if (len === 0) return '';
  console.log(len)

  const A = 'a'.charCodeAt(0);
  // const A = 0;
  let hash = 0;
  let map = new Map();

  for (let i = 0; i < len; i++) {
    hash = (hash * R + (str.charCodeAt(i) - A)) % q;
  }

  map.set(hash, [0]);

  for (let i = len; i < str.length; i++) {
    hash =
      (((hash - powers[len - 1] * (str.charCodeAt(i - len) - A)) % q) + q) % q;
    hash = (hash * R + (str.charCodeAt(i) - A)) % q;

    if (!map.has(hash)) {
      map.set(hash, [i - len + 1]);
    } else {
      let arr = map.get(hash);
      for (const j of arr) {
        let newStr = str.substring(i - len + 1, i + len);
        newStr === 'akyj' ? console.log("FOUND IT!") : false ;
        if (str.substring(j, j + len) === newStr) {
          return str.substring(j, j + len);
        }
      }
      arr.push(i - len + 1);
      map.set(hash, arr);
    }
  }
  return '';
};

const testRunner = (tests) => {
  for (const [string, answer] of tests) {
    const result = longestDupSubstring(string);
    console.log({
      string,
      answer,
      result,
      pass: result === answer,
    });
  }
};

const test = () => {
  const tests = [
    // ['banana', 'ana'],
    // ['abcde', ''],
    [
      'moplvidmaagmsiyyrkchbyhivlqwqsjcgtumqscmxrxrvwsnjjvygrelcbjgbpounhuyealllginkitfaiviraqcycjmskrozcdqylbuejrgfnquercvghppljmojfvylcxakyjxnampmakyjbqgwbyokaybcuklkaqzawageypfqhhasetugatdaxpvtevrigynxbqodiyioapgxqkndujeranxgebnpgsukybyowbxhgpkwjfdywfkpufcxzzqiuglkakibbkobonunnzwbjktykebfcbobxdflnyzngheatpcvnhdwkkhnlwnjdnrmjaevqopvinnzgacjkbhvsdsvuuwwhwesgtdzuctshytyfugdqswvxisyxcxoihfgzxnidnfadphwumtgdfmhjkaryjxvfquucltmuoosamjwqqzeleaiplwcbbxjxxvgsnonoivbnmiwbnijkzgoenohqncjqnckxbhpvreasdyvffrolobxzrmrbvwkpdbfvbwwyibydhndmpvqyfmqjwosclwxhgxmwjiksjvsnwupraojuatksjfqkvvfroqxsraskbdbgtppjrnzpfzabmcczlwynwomebvrihxugvjmtrkzdwuafozjcfqacenabmmxzcueyqwvbtslhjeiopgbrbvfbnpmvlnyexopoahgmwplwxnxqzhucdieyvbgtkfmdeocamzenecqlbhqmdfrvpsqyxvkkyfrbyolzvcpcbkdprttijkzcrgciidavsmrczbollxbkytqjwbiupvsorvkorfriajdtsowenhpmdtvamkoqacwwlkqfdzorjtepwlemunyrghwlvjgaxbzawmikfhtaniwviqiaeinbsqidetfsdbgsydkxgwoqyztaqmyeefaihmgrbxzyheoegawthcsyyrpyvnhysynoaikwtvmwathsomddhltxpeuxettpbeftmmyrqclnzwljlpxazrzzdosemwmthcvgwtxtinffopqxbufjwsvhqamxpydcnpekqhsovvqugqhbgweaiheeicmkdtxltkalexbeftuxvwnxmqqjeyourvbdfikqnzdipmmmiltjapovlhkpunxljeutwhenrxyfeufmzipqvergdkwptkilwzdxlydxbjoxjzxwcfmznfqgoaemrrxuwpfkftwejubxkgjlizljoynvidqwxnvhngqakmmehtvykbjwrrrjvwnrteeoxmtygiiygynedvfzwkvmffghuduspyyrnftyvsvjstfohwwyxhmlfmwguxxzgwdzwlnnltpjvnzswhmbzgdwzhvbgkiddhirgljbflgvyksxgnsvztcywpvutqryzdeerlildbzmtsgnebvsjetdnfgikrbsktbrdamfccvcptfaaklmcaqmglneebpdxkvcwwpndrjqnpqgbgihsfeotgggkdbvcdwfjanvafvxsvvhzyncwlmqqsmledzfnxxfyvcmhtjreykqlrfiqlsqzraqgtmocijejneeezqxbtomkwugapwesrinfiaxwxradnuvbyssqkznwwpsbgatlsxfhpcidfgzrc',
      'akyj',
    ],
  ];

  testRunner(tests);
};

test();
