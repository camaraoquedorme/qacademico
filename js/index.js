function mostrarSenha(check) {

  const type = check.checked ? "text" : "password";

  $("#txtSenha").attr("type", type);
}