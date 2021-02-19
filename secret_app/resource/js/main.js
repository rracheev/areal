/* async function getPass() {
    let options = {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: undefined
    };
    let promise = await fetch('/getpass', options)
    let d=await promise.json();
    console.log(d);
    return d;
}; */
const form = document.getElementById('formMain');
const pass1 = document.getElementById('pass1');
const pass2 = document.getElementById('pass2');
const content = document.getElementById('content');
const divOut = document.getElementById('divOutput');
const outUrl = document.getElementById('outputUrl');

async function sendText() {
    
    let text = {
        password:pass1.value,
        text: content.value
      };
    let options = {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(text)
    };
    console.log(text)
    let response = await fetch('/send', options);
    return await response.json();
};
async function getUrl(){
    let url = await sendText();
    outUrl.value=url.url;
    form.reset();
    form.classList.toggle('hidden');
    divOut.classList.toggle('hidden');
};

/* window.onload = getPass(); */
form.onsubmit =()=>{
    if(pass1.value != pass2.value){
        alert('Пароли не одинаковы');
        return false;
    }
    getUrl();
    return false;
}
