// seleciona o input de senha
const txtSenha = $("#txtSenha");

// adicona evento de onchange no checkbox
$("#showSenha").on("change", function (e) {

  const type = e.target.checked ? "text" : "password";

  // troca o type do input da senha
  txtSenha.attr("type", type);
});