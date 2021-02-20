const buttonRequest=document.getElementById('buttonRequest');
const buttonDelete=document.getElementById('buttonDelete');
const secretText=document.getElementById('secret-text');
const pass=document.getElementById('pass');
const contentPass =document.getElementById('content-pass');
const contentText=document.getElementById('content-text');
const out=document.getElementById('outputTnx');

async function postPass(){
    let text = {
        password:pass.value
      };
    let options = {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(text)
    };
    let res= await fetch('/verify', options).then((response) => {
        if (response.status >= 400 && response.status < 600) {
          throw "Smth Wrong";
        }
        return response;
    })
    return res.json();
}
async function getData(){
    await postPass().then(function(data){
        secretText.value=data.text;
        contentText.classList.toggle('hidden');
        contentPass.classList.toggle('hidden');
    }).catch(function(){
        alert('Неверная ссылка или пароль!');
    });
}
async function deleteData(){
    let text = {
        password:pass.value
      };
    let options = {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(text)
    };
    await fetch('/delete', options).then((response) => {
        if (response.status >= 400 && response.status < 600) {
          throw "Smth Wrong";
        }
        out.value="Данные удалены!"
        contentText.classList.toggle('hidden');
    }).catch(function(){
        out.value="Ошибка доступа!"
    })
}
buttonRequest.addEventListener('click',getData);
buttonDelete.addEventListener('click',deleteData);