async function getPass() {
    let options = {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: undefined
    };
    let promise = await fetch('/getpass', options)
    let d=await promise.json();
    console.log(d);
    return d;
};
window.onload = getPass();
document.getElementById('formMain').onsubmit = ()=>{
    if(document.getElementById('pass1').value != document.getElementById('pass2').value){
        alert('Пароли не одинаковы');
        return false;
    }
    return true;
}
