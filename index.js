function setName()
{
    var name = document.getElementById('name')
    document.cookie = `login=${name.value};`
    document.cookie =  'expires=Wed, 31 Dec 2025 23:59:00 GMT;'
    console.log(name.value)
    getName()
}
function getName()
{
    out = document.getElementById('output')
    const cookies = document.cookie.split(";");
    var username = ' ';
    console.log(document.cookie)
    console.log(cookies)
    for(cookie of cookies){
    
        const parts = cookie.split("=");
        if (parts[0]=='login'){
            username = parts[1];
        }
    }
    out.innerHTML = 'Привет, ' + username;
}
getName()