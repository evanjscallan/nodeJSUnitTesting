/* 

TEST CASES

1.) Can create an instance of the Checkout class
2.) Can add an item price
3.) Can add an item
4.) Can calculate the current total
5.) Can add multiple items and get correct total
6.) Can add discount rules
7.) Can apply discount rules to the total

*/

import chai from 'chai';
import CheckoutClass  from './../index.js'


let expect = chai.expect
let checkout;

describe("Checkout Cart Test Suite", () => {

	beforeEach('before each', () => {
		checkout = new CheckoutClass();

		checkout.addItemWithPrice('a',1)
		checkout.addItemWithPrice('b', 2)
	})

	it("Can create instance of the Checkout class", () => {
		expect(checkout).to.be.instanceof(CheckoutClass)	
	});

	it("Can add item price", () => {
		
		checkout.addItemWithPrice('a', 1)
	})

	it('Can add item and price', () => {
		checkout.addItemWithPrice('b',2)
		checkout.addCost('b')
	})

	it("Can add multiple items", () => {
		checkout.addItemWithPrice('a',1)
		checkout.addItemWithPrice('b', 2)
		checkout.addCost('a')
		checkout.addCost('b')
	})

	it('can calculate the current total', () => {
		checkout.addItemWithPrice('a', 1);
		checkout.addCost('a');
		expect(checkout.calculateTotal()).to.equal(1)
	})

	it('Can add items and calculate total', () => {
		checkout.addCost('a')
		checkout.addCost('b')
		expect(checkout.calculateTotal()).to.equal(3)
	})

	it('Can add discount percentage rule', () => {
		checkout.addDiscount('a', 3, .2)
	})

	it('Can apply discount rules to the total', () => {
		checkout.addDiscount('a', 3, 2)
		checkout.addCost('a')
		checkout.addCost('a')
		checkout.addCost('a')
		expect(checkout.calculateTotal()).to.equal(2);
	})
});