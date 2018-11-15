
function runAnswer () {
    // generates random number between 1 and 12
    let ran = Math.floor((Math.random() * 12) + 1);
    let ans;
    // sets value of ans based on ran number using a switch
    switch (ran) {
        case 1:
            ans = 'It is certain'
            break;
        case 2:
            ans = 'It is decidedly so'
            break;
        case 3:
            ans = 'Yes - definitely'
            break;
        case 4:
            ans = 'You may rely on it'
            break;
        case 5:
            ans = 'As I see it, yes'
            break;
        case 6:
            ans = 'Most likely'
            break;
        case 7:
            ans = 'Reply hazy, try again'
            break;
        case 8:
            ans = 'Ask again later'
            break;
        case 9:
            ans = 'Better not tell you now'
            break;
        case 10:
            ans = "Don't count on it"
            break;
        case 11:
            ans = 'My reply is no'
            break;
        case 12:
            ans = 'Outlook not so good'
            break;
    }
    // sets value of the ans h1 div to ans variable
    document.getElementById('ans').innerHTML = ans;
}

// adds event listener to #askMe button which calls runAnswer function
document.querySelector('#askMe').addEventListener('click', runAnswer)