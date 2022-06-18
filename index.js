function palindrome(str) {
    let newStr = str.replace(/\W+|_/gi, "");
    newStr = newStr.toLowerCase();
    console.log(newStr);
    let reversedStr = newStr.split("");
    reversedStr.reverse();
    reversedStr = reversedStr.join("");
    if (reversedStr === newStr) {
        return true;
    }
    return false;
}
console.log(palindrome("A man, a plan, a canal. Panama"));
/* git remote add origin https://github.com/Adebisola/FreecodeCamp-JS-Projects.git
git branch -M main
git push -u origin main*/