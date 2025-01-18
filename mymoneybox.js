// function moneyBox(coins) {
//     let saveCoins = 0

//     saveCoins += coins
//     console.log(`Money box: ${saveCoins}`)
// }

// moneyBox(5)
// moneyBox(5)

function moneyBox() {
    let saveCoins = 0
    function countCoins (coins) {
        saveCoins += coins
        console.log(`Moneybox: ${saveCoins}`)
    }
    return countCoins
}

const myMoneybox = moneyBox()
myMoneybox(5)
myMoneybox(5)
myMoneybox(15)

const moneyBoxAna = moneyBox()
moneyBoxAna(10)
moneyBoxAna(20)
moneyBoxAna(5)