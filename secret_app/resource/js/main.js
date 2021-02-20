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
    let response = await fetch('/send', options);
    return response.json();
};
async function getUrl(){
    let url = await sendText();
    if(url.url!=undefined){
        outUrl.value=url.url;
        form.reset();
        form.classList.toggle('hidden');
        divOut.classList.toggle('hidden');
    }
    else{
        alert('Возникли проблемы!')
    }
};
form.onsubmit =()=>{
    if(pass1.value != pass2.value){
        alert('Пароли не одинаковы');
        return false;
    }
    getUrl();
    return false;
}
