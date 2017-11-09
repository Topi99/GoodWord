var hombres = 0, mujeres = 0;
var hablas0_h = 0, hablas0_m = 0, hablas1_h = 0, hablas1_m = 0, hablas2_h = 0, hablas2_m = 0;    

$(document).ready(function(){
	firebase.database().ref('opiniones/').once('value').then(function(snapshot) {
		$.map(snapshot.val(), function(val){
			if(val.sexo == 1) {
				hombres++;
				if(val.hablas==0) hablas0_h++;
				else if(val.hablas==1) hablas1_h++;
				else if(val.hablas==2) hablas2_h++;
			}else if(val.sexo == 0) {
				mujeres++;
				if(val.hablas==0) hablas0_m++;
				else if(val.hablas==1) hablas1_m++;
				else if(val.hablas==2) hablas2_m++;
			}
		});
	}).then(function(){
		var ctx_hm = document.getElementById("chart_hm").getContext('2d');
		var ctx_hablas_hm = document.getElementById("chart_hablas_hm").getContext('2d');
		chartHomMuj(ctx_hm, options_pie, hombres, mujeres);
		chart_hablas(ctx_hablas_hm, options, hablas0_h, hablas0_m, hablas1_h, hablas1_m, hablas2_h, hablas2_m)
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

function chart_hablas(ctx, options, hablas0_h, hablas0_m, hablas1_h, hablas1_m, hablas2_h, hablas2_m){
	var myChart = new Chart(ctx, {
		type: 'bar',
		data: {
				labels: ["Nunca Hombres", "Hunca Mujeres", "De vez en cuando Hombres", "De vez en cuando Mujeres", "Sí, mucho Hombres", "Sí, mucho Mujeres"],
				datasets: [{
					label: '# of Votes',
					data: [hablas0_h, hablas0_m, hablas1_h, hablas1_m, hablas2_h, hablas2_m],
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