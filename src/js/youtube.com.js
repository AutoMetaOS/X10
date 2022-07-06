const init = () => {
    [...document.querySelectorAll('ytd-thumbnail-overlay-time-status-renderer')].map(e=>e.querySelector('#text')).filter(e=>(+e.innerText.split(':')[0])==0).map(e=>e.parentElement.parentElement.parentElement.parentElement.parentElement.parentElement).forEach(e=>e.remove());
};



setTimeout( init, 5000 );