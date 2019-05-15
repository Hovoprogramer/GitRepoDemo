$(document).ready(function(){let arr=[1,2,3,4,5,6,7,8,''];

for (let i = 0; i < $('td').length; i++) {
		let k = arr.splice(Math.floor(Math.random()*arr.length),1);
	    $("td").eq(i).html(k);
										}

for (let i = 0; i < $('td').length; i++) {
	$("td").eq(i).click(function(){
		for (let j = 0; j < $('td').length; j++){
			if($("td").eq(j).html()==="" && (j === i + 3 || j === i - 1 && i % 3 !== 0 || j === i - 3 || j === i + 1 && j % 3 !== 0)){
				$('td').eq(j).html($(this).html())
				$(this).html('')	
			}
	
		}
	})
}


$('.last').click(function(){
	let bool = true;
	for (let i = 0; i < $('td').length - 1; i++) {
		if( +$('td').eq(i).html() !== i+1){
			bool = false;
			break;
		}
	}
	if(bool){
		alert('you win')
	}
})













































})