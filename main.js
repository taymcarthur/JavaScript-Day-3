//Show me how to calculate the average price of all items. 
//Answer: The average price is $23.63
var sum = (items.reduce(function(a,b){
	return a + b.price
}, 0) / items.length).toFixed(2) //tofixed(2) means converting a sum into currency format. example: 2.225 = 2.22

var answer1 = document.querySelector("#answer1")

answer1.innerHTML=`the average is ${sum}`

//Show me how to get an array of items that cost between $14.00 and $18.00 USD
//Answer:   1970s Coors Banquet Glass Beer Pitcher , The Three Broomsticks Customizable Beer Stein Mug, Harry Potter Inspired, hogsmeade village, harry potter gift, three broomsticks mug, Hand Painted Colorful Feather Glass
var content = "<ul>"
var priceRange = items.filter(function(val){
	if (val.price >= 14.00 && val.price <= 18.00 // or return item.price >= 14 && item.price < 18 
	){
		return val
	}
}).map(function(val){
	content += `<li>${val.title} ${val.price}</li>`
})
var answer2 = document.querySelector("#answer2")

answer2.innerHTML= `${content}`
//Which item has a "GBP" currency code? Display it's name and price.
//Answer:   1970s Schlitz Malt Liquor Glass Beer Pitcher costs £18
var content = ""
var gbp = items.filter(function(val){ //filter for GBP
	if (val.currency_code === "GBP"){
		return val
	}
}).map(function(val){  //map for title and price
	content += `${val.title} ${val.price}`
})


var answer3 = document.querySelector("#answer3")
	answer3.innerHTML=` ${content}`

//Display a list of all items who are made of wood.
//Answer:   SALE Mid Century Siesta Ware White Mug with Anchor - Set of 3 is made of wood, Bottle cap catcher personalized, Man cave gift for him- Wooden Beer pub sign - Groomsmen wedding Gift is made of wood., Medium Size, Welcome To Our Firepit-Where Friends And Marshmallows Get Toasted At The Same Time-Painted Wood Sign-Custom Colors is made of wood.

var wood = items.filter(function(val){
	if(val.materials.includes('wood')){
		return val 
	}	
}).map(function(val){
	return val.title
})

var answer4 = document.querySelector("#answer4")
	answer4.innerHTML=` ${wood}`
 
 //Which items are made of eight or more materials? Display the name, number of items and the items it is made of.
 var content ="<ul>"
 var eight = items.filter(function(val){
 	if(val.materials.length >= 8){ //materials.length means it goes through each value named "material", and only pulls the "materials" with 8 or more subvalue.  Ex: (materials.length >=4) Materials: 1,2,3 NOPE! Materials: 1,2,3,4 YEP!
	content+=`<li>${val.title} ${val.materials.length} <br />${val.materials}</li>`
	}
 })
 var answer5 = document.querySelector("#answer5")
	answer5.innerHTML=` ${content}`

 //How many items were made by their sellers? 18 were made by their sellers 	}

 var sellers = items.filter(function(val){
 	if(val.who_made == "i_did")
 		return val
 })

var answer6 = document.querySelector("#answer6")
	answer6.innerHTML=` ${sellers.length}`