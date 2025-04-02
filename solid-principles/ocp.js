// # open closed principle

let allowedRoles = ["a","b","c","d"]

function checkPrevilege(emp){
 
            if(allowedRoles.includes(emp)){
                       return true;
            }else{
                return false;
            }
}

// Now if we want to add roles seperate it

function addRoles(role){
    allowedRoles.push();
}

// Another example

class Coder {
    constructor(fullName, language, hobby, education, workplace, position) {
      this.fullName = fullName
      this.language = language
      this.hobby = hobby
      this.education = education
      this.workplace = workplace
      this.position = position
    }
  }
  
  class CoderFilter {
    filterByName(coders, fullName) {
      return coders.filter(coder => coder.fullName === fullName)
    }
  
    filterBySize(coders, language) {
      return coders.filter(coder => coder.language === language)
    }
  
    filterByHobby(coders, hobby) {
      return coders.filter(coder => coder.hobby === hobby)
    }
  }
  

  const filterByProp = (array, propName, value) =>
    array.filter(element => element[propName] === value)