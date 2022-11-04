const UserElemento = document.querySelector("#content");

async function ConsultaUsers() {
  const retorno = await fetch("http://localhost:3000/cadastros");
  const users = await retorno.json();
  preencheTela(users);
}

function preencheTela(users) {
  users.forEach((user) => {
    const newHTMLUser = `
    <div class="users">
        <h3>${user.name}</h3>
        <p>${user.email}</p>
      </div>`;

    UserElemento.innerHTML = UserElemento.innerHTML + newHTMLUser;
  });
}
ConsultaUsers();
