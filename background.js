/**
 * @param {string} buttonId - O ID do botão a ser clicado.
 */
function findAndClickButtonById(buttonId) {
  function simulateRealClick(element) {
    //if (element.disabled) {
    //  console.log(`Botao desabilitado.`);
    //  return;
    //}
    const mouseDownEvent = new MouseEvent("mousedown", { bubbles: true, cancelable: true, view: window });
    const mouseUpEvent = new MouseEvent("mouseup", { bubbles: true, cancelable: true, view: window });
    element.dispatchEvent(mouseDownEvent);
    element.dispatchEvent(mouseUpEvent);
    element.click();
    console.log(`Ação de clique simulada no botão '${buttonId}'.`);
  }
  const button = document.getElementById(buttonId);
  if (button) {
    simulateRealClick(button);
  } else {
    console.log(`Botão com ID '${buttonId}' não foi encontrado na página.`);
  }
}

function findAndClickButtonByClass(buttonClass, number) {
  function simulateRealClick(element) {
    //if (element.disabled) {
    //  console.log(`Botao desabilitado.`);
    //  return;
    //}
    const mouseDownEvent = new MouseEvent("mousedown", { bubbles: true, cancelable: true, view: window });
    const mouseUpEvent = new MouseEvent("mouseup", { bubbles: true, cancelable: true, view: window });
    element.dispatchEvent(mouseDownEvent);
    element.dispatchEvent(mouseUpEvent);
    element.click();
    //console.log(`Ação de clique simulada no botão '${buttonId}'.`);
  }
  const buttons = document.getElementsByClassName(buttonClass);
  if (buttons.length > 0) {
    simulateRealClick(buttons[number])
  } else {
    //console.log(`Botão com ID '${buttonId}' não foi encontrado na página.`);
  }
}




chrome.commands.onCommand.addListener((command, tab) => {
  if (command === "click_save_button" && !tab.url.includes("Manutencao/OP.ManutencaoCarro.AnaliseOrcamento/AprovacaoOrcamento")) {
    chrome.scripting.executeScript({
      target: { tabId: tab.id },
      func: findAndClickButtonById,
      args: ["btnSalvarMonitoramentoSS"],
    });
  } else if (command === "clear_page" && !tab.url.includes("Manutencao/OP.ManutencaoCarro.AnaliseOrcamento/AprovacaoOrcamento")) {
    chrome.scripting.executeScript({
      target: { tabId: tab.id },
      func: findAndClickButtonById,
      args: ["btnLimpar"],
    });
  } else if (command === "click_save_button") {
    chrome.scripting.executeScript({
      target: { tabId: tab.id },
      func: findAndClickButtonByClass,
      args: ["aprovar-e-continuar", 0],
    });
  } else if (command === "clear_page") {
    var url = 'https://wapps.localiza.com/Manutencao/OP.ManutencaoCarro.AnaliseOrcamento/InicioAprovacaoOrcamento';
    chrome.tabs.update(tab.id, { url: url });

    chrome.scripting.executeScript({
      target: { tabId: tab.id },
      func: executeCustomLogic,
    });
  }
});

chrome.commands.onCommand.addListener(async (command, tab) => {
  if (command === "copy_and_paste_text") {
    chrome.scripting.executeScript({
      target: { tabId: tab.id },
      func: () => {
        const text = document.getElementById("text-descricao-servico").value;
        chrome.runtime.sendMessage({ action: "saveText", text });

        const urlParams = new URLSearchParams(window.location.search);
        const ssNum = urlParams.get('ssNum'); 
        chrome.runtime.sendMessage({ action: "url", ssNum: ssNum, text: text});
        
        console.log("Texto copiado! " + ssNum);
      }
    });
  }
});


chrome.runtime.onMessage.addListener((message, sender, sendResponse) => {
  if (message.action === "url") {
    
    let ss = message.ssNum || "";
    let text = message.text || "";
    chrome.windows.create({
      url: "https://wapps.localiza.com/GestaoFrotasMonitoramento/Operacoes/MonitoramentoFornecedor/MonitoramentoSSAvulsa",
      type: "popup", focused:true, width: 1920, height: 1080 }, function(newWindow) {
        chrome.scripting.executeScript({
          target: { tabId: newWindow.tabs[0].id },
          func: (ssNum, text) => {
          setTimeout(() => {
        
function findAndClickButtonByClass(buttonClass) {
  function simulateRealClick(element) {
    //if (element.disabled) {
    //  console.log(`Botao desabilitado.`);
    //  return;
    //}
    const mouseDownEvent = new MouseEvent("mousedown", { bubbles: true, cancelable: true, view: window });
    const mouseUpEvent = new MouseEvent("mouseup", { bubbles: true, cancelable: true, view: window });
    element.dispatchEvent(mouseDownEvent);
    element.dispatchEvent(mouseUpEvent);
    element.click();
    //console.log(`Ação de clique simulada no botão '${buttonId}'.`);
  }
  const buttons = document.getElementsByClassName(buttonClass);
  if (buttons.length > 0) {
    simulateRealClick(buttons[3])
  } else {
    //console.log(`Botão com ID '${buttonId}' não foi encontrado na página.`);
  }
}

              console.log(ssNum)
              document.getElementById("txtSSOuPlaca").value = ssNum+"/10";
              findAndClickButtonByClass("btn", 3);

              setTimeout(() => {
                let el = document.getElementById("txtObservacaoContato");
                if (el) el.value = text;
              }, 3000);
          }, 1000);
            },
            args: [ss, text]
        });
      });
  }
});

chrome.commands.onCommand.addListener((command, tab) => {
  if (command === "fotos_button") {
  chrome.tabs.query({ active: true, currentWindow: true }, function(tabs) {
  console.log(tabs[0].url);
  let urlObject = new URL(tabs[0].url);
  let query = urlObject.searchParams.get('ssNum');
  var url = 'https://wapps.localiza.com/GestaoFrotas/Operacoes/FotoVistoria/AbrirImagensSS?ssSeq=10&ssNum='+query;
  chrome.tabs.create({ url: url });
  var url = 'https://wapps.localiza.com/Manutencao/OP.ManutencaoCarro.AnaliseOrcamento/VisualizacaoVideos?ssNum=' + query + '&ssSeq=10';
  chrome.tabs.create({ url: url });
  });
  }
});


  