Feature: Buscar Termo

	Scenario: Busca Termo Unico com Sucesso
		Given que acesso o site do Google 1
		When digito o termo "geladeira" e pressiono Enter 1
		#And pressiono o Enter
		Then vejo os resultados e a guia 1 "geladeira - Pesquisa Google"

	# Scenario: Busca Termo Unico com Sucesso
		#Given que acesso o site do Google
		#When digito o termo "feriado"
		#And clico no botao Pesquisa Google
		#Then vejo os resultados e a guia "feriado - Pesquisa Google"