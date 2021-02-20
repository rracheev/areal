const buttonRequest=document.getElementById('buttonRequest');
const secretText=document.getElementById('secret-text');
const pass=document.getElementById('pass');
async function postPass(){
    let text = {
        password:pass.value
      };
    let options = {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(text)
    };  
    let response = await fetch('/verify', options);
    return await response.json();
}
async function getData(){
    let data = await postPass();
    secretText.value=data.text
}
buttonRequest.addEventListener('click',getData)