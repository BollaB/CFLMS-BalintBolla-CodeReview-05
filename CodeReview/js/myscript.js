$(document).ready(function(){

	let films = JSON.parse(movies);

	for (let i = 0; i < films.length; i++){
		
		let movie = `
		<div class="container">
			<div class="poster">
				<img class="pic" src="${films[i].image}">
			</div>
			<div class="text-box">
				<div class="details">
					<h2>${films[i].title}</h2>
					<p>${films[i].releaseDate}</p>
					<p>Genre: ${films[i].genre}</p>
					<p>Director: ${films[i].director}</p>
				</div>
				<div class="like-box">
					<input type="button" class="btn" value="Like &#128077;" number="${i}"></input>
					<p class="counter"></p>
				</div>
			</div>
		</div>	
		`;
		$("#main2").append(movie);
		$(".counter").text(Math.floor((Math.random()*100) + 1));
	}
	
	/*$('.btn').click(function(){
        let val = $(this).attr("number");
        $(this).parent().find(".counter").text(".counter"[val]++);
    });  



    */

$(".btn").click(function() {
    	let el = parseInt($(".counter").text());
    	$(".counter").text((el+1));
    })
	

	

});
