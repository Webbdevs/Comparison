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
		let arr = element.innerText.split('')
		//arr.push(element.innerHTML)
		//console.log(arr)
		for(let i = 0; i < arr.length; i++)
		{
			//console.log(element)
		//	counter++;
			//console.log(arr[i])
				//		console.log(arr[i][counter])
			if(arr[i]==searchTxt)
			{			
			element.scrollIntoView()
			element.parentElement.style.backgroundColor = "limegreen"
			console.log(arr[i])
			}
		}
	}	
}
