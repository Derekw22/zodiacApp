function getAlerted(){
	var person1 = {name:"Derek", age:21, location:"Johannesburg", graduated: true};
	var person2 = {name:"Tessa", age:20, location: "Las Vegas", graduated: false};
	var person3 = {name: "Alex", age:23, location: "Los Angeles", graduated: true};
	
	var people = [person1,person2,person3];
	for(var i = 0; i < people.length; i++){
		if (people[i].graduated == true) {
			document.getElementById('demo').innerHTML +=  '<br>' + people[i].name + " Passed" + '<br>' + '<br>' ;
		}else{
			document.getElementById('demo').innerHTML +=  '<br>' + people[i].name + " Failed" + '<br>' + '<br>' ;
		}
		
	}
}