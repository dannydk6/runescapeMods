document.addEventListener('DOMContentLoaded', main);


function main(evt){

	const btn = document.querySelector(".submitBtn");
	btn.addEventListener('click', onClick);
}

function onClick(evt){

	evt.preventDefault();
	const runite = +document.querySelector("#runite").value;
	const coal = +document.querySelector("#coal").value;
	const nature = +document.querySelector("#nature").value;
	const runebar = +document.querySelector("#runebar").value;
	const bars = +document.querySelector("#bars").value;

	const profit = runebar - (runite + 8*coal + nature);
	const total = profit*bars;

	 if(profit < 0){
	 	document.querySelector(".output").textContent = "Profit/Bar: " + profit;
	 	document.querySelector(".output2").textContent = "Total: " + total;
	 	document.querySelector(".output").classList.add("red");
	 	document.querySelector(".output2").classList.add("red");
	 	document.querySelector(".output2").classList.remove("green");
	 	document.querySelector(".output").classList.remove("green");
	 }else{
	 	document.querySelector(".output").textContent = "Profit/Bar: +" + profit;
	 	document.querySelector(".output2").textContent = "Total: +" + total;
	 	document.querySelector(".output2").classList.add("green");
	 	document.querySelector(".output").classList.add("green");
	 	document.querySelector(".output").classList.remove("red");
	 	document.querySelector(".output2").classList.remove("red");
	 }
	 if(document.querySelector(".hidden") !== null){
		document.querySelector(".hidden").classList.remove("hidden");
	 }
	 
	
}