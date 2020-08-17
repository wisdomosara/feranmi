let inventory = [
    {
      "candy": "Twizzlers",
      "inStock": 180,
      "weeklyAverage": 200
    },
    {
      "candy": "Sour Patch Kids",
      "inStock": 90,
      "weeklyAverage": 100
    },
    {
      "candy": "Milk Duds",
      "inStock": 300,
      "weeklyAverage": 170
    },
    {
      "candy": "Now and Laters",
      "inStock": 150,
      "weeklyAverage": 40
    }
  ]
  
  
  function shouldWeOrderThisCandy(array) {
    
    for (let i = 0; i < array.length; i++) {
       if(array[i].candy === candyName) {
           filtered.push(array[i])
        }
    }
    if(filtered.length >= 1) {
          if (filtered[0].inStock < filtered[0].weeklyAverage) {
            return true
            }else {
                return false
            }
        }
        else {
                return false
        }
}
  
  console.log(shouldWeOrderThisCandy(inventory, "Twizzlers")); //->  true
  console.log(shouldWeOrderThisCandy(inventory, "Sour Patch Kids")); //-> true
  console.log(shouldWeOrderThisCandy(inventory, "Milk Duds")); //->  false
  console.log(shouldWeOrderThisCandy(inventory, "Now and Laters")); //->  false
  console.log(shouldWeOrderThisCandy(inventory, "Broccoli Bits")); //->  false

function allCandyOrders(array) {
    let filtered = []
    
}
 allCandyOrders(inventory)
//  {
//    "Twizzlers": 400,
//    "Sour Patch Kids": 200,
//    "Milk Duds": 0,
//    "Now and Laters": 0
//  }