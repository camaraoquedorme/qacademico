// elemento que mostra o text
const messageElement = document.querySelector("#message");

// guarda o texto que está escrito no elemento
const defaultMessage = messageElement.textContent;

function mountColIcon(name, message) {

  const colIcon = $(`
    <div class="col-3 col-sm-3 col-md-2 p-3 p-sm-2 p-md-2 p-lg-3 icon">
      <img src="./img/icones/${name}" alt="${message}" class="img-fluid">
    </div>
  `);

  colIcon.on("pointerover", () => {
    messageElement.textContent = message;
  });

  colIcon.on("pointerout", () => {
    messageElement.textContent = defaultMessage;
  });

  return colIcon;
}

$.getJSON("./js/icons.json", (json) => {

  console.log(json.icons);

  const anchor = $("#icons").children();

  for (const icon of json.icons) {

    const colIcon = mountColIcon(icon.name, icon.message);

    anchor.before(colIcon);
  }
})