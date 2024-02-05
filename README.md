Projeto criado para automatizar a ação de criação de conteúdo dentro da plataforma LMS Neolude, economizando o tempo do time de implantação.

Descrição do processo melhorado
O time  de implantação recebe uma ou mais planilhas, contendo todas as informações necessárias para que os analistas de implantação criem estes conteudos manualmente um a um na plataforma,
uma operação repetitiva e de alto custo de tempo.

Utilizando o cypress, automatizamos a criação de cursos dentro da plataforma,
1. Time de implantação recebe planilha com os dados para criação
2. Populamos a planilha de automação com as informações a serem criadas
3. Rodamos a automação

a automação segue o seguinte 
1. Converte os dados da planilha em json
2. Realiza login na plataforma
3. Acessa a página de criação de cursos
4. Cria o curso com as informações

esses cursos são parametrizados com descrições, configurações, permissões
