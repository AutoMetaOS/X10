console.log(1);

let rows = [...document.querySelectorAll('tr')].map(e=>e.childNodes[3]);

console.log(2);

rows.shift();

console.log(rows);

const len = rows.length; 
for(i=0;i<len;i++){
	const el = rows[i];
	const tx = el.innerText;
	el.innerHTML= `<a href="https://exam-schedule-bits.firebaseapp.com/?id=${tx}">${tx}&rarr;</a>`;
};

console.log(3);