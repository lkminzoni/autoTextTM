const textEl = document.querySelector('#text');
const speedEl = document.querySelector('#speed');
const text = 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Maecenas quis vulputate lectus. Fusce congue, velit quis scelerisque vehicula, neque nulla porta augue, eu sagittis sapien lacus porta justo.'
let idx = 1;
let speed= 300 / speedEl.value

writeText()

function writeText(){
    textEl.innerText = text.slice(0, idx)
    idx++
    if(idx > text.length){
        idx = 1
    }

    setTimeout(writeText,speed)
}

speedEl.addEventListener('input', (e) => speed = 300 / e.target.value)