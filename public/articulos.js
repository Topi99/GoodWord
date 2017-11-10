$(document).ready(function(){
	var articulo = $(location).attr('search').split("=")[1];
	firebase.database().ref('articulos/'+articulo.replace(" ", "-")+'/').once('value').then(function(snapshot) {
		var art = snapshot.val();
		var key = Object.keys(snapshot.val())[0];
		$.map(art, function(arti){art = arti});
		console.log(key);
		
	  $('.container').append(
	  	`
				<h2>`+art.title+`</h2>
				
				<div class="cuerpo">
					<p>
						`+art.opinion+`
					</p>
				</div>
	  	`
	  )
	});
})
