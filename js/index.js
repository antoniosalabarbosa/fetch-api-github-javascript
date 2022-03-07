const inp_name_user = document.querySelector("input#inp_name_user");
const btnFetch = document.querySelector("button#btnFetch");

const load = document.querySelector("div.load");

const result = document.querySelector("div#result");

function viewInformations({name, login, bio, html_url, avatar_url}){
    result.innerHTML = `
    <div class="r_text">
        <strong>${name}</strong>
        <span>${login}</span>
        <p>${bio}</p>
        <a href="${html_url}" target="_blank">${html_url}</a>
    </div>

    <div class="r_avatar">
        <img src="${avatar_url}" alt="#">
    </div>`;
    load.classList.add("inativo");
    result.classList.remove("inativo");
}

function fetchUser(username){
    const api = fetch(`https://api.github.com/users/${username}`);
    api.then(response=> response.json())
    .then((json)=>{
        viewInformations(json);
        return json;
    })
    .catch((error)=>{ 
        console.log(error);
        return error; 
    });
}
btnFetch.addEventListener("click", ()=>{
    if(inp_name_user.value){
        result.classList.add("inativo");
        load.classList.remove("inativo");
        fetchUser(inp_name_user.value);
    }
    else{
        alert("Erro");
    }
});