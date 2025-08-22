
document.getElementById('monitoramento').addEventListener('click', function() {
  var url = 'https://wapps.localiza.com/GestaoFrotasMonitoramento/Operacoes/MonitoramentoFornecedor/MonitoramentoSSAvulsa#';
  chrome.tabs.create({ url: url });
});

document.getElementById('gerenciador').addEventListener('click', function() {
  var url = 'https://eks-utilizacao-do-carro-prd.localiza.com/monitoramento-ui/monitoramento/gerenciador';
  chrome.tabs.create({ url: url });
});
document.getElementById('orcamento').addEventListener('click', function() {
  var url = 'https://wapps.localiza.com/Manutencao/OP.ManutencaoCarro.AnaliseOrcamento/ConsultaHistorico';
  chrome.tabs.create({ url: url });
});
document.getElementById('aprovacao').addEventListener('click', function() {
  var url = 'https://wapps.localiza.com/Manutencao/OP.ManutencaoCarro.AnaliseOrcamento/InicioAprovacaoOrcamento';
  chrome.tabs.create({ url: url });
});

document.getElementById('fotos').addEventListener('click', function() {
  chrome.tabs.query({ active: true, currentWindow: true }, function(tabs) {
  let urlObject = new URL(tabs[0].url);
  let query = urlObject.searchParams.get('ssNum');
  var url = 'https://wapps.localiza.com/GestaoFrotas/Operacoes/FotoVistoria/AbrirImagensSS?ssSeq=10&ssNum='+query;
  chrome.tabs.create({ url: url });
  });
});


document.getElementById('videos').addEventListener('click', function() {
  chrome.tabs.query({ active: true, currentWindow: true }, function(tabs) {
  let urlObject = new URL(tabs[0].url);
  let query = urlObject.searchParams.get('ssNum');
  var url = 'https://wapps.localiza.com//Manutencao/OP.ManutencaoCarro.AnaliseOrcamento/VisualizacaoVideos?ssNum=' + query + '&ssSeq=10';
  chrome.tabs.create({ url: url });
  });
});

