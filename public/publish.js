$(document).ready(function(){
	var logged = Cookies.get('logged');
	if(logged){
		var database = firebase.database();
		var btn = $('#send');
		var opinion, img_src, title;
		var ref;

		$('#form').show();
		btn.click(function(){
			opinion = $('#opinion').val();
			img_src = $('#img_src').val();
			title = $('#title').val();
			ref = database.ref('articulos/'+title.replace(" ", "-")+'/')
			enviar(ref, opinion, img_src, title);
		})
	}else{
		$('#form').hide();
		$('h2').text('Debes iniciar sesión para opinar');
	}

});

function enviar(ref, opinion, img_src, title){
	console.log('Se envio')
	ref.push({
		title: title, 
		img_src:img_src,
		opinion: opinion
	}).then(function(){alert("Enviado.")});
}