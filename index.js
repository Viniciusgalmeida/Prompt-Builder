// Funções permanecem iguais exceto a insertText
function adjustHeight(textarea) {
  textarea.style.height = "auto";
  textarea.style.height = textarea.scrollHeight + "px";
}

function copyToClipboard() {
  const defaultKeys = {
    promptRole: 'default_papel_ia',
    prompt1: 'default_instrucao',
    prompt2: 'default_formato',
    prompt3: 'default_atencao',
    prompt4: 'default_contexto',
  };

  const textareas = document.querySelectorAll(".global-container textarea");
  const texts = Array.from(textareas)
    .filter((textarea) => {
      const val = textarea.value.trim();
      if (!val) return false;
      const defaultVal = getTranslation(defaultKeys[textarea.id] || '').trim();
      return val !== defaultVal;
    })
    .map((textarea) => textarea.value.trim())
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
  document.getElementById("promptRole").value = getTranslation('default_papel_ia');
  document.getElementById("prompt1").value = getTranslation('default_instrucao');
  document.getElementById("prompt2").value = getTranslation('default_formato');
  document.getElementById("prompt3").value = getTranslation('default_atencao');
  document.getElementById("prompt4").value = getTranslation('default_contexto');
  updateCharCount();
}

// Função modificada para adicionar texto ao final
function insertText(id, text) {
  const textarea = document.getElementById(id);
  const select = event.target; // Captura o select que acionou a função

  // Get the translated text based on the selected option
  let translatedText = text;
  
  // Map the original Portuguese values to translation keys
  const valueToKeyMap = {
    // Prompt 1 (Instrução) mappings
    'Agora você é um especialista em ': 'especialista_geral',
    'Agora você é um especialista em programação. ': 'especialista_programacao',
    'Deixe este código mais limpo e rápido. ': 'codigo_limpo',
    'Me explique este código.': 'explicar_codigo',
    'Aguarde pois irei fazer várias perguntas sobre ': 'varias_perguntas',
    'Quais são as diferenças entre ': 'diferencas',
    'Quais são os prós e contras? ': 'pros_contras',
    
    // Prompt 2 (Formato da resposta) mappings
    'Responda em tópicos tipo bullet points. ': 'topicos',
    'Explique com um passo a passo. ': 'passo_a_passo',
    'Retorne uma tabela. ': 'tabela',
    'Retorne um arquivo .xlsx. ': 'arquivo_xlsx',
    'Retorne apenas o código. ': 'apenas_codigo',
    'Responda em português brasileiro': 'portugues_brasileiro',
    'Responda como se você estivesse respondendo uma criança de 10 anos. ': 'crianca_10_anos',
    'Responda com uma To-Do list pois irei copiar e colar no notion ': 'todo_list',
    
    // Prompt 3 (Atenção) mappings
    'Realce em negrito as partes  importantes da sua resposta. ': 'realce_negrito',
    'Realce com ` ` as partes mais importantes da sua resposta. ': 'realce_crase',
    'Caso necessite de mais informações não responda ainda e me pergunte o que precisa. ': 'mais_informacoes',
    'Responda resumidamente. ': 'resumidamente',
    'Me explique detalhadamente. ': 'detalhadamente',
    'Me dê as fontes da sua resposta. ': 'fontes',
    'A partir de agora, não afirme automaticamente que minhas ideias estão certas. Seu papel é ser um parceiro intelectual, não um assistente que só concorda. Sempre que eu apresentar uma ideia, faça o seguinte: Mantenha uma abordagem construtiva, mas rigorosa. Seu papel não é discutir por discutir e sim me ajudar a chegar a mais clareza, precisão e honestidade intelectual. ': 'nao_bajule_full',
    'No final da sua resposta faça um resumo. ': 'resumo_final',
    
    // Prompt 4 (Contexto) mappings
    'Estou estudando sobre o assunto. ': 'estudando',
    'Tenho conhecimento INTERMEDIÁRIO no assunto. ': 'conhecimento_intermediario',
    'Tenho conhecimento AVANÇADO no assunto. ': 'conhecimento_avancado',
    'Estou escrevendo um artigo científico. ': 'artigo_cientifico',
    'Estou escrevendo um post para o linkedin. ': 'post_linkedin'
  };
  
  // Get the translation key for this value
  const translationKey = valueToKeyMap[text];
  if (translationKey) {
    translatedText = getTranslation(translationKey);
  }

  // Adiciona quebra de linha se já houver conteúdo
  if (textarea.value) {
    textarea.value += "\n" + translatedText + " ";
  } else {
    textarea.value = translatedText + " ";
  }

  adjustHeight(textarea);

  // Retorna o select para a primeira opção e posiciona o cursor no textarea
  setTimeout(() => {
    select.selectedIndex = 0;
    textarea.focus();
    textarea.setSelectionRange(textarea.value.length, textarea.value.length);
  }, 1);
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

// FUNÇÃO POP-UP PAPEL DA IA
function openPopupRole() {
  document.getElementById("popupRole").style.display = "flex";
}

function closePopupRole() {
  document.getElementById("popupRole").style.display = "none";
}

// Fechar pop-up ao clicar fora do conteúdo ou pressionar "Esc"
document.addEventListener("click", function (event) {
  ["popupRole", "popup1", "popup2", "popup3", "popup4"].forEach((id) => {
    let popup = document.getElementById(id);
    if (event.target === popup) {
      popup.style.display = "none";
    }
  });
});

document.addEventListener("keydown", function (event) {
  if (event.key === "Escape") {
    ["popupRole", "popup1", "popup2", "popup3", "popup4"].forEach((id) => {
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
  ).innerText = `${getTranslation('caracteres')} ${totalChars}`;
}

// Update select options for all dropdowns
function updateSelectOptions() {
  // Papel da IA select options
  const selectRole = document.querySelector('select[onchange="insertText(\'promptRole\', this.value)"]');
  if (selectRole) {
    selectRole.options[0].text = getTranslation('direcionamentos_ia');
    selectRole.options[1].text = getTranslation('especialista_geral');
    selectRole.options[2].text = getTranslation('especialista_programacao');
  }

  // Prompt 1 (Instrução) select options
  const select1 = document.querySelector('select[onchange="insertText(\'prompt1\', this.value)"]');
  if (select1) {
    select1.options[0].text = getTranslation('direcionamentos_ia');
    select1.options[1].text = getTranslation('varias_perguntas');
    select1.options[2].text = getTranslation('codigo_limpo');
    select1.options[3].text = getTranslation('explicar_codigo');
    select1.options[4].text = getTranslation('diferencas');
    select1.options[5].text = getTranslation('pros_contras');

    const paretoPromptPt = document.getElementById('pareto-prompt-pt');
    const paretoPromptEn = document.getElementById('pareto-prompt-en');

    if (currentLanguage === 'en') {
      if (paretoPromptPt) paretoPromptPt.style.display = 'none';
      if (paretoPromptEn) paretoPromptEn.style.display = 'block';
    } else {
      if (paretoPromptPt) paretoPromptPt.style.display = 'block';
      if (paretoPromptEn) paretoPromptEn.style.display = 'none';
    }
  }
  
  // Prompt 2 (Formato da resposta) select options
  const select2 = document.querySelector('select[onchange="insertText(\'prompt2\', this.value)"]');
  if (select2) {
    select2.options[0].text = getTranslation('direcionamentos_ia');
    select2.options[1].text = getTranslation('topicos');
    select2.options[2].text = getTranslation('passo_a_passo');
    select2.options[3].text = getTranslation('tabela');
    select2.options[4].text = getTranslation('arquivo_xlsx');
    select2.options[5].text = getTranslation('apenas_codigo');
    select2.options[6].text = getTranslation('portugues_brasileiro');
    select2.options[7].text = getTranslation('crianca_10_anos');
    select2.options[8].text = getTranslation('todo_list');
  }
  
  // Prompt 3 (Atenção) select options
  const select3 = document.querySelector('select[onchange="insertText(\'prompt3\', this.value)"]');
  if (select3) {
    select3.options[0].text = getTranslation('direcionamentos_ia');
    select3.options[1].text = getTranslation('realce_negrito');
    select3.options[2].text = getTranslation('realce_crase');
    select3.options[3].text = getTranslation('mais_informacoes');
    select3.options[4].text = getTranslation('resumidamente');
    select3.options[5].text = getTranslation('detalhadamente');
    select3.options[6].text = getTranslation('fontes');
    select3.options[7].text = getTranslation('nao_bajule');
    select3.options[8].text = getTranslation('resumo_final');
  }
  
  // Prompt 4 (Contexto) select options
  const select4 = document.querySelector('select[onchange="insertText(\'prompt4\', this.value)"]');
  if (select4) {
    select4.options[0].text = getTranslation('direcionamentos_ia');
    select4.options[1].text = getTranslation('estudando');
    select4.options[2].text = getTranslation('conhecimento_intermediario');
    select4.options[3].text = getTranslation('conhecimento_avancado');
    select4.options[4].text = getTranslation('artigo_cientifico');
    select4.options[5].text = getTranslation('post_linkedin');
  }
}

// Update popup content
function updatePopupContent() {
  const popupRole = document.getElementById('popupRole');
  const popup1 = document.getElementById('popup1');
  const popup2 = document.getElementById('popup2');
  const popup3 = document.getElementById('popup3');
  const popup4 = document.getElementById('popup4');

  if (popupRole) {
    popupRole.querySelector('p').textContent = getTranslation('popup_papel_ia');
  }
  if (popup1) {
    popup1.querySelector('p').textContent = getTranslation('popup_instrucao');
  }
  if (popup2) {
    popup2.querySelector('p').textContent = getTranslation('popup_formato');
  }
  if (popup3) {
    popup3.querySelector('p').textContent = getTranslation('popup_atencao');
  }
  if (popup4) {
    popup4.querySelector('p').textContent = getTranslation('popup_contexto');
  }
}

// Update textarea default values
function updateTextareaDefaults() {
  const promptRole = document.getElementById('promptRole');
  const prompt1 = document.getElementById('prompt1');
  const prompt2 = document.getElementById('prompt2');
  const prompt3 = document.getElementById('prompt3');
  const prompt4 = document.getElementById('prompt4');
  
  // Only update if the textarea has the default value or is empty
  if (promptRole && (promptRole.value === 'Papel da IA: ' || promptRole.value === 'AI Role: ' || promptRole.value === '')) {
    promptRole.value = getTranslation('default_papel_ia');
  }
  if (prompt1 && (prompt1.value === 'Instrução: ' || prompt1.value === 'Instruction: ' || prompt1.value === '')) {
    prompt1.value = getTranslation('default_instrucao');
  }
  if (prompt2 && (prompt2.value === 'Formato da resposta: ' || prompt2.value === 'Response format: ' || prompt2.value === '')) {
    prompt2.value = getTranslation('default_formato');
  }
  if (prompt3 && (prompt3.value === 'Atenção: ' || prompt3.value === 'Attention: ' || prompt3.value === '')) {
    prompt3.value = getTranslation('default_atencao');
  }
  if (prompt4 && (prompt4.value === 'Contexto: ' || prompt4.value === 'Context: ' || prompt4.value === '')) {
    prompt4.value = getTranslation('default_contexto');
  }
}

document.addEventListener("DOMContentLoaded", () => {
  // Load saved language preference
  const savedLanguage = localStorage.getItem('language');
  if (savedLanguage) {
    currentLanguage = savedLanguage;
    updateLanguage();
    translatePage();
  }

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

// Translation functionality
let currentLanguage = 'pt-BR';

// Translation mapping object
const translations = {
  'pt-BR': {
    // Labels
    'papel_ia': 'Papel da IA:',
    'instrucao': 'Instrução:',
    'formato_resposta': 'Formato da resposta:',
    'atencao': 'Atenção:',
    'contexto': 'Contexto:',
    
    // Buttons
    'apaga_tudo': 'Apaga Tudo',
    'copia_tudo': 'Copia Tudo',
    'caracteres': 'Caracteres:',
    
    // Section headers
    'links_ias': 'Links para IAs',
    'meus_links': 'Meus links',
    
    // Select options - Instrução
    'direcionamentos_ia': 'Direcionamentos para IA',
    'especialista_geral': 'Agora você é um especialista em ',
    'especialista_programacao': 'Agora você é um especialista em programação.',
    'codigo_limpo': 'Deixe este código mais limpo e rápido.',
    'explicar_codigo': 'Me explique este código.',
    'varias_perguntas': 'Aguarde pois irei fazer várias perguntas sobre ',
    'diferencas': 'Quais são as diferenças entre ',
    'pros_contras': 'Quais são os prós e contras?',
    'pareto_prompt': 'Aplique a regra de Pareto nestes conteúdos...',
    
    // Select options - Formato da resposta
    'topicos': 'Responda em tópicos',
    'passo_a_passo': 'Explique com um passo a passo.',
    'tabela': 'Retorne uma tabela',
    'arquivo_xlsx': 'Retorne um arquivo .xlsx',
    'apenas_codigo': 'Retorne apenas o código',
    'portugues_brasileiro': 'Responda em português brasileiro',
    'crianca_10_anos': 'Resposta para uma criança de 10 anos',
    'todo_list': 'Responda com uma To-Do list pois irei copiar e colar no notion.',
    
    // Select options - Atenção
    'realce_negrito': 'Realce em negrito as partes importantes da sua resposta.',
    'realce_crase': 'Realce com ` ` (crase) as partes mais importantes da sua resposta.',
    'mais_informacoes': 'Caso necessite de mais informações não responda ainda e me pergunte o que precisa.',
    'resumidamente': 'Responda resumidamente',
    'detalhadamente': 'Me explique detalhadamente.',
    'fontes': 'Me dê as fontes da sua resposta.',
    'nao_bajule': 'Não me bajule.',
    'nao_bajule_full': 'A partir de agora, não afirme automaticamente que minhas ideias estão certas. Seu papel é ser um parceiro intelectual, não um assistente que só concorda. Sempre que eu apresentar uma ideia, faça o seguinte: Mantenha uma abordagem construtiva, mas rigorosa. Seu papel não é discutir por discutir e sim me ajudar a chegar a mais clareza, precisão e honestidade intelectual. ',
    'resumo_final': 'No final da sua resposta faça um resumo.',
    
    // Select options - Contexto
    'estudando': 'Estou estudando sobre o assunto.',
    'conhecimento_intermediario': 'Tenho conhecimento INTERMEDIÁRIO no assunto.',
    'conhecimento_avancado': 'Tenho conhecimento AVANÇADO no assunto.',
    'artigo_cientifico': 'Estou escrevendo um artigo científico.',
    'post_linkedin': 'Estou escrevendo um post para o linkedin.',
    
    // Popup content
    'popup_papel_ia': 'Defina o papel que a IA deve assumir antes de responder.\n\nExemplo:\n"Agora você é um especialista em nutrição. Crie uma receita variada e saudável para o café da manhã durante a semana."',
    'popup_instrucao': 'Dê uma instrução direta à IA sobre o que ela deve fazer.\n\nExemplos:\n"Me explique este código."\n"Deixe este código mais limpo e rápido."',
    'popup_formato': 'Defina um formato para a IA te responder. Pode ser uma resposta resumida, tabela, lista com bullet points, etc...\n\nExemplo:\n"Responda em formato de tabela."',
    'popup_atencao': 'Estabeleça critérios para a IA.\n\nExemplo:\n"Marque em negrito as partes mais importantes da sua resposta."',
    'popup_contexto': 'Dê o contexto para que a IA possa responder de forma mais precisa.\n\nExemplo:\n"Estou escrevendo um artigo científico."',
    
    // Default textarea values
    'default_papel_ia': 'Papel da IA: ',
    'default_instrucao': 'Instrução: ',
    'default_formato': 'Formato da resposta: ',
    'default_atencao': 'Atenção: ',
    'default_contexto': 'Contexto: '
  },
  
  'en': {
    // Labels
    'papel_ia': 'AI Role:',
    'instrucao': 'Instruction:',
    'formato_resposta': 'Response format:',
    'atencao': 'Attention:',
    'contexto': 'Context:',
    
    // Buttons
    'apaga_tudo': 'Clear All',
    'copia_tudo': 'Copy All',
    'caracteres': 'Characters:',
    
    // Section headers
    'links_ias': 'AI Links',
    'meus_links': 'My Links',
    
    // Select options - Instruction
    'direcionamentos_ia': 'AI Directions',
    'especialista_geral': 'Now you are an expert in ',
    'especialista_programacao': 'Now you are an expert in programming.',
    'codigo_limpo': 'Make this code cleaner and faster.',
    'explicar_codigo': 'Explain this code to me.',
    'varias_perguntas': 'Wait as I will ask several questions about ',
    'diferencas': 'What are the differences between ',
    'pros_contras': 'What are the pros and cons?',
    'pareto_prompt': 'Apply the Pareto principle to this content...',
    
    // Select options - Response format
    'topicos': 'Answer in bullet points',
    'passo_a_passo': 'Explain step by step.',
    'tabela': 'Return a table',
    'arquivo_xlsx': 'Return an .xlsx file',
    'apenas_codigo': 'Return only the code',
    'portugues_brasileiro': 'Answer in Brazilian Portuguese',
    'crianca_10_anos': 'Answer as if explaining to a 10-year-old child',
    'todo_list': 'Answer with a To-Do list as I will copy and paste it into Notion.',
    
    // Select options - Attention
    'realce_negrito': 'Highlight important parts of your response in bold.',
    'realce_crase': 'Highlight the most important parts of your response with ` ` (backticks).',
    'mais_informacoes': 'If you need more information, don\'t answer yet and ask me what you need.',
    'resumidamente': 'Answer briefly',
    'detalhadamente': 'Explain to me in detail.',
    'fontes': 'Give me the sources of your response.',
    'nao_bajule': 'Don\'t flatter me.',
    'nao_bajule_full': 'From now on, do not automatically affirm that my ideas are correct. Your role is to be an intellectual partner, not an assistant who only agrees. Whenever I present an idea, do the following: Maintain a constructive but rigorous approach. Your role is not to argue for the sake of arguing, but to help me achieve more clarity, precision, and intellectual honesty. ',
    'resumo_final': 'At the end of your response, make a summary.',
    
    // Select options - Context
    'estudando': 'I\'m studying about the subject.',
    'conhecimento_intermediario': 'I have INTERMEDIATE knowledge of the subject.',
    'conhecimento_avancado': 'I have ADVANCED knowledge of the subject.',
    'artigo_cientifico': 'I\'m writing a scientific article.',
    'post_linkedin': 'I\'m writing a LinkedIn post.',
    
    // Popup content
    'popup_papel_ia': 'Define the role the AI should take before responding.\n\nExample:\n"Now you are a nutrition expert. Create a varied and healthy breakfast recipe for the week."',
    'popup_instrucao': 'Give the AI a direct instruction about what it should do.\n\nExamples:\n"Explain this code to me."\n"Make this code cleaner and faster."',
    'popup_formato': 'Define a format for the AI to respond to you. It can be a brief response, table, bullet point list, etc...\n\nExample:\n"Answer in table format."',
    'popup_atencao': 'Establish criteria for the AI.\n\nExample:\n"Mark the most important parts of your response in bold."',
    'popup_contexto': 'Give the context so the AI can respond more accurately.\n\nExample:\n"I\'m writing a scientific article."',
    
    // Default textarea values
    'default_papel_ia': 'AI Role: ',
    'default_instrucao': 'Instruction: ',
    'default_formato': 'Response format: ',
    'default_atencao': 'Attention: ',
    'default_contexto': 'Context: '
  }
};

function toggleLanguage() {
  currentLanguage = currentLanguage === 'pt-BR' ? 'en' : 'pt-BR';
  updateLanguage();
  translatePage();
  localStorage.setItem('language', currentLanguage);
}

// Helper function to get translation
function getTranslation(key) {
  return translations[currentLanguage][key] || key;
}

// Main translation function to update all page content
function translatePage() {
  // Update labels
  document.querySelector('label[for="promptRole"]').textContent = getTranslation('papel_ia');
  document.querySelector('label[for="prompt1"]').textContent = getTranslation('instrucao');
  document.querySelector('label[for="prompt2"]').textContent = getTranslation('formato_resposta');
  document.querySelector('label[for="prompt3"]').textContent = getTranslation('atencao');
  document.querySelector('label[for="prompt4"]').textContent = getTranslation('contexto');
  
  // Update buttons
  document.querySelector('.clear-all-btn').textContent = getTranslation('apaga_tudo');
  document.querySelector('.copy-all-btn').textContent = getTranslation('copia_tudo');
  
  // Update character counter
  updateCharCount();
  
  // Update section headers
  document.querySelectorAll('h3')[0].textContent = getTranslation('links_ias');
  document.querySelectorAll('h3')[1].textContent = getTranslation('meus_links');
  
  // Update select options
  updateSelectOptions();
  
  // Update popup content
  updatePopupContent();
  
  // Update textarea default values
  updateTextareaDefaults();
}

function updateLanguage() {
  const toggleLabel = document.querySelector('.toggle-label');
  const languageToggle = document.getElementById('languageToggle');
  
  if (currentLanguage === 'en') {
    toggleLabel.textContent = '🇺🇸';
    languageToggle.checked = true;
  } else {
    toggleLabel.textContent = '🇧🇷';
    languageToggle.checked = false;
  }
}
