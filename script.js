let ipContainer = document.getElementById('iphone-pixel-compare')
ipContainer.onclick = () => {
	window.location.href = "iphone-pixel.html";
}
function searchIt(){
	let searchTxt = document.getElementById('search-box').value
	let mobName = document.querySelectorAll('.names')
	let element;
	for(element of mobName)
	{
		if(searchTxt==element.innerText)
		{
			element.scrollIntoView()
			element.parentElement.style.backgroundColor = "limegreen"
		}
	}
}
	
