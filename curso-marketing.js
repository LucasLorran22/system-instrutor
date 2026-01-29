// ============================================
// CURSO MARKETING - LÓGICA JAVASCRIPT
// ============================================

// Dados do curso - Estrutura de aulas
const courseData = {
    'modulo-1': {
        title: 'Módulo 1: Mentalidade & Posicionamento',
        lessons: [
            {
                id: '1-1',
                title: 'Instrutor ≠ Influencer',
                duration: '18 min',
                content: `
                    <h2>Instrutor ≠ Influencer: Entenda a Diferença</h2>
                    
                    <p>
                        Este é o primeiro bloqueio mental que você precisa quebrar. Muitos instrutores pensam que 
                        precisam virar "influenciadores" para crescer nas redes sociais. Errado. Você não é influenciador. 
                        Você é uma <strong>autoridade local</strong>.
                    </p>

                    <h3>A Diferença Fundamental</h3>
                    <p><strong>Influenciador:</strong> Vive de seguidores, likes e patrocínios. Precisa de volume.</p>
                    <p><strong>Instrutor com Autoridade Local:</strong> Vive de alunos pagantes. Precisa de qualidade e confiança.</p>

                    <div class="highlight-box">
                        <strong>💡 Mentalidade Correta:</strong> Você não está competindo com influenciadores. 
                        Você está construindo confiança com pessoas que querem aprender a dirigir na sua cidade.
                    </div>

                    <h3>Por que isso importa?</h3>
                    <p>
                        Quando você tenta ser influenciador, você acaba:
                    </p>
                    <ul>
                        <li>Postando conteúdo genérico que não atrai alunos</li>
                        <li>Gastando tempo com dancinhas e trends que não geram resultado</li>
                        <li>Competindo com milhões de perfis iguais</li>
                        <li>Nunca convertendo seguidores em alunos pagantes</li>
                    </ul>

                    <h3>O Caminho Correto</h3>
                    <p>
                        Como instrutor, seu objetivo é:
                    </p>
                    <ul>
                        <li>Ser visto como a melhor opção de instrutor na sua região</li>
                        <li>Gerar confiança antes mesmo da primeira aula</li>
                        <li>Converter cada seguidor em um possível aluno</li>
                        <li>Criar um funil de vendas através das redes sociais</li>
                    </ul>

                    <div class="tip-box">
                        <strong>✅ Ação Prática:</strong> Neste momento, não pense em "quantos seguidores eu tenho". 
                        Pense em "quantos alunos eu posso converter". Essa mudança de mentalidade é tudo.
                    </div>

                    <h3>Exemplos Reais</h3>
                    <p>
                        Um instrutor com 500 seguidores que converte 10% em alunos pagantes (50 alunos) 
                        ganha muito mais que um influenciador com 100 mil seguidores que não vende nada.
                    </p>
                    <p>
                        Foco em qualidade, não em quantidade. Foco em conversão, não em vanidade.
                    </p>
                `
            },
            {
                id: '1-2',
                title: 'Autoridade Local vs Seguidores',
                duration: '16 min',
                content: `
                    <h2>Autoridade Local > Seguidores</h2>
                    
                    <p>
                        A maioria dos instrutores quer crescer o número de seguidores. Errado. 
                        O que você realmente precisa é de <strong>autoridade local</strong>.
                    </p>

                    <h3>O que é Autoridade Local?</h3>
                    <p>
                        É quando as pessoas na sua cidade te reconhecem como <em>O instrutor</em> de direção. 
                        Não um entre muitos. O melhor. O mais confiável. O que todos recomendam.
                    </p>

                    <h3>Por que Autoridade Local é Melhor</h3>
                    <ul>
                        <li><strong>Preço:</strong> Você pode cobrar mais porque é referência</li>
                        <li><strong>Demanda:</strong> Alunos vêm procurando você, não o contrário</li>
                        <li><strong>Recomendações:</strong> Seus alunos indicam você para amigos</li>
                        <li><strong>Menos Concorrência:</strong> Você não compete com o Brasil inteiro</li>
                        <li><strong>Fidelização:</strong> Alunos voltam para mais aulas e indicam</li>
                    </ul>

                    <h3>Como Construir Autoridade Local</h3>
                    <p>
                        <strong>1. Escolha sua Região:</strong> Não tente ser conhecido em todo o Brasil. 
                        Escolha seu bairro, sua cidade ou um raio de 10km.
                    </p>
                    <p>
                        <strong>2. Domine seu Nicho:</strong> Seja o melhor instrutor de primeira habilitação 
                        ou direção defensiva da sua região.
                    </p>
                    <p>
                        <strong>3. Gere Prova Social:</strong> Mostre seus resultados, depoimentos, alunos aprovados.
                    </p>
                    <p>
                        <strong>4. Seja Consistente:</strong> Poste regularmente, responda rápido, mantenha qualidade.
                    </p>

                    <div class="highlight-box">
                        <strong>📊 Dados Reais:</strong> Um instrutor com 200 seguidores altamente engajados 
                        na sua região gera mais renda que um com 10 mil seguidores espalhados pelo Brasil.
                    </div>

                    <h3>Estratégia Prática</h3>
                    <p>
                        Use hashtags locais, marque sua localização, mencione pontos de referência da sua cidade, 
                        faça parcerias com negócios locais. Tudo isso constrói autoridade na sua região.
                    </p>

                    <div class="tip-box">
                        <strong>✅ Exercício:</strong> Liste 5 características que tornam você diferente 
                        dos outros instrutores na sua região. Essas são suas vantagens competitivas.
                    </div>
                `
            },
            {
                id: '1-3',
                title: 'Marketing sem Parecer Vendedor',
                duration: '20 min',
                content: `
                    <h2>Como Falar Sem Parecer Vendedor Chato</h2>
                    
                    <p>
                        Este é um dos maiores medos dos instrutores: parecer "vendedor chato" nas redes sociais. 
                        A boa notícia? Você não precisa parecer vendedor. Você precisa parecer <strong>educador</strong>.
                    </p>

                    <h3>A Diferença</h3>
                    <p>
                        <strong>Vendedor Chato:</strong> "Contrate minhas aulas! Sou o melhor! Clique aqui!"
                    </p>
                    <p>
                        <strong>Educador:</strong> "Veja esse erro comum que alunos cometem na baliza... 
                        Aqui está como evitar."
                    </p>

                    <h3>Marketing como Extensão da Aula</h3>
                    <p>
                        Pense em suas redes sociais como uma <strong>aula gratuita contínua</strong>. 
                        Você está ensinando, não vendendo.
                    </p>
                    <ul>
                        <li>Ensine técnicas de direção</li>
                        <li>Mostre erros comuns</li>
                        <li>Dê dicas para a prova</li>
                        <li>Compartilhe histórias de sucesso</li>
                        <li>Responda dúvidas frequentes</li>
                    </ul>

                    <h3>Quando Você Educa, a Venda Vem Naturalmente</h3>
                    <p>
                        Quando você ensina valor, as pessoas confiam em você. Quando confiam, querem contratar você. 
                        Simples assim.
                    </p>

                    <div class="highlight-box">
                        <strong>Princípio de Ouro:</strong> Não é sobre postar todo dia. 
                        É sobre postar certo. Qualidade > Quantidade.
                    </div>

                    <h3>Exemplos de Posts que Funcionam</h3>
                    <p>
                        <strong>❌ Errado:</strong> "Faça aulas comigo! Sou o melhor instrutor de SP!"
                    </p>
                    <p>
                        <strong>✅ Certo:</strong> "O erro mais comum na baliza? Virar o volante muito cedo. 
                        Veja como fazer certo..." (+ vídeo)
                    </p>

                    <p>
                        <strong>❌ Errado:</strong> "Aproveita minha promoção!"
                    </p>
                    <p>
                        <strong>✅ Certo:</strong> "Meu aluno João passou na prova de primeira! 
                        Ele tinha medo de dirigir, mas com as técnicas certas..." (+ depoimento)
                    </p>

                    <h3>A Psicologia por Trás</h3>
                    <p>
                        Quando você educa:
                    </p>
                    <ul>
                        <li>Você se posiciona como autoridade</li>
                        <li>Você gera confiança</li>
                        <li>Você cria valor antes da venda</li>
                        <li>Você atrai pessoas genuinamente interessadas</li>
                    </ul>

                    <div class="tip-box">
                        <strong>✅ Ação Prática:</strong> Faça uma lista de 10 dúvidas frequentes que seus alunos têm. 
                        Cada uma é um post educativo que você pode criar. Isso é marketing sem parecer vendedor.
                    </div>
                `
            }
        ]
    },
    'modulo-2': {
        title: 'Módulo 2: Instagram e WhatsApp na Prática',
        lessons: [
            {
                id: '2-1',
                title: 'Perfil Profissional do Zero',
                duration: '22 min',
                content: `
                    <h2>Como Criar um Perfil Profissional do Zero</h2>
                    
                    <p>
                        Seu perfil no Instagram é seu cartão de visita digital. Primeiras impressões importam. 
                        Vamos criar um perfil que converta seguidores em alunos.
                    </p>

                    <h3>Passo 1: Escolha o Tipo de Conta</h3>
                    <p>
                        Não use conta pessoal. Use <strong>Conta Profissional</strong> no Instagram. 
                        Isso te dá acesso a:
                    </p>
                    <ul>
                        <li>Insights (dados de quem te segue)</li>
                        <li>Botão de "Contato"</li>
                        <li>Agendador de posts</li>
                        <li>Estatísticas de engajamento</li>
                    </ul>

                    <h3>Passo 2: Nome de Usuário</h3>
                    <p>
                        <strong>Regra:</strong> Simples, fácil de lembrar, relacionado ao seu negócio.
                    </p>
                    <p>
                        ❌ Errado: @joao_silva_123_oficial_instrutor_sp<br>
                        ✅ Certo: @joao.instrutor.sp ou @instrutor.joao
                    </p>

                    <h3>Passo 3: Foto de Perfil</h3>
                    <p>
                        Deve ser:
                    </p>
                    <ul>
                        <li>Foto sua (não logotipo, não carro)</li>
                        <li>Profissional (foto de boa qualidade)</li>
                        <li>Rosto claro e visível</li>
                        <li>Fundo neutro ou desfocado</li>
                        <li>Sorriso natural</li>
                    </ul>

                    <div class="highlight-box">
                        <strong>Por quê?</strong> Pessoas compram de pessoas, não de logos. 
                        Sua foto gera confiança e humaniza seu perfil.
                    </div>

                    <h3>Passo 4: Nome Completo</h3>
                    <p>
                        Use seu nome completo no campo "Nome". Isso ajuda no SEO do Instagram.
                    </p>
                    <p>
                        Exemplo: "João Silva - Instrutor de Direção SP"
                    </p>

                    <h3>Passo 5: Categoria</h3>
                    <p>
                        Escolha "Educação" ou "Negócio Local". Isso ajuda o Instagram a classificar seu perfil corretamente.
                    </p>

                    <div class="tip-box">
                        <strong>✅ Checklist:</strong> Conta profissional? ✓ Nome claro? ✓ Foto profissional? ✓ 
                        Categoria correta? ✓ Bio preenchida? (próximo passo)
                    </div>
                `
            },
            {
                id: '2-2',
                title: 'Bio que Vende Sem Vender',
                duration: '19 min',
                content: `
                    <h2>Bio que Vende Sem Vender</h2>
                    
                    <p>
                        Sua bio é o espaço mais importante do seu perfil. É a primeira coisa que as pessoas leem. 
                        Tem que contar sua história, gerar confiança e ter um call-to-action.
                    </p>

                    <h3>Estrutura da Bio Perfeita</h3>
                    <p>
                        <strong>Linha 1:</strong> O que você faz (claro e direto)<br>
                        <strong>Linha 2:</strong> Seu diferencial ou resultado<br>
                        <strong>Linha 3:</strong> Call-to-action (o que fazer)<br>
                        <strong>Linha 4:</strong> Localização ou prova social
                    </p>

                    <h3>Exemplo de Bio Ruim</h3>
                    <p>
                        "Instrutor de direção 🚗 Aulas particulares 📱 Contrate agora!"
                    </p>
                    <p style="color: #ef4444; font-size: 0.9rem;">
                        ❌ Genérica, sem diferencial, sem confiança, parece vendedor chato
                    </p>

                    <h3>Exemplo de Bio Boa</h3>
                    <p>
                        "🚗 Instrutor de Direção | 95% de aprovação na prova prática<br>
                        📍 São Paulo - Vila Madalena<br>
                        📱 Primeira aula grátis<br>
                        👇 Clique no link para agendar"
                    </p>
                    <p style="color: #10b981; font-size: 0.9rem;">
                        ✅ Clara, mostra resultado, localização, call-to-action, prova social
                    </p>

                    <h3>Elementos Importantes</h3>
                    <p>
                        <strong>1. Resultado Mensurável:</strong> "95% de aprovação", "300+ alunos aprovados", 
                        "8 anos de experiência"
                    </p>
                    <p>
                        <strong>2. Localização:</strong> Sempre mencione sua cidade/bairro. Isso atrai pessoas locais.
                    </p>
                    <p>
                        <strong>3. Oferta Clara:</strong> "Primeira aula grátis", "Aulas personalizadas", 
                        "Direção defensiva"
                    </p>
                    <p>
                        <strong>4. Call-to-Action:</strong> "Clique no link", "Envie DM", "Chame no WhatsApp"
                    </p>

                    <h3>Link na Bio</h3>
                    <p>
                        Use o link da bio para:
                    </p>
                    <ul>
                        <li>WhatsApp (link direto para conversa)</li>
                        <li>Página de agendamento</li>
                        <li>Linktree (múltiplos links)</li>
                        <li>Seu site ou blog</li>
                    </ul>

                    <div class="highlight-box">
                        <strong>Dica:</strong> Use um link curto e rastreável para saber quantas pessoas 
                        clicam no seu link. Ferramentas como Bitly ajudam.
                    </div>

                    <div class="tip-box">
                        <strong>✅ Exercício:</strong> Escreva sua bio agora. Mostre resultado, localização, 
                        oferta e call-to-action. Teste com amigos. Refine até ficar perfeita.
                    </div>
                `
            },
            {
                id: '2-3',
                title: 'Foto, Nome e Destaque',
                duration: '17 min',
                content: `
                    <h2>Foto, Nome e Destaques: Os Detalhes que Importam</h2>
                    
                    <p>
                        Existem pequenos detalhes que fazem grande diferença na conversão. Vamos detalhar cada um.
                    </p>

                    <h3>Foto de Perfil - Revisitado</h3>
                    <p>
                        <strong>Tamanho:</strong> 400x400 pixels (Instagram redimensiona, mas melhor ser preciso)<br>
                        <strong>Formato:</strong> Quadrado<br>
                        <strong>Qualidade:</strong> Alta resolução (não pixelada)
                    </p>
                    <p>
                        <strong>Dica:</strong> Tire uma foto profissional. Não precisa ser cara. 
                        Pode ser no seu celular com boa iluminação.
                    </p>

                    <h3>Nome Completo</h3>
                    <p>
                        Exemplo: "João Silva - Instrutor de Direção SP"
                    </p>
                    <p>
                        <strong>Por quê?</strong> Quando alguém procura "instrutor de direção SP" no Google, 
                        seu nome aparece. Isso é SEO.
                    </p>

                    <h3>Destaques (Stories Permanentes)</h3>
                    <p>
                        Os destaques são stories que você fixa no seu perfil. Aparecem logo abaixo da bio. 
                        São muito importantes para conversão.
                    </p>

                    <h3>Destaques que Você Deve Ter</h3>
                    <p>
                        <strong>1. Sobre Mim:</strong> Sua história, experiência, por que você é diferente<br>
                        <strong>2. Aulas:</strong> Exemplos de aulas, o que você oferece<br>
                        <strong>3. Depoimentos:</strong> Vídeos curtos de alunos aprovados<br>
                        <strong>4. Preço:</strong> Valor das aulas, pacotes<br>
                        <strong>5. Contato:</strong> Como entrar em contato (WhatsApp, email)
                    </p>

                    <h3>Como Criar Destaques</h3>
                    <p>
                        1. Poste um story<br>
                        2. Clique no ícone de "Destaque" (coração com sinal de +)<br>
                        3. Crie um novo destaque ou adicione a um existente<br>
                        4. Nomeie o destaque (ex: "Sobre Mim")<br>
                        5. Escolha um ícone e cor
                    </p>

                    <div class="highlight-box">
                        <strong>Psicologia:</strong> Destaques funcionam como um mini-site. 
                        Alguém entra no seu perfil, vê os destaques e já sabe tudo sobre você sem precisar scrollar.
                    </div>

                    <h3>Design dos Destaques</h3>
                    <p>
                        Use cores consistentes com sua marca. Se sua marca é azul/roxo, use essas cores nos destaques.
                    </p>
                    <p>
                        Ferramentas como Canva têm templates prontos para destaques do Instagram.
                    </p>

                    <div class="tip-box">
                        <strong>✅ Ação Prática:</strong> Crie 5 destaques agora. Cada um com 3-5 stories. 
                        Foque em: Sobre Mim, Aulas, Depoimentos, Preço, Contato.
                    </div>
                `
            },
            {
                id: '2-4',
                title: 'WhatsApp como Funil de Matrícula',
                duration: '21 min',
                content: `
                    <h2>WhatsApp como Funil de Matrícula</h2>
                    
                    <p>
                        Instagram traz o tráfego. WhatsApp fecha a venda. Seu WhatsApp é o seu funil de matrícula.
                    </p>

                    <h3>Por que WhatsApp?</h3>
                    <ul>
                        <li>Altíssima taxa de abertura (98%)</li>
                        <li>Conversação pessoal e direta</li>
                        <li>Fácil de enviar fotos e vídeos</li>
                        <li>Cria relacionamento</li>
                        <li>Converte melhor que email</li>
                    </ul>

                    <h3>Estrutura do Funil WhatsApp</h3>
                    <p>
                        <strong>Etapa 1: Atração</strong> - Instagram traz o lead para o WhatsApp<br>
                        <strong>Etapa 2: Engajamento</strong> - Você responde e cria conversa<br>
                        <strong>Etapa 3: Qualificação</strong> - Você entende a necessidade<br>
                        <strong>Etapa 4: Proposta</strong> - Você oferece a solução<br>
                        <strong>Etapa 5: Fechamento</strong> - Você agenda a primeira aula
                    </p>

                    <h3>Automação Inteligente</h3>
                    <p>
                        <strong>Mensagem de Boas-vindas Automática:</strong>
                    </p>
                    <p style="background: #f8fafc; padding: 1rem; border-radius: 8px; margin: 1rem 0;">
                        "Oi! 👋 Bem-vindo ao meu WhatsApp! Sou João, instrutor de direção em SP. 
                        Aqui você pode tirar dúvidas, agendar aulas e saber mais sobre meu trabalho. 
                        Como posso ajudar? 😊"
                    </p>

                    <h3>Resposta Rápida é Ouro</h3>
                    <p>
                        <strong>Tempo de Resposta Ideal:</strong> Menos de 1 hora (máximo 2 horas)
                    </p>
                    <p>
                        Quanto mais rápido você responde, maior a chance de conversão. Se você demora 24 horas, 
                        o lead já procurou outro instrutor.
                    </p>

                    <h3>Dicas de Resposta</h3>
                    <p>
                        <strong>1. Sempre Responda:</strong> Mesmo que seja só "Oi! Vou responder com mais detalhes em 5 min"
                    </p>
                    <p>
                        <strong>2. Seja Humano:</strong> Use emojis, linguagem natural, não pareça robô
                    </p>
                    <p>
                        <strong>3. Faça Perguntas:</strong> "Qual é sua experiência com direção?" "Qual sua cidade?"
                    </p>
                    <p>
                        <strong>4. Qualifique o Lead:</strong> Entenda se é realmente um potencial aluno
                    </p>

                    <h3>Quando Oferecer Aula</h3>
                    <p>
                        Não ofereça aula na primeira mensagem. Crie relacionamento primeiro.
                    </p>
                    <p>
                        Conversa típica:
                    </p>
                    <ul>
                        <li>Lead: "Oi, quero aprender a dirigir"</li>
                        <li>Você: "Oi! Legal! Qual sua experiência? Já dirigiu antes?"</li>
                        <li>Lead: "Não, é minha primeira vez"</li>
                        <li>Você: "Perfeito! Eu trabalho com primeira habilitação. Qual sua cidade?"</li>
                        <li>Lead: "Sou de Vila Madalena"</li>
                        <li>Você: "Ótimo! Fico perto. Qual seu objetivo? Quer passar na prova?"</li>
                        <li>Lead: "Sim!"</li>
                        <li>Você: "Tenho um programa específico para isso. Quer agendar uma aula experimental?"</li>
                    </ul>

                    <div class="highlight-box">
                        <strong>Regra de Ouro:</strong> Entenda primeiro, venda depois. 
                        Quando você entende a necessidade, a venda é natural.
                    </div>

                    <h3>Grupos de WhatsApp</h3>
                    <p>
                        Crie um grupo com seus alunos. Use para:
                    </p>
                    <ul>
                        <li>Compartilhar dicas de direção</li>
                        <li>Avisar sobre aulas</li>
                        <li>Responder dúvidas</li>
                        <li>Criar comunidade</li>
                    </ul>

                    <div class="tip-box">
                        <strong>✅ Ação Prática:</strong> Prepare sua mensagem de boas-vindas automática. 
                        Teste com um amigo. Refine até ficar natural e atrativa.
                    </div>
                `
            }
        ]
    },
    'modulo-3': {
        title: 'Módulo 3: Conteúdo que Atrai Alunos',
        lessons: [
            {
                id: '3-1',
                title: 'Erros Comuns de Alunos',
                duration: '19 min',
                content: `
                    <h2>Conteúdo que Funciona: Erros Comuns de Alunos</h2>
                    
                    <p>
                        Um dos melhores tipos de conteúdo é mostrar erros comuns. Por quê? Porque as pessoas 
                        se identificam. Elas pensam "Ah, eu faço isso!" e prestam atenção.
                    </p>

                    <h3>Por que Falar de Erros?</h3>
                    <ul>
                        <li>Gera identificação</li>
                        <li>Posiciona você como especialista</li>
                        <li>Educa sem parecer vendedor</li>
                        <li>Gera engajamento (comentários)</li>
                        <li>Atrai pessoas que têm medo de dirigir</li>
                    </ul>

                    <h3>Erros Mais Comuns para Criar Conteúdo</h3>
                    <p>
                        <strong>1. Baliza:</strong> "O erro mais comum? Virar o volante muito cedo. Veja como fazer..."
                    </p>
                    <p>
                        <strong>2. Estacionamento:</strong> "Muita gente bate o carro aqui. A técnica correta é..."
                    </p>
                    <p>
                        <strong>3. Curvas:</strong> "Freiar na curva é errado. Você deve frear antes..."
                    </p>
                    <p>
                        <strong>4. Medo de Dirigir:</strong> "Seu coração bate acelerado? Isso é normal. Aqui está como controlar..."
                    </p>
                    <p>
                        <strong>5. Prova Prática:</strong> "O examinador reprova por isso... Evite!"
                    </p>

                    <h3>Formato do Post</h3>
                    <p>
                        <strong>Opção 1: Vídeo Curto (15-30 segundos)</strong><br>
                        Mostre o erro e a correção. Rápido e visual.
                    </p>
                    <p>
                        <strong>Opção 2: Carrossel (3-5 slides)</strong><br>
                        Slide 1: O erro<br>
                        Slide 2: Por que é errado<br>
                        Slide 3: A forma correta<br>
                        Slide 4: Dica extra<br>
                        Slide 5: Call-to-action
                    </p>
                    <p>
                        <strong>Opção 3: Foto + Legenda</strong><br>
                        Foto sua ou do carro + texto explicativo
                    </p>

                    <h3>Exemplo de Post Pronto</h3>
                    <p style="background: #f8fafc; padding: 1rem; border-radius: 8px; margin: 1rem 0;">
                        <strong>Título:</strong> "❌ Erro que reprova na prova prática"<br><br>
                        <strong>Texto:</strong> "Muitos alunos fazem isso e o examinador reprova na hora: 
                        não olham no espelho retrovisor antes de mudar de faixa. 
                        Parece pequeno? Não é. É falta de atenção. 
                        A regra é simples: espelho → sinaleira → mudança. 
                        Nessa ordem. Sempre. 
                        Seus olhos precisam estar em movimento constante. 
                        Quem não olha nos espelhos é reprovado. 
                        Isso é básico, mas muita gente esquece. 
                        Você faz isso certo? 🤔"
                    </p>

                    <div class="highlight-box">
                        <strong>Dica:</strong> Sempre termine com uma pergunta. 
                        Perguntas geram comentários. Comentários aumentam o algoritmo.
                    </div>

                    <div class="tip-box">
                        <strong>✅ Ação Prática:</strong> Liste 10 erros que seus alunos cometem. 
                        Cada um é um post. Crie um calendário de conteúdo.
                    </div>
                `
            },
            {
                id: '3-2',
                title: 'Bastidores das Aulas',
                duration: '18 min',
                content: `
                    <h2>Bastidores: O Conteúdo que Humaniza</h2>
                    
                    <p>
                        Mostrar bastidores funciona porque humaniza você. As pessoas veem que você é real, 
                        que trabalha de verdade, que tem rotina.
                    </p>

                    <h3>Por que Bastidores Funcionam?</h3>
                    <ul>
                        <li>Gera confiança (você é transparente)</li>
                        <li>Humaniza seu perfil</li>
                        <li>Mostra seu dia a dia</li>
                        <li>Cria conexão emocional</li>
                        <li>Diferencia você da concorrência</li>
                    </ul>

                    <h3>Ideias de Bastidores</h3>
                    <p>
                        <strong>1. Preparação da Aula:</strong> Você checando o carro, preparando a rota, 
                        chegando no ponto de encontro
                    </p>
                    <p>
                        <strong>2. Durante a Aula:</strong> Aluno dirigindo, você instruindo, momentos de aprendizado
                    </p>
                    <p>
                        <strong>3. Reação de Aprovação:</strong> Aluno recebendo o resultado da prova. 
                        Emoção real = engajamento real
                    </p>
                    <p>
                        <strong>4. Seu Dia:</strong> Acordando cedo, tomando café, indo para o trabalho
                    </p>
                    <p>
                        <strong>5. Aprendizado:</strong> Você estudando, fazendo cursos, se atualizando
                    </p>

                    <h3>Formato Ideal</h3>
                    <p>
                        <strong>Stories:</strong> Perfeito para bastidores. Crie stories durante o dia.
                    </p>
                    <p>
                        <strong>Reels:</strong> Vídeos curtos (15-30 segundos) de bastidores editados.
                    </p>
                    <p>
                        <strong>Posts:</strong> Fotos + legenda contando a história.
                    </p>

                    <h3>Exemplo de Story Sequence</h3>
                    <p>
                        Story 1: "Acordei cedo hoje 🌅 Mais um dia de aulas"<br>
                        Story 2: "Checando o carro ✅ Pneus, óleo, combustível"<br>
                        Story 3: "Chegando no ponto 🚗 Esperando o aluno"<br>
                        Story 4: "Primeira aula do João! Ele tá nervoso 😅"<br>
                        Story 5: "Olha ele dirigindo! Muito bom João! 👏"<br>
                        Story 6: "Dia produtivo! Próxima aula às 16h"
                    </p>

                    <h3>Cuidado com Privacidade</h3>
                    <p>
                        <strong>Sempre peça permissão</strong> antes de filmar alunos. 
                        Respeite a privacidade. Você pode:
                    </p>
                    <ul>
                        <li>Filmar só as mãos do aluno no volante</li>
                        <li>Filmar de costas</li>
                        <li>Usar desfoque para proteger a identidade</li>
                        <li>Pedir permissão explícita</li>
                    </ul>

                    <div class="highlight-box">
                        <strong>Regra:</strong> Transparência sim, invasão de privacidade não. 
                        Sempre respeite seus alunos.
                    </div>

                    <div class="tip-box">
                        <strong>✅ Ação Prática:</strong> Amanhã, crie um story sequence do seu dia. 
                        Mostre seu dia a dia. Humanize-se.
                    </div>
                `
            },
            {
                id: '3-3',
                title: 'Dicas Simples de Prova Prática',
                duration: '20 min',
                content: `
                    <h2>Dicas Simples de Prova Prática: O Ouro do Conteúdo</h2>
                    
                    <p>
                        Dicas para a prova prática são o tipo de conteúdo que mais atrai pessoas. 
                        Por quê? Porque as pessoas estão procurando exatamente isso.
                    </p>

                    <h3>Por que Funciona Tão Bem?</h3>
                    <ul>
                        <li>Pessoas buscam isso ativamente</li>
                        <li>Gera muitos comentários e compartilhamentos</li>
                        <li>Posiciona você como especialista</li>
                        <li>Atrai exatamente seu público-alvo</li>
                        <li>Converte muito bem</li>
                    </ul>

                    <h3>Dicas Mais Buscadas</h3>
                    <p>
                        <strong>1. Baliza:</strong> "3 passos para não errar a baliza"<br>
                        <strong>2. Estacionamento:</strong> "Como estacionar perfeitamente"<br>
                        <strong>3. Curvas:</strong> "Velocidade correta em curvas"<br>
                        <strong>4. Lombada:</strong> "Como passar na lombada sem errar"<br>
                        <strong>5. Sinal de Trânsito:</strong> "Erros comuns com semáforo"<br>
                        <strong>6. Medo:</strong> "Como controlar o nervosismo"<br>
                        <strong>7. Examinador:</strong> "O que o examinador quer ver"
                    </p>

                    <h3>Estrutura de Uma Dica Perfeita</h3>
                    <p>
                        <strong>Título Chamativo:</strong> "❌ ERRO que reprova 90% dos alunos"<br>
                        <strong>Problema:</strong> "Muita gente faz isso errado..."<br>
                        <strong>Solução:</strong> "A forma correta é..."<br>
                        <strong>Exemplo:</strong> "Por exemplo, quando você..."<br>
                        <strong>Call-to-Action:</strong> "Quer aprender mais? Chama no DM"
                    </p>

                    <h3>Exemplo de Post Completo</h3>
                    <p style="background: #f8fafc; padding: 1rem; border-radius: 8px; margin: 1rem 0;">
                        <strong>Título:</strong> "🚗 A BALIZA PERFEITA em 3 passos"<br><br>
                        <strong>Conteúdo:</strong><br>
                        "Baliza reprova MUITA gente. Mas não precisa ser assim. 
                        Aqui está a técnica que 95% dos meus alunos usam para passar:<br><br>
                        ✅ PASSO 1: Posicione o carro paralelo<br>
                        Você precisa estar a uns 2 metros do carro da frente. 
                        Nem muito perto, nem muito longe.<br><br>
                        ✅ PASSO 2: Vire o volante todo para a direita<br>
                        Isso vai fazer a traseira sair. Quando a traseira sair, 
                        você muda para a esquerda.<br><br>
                        ✅ PASSO 3: Centralize<br>
                        Quando o carro estiver mais ou menos no lugar, 
                        você centraliza o volante e ajusta.<br><br>
                        Pronto! Baliza feita. Não é difícil, é só técnica. 
                        Você consegue! 💪<br><br>
                        Qual é sua dificuldade na baliza? Comenta aí! 👇"
                    </p>

                    <h3>Formatos que Funcionam</h3>
                    <p>
                        <strong>Vídeo:</strong> Mostre a técnica na prática (melhor engajamento)<br>
                        <strong>Carrossel:</strong> Passo a passo em imagens<br>
                        <strong>Reel:</strong> Vídeo editado com música e efeitos<br>
                        <strong>Post:</strong> Texto + imagem
                    </p>

                    <div class="highlight-box">
                        <strong>Segredo:</strong> Quanto mais específico, melhor. 
                        "Dica de direção" é genérico. "Como não errar a baliza" é específico e funciona.
                    </div>

                    <div class="tip-box">
                        <strong>✅ Ação Prática:</strong> Crie um post de dica de prova prática hoje. 
                        Escolha um tópico, estruture em 3-5 passos, poste.
                    </div>
                `
            },
            {
                id: '3-4',
                title: 'Histórias Reais de Aprovação',
                duration: '21 min',
                content: `
                    <h2>Histórias Reais de Aprovação: Prova Social Pura</h2>
                    
                    <p>
                        Nada convence mais que uma história real. Um aluno que tinha medo, aprendeu com você, 
                        e passou na prova. Isso é ouro puro.
                    </p>

                    <h3>Por que Histórias Funcionam?</h3>
                    <ul>
                        <li>Geram confiança (prova social)</li>
                        <li>Humanizam seu trabalho</li>
                        <li>Mostram resultados reais</li>
                        <li>Criam conexão emocional</li>
                        <li>Convertem muito bem</li>
                    </ul>

                    <h3>Tipos de Histórias para Contar</h3>
                    <p>
                        <strong>1. Do Medo à Aprovação:</strong> "João tinha pânico de dirigir. 
                        Hoje passou na prova!"
                    </p>
                    <p>
                        <strong>2. Da Reprovação à Aprovação:</strong> "Maria foi reprovada 2 vezes. 
                        Na terceira, com meu método, passou!"
                    </p>
                    <p>
                        <strong>3. Da Dúvida à Confiança:</strong> "Pedro achava que não conseguia. 
                        Hoje é motorista!"
                    </p>
                    <p>
                        <strong>4. Do Iniciante ao Expert:</strong> "Ana nunca tinha dirigido. 
                        Agora dirige todo dia com segurança."
                    </p>

                    <h3>Estrutura da História Perfeita</h3>
                    <p>
                        <strong>Introdução:</strong> Apresente o aluno e o problema<br>
                        <strong>Conflito:</strong> Qual era a dificuldade?<br>
                        <strong>Solução:</strong> Como você ajudou?<br>
                        <strong>Resultado:</strong> Qual foi o resultado?<br>
                        <strong>Moral:</strong> O que aprendemos?
                    </p>

                    <h3>Exemplo de História Completa</h3>
                    <p style="background: #f8fafc; padding: 1rem; border-radius: 8px; margin: 1rem 0;">
                        <strong>Título:</strong> "De reprovado a aprovado em 2 meses 🎉"<br><br>
                        <strong>História:</strong><br>
                        "Conheci o Carlos há 2 meses. Ele tinha sido reprovado 2 vezes na prova prática. 
                        Tava desanimado, achava que não conseguia.<br><br>
                        Na primeira aula, ele tava nervoso. As mãos tremendo no volante. 
                        Ele me disse: 'Instrutor, eu não consigo. Vou desistir.'<br><br>
                        Aí eu falei: 'Calma. Vamos fazer diferente. Vamos focar no que você erra, 
                        não no que você acerta.'<br><br>
                        Fizemos um plano:<br>
                        - Semana 1-2: Técnica básica<br>
                        - Semana 3-4: Manobras (baliza, estacionamento)<br>
                        - Semana 5-6: Prova simulada<br>
                        - Semana 7-8: Refinamento<br><br>
                        Resultado? Carlos passou na prova! 🎊<br><br>
                        Ele me mandou foto do resultado. Tava feliz demais. 
                        Disse que agora pode trabalhar como motorista de app.<br><br>
                        Moral da história: Não é sobre talento. É sobre método. 
                        Com a técnica certa e dedicação, qualquer um consegue.<br><br>
                        Você tá nessa situação? Chama no DM. Vamos conversar. 💪"
                    </p>

                    <h3>Depoimentos em Vídeo</h3>
                    <p>
                        Ainda melhor que texto: depoimento em vídeo. Peça para seus alunos:
                    </p>
                    <ul>
                        <li>Gravar um vídeo curto (15-30 segundos)</li>
                        <li>Contar sua história</li>
                        <li>Falar sobre você como instrutor</li>
                        <li>Recomendar para amigos</li>
                    </ul>

                    <h3>Como Pedir Depoimento</h3>
                    <p>
                        Não peça assim: "Faz um depoimento para meu Instagram?"<br>
                        Peça assim: "Fico feliz que você passou! Você teria 30 segundos para gravar 
                        um vídeo contando sua história? Vou postar para inspirar outras pessoas."
                    </p>

                    <div class="highlight-box">
                        <strong>Dica:</strong> Ofereça algo em troca. "Se você gravar um depoimento, 
                        te dou 1 aula grátis de aperfeiçoamento."
                    </div>

                    <div class="tip-box">
                        <strong>✅ Ação Prática:</strong> Escolha um aluno que passou e mande uma mensagem 
                        pedindo um depoimento. Comece a coletar histórias.
                    </div>
                `
            }
        ]
    }
};

// Estado da aplicação
let currentLesson = null;
let completedLessons = JSON.parse(localStorage.getItem('completedLessons')) || [];
let allLessons = [];

// Inicializar aplicação
document.addEventListener('DOMContentLoaded', function() {
    // Verificar se o usuário está logado
    //if (!auth.isLoggedIn()) {
    //    window.location.href = 'login.html';
    //    return;
    //}

    // Construir lista de todas as aulas
    buildLessonsList();

    // Contar total de aulas
    updateProgress();

    // Expandir primeiro módulo
    const firstModule = document.querySelector('.module-title');
    if (firstModule) {
        toggleModule(firstModule);
    }

    // Configurar navegação mobile
    setupMobileNavigation();
});

// Construir lista de todas as aulas
function buildLessonsList() {
    allLessons = [];
    Object.values(courseData).forEach(module => {
        module.lessons.forEach(lesson => {
            allLessons.push(lesson.id);
        });
    });
}

// Toggle módulos
function toggleModule(button) {
    const module = button.parentElement;
    const lessonsList = module.querySelector('.lessons-list');
    
    // Fechar outros módulos
    document.querySelectorAll('.module').forEach(m => {
        if (m !== module) {
            m.querySelector('.lessons-list').classList.remove('active');
            m.querySelector('.module-title').classList.remove('active');
        }
    });

    // Toggle módulo atual
    lessonsList.classList.toggle('active');
    button.classList.toggle('active');
}

// Carregar aula
function loadLesson(event, lessonId) {
    event.preventDefault();

    // Encontrar aula nos dados
    let lesson = null;
    Object.values(courseData).forEach(module => {
        const found = module.lessons.find(l => l.id === lessonId);
        if (found) {
            lesson = found;
        }
    });

    if (!lesson) return;

    currentLesson = lessonId;

    // Atualizar UI
    document.querySelectorAll('.lesson-link').forEach(link => {
        link.classList.remove('active');
    });
    event.target.closest('.lesson-link').classList.add('active');

    // Atualizar conteúdo
    document.getElementById('lessonTitle').textContent = lesson.title;
    document.getElementById('lessonDuration').innerHTML = `<i class="fas fa-clock"></i> ${lesson.duration}`;
    document.getElementById('lessonContent').innerHTML = lesson.content;

    // Atualizar módulo
    const moduleNum = lessonId.split('-')[0];
    const moduleName = Object.values(courseData).find(m => m.lessons.some(l => l.id === lessonId))?.title || 'Módulo';
    document.getElementById('lessonModule').textContent = moduleName.split(':')[0];

    // Atualizar botão de conclusão
    const btnComplete = document.getElementById('btnComplete');
    if (completedLessons.includes(lessonId)) {
        btnComplete.classList.add('completed');
        btnComplete.textContent = '✓ Concluída';
    } else {
        btnComplete.classList.remove('completed');
        btnComplete.innerHTML = '<i class="fas fa-check-circle"></i> Marcar como Concluída';
    }

    // Atualizar botões de navegação
    updateNavigationButtons();

    // Scroll para o topo
    document.querySelector('.course-main').scrollTop = 0;
}

// Marcar aula como concluída
function completeLesson() {
    if (!currentLesson) return;

    if (!completedLessons.includes(currentLesson)) {
        completedLessons.push(currentLesson);
        localStorage.setItem('completedLessons', JSON.stringify(completedLessons));

        // Atualizar UI
        document.getElementById('btnComplete').classList.add('completed');
        document.getElementById('btnComplete').textContent = '✓ Concluída';

        // Marcar lesson link como completo
        document.querySelector(`[data-lesson="${currentLesson}"]`).classList.add('completed');
        document.querySelector(`[data-lesson="${currentLesson}"] i`).classList.remove('fa-circle');
        document.querySelector(`[data-lesson="${currentLesson}"] i`).classList.add('fa-check-circle');

        // Atualizar progresso
        updateProgress();

        // Mostrar modal
        showCompletionModal();
    }
}

// Atualizar progresso
function updateProgress() {
    const completed = completedLessons.length;
    const total = allLessons.length;
    const percentage = Math.round((completed / total) * 100);

    document.getElementById('completedLessons').textContent = completed;
    document.getElementById('totalLessons').textContent = total;
    document.getElementById('progressPercentage').textContent = percentage + '%';
    document.getElementById('progressFill').style.width = percentage + '%';

    // Atualizar progresso de cada módulo
    updateModuleProgress();
}

// Atualizar progresso de módulos
function updateModuleProgress() {
    Object.entries(courseData).forEach(([key, module]) => {
        const completed = module.lessons.filter(l => completedLessons.includes(l.id)).length;
        const total = module.lessons.length;
        const progressText = document.querySelector(`[data-module="${key}"]`);
        if (progressText) {
            progressText.textContent = `${completed}/${total}`;
        }
    });
}

// Atualizar botões de navegação
function updateNavigationButtons() {
    const currentIndex = allLessons.indexOf(currentLesson);
    
    document.getElementById('btnPrev').disabled = currentIndex === 0;
    document.getElementById('btnNext').disabled = currentIndex === allLessons.length - 1;
}

// Próxima aula
function nextLesson() {
    const currentIndex = allLessons.indexOf(currentLesson);
    if (currentIndex < allLessons.length - 1) {
        const nextLessonId = allLessons[currentIndex + 1];
        const link = document.querySelector(`[data-lesson="${nextLessonId}"]`);
        if (link) link.click();
    }
}

// Aula anterior
function previousLesson() {
    const currentIndex = allLessons.indexOf(currentLesson);
    if (currentIndex > 0) {
        const prevLessonId = allLessons[currentIndex - 1];
        const link = document.querySelector(`[data-lesson="${prevLessonId}"]`);
        if (link) link.click();
    }
}

// Mostrar modal de conclusão
function showCompletionModal() {
    const modal = document.getElementById('completionModal');
    modal.classList.add('active');

    setTimeout(() => {
        modal.classList.remove('active');
    }, 3000);
}

// Fechar modal
function closeModal() {
    document.getElementById('completionModal').classList.remove('active');
}

// Configurar navegação mobile
function setupMobileNavigation() {
    // Adicionar botão de toggle do sidebar em mobile
    const header = document.querySelector('.navbar');
    if (window.innerWidth <= 768) {
        // Sidebar já é responsiva via CSS
    }
}

// Logout
function logout() {
    if (confirm('Tem certeza que deseja sair?')) {
        auth.logout();
        window.location.href = 'index.html';
    }
}
