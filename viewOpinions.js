function opinion(opinion, user_name, user_image){

	return `<figure class="right">
						<div class="row">
							<div class="col-md-6 col-xs-12 quote">
								<blockquote>
									<p>`+opinion+`</p>
									<b>`+user_name+`</b>
								</blockquote>
							</div>
							<div class="col-md-6 col-xs-12">
								<img src="`+user_image+`" alt="">
							</div>
						</div>
					</figure>`
}

var opiniones;

$(document).ready(function(){
	firebase.database().ref('opiniones/').once('value').then(function(snapshot) {
	  $.map(snapshot.val(), function(val){
	  	// console.log(val.opinion);
	  	$('.container').append(opinion(val.opinion, val.user_name, val.user_image));
	  });
	});
});