//this.items = { (item) : (price) }
//ITEM PRICE = this.items[item]

export default class CheckoutClass {
	constructor(){
		this.prices = new Object();
		this.items = new Object();
		this.discounts = new Object();
	}

	addCost(item){
		if (this.items[item] == undefined){
			this.items[item] = 1;
		} else {
			this.items[item]++
		}
	}

	addItemWithPrice(item, price){
		try {
			this.prices[item] = price
			console.log(this.items)
		} 
		catch (error) {
			console.error(error)
			console.log('item does not exist.')
		}
		finally {
			console.log('addItemPrice() process complete.')
		}
	}
	addDiscount(item, itemCnt, discountPrice){
		this.discounts[item] = {cnt: itemCnt, price: discountPrice}

	}

	calculateDiscount(item, itemCnt, discount){
		let total = 0
		let qtyOfDiscounts = itemCnt / discount.cnt
		total += qtyOfDiscounts * discount.price
		let remainder = itemCnt % discount.cnt
		total += remainder * this.prices[item]
	}




	calculateTotal(){
		let total = 0;
		for (let item in this.items){
			total += this.calculateItemTotal(item)

		}
		return total 
	}


	calculateItemTotal(item, total){
		let discount = this.discounts[item]
		if (discount != undefined){
			total += this.calculateDiscount(item, this.items[item], discount)
		} else {
			total += (this.prices[item] * this.items[item])
		}
		return total;
	}


}


/*
		for (let item in this.items){
			total += (this.prices[item] * this.items[item])
		}
*/
