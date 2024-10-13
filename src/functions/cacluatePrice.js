


export default function calculatePrice(items) {

    let total = 0
    for (const item in items) {
        total += items[item].count * items[item].price
    }
    return Math.floor(total*100)/100
}
    
