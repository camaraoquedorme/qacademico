// elemento que mostra o texto
const messageElement = document.querySelector("#message");

// guarda o texto que está escrito no elemento
const defaultMessage = messageElement.textContent;

// array de mensagens a serem exibidas
const messageList = [
  "Todas as mensagens enviadas a você centralizadas num único local de fácil acesso.",
  "Responda a questionários diversos disponibilizados por sua instituição aonde quer que você esteja.",
  "Faça sua matrícula com facilidade escolhendo sua preferência de turmas onde gostaria de estudar neste período letivo.",
  "Tire todas as suas dúvidas enviando-as a seu professor ou consultando dúvidas já respondidas.",
  "Altere sua senha com frequência para reforçar ainda mais a segurança das suas informações.",
  "Há erros em seu cadastro? Alguns dados mudaram, como seu telefone ou endereço? Envie uma solicitação de alteração.",
  "Consulte todas suas notas e faltas em qualquer lugar, a qualquer momento.",
  "Seu histórico escolar disponível para conferência.",
  "Datas de provas, trabalhos e exercícios de cada disciplina.",
  "Confira o horório de suas aulas no período.",
  "Todas as datas do que acontece na sua instituição, no seu curso e na sua turma estão disponíveis para visualização em um único calendário.",
  "Conheça todos os componentes curriculares da matriz curricular de seu curso.",
  "Consulte o acervo, façaa uma reserva... A biblioteca da instituição está a sua disposição.",
  "Verifique se há ofertas de estágios para o seu curso.",
  "Acesse os materiais disponibilizados por seus professores para download."
];

// array de icones
const icons = document.querySelectorAll(".icon");

// percorre o array de icones
icons.forEach(function (icon, index) {

  // adicona o evento de "entrar em cima do ícone"
  icon.addEventListener("pointerover", function () {

    // mostra a mensagem que corresponde ao index do icone
    messageElement.textContent = messageList[index];
  });

  // adicona o evento de "sair de cima do ícone"
  icon.addEventListener("pointerout", function () {

    // mostra a mensagem default
    messageElement.textContent = defaultMessage;
  });
});