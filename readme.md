## UserHub

**UserHub** é uma aplicação web simples criada com React que permite visualizar uma lista de usuários e explorar informações detalhadas sobre cada um deles. A aplicação consome dados de uma API pública (JSONPlaceholder) para exibir informações fictícias de usuários, como nome, email, endereço e telefone. Também oferece a funcionalidade de "excluir" usuários (de forma simulada).

## Funcionalidades

- **Listagem de Usuários**: Exibe uma tabela com o nome, email e endereço de cada usuário.
- **Detalhes do Usuário**: Ao clicar em um usuário, você será redirecionado para uma página de detalhes com informações adicionais, como telefone e endereço completo.
- **Emulação de Exclusão**: Você pode clicar no botão "Excluir" para remover o usuário da lista (somente na interface, pois a API não permite modificações reais).
- **Navegação de Página Única**: A aplicação é uma SPA (Single Page Application) que utiliza o React Router para navegação entre as páginas de listagem e detalhes.

## Tecnologias Utilizadas

- **React**: Framework para construção da interface de usuário.
- **React Router**: Para gerenciar as rotas de navegação.
- **Axios**: Para realizar as requisições HTTP à API externa.
- **Material-UI**: Para componentes visuais modernos e responsivos.
- **React Hooks**: Para gerenciar estado e efeitos colaterais de maneira eficiente.
- **Styled Components ou CSS Modules**: Para estilizar a aplicação de forma modular.