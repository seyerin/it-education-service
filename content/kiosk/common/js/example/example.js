import { QUESTION, QUESTIONAMOUNT, QUESTIONOPTION, QUESTION2, QUESTION3, SINGLEOPTION, SINGLECART, SINGLEAMOUNT, SETOPTION, SETCART, SETAMOUNT, OPTION, ADDITIONALORDER, ORDERING, PLACE, PAY, SUBJECTNUM, CATEGORYNUM, NOQUESTION, BASIC, TEENAGER, DISABLED, OLDMAN, SEAT, DRINKOPTION} from "../../js/utils/key.js";

const keyArr = [QUESTION, QUESTIONAMOUNT, QUESTIONOPTION, QUESTION2, QUESTION3, SINGLEOPTION, SINGLECART, SINGLEAMOUNT, SETOPTION, SETCART, SETAMOUNT, OPTION, ADDITIONALORDER, ORDERING, PLACE, PAY, NOQUESTION, BASIC, TEENAGER, DISABLED, OLDMAN, SEAT, DRINKOPTION] ;

for(let i = 0; i < keyArr.length; i++){
  localStorage.removeItem(keyArr[i]);
}