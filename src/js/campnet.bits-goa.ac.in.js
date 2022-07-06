console.log(420);
window.onload = setInterval(()=>{
	console.log(1);
	if(document.querySelector('#credentials').classList.includes('loggedin'))
		console.log(2)
	else 
		console.log(2);
}, 1e3);