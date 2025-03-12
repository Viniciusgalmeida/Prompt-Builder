// Funções permanecem iguais exceto a insertText
function adjustHeight(textarea) {
  textarea.style.height = "auto";
  textarea.style.height = textarea.scrollHeight + "px";
}

function copyToClipboard() {
  const textareas = document.querySelectorAll(".global-container textarea");
  const texts = Array.from(textareas)
    .map((textarea) => textarea.value.trim()) // Remove espaços extras
    .filter((text) => text.length > 0) // Remove campos vazios
    .join("\n\n"); // Junta com espaçamento entre prompts

  if (texts.length === 0) {
    alert("Não há nada para copiar!");
    return;
  }

  navigator.clipboard
    .writeText(texts)
    .then(() => {
      showNotification();
    })
    .catch((err) => {
      console.error("Erro ao copiar: ", err);
    });
}

function showNotification() {
  const notification = document.getElementById("notification");
  notification.style.display = "block";
  setTimeout(() => {
    notification.style.display = "none";
  }, 2000);
}

function clearField(id) {
  document.getElementById(id).value = "";
}

function clearAllFields() {
  document.getElementById("prompt1").value = "Instrução: ";
  document.getElementById("prompt2").value = "Formato da resposta: ";
  document.getElementById("prompt3").value = "Atenção: ";
  document.getElementById("prompt4").value = "Contexto: ";
}

// Função modificada para adicionar texto ao final
function insertText(id, text) {
  const textarea = document.getElementById(id);
  // Adiciona quebra de linha se já houver conteúdo
  if (textarea.value) {
    textarea.value += "\n" + text;
  } else {
    textarea.value = text;
  }
  adjustHeight(textarea);
}

// FUNÇÃO POP-UP 1
function openPopup1() {
  document.getElementById("popup1").style.display = "flex";
}

function closePopup1() {
  document.getElementById("popup1").style.display = "none";
}

// FUNÇÃO POP-UP 2
function openPopup2() {
  document.getElementById("popup2").style.display = "flex";
}

function closePopup2() {
  document.getElementById("popup2").style.display = "none";
}

// FUNÇÃO POP-UP 3
function openPopup3() {
  document.getElementById("popup3").style.display = "flex";
}

function closePopup3() {
  document.getElementById("popup3").style.display = "none";
}

// FUNÇÃO POP-UP 4
function openPopup4() {
  document.getElementById("popup4").style.display = "flex";
}

function closePopup4() {
  document.getElementById("popup4").style.display = "none";
}

// Fechar pop-up ao clicar fora do conteúdo ou pressionar "Esc"
document.addEventListener("click", function (event) {
  ["popup1", "popup2", "popup3", "popup4"].forEach((id) => {
    let popup = document.getElementById(id);
    if (event.target === popup) {
      popup.style.display = "none";
    }
  });
});

document.addEventListener("keydown", function (event) {
  if (event.key === "Escape") {
    ["popup1", "popup2", "popup3", "popup4"].forEach((id) => {
      document.getElementById(id).style.display = "none";
    });
  }
});

// CONTADOR DE CARACTERES -------------------------------------

function updateCharCount() {
  let totalChars = 0;
  document.querySelectorAll("textarea").forEach((textarea) => {
    totalChars += textarea.value.trim().length;
  });
  document.getElementById(
    "char-counter"
  ).innerText = `Caracteres: ${totalChars}`;
}

document.addEventListener("DOMContentLoaded", () => {
  document.querySelectorAll("textarea").forEach((textarea) => {
    textarea.addEventListener("input", updateCharCount);
  });

  document.querySelectorAll("select").forEach((select) => {
    select.addEventListener("change", () => {
      setTimeout(updateCharCount, 0);
    });
  });

  updateCharCount();
});

function clearField(textareaId) {
  document.getElementById(textareaId).value = "";
  updateCharCount(); // Atualiza o contador após limpar
}

