let ipContainer = document.getElementById('iphone-pixel-compare')
ipContainer.onclick = () => {
	window.location.href = "iphone-pixel.html";
}

let searchTxt = document.getElementById('search-box').value
//let arr = []

function searchIt(){
	let searchTxt = document.getElementById('search-box').value
	let mobName = document.querySelectorAll('.names')
	let element;
	let counter = 0;

	for(element of mobName)
	{
		
if(element.innerText.includes(searchTxt))
{
element.parentElement.style.backgroundColor = "limegreen"
element.scrollIntoView()
}
	}	
}
