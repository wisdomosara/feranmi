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
  
  
  function candyOrderQuantity(array, candyName) {
    let order = 0
    let filtered = []
    for (let i = 0; i < array.length; i++) {
       if(array[i].candy === candyName) {
           filtered.push(array[i])
        }
    }
    if(filtered.length >= 1) {
          if (filtered[0].inStock > filtered[0].weeklyAverage) {
                order = 0;
            }else {
               order = filtered[0].weeklyAverage*2;
              
            }
        }
        else {
                order = 0;
        }
    let cand = {
        candy : candyName,
        order : order
    }
    return cand
}
  
  

function allCandyOrders(array) {
    let final = {}
    for (let candy of array) {
        let result = candyOrderQuantity(array, candy.candy)
        let name = result.candy;
        let orders = result.order
        final[name] = orders
    }
    console.log(final)

}
 allCandyOrders(inventory)
