import { fixString } from "./day-1.js";
import { cleanUpString } from "./day-2.js";
import { replaceKeyChars } from "./day-3.js";
import { reverseString } from "./day-4.js";
import { filterSubmissions } from "./day-5.js";
import { removeEveryXthChar } from "./day-6.js";

function alphabetOpposites() {
  const encryptedMsg = "e!!Igv)t5lltBcvbdeDH3dVw!OOtI#Aa.ZMDu7WYpP^VVjDc4I50i" +
                       "v#ylhgmQfs";
  const fixedStr = fixString(encryptedMsg);
  const keyChars = cleanUpString();
  const replacedStr = replaceKeyChars(fixedStr, keyChars);
  const reversedStr = reverseString(replacedStr);
  const qualifyingSubs = filterSubmissions();
  const reducedStr = removeEveryXthChar(reversedStr, qualifyingSubs);
  let decryptMsg = '';

  for (let i = 0; i < reducedStr.length; i++) {
    if (reducedStr[i].toLowerCase() !== reducedStr[i].toUpperCase()) {
      if (reducedStr[i] === reducedStr[i].toLowerCase()) {
        decryptMsg += String.fromCharCode(123 - (reducedStr.charCodeAt(i) - 96))
                              .toUpperCase();
      } else {
        decryptMsg += String.fromCharCode(91 - (reducedStr.charCodeAt(i) - 64))
                              .toLowerCase();
      }
    } else {
      decryptMsg += reducedStr[i];
    }
  }

  return decryptMsg;
}

console.log(alphabetOpposites());
