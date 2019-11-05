$(document).ready(function() {var formatter = new CucumberHTML.DOMFormatter($('.cucumber-report'));formatter.uri("ConsultarPO.feature");
formatter.feature({
  "line": 1,
  "name": "Buscar Termo",
  "description": "",
  "id": "buscar-termo",
  "keyword": "Feature"
});
formatter.before({
  "duration": 6709614700,
  "status": "passed"
});
formatter.before({
  "duration": 5394149000,
  "status": "passed"
});
formatter.scenario({
  "line": 3,
  "name": "Busca Termo Unico com Sucesso",
  "description": "",
  "id": "buscar-termo;busca-termo-unico-com-sucesso",
  "type": "scenario",
  "keyword": "Scenario"
});
formatter.step({
  "line": 4,
  "name": "que acesso o site do Google 1",
  "keyword": "Given "
});
formatter.step({
  "line": 5,
  "name": "digito o termo \"geladeira\" e pressiono Enter 1",
  "keyword": "When "
});
formatter.step({
  "comments": [
    {
      "line": 6,
      "value": "#And pressiono o Enter"
    }
  ],
  "line": 7,
  "name": "vejo os resultados e a guia 1 \"geladeira - Pesquisa Google\"",
  "keyword": "Then "
});
formatter.match({
  "location": "ConsultarPO.que_acesso_o_site_do_Google()"
});
formatter.result({
  "duration": 1504578100,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "geladeira",
      "offset": 16
    }
  ],
  "location": "ConsultarPO.digito_o_termo_e_pressiono_Enter(String)"
});
formatter.result({
  "duration": 2058789700,
  "status": "passed"
});
formatter.match({});
formatter.result({
  "status": "undefined"
});
formatter.after({
  "duration": 671874600,
  "status": "passed"
});
formatter.after({
  "duration": 800848400,
  "status": "passed"
});
formatter.uri("ConsultarPt.feature");
formatter.feature({
  "comments": [
    {
      "line": 1,
      "value": "#language: pt"
    }
  ],
  "line": 2,
  "name": "Buscar por termo",
  "description": "Se aplica a qualquer usu�rio",
  "id": "buscar-por-termo",
  "keyword": "Funcionalidade"
});
formatter.before({
  "duration": 5531677100,
  "status": "passed"
});
formatter.before({
  "duration": 5365056300,
  "status": "passed"
});
formatter.scenario({
  "line": 5,
  "name": "Busca com sucesso por uma unica palavra",
  "description": "",
  "id": "buscar-por-termo;busca-com-sucesso-por-uma-unica-palavra",
  "type": "scenario",
  "keyword": "Cenario"
});
formatter.step({
  "line": 6,
  "name": "que acesso o site do Google",
  "keyword": "Dado "
});
formatter.step({
  "line": 7,
  "name": "digito o termo \"feriado\"",
  "keyword": "Quando "
});
formatter.step({
  "line": 8,
  "name": "clico no Enter",
  "keyword": "E "
});
formatter.step({
  "line": 9,
  "name": "exibe a lista de resultados com o titulo \"feriado - Pesquisa Google\"",
  "keyword": "Entao "
});
formatter.match({
  "location": "Consultar.que_acesso_o_site_do_Google()"
});
formatter.result({
  "duration": 1748135900,
  "status": "passed"
});
});