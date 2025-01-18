
function greeting(){
    let userName = 'Felipe'

    function displayUsername() {
        return `Hello ${userName}`
    }
    return displayUsername
}

const g = greeting() 
console.log(g)
console.log(g())