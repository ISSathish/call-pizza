	function order(name,prize,order){
		return order(name,prize);
	}
	order("pizza","150",delivery)
	
	function delivery(name,prize){
		setTimeout(()=>{
			document.write(`order the ${name} <br>`)
		},1000)
		setTimeout(()=>{
			document.write(`preparing the ${name} <br>`)
		},2000)
		setTimeout(()=>{
			document.write(`your food is ${name} and price is ${prize} <br>`)
		},3000)
		setTimeout(()=>{
			document.write(`Delivery is successful`)
		},4000)
	}