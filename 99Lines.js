var codeLeft = 99;

function NinetyNinelines (restofSong) {
    console.log(codeLeft + ' lines of code in the file, ' + codeLeft + ' lines of code, Drew strikes one out, clears it all out, ' + codeLeft + ' lines of code in the file!')
}

while (codeLeft > 1) {

    NinetyNinelines(codeLeft);

    codeLeft--;

	if (codeLeft == 1) {
    console.log(codeLeft + ' line of code in the file, ' + codeLeft + ' line of code, Drew strikes one out, clears it all out, ' + codeLeft + ' line of code in the file!')
	}
}