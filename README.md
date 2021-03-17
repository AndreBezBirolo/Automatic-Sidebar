# Automatic Sidebar

O projeto "Automatic Sidebar" foi desenvolvido por André J. Bez Birolo com um intuito de tornar a vida do desenvolvedor mais fácil e não precisar mais se estressar com javascript.


## 🚀 Explicação teórica 

### 🔧 Explicação escrita sobre a utilização:

---
Primeiramente precisar colocar nossa função de ***Automatic Sidebar*** e chamar ela com o Try & Catch para tratarmos quais queres possíveis erros. Após isso podemos montar nossa estrutura em HTML seguindo alguns padrões. Primeiramente adicionamos uma seção que será o elemento pai de todas as outros passando o parâmetro *data-sidebar = section*, a partir daí podemos adicionar nossos botões de abrir e fechar nossa sidebar utilizando o parâmetro *data-sidebar = open* para ser o botão de abrir ou *data-sidebar = close* para ser o botão de fechar. Ademais, o próximo ponto essencial é dentro do nosso elemento pai colocar o elemento com o parâmetro *data-sidebar = content* o qual irá conter nossa sidebar. Não se esqueça da estilização padrão e caso queira fique a vontade para a utilização de variaveis. Após essa estruturação tem tudo para dar certo!

### 🔧 Explicação sobre nosso javascript:

---

O nosso javascript apenas pega o tamanho do nosso menu e joga ele para fora da tela e quando o menu for chamado ele volta para a posição inicial além de definir *pointer events none* e *opacity 0* quando não está visível e *pointer events all* e *opacity 1* quando está visível.

### 🔧 Explicando o javascript

---

O nosso javascript apenas pega o tamanho do nosso menu e joga ele para fora da tela e quando o menu for chamado ele volta para a posição inicial além de definir pointer events none e opacity 0 quando não está visível e pointer events all e opacity 1 quando está visível.

## 📋 Parâmetros Utilizados:

- data-sidebar
```
    Utilizado para definir se o elemento é a seção de tudo (section),
    Se o elemento é o container (container),
    Se o elemento é o menu (content),
    Se será um botão que abrirá a sidebar (open),
    Se será um botão que irá fechar a sidebar (close).
```
---
- data-sidebar-direction
 ```
    Utilizado para definir de onde a sidebar irá surgir:
    Esquerda (left)
    Direita(Right)
  ```




## 📦 Estruturação do HTML

```
<!-- Indica que aqui terá uma seção que contém uma sidebar -->
<section data-sidebar="section">
	<!-- Indica que aqui tem um botão que abrirá a sidebar que tiver o -sidebar-container -->
	<a data-sidebar="open"></a>
	<!-- Indica que aqui terá a seção com o overlay, além de definir por onde esse menu irá aparecer. -->
	<section data-sidebar-container="/ID do overlay/" data-sidebar-direction="right">
		<!-- Indica que aqui terá uma div com o conteúdo do sidebar -->
		<div data-sidebar="content">
			<!-- Indica que aqui tem um botão que fechará a sidebar que tiver o -sidebar-container -->
			<a data-sidebar="close"></a>
		</div>
	</section>
</section>
```

## 📦 Estilização do CSS
```
[data-sidebar="container"] {
    opacity: 0;
    pointer-events: none;
    position: fixed;
    top: 0;
    left: 0;
    bottom: 0;
    width: 100%;
    height: 100%;
    background: rgba(0,0,0,.35);
    z-index: 5;
}
[data-sidebar="content"]{
    -webkit-box-sizing: border-box;
    box-sizing: border-box;
    position: absolute;
    right: 0;
    top: 0;
    z-index: 10;
    background: #FFF;
    width: 85vh;
    padding: 36px;
    height: 100%;
    -webkit-box-shadow: -4px 0 16px rgba(0,0,0,.15);
    box-shadow: -4px 0 16px rgba(0,0,0,.15);
}
```


## 📌 Versão

Confira o changelog [Clicando Aqui]()

## 📄 Licença

Este projeto está sob a licença (Apache License 2.0) - veja o arquivo [LICENSE.md](https://github.com/AndreBezBirolo/Automatic-Sidebar/blob/main/LICENSE) para detalhes.

## 🎁 Considerações finais

* Divulgue a ideia e vamos crescer juntos! 📢

---
por [André Bez Birolo](https://gist.github.com/AndreBezBirolo) 
