



function factory(name,price,img){
	return {
		name:name,
		price:price,
         img:img
	}
}


function addProduct(product){
	database.push(product);
}




var database = [{name:"Nike",price:"2000",size:["M","S","L"], colors:["blue","red"], img:"../Bootstrap-Project/pics/shoes.jpg"},
					{name:"Nike",price:"2000",size:["M","S","L"], colors:["blue","red"],img:"../Bootstrap-Project/pics/woman.jpg"},
					{name:"Asics",price:"2000",size:["M","S","L"], colors:["blue","red"],img:"../Bootstrap-Project/pics/shoe3.jpg"},
					{name:"Asics",price:"2000",size:["M","S","L"], colors:["blue","red"],img:"../Bootstrap-Project/pics/shoe4.jpg"},
					{name:"Nike",price:"2000",size:["M","S","L"], colors:["blue","red"],img:"../Bootstrap-Project/pics/shoe1.jpg"},
					{name:"Asics",price:"2000",size:["M","S","L"], colors:["blue","red"],img:"../Bootstrap-Project/pics/shoe8.jpg"},
					{name:"Asics",price:"2000",size:["M","S","L"], colors:["blue","red"],img:"../Bootstrap-Project/pics/shoe6.jpg"},
					{name:"Nike",price:"2000",size:["M","S","L"], colors:["blue","red"],img:"../Bootstrap-Project/pics/shoe9.jpg"}]




					var createItem = function(obj,index){
			return $(`<div class="holder">
	  			<div class="pic">
	  			<img class="image" src="${obj.img}">
	  			</div>
			  	<div class="info">
			  		<button class="buyBtn" id="${index}">Buy now</button>
			  	
			  		<p>${obj.name}</p>
			  		<p>Size: ${obj.size}</p>

			  	</div>
			  	</div>`)
	}

var showItem = function(){
			for (var i = 0; i <database.length; i++) {
				createItem(database[i],i).appendTo($("#rows"))
			}
	}
showItem();








$(document).ready(function(){
	//var database = {first:{name:"Nike",price:"2000",size:["M","S","L"], colors:["blue","red"]}}
// 	console.log($('#quantity'));

// $('#quantity').change(function(){
// 	console.log("changed");
// });
	// $('#totale')[0].value=(Number($('#quantity')[0].value)*45);

var createDiv = function(){
}

	//if($("#").hover()){
  $(".buyBtn").click(function(){
  	var indObj= database[$(this).attr("id")]
	var newdiv = $(`<div class="buying"><img class="image" src="${indObj.img}"><form><fieldset><legend>Purchase</legend><br><br>

		<h1>Name:<span>${indObj.name}</span>
  		<h2>Price:<span>${indObj.price}</span></h2>
  		<h2>Size:<span>${indObj.size}</span></h2>
  		<h2>Colors:<span>${indObj.colors}</span></h2>
  <label for="quantity">Quantity (between 1 and 5):</label>
  <input type="text" id="quantity" name="quantity" value="1">
  <label for="totale">Totale:</label>
  <input type="text" id="totale" name="totale" value="${indObj.price}$"><br><br>
  <label for="name">Name:</label>
  <input type="text" id="name" name="name" ><br><br>
  <label for="phone"> Phone:</label>
  <input type="tel" id="phone" name="phone" placeholder="00216 99 999 999" pattern="[0-9]{5}[0-9]{2}[0-9]{3}[0-9]{3}" required><br><br>
  <label for="creditCard"> Credit Card:</label>
  <input type="tel" id="creditCard" name="creditCard" placeholder="0000-0000-0000-0000" pattern="[0-9]{4}-[0-9]{4}-[0-9]{4}-[0-9]{4}" required><br><br>
  <input type="submit" value="Submit">
  </fieldset>
</form></div>`)



  	$(".row").hide();
  	$("body").append(newdiv);

  	
  	$('#quantity').on('change', function(){
  		console.log("changed");

  	});
  //console.log()


  
  });
//}

$("#home").click(function(){

		$(".buying").hide();
		$(".row").show();
	});




  });

