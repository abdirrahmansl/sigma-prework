let now = new Date()
let someDate = new Date(1972,12,4)


function yearsBetween(date1, date2) {
    let d1 = new Date(date1)
    let d2 = new Date(date2)

    let diff = date2.getFullYear() - date1.getFullYear() 
    console.log(diff)
    return diff
}


yearsBetween(now, someDate)