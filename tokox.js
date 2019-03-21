function countProfit(shoppers) {
  var listBarang = [ ['Sepatu Stacattu', 1500000, 10],
                     ['Baju Zoro', 500000, 2],
                     ['Sweater Uniklooh', 175000, 1]
                   ];

  // you can only write your code here!
var supplyReport = [
{ product : 'Sepatu Stacattu',
 shoppers : [],
 leftOver : listBarang[0][2],
 totalProfit : 0
 },

 { product : 'Baju Zoro',
 shoppers : [],
 leftOver : listBarang[1][2],
 totalProfit : 0
 },

 { product : 'Sweater Uniklooh',
 shoppers : [],
 leftOver :listBarang [2][2],
 totalProfit : 0
 }

];
if (shoppers.length === 0){
	return '[]';
} else {

	for (var i = 0; i < shoppers.length; i++ ){

	  var buyer = shoppers[i].name;
      var product = shoppers[i].product;
      var amount = shoppers[i].amount;
      var booleanProductExistence = false;
      var stock;
      var count = 0;

      

      while (booleanProductExistence === false) {
        

        if (listBarang[count][0] === product) {
          booleanProductExistence = listBarang[count][0];
          stock = listBarang[count][2];
          
        } else if (count < 2) {
          count++;
        } else {
          booleanProductExistence = true;
          return supplyReport;
        }

      }

      if (stock >= amount) {
        stock -= amount;
       
        listBarang[count][2] -= amount;
        
        supplyReport[count].shoppers.push(buyer);
        supplyReport[count].leftOver -= amount;
        supplyReport[count].totalProfit += listBarang[count][1] * amount;
        // console.log(supplyReport);
      }
    }
  }

  return supplyReport;
}

// TEST CASES
console.log(countProfit([{name: 'Windi', product: 'Sepatu Stacattu', amount: 2}, {name: 'Vanessa', product: 'Sepatu Stacattu', amount: 3}, {name: 'Rani', product: 'Sweater Uniklooh', amount: 2}]));
//[ { product: 'Sepatu Stacattu',
//   shoppers: [ 'Windi', 'Vanessa' ],
//   leftOver: 5,
//   totalProfit: 7500000 },
// { product: 'Baju Zoro',
//   shoppers: [],
//   leftOver: 2,
//   totalProfit: 0 },
// { product: 'Sweater Uniklooh',
//   shoppers: [],
//   leftOver: 1,
//   totalProfit: 0 } ]

console.log(countProfit([{name: 'Windi', product: 'Sepatu Stacattu', amount: 8}, {name: 'Vanessa', product: 'Sepatu Stacattu', amount: 10}, {name: 'Rani', product: 'Sweater Uniklooh', amount: 1}, {name: 'Devi', product: 'Baju Zoro', amount: 1}, {name: 'Lisa', product: 'Baju Zoro', amount: 1}]));
// [ { product: 'Sepatu Stacattu',
//     shoppers: [ 'Windi' ],
//     leftOver: 2,
//     totalProfit: 12000000 },
//   { product: 'Baju Zoro',
//     shoppers: [ 'Devi', 'Lisa' ],
//     leftOver: 0,
//     totalProfit: 1000000 },
//   { product: 'Sweater Uniklooh',
//     shoppers: [ 'Rani' ],
//     leftOver: 0,
//     totalProfit: 175000 } ]
console.log(countProfit([{name: 'Windi', product: 'Sepatu Naiki', amount: 5}]));
// [ { product: 'Sepatu Stacattu',
//     shoppers: [],
//     leftOver: 10,
//     totalProfit: 0 },
//   { product: 'Baju Zoro',
//     shoppers: [],
//     leftOver: 2,
//     totalProfit: 0 },
//   { product: 'Sweater Uniklooh',
//     shoppers: [],
//     leftOver: 1,
//     totalProfit: 0 } ]
console.log(countProfit([])); //[]