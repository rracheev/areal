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
    return response.json();
}
async function getData(){
    await postPass().then(function(data){
        secretText.value=data.text
    }).catch(
        function(){
            secretText.value="Ошибка!   "
        }
    );
}
buttonRequest.addEventListener('click',getData)