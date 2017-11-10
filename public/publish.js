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
			ref = database.ref('articulos/'+slugify(title)+'/')
			enviar(ref, opinion, img_src, title);
		})
	}else{
		$('#form').hide();
		$('h2').text('Debes iniciar sesión para opinar');
	}

});

/*
	"Parrafos interesantes a tener en cuenta"

	"Si a veces tienden a ser divertidas, pero si te pones a pensar las groserías lo único que hacen es que tus palabras pierdan poder. \n\nEn lo personal no me gusta decir groserías a menos que sea muy necesario, es un mal\nhábito y das una mala imagen de ti e incluso de los que te rodean. \nTu forma de hablar revela lo que hay en tu corazón. Ser mal hablado demuestra que no te importan los sentimientos de los demás. Piensa: ¿eres así en realidad?\n\nDecir malas palabras daña tu imagen. El libro Cuss Control afirma: “La manera en la que hablas puede determinar quiénes serán tus amigos, cuánto te respetarán tus familiares y compañeros de trabajo, cómo serán tus relaciones, cómo influirás en otras personas, si conseguirás un trabajo o un ascenso y cómo te verán las personas que no te conocen”. Esta obra también aconseja: “Pregúntate si tus amistades mejorarían si dejaras de decir palabrotas”.\n\nNo te hace parecer tan chévere, tan guay, tan genial como crees. En su libro ¡Qué maleducado!, el doctor Alex Packer declara que las personas se cansan de escuchar a la gente que dice groserías todo el tiempo y que decir malas palabras no permite que te expreses con “ingenio, inteligencia o empatía”. Y agrega: “Si tu vocabulario es perezoso, vago o con poca imaginación, seguro que tu mente tampoco dará para mucho”.\n\nEl lenguaje es una propiedad nuestra y no tiene vida propia La vida de las palabras depende directamente de la vida que les damos.\n\nEl uso excesivo e incorrecto de este tipo de lenguaje no solo puede llegar a dañar psicológicamente al agredido, si no crear conflictos en su lugar de desarrollo, como por ejemplo el salón de clases u oficina de trabajo.\n\nDesentendimiento entre las personas, por lo que crea un mensaje distinto al que se quiera transmitir originalmente.\n\nSu uso excesivo puede causar la perdida de vocabulario que con el paso del tiempo dejaremos de usar.\n\nTodos merecemos respeto y aunque lo dudes al insultar a tus amigos, compañeros, etc lo que haces es denigrar a la persona y eso significaría que tú eres más que ellos, pero no lo eres, todos somos igual de valiosos por lo que todos merecemos ser respetados.\n\nTe evita comunicar lo que realmente quieres decir. En muchas ocasiones, una persona que habla con groserías de manera excesiva puede hacer que los demás a su alrededor bloqueen de su mente el mensaje que estás dando, provocando una distancia entre vos y los demás integrantes del equipo, ya que los haces sentir incómodos.\n\nAfecta negativamente tu imagen. De manera similar a lo que ocurre si tienes un aspecto descuidado o que acostumbras a llegar tarde, el lenguaje soez o grosero puede afectar la manera en que te perciben los demás. En algunas ocasiones, al emplear este tipo de lenguaje, se podrían truncar las posibilidades de que te asciendan o te den mayores responsabilidades laborales.\n\nSi utilizas un vocabulario soez en la oficina y que tus compañeros no te reclamen o no digan nada, no significa que no les importe o que lo pasen por alto. La mayoría de las veces te criticarán por ello, pues pueden sentir que les faltas el respeto, por lo que el ambiente laboral podría volverse tenso."

	"https://www.google.com.mx/url?sa=i&rct=j&q=&esrc=s&source=images&cd=&cad=rja&uact=8&ved=0ahUKEwilv5Teq7TXAhUjw4MKHc_oDPEQjRwIBw&url=http%3A%2F%2Fwww.lavidaenfamilia.com%2Flo-destructivo-de-la-critica-en-la-familia%2F&psig=AOvVaw30X5Zz674AqWLCxTtHxyg8&ust=1510414709865537"
*/

function slugify(text){
  return text.toString().toLowerCase()
    .replace(/\s+/g, '-')           // Replace spaces with -
    .replace(/[^\w\-]+/g, '')       // Remove all non-word chars
    .replace(/\-\-+/g, '-')         // Replace multiple - with single -
    .replace(/^-+/, '')             // Trim - from start of text
    .replace(/-+$/, '');            // Trim - from end of text
}

function enviar(ref, opinion, img_src, title){
	console.log('Se envio')
	ref.push({
		title: title,
		img_src:img_src,
		opinion: opinion
	}).then(function(){alert("Enviado.")});
}
