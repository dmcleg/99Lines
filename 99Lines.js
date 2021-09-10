let friends = ['Preston', 'Ben', 'John David', 'Hope', 'Sheffield']

for (let myFriends = 0; myFriends < friends.length; myFriends++) {

    for (let codeLeft = 99; codeLeft > 0; codeLeft--) {
        if (codeLeft > 2) {
            console.log(codeLeft + ' lines of code in the file, ' + codeLeft + ' lines of code; ' + friends[myFriends] + ' strikes one out, clears it all out, ' + (codeLeft - 1) + ' lines of code in the file!')
        } else if (codeLeft == 2) {
            console.log(codeLeft + ' lines of code in the file, ' + codeLeft + ' lines of code; ' + friends[myFriends] + ' strikes one out, clears it all out, ' + (codeLeft - 1) + ' line of code in the file!')
        } else {
            console.log(codeLeft + ' line of code in the file, ' + codeLeft + ' line of code; ' + friends[myFriends] + ' strikes one out, clears it all out, ' + (codeLeft - 1) + ' lines of code in the file!')
        }
    }
}