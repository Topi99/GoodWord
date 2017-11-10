$(document).ready(function(){
	var logged = Cookies.get('logged');
	if(logged){
		var database = firebase.database();
		var user_name = Cookies.get('user_name');
		var user_image = Cookies.get('user_image');
		var btn = $('#send');
		
		var ref = database.ref('opiniones/');
		var sexo = 0,hablas = 0,fines = 0,ofendes = 0,sientes = 0,cuantas = 0,cuenta = 0;

		$('#form').show();
		btn.click(function(){
			sexo = $('input[name=sexo]:checked').val();
			hablas = $('input[name=hablas]:checked').val();
			fines = $('input[name=fines]:checked').val();
			ofendes = $('input[name=ofendes]:checked').val();
			sientes = $('input[name=sientes]:checked').val();
			cuantas = $('input[name=cuantas]:checked').val();
			cuenta = $('input[name=cuenta]:checked').val();
			enviar(ref, sexo, hablas, fines, ofendes, sientes, cuantas, cuenta, $('#opinion').val(), user_name, user_image);
		})
	}else{
		$('#form').hide();
		$('h2').text('Debes iniciar sesión para opinar');
	}

});

function enviar(ref, sexo, hablas, fines, ofendes, sientes, cuantas, cuenta,opinion, user_name, user_image){
	ref.push({
		sexo: sexo,
		hablas: hablas,
		fines: fines,
		ofendes: ofendes,
		sientes: sientes,
		cuantas: cuantas,
		cuenta: cuenta,
		opinion: opinion,
		user_name: user_name,
		user_image: user_image
	}).then(function(){window.location.replace("/opiniones.html");});
}

