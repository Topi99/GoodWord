var hombres = 0, mujeres = 0;
var hablas0_h = 0, hablas0_m = 0, hablas1_h = 0, hablas1_m = 0, hablas2_h = 0, hablas2_m = 0;    
var fines0_h = 0, fines0_m = 0, fines1_h = 0, fines1_m = 0, fines2_h = 0, fines2_m = 0, fines3_h = 0, fines3_m = 0, fines4_h = 0, fines4_m = 0;
var ofendes0_h = 0, ofendes0_m = 0, ofendes1_h = 0, ofendes1_m = 0, ofendes2_h = 0, ofendes2_m = 0;
var sientes0_h = 0, sientes0_m = 0, sientes1_h = 0, sientes1_m = 0, sientes2_h = 0, sientes2_m = 0;
var cuantas0_h = 0, cuantas0_m = 0, cuantas1_h = 0, cuantas1_m = 0, cuantas2_h = 0, cuantas2_m = 0, cuantas3_h = 0, cuantas3_m = 0;
var cuenta0_h = 0, cuenta0_m = 0, cuenta1_h = 0, cuenta1_m = 0;

$(document).ready(function(){
	firebase.database().ref('opiniones/').once('value').then(function(snapshot) {
		$.map(snapshot.val(), function(val){
			if(val.sexo == 1) {
				hombres++;
				if(val.hablas==0) hablas0_h++;
				else if(val.hablas==1) hablas1_h++;
				else if(val.hablas==2) hablas2_h++;

				if(val.fines==0) fines0_h++;
				else if(val.fines==1) fines1_h++;
				else if(val.fines==2) fines2_h++;
				else if(val.fines==3) fines3_h++;
				else if(val.fines==4) fines4_h++;

				if(val.ofendes==0) ofendes0_h++;
				else if(val.ofendes==1) ofendes1_h++;
				else if(val.ofendes==2) ofendes2_h++;

				if(val.sientes==0) sientes0_h++;
				else if(val.sientes==1) sientes1_h++;
				else if(val.sientes==2) sientes2_h++;

				if(val.cuantas==0) cuantas0_h++;
				else if(val.cuantas==1) cuantas1_h++;
				else if(val.cuantas==2) cuantas2_h++;
				else if(val.cuantas==3) cuantas3_h++;

				if(val.cuenta==0) cuenta0_h++;
				else if(val.cuenta==1) cuenta1_h++;
			}else if(val.sexo == 0) {
				mujeres++;
				if(val.hablas==0) hablas0_m++;
				else if(val.hablas==1) hablas1_m++;
				else if(val.hablas==2) hablas2_m++;

				if(val.fines==0) fines0_m++;
				else if(val.fines==1) fines1_m++;
				else if(val.fines==2) fines2_m++;
				else if(val.fines==3) fines3_m++;
				else if(val.fines==4) fines4_m++;

				if(val.ofendes==0) ofendes0_m++;
				else if(val.ofendes==1) ofendes1_m++;
				else if(val.ofendes==2) ofendes2_m++;

				if(val.sientes==0) sientes0_m++;
				else if(val.sientes==1) sientes1_m++;
				else if(val.sientes==2) sientes2_m++;

				if(val.cuantas==0) cuantas0_m++;
				else if(val.cuantas==1) cuantas1_m++;
				else if(val.cuantas==2) cuantas2_m++;
				else if(val.cuantas==3) cuantas3_m++;

				if(val.cuenta==0) cuenta0_m++;
				else if(val.cuenta==1) cuenta1_m++;
			}
		});
	}).then(function(){
		var ctx_hm = document.getElementById("chart_hm").getContext('2d');
		var ctx_hablas_hm = document.getElementById("chart_hablas_hm").getContext('2d');
		var ctx_fines_hm = document.getElementById("chart_fines_hm").getContext('2d');
		var ctx_ofendes_hm = document.getElementById("chart_ofendes_hm").getContext('2d');
		var ctx_sientes_hm = document.getElementById("chart_sientes_hm").getContext('2d');
		var ctx_cuantas_hm = document.getElementById("chart_cuantas_hm").getContext('2d');
		var ctx_cuenta_hm = document.getElementById("chart_cuenta_hm").getContext('2d');
		
		chartHomMuj(ctx_hm, options_pie, hombres, mujeres);
		
		var labels = ["Nunca Hombres", "Nunca Mujeres", "De vez en cuando Hombres", "De vez en cuando Mujeres", "Sí, mucho Hombres", "Sí, mucho Mujeres"];
		var data = [hablas0_h, hablas0_m, hablas1_h, hablas1_m, hablas2_h, hablas2_m]
		chart(ctx_hablas_hm, options, data, labels);

		data = [fines0_h, fines0_m, fines1_h, fines1_m, fines2_h, fines2_m, fines3_h, fines3_m, fines4_h, fines4_m]; 
		labels = ["Ofender a los demás H", "Ofender a los demás M", "Reir H", "Reir M", "Verte más cool H", "Verte más cool M", "Encajar con algún grupo H", "Encajar con algún grupo M", "Otra razón H", "Otra razón M",]
		chart(ctx_fines_hm, options, data, labels);

		data = [ofendes0_h, ofendes0_m, ofendes1_h, ofendes1_m, ofendes2_h, ofendes2_m]; 
		labels = [
			"No, me da igual H",
			"No, me da igual M",
			"Solo un poco H",
			"Solo un poco M",
			"Sí, me ofende mucho H",
			"Sí, me ofende mucho M"
		]
		chart(ctx_ofendes_hm, options, data, labels);
		
		data = [sientes0_h, sientes0_m, sientes1_h, sientes1_m, sientes2_h, sientes2_m]; 
		labels = [
			"Nada H",
			"Nada M",
			"Me siento bien H",
			"Me siento bien M",
			"Me siento mal H",
			"Me siento mal M"
		]
		chart(ctx_sientes_hm, options, data, labels);
		
		data = [cuantas0_h, cuantas0_m, cuantas1_h, cuantas1_m, cuantas2_h, cuantas2_m, cuantas3_h, cuantas3_m]; 
		labels = [
			"Ninguna H",
			"Ninguna M",
			"Alrededor de 10 H",
			"Alrededor de 10 M",
			"Alrededor de 20 H",
			"Alrededor de 20 M",
			"Más de 25 H",
			"Más de 25 M"
		]
		chart(ctx_cuantas_hm, options, data, labels);
		
		data = [cuenta0_h, cuenta0_m, cuenta1_h, cuenta1_m]; 
		labels = [
			"Sí H",
			"Sí M",
			"No H",
			"No M"
		]
		chart(ctx_cuenta_hm, options, data, labels);
	});

});



var options_pie = {
	responsive:false,
	maintainAspectRatio:false,
	scales: {
			xAxes: [{
					display: this.scalesdisplay,
					ticks: {
							beginAtZero:this.beginzero,
					}
			}],
			yAxes: [{
					display: this.scalesdisplay,
					ticks: {
							beginAtZero:this.beginzero,
					}
			}]
	}
}

var options = {
	scales: {
		yAxes: [{
			ticks: {
				beginAtZero:true
			}
		}]
	}
}

function chartHomMuj(ctx, options, hombres, mujeres){
	var myChart = new Chart(ctx, {
			type: 'doughnut',
			data: {
					labels: ["Mujeres", "Hombres"],
					datasets: [{
							label: 'Número de hombres y mujeres que han contestado la encuesta',
							data: [mujeres, hombres],
							backgroundColor: [
									'rgba(255, 99, 132, 0.2)',
									'rgba(54, 162, 235, 0.2)',
							],
							borderColor: [
									'rgba(255,99,132,1)',
									'rgba(54, 162, 235, 1)',
							],
							borderWidth: 1
					}]
			},
			options :options
	});
}

function chart(ctx, options, data, labels){
	var myChart = new Chart(ctx, {
		type: 'bar',
		data: {
				labels: labels,
				datasets: [{
					label: '# of Votes',
					data: data,
					backgroundColor: [
						'rgba(255, 99, 132, 0.2)',
						'rgba(54, 162, 235, 0.2)',
						'rgba(255, 206, 86, 0.2)',
						'rgba(75, 192, 192, 0.2)',
						'rgba(153, 102, 255, 0.2)',
						'rgba(255, 159, 64, 0.2)'
					],
					borderColor: [
						'rgba(255,99,132,1)',
						'rgba(54, 162, 235, 1)',
						'rgba(255, 206, 86, 1)',
						'rgba(75, 192, 192, 1)',
						'rgba(153, 102, 255, 1)',
						'rgba(255, 159, 64, 1)'
					],
					borderWidth: 1
			}]
		},
		options: options
	});
}