function sales(carsSold) {
   let fordTotal = 0;
   let landRoverTotal = 0;
   let toyotaTotal = 0;
   let hondaTotal = 0;

   for(let i = 0; i < carsSold.length; i++){
    if(carsSold[i].make === 'Ford') {
        fordTotal += carsSold[i].price;
    }else if(carsSold[i].make === 'Land Rover'){
        landRoverTotal += carsSold[i].price;
    }else if(carsSold[i].make === 'Toyota') {
        toyotaTotal += carsSold[i].price;
    }else if(carsSold[i].make === 'Honda') {
        hondaTotal += carsSold[i].price;
    } else {
        return 'not an array'
    }
   }
   return {
    Ford: fordTotal,
    "Land Rover": landRoverTotal,
    Toyota: toyotaTotal,
    Honda: hondaTotal
   }

}

module.exports = sales;
