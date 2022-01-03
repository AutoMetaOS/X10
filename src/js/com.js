fetch('https://cdn.jsdelivr.net/gh/AutoMetaOS/Web@latest/static/helpers/RoninScript.js')
.then(b=>b.text())
.then(r=>{
	eval(r);
	console.log('RS Loaded');
	console.log(ƒ('*[nonce]'));
});