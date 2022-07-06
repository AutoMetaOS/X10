const url = window.location.href;
const getURL = (url)=> url.replace('arxiv.org','ar5iv.org');

if(url.includes('.pdf')) {
	console.log('redirecting');
	window.location.href = getURL(url);
}