let show = document.getElementById('password');

function generate(){
    let len = document.getElementById('input').value;
    let  password = Math.random().toString(36).slice(-len);
    show.textContent = password;
}