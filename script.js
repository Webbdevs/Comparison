let ipContainer = document.getElementById('iphone-pixel-compare')
ipContainer.onclick = () => {
	window.location.href = "iphone-pixel.html";
}
function searchIt(){
	let searchTxt = document.getElementById('search-box').value
	let mobName = document.querySelectorAll('.names')
	let element;
	/*if(searchTxt=="Iphone" || searchTxt=="Pixel")
	{
		document.getElementById('iphone-pixel-compare').style.backgroundColor = "yellow"
		//window.location.href = "iphone-pixel.html"
	}*/
	for(element of mobName)
	{
		if(searchTxt==element.innerText)
		{
			element.parentElement.style.backgroundColor = "limegreen"
	//	console.log(searchTxt)
		}
	}
}
	
