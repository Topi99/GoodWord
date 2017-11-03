$(document).ready(function(){
	var logged = Cookies.get('logged');
	if(logged){
		var database = firebase.database();
		var user_name = Cookies.get('user_name');
		var user_image = Cookies.get('user_image');
		// var opinion = $('#opinion').val();
		var btn = $('#send');
		
		var ref = database.ref('opiniones/');

		$('#form').show();
		btn.click(function(){
			enviar(ref,$('#opinion').val(), user_name, user_image);
			// console.log(opinion);
			// console.log($('#opinion').val());
		})
	}else{
		// window.location.href = "/";
		$('#form').hide();
		$('h2').text('Debes iniciar sesión para opinar');
	}

});

function enviar(ref, opinion, user_name, user_image){
	ref.push({
		opinion: opinion,
		user_name: user_name,
		user_image: user_image
	});
}

