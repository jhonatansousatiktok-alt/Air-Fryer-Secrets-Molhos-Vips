# PROMPT MESTRE: Criação do InfoApp "Air Fryer Secrets + Pack Secreto de 40 Molhos"

Copie e cole o texto abaixo diretamente no seu assistente de código de IA (Cursor, Claude 3.5 Sonnet, v0.dev ou GPT-4o):

```
Você é um Arquiteto de Software Fullstack e Especialista em UI/UX para InfoApps de alta conversão no mercado digital (Low-Ticket, Funis de Infoprodutos, Order Bumps e Retenção).

Sua missão é desenvolver o código frontend completo e funcional de um **InfoApp de Culinária Interativa e Área de Membros** mobile-first intitulado:
**"Air Fryer Secrets: 60 Receitas Virais dos EUA + Pack Secreto de 40 Molhos & Dips"**

---

### O CONCEITO DE INFOAPP (INFOPRODUTO + APLICATIVO)
Este produto digital substitui o tradicional PDF estático por uma aplicação web progressiva (PWA) de alto valor percebido:
1. **Área de Membros com Gating Nativado:** Separação clara entre o produto de entrada (60 receitas virais) e o Order Bump / Bônus VIP (**Pack Secreto com os 40 Molhos Americanos**).
2. **Upsell Contextual Fluido:** O usuário visualiza os 40 molhos na interface. Se não adquiriu o pacote, os cards apresentam cadeado e abrem um modal nativo de checkout/desbloqueio (ex: "Desbloquear 40 Molhos por R$ 19,90").
3. **Cross-Sell Integrado nas Receitas:** Toda receita das 60 principais recomenda automaticamente 1 a 2 molhos ideais do pack de 40.
4. **Utilitários Ativos de Cozinha:** Calculadora de porções escalável (1x, 2x, 4x), timer com alertas sonoros sincronizados e lista de compras inteligente com exportação para WhatsApp.
5. **Gamificação e Engajamento:** Contador global de progresso ("X de 60 dominadas"), status de "Receita Concluída" e sistema de favoritos.

---

### 1. STACK TECNOLÓGICA & ESPECIFICAÇÃO
- **Framework:** React (Next.js App Router ou Vite + React em Single-File / SPA modular).
- **Estilo:** Tailwind CSS (Mobile-First, design system elegante com tons de carvão/cinza escuro, toques de laranja queimado/âmbar, suporte a Dark Mode).
- **Ícones:** Lucide React (`Flame`, `Clock`, `Lock`, `Unlock`, `CheckCircle2`, `Bookmark`, `Sparkles`, `ShoppingBag`, `ChefHat`, `Share2`, `Search`, `SlidersHorizontal`).
- **Persistência Local (Offline Ready):** `localStorage` para:
  - `hasUnlockedMolhos: boolean` (Flag de acesso aos 40 molhos).
  - `completedRecipes: number[]` (IDs das receitas preparadas).
  - `favorites: number[]` (IDs favoritos).
  - `shoppingList: string[]` (Lista de compras ativa).
- **Áudio:** Web Audio API sintético para os bips do timer da Air Fryer (sem dependência de arquivos MP3 externos).

---

### 2. ARQUITETURA DE DADOS (JSON ESTRUTURADO)

Crie um arquivo ou objeto de dados robusto `appData.js`:
- **60 Receitas Principais** divididas nos 6 Capítulos originais:
  - Cap 1: Pequenos Petiscos (1 a 10) - ex: Pasta Chips, Twisted Bacon, Palitos de Mussarela.
  - Cap 2: Surpresas Crocantes (11 a 20) - ex: Crookies, Hot Dog Coreano, Dumplings.
  - Cap 3: Fusão e Inovações (21 a 30) - ex: Birria Tacos, Yuca Frita, Pollo Campero.
  - Cap 4: O Lado Doce (31 a 40) - ex: Cheesecake Basco, Vulcão de Chocolate, Cookies.
  - Cap 5: Versões de Fast-Food (41 a 50) - ex: Smash Burger, Tenders, Onion Rings.
  - Cap 6: Reaquecimento & Mestre (51 a 60) - ex: Pizza Revivida, Salgados de Festa, Hash.
  *Cada receita contém:* `id`, `capitulo`, `titulo`, `subtitulo`, `tempoPreparo`, `tempoAirFryer` (min), `temperatura` (°C), `rendimento`, `ingredientes: [{ nome, qtd, unidade }]`, `passos: string[]`, `dicaDoChef: string`, `molhosSugeridosIds: [idMolho1, idMolho2]`.

- **40 Molhos & Dips Secretos** divididos nas 4 Categorias:
  - Cat 1: Ícones de Fast-Food (1 a 10) - ShackBurger, Chick-Style, Cane's Dip, Big Icon, Outback Onion, Popeyes Cajun Ranch, Wendy's Sriracha, In-N-Out Animal Style, Mojo Mayo, Bacon Jam.
  - Cat 2: Wings, Barbecue & Queijos (11 a 20) - Buffalo Amanteigado, BBQ Goiabada, Ranch Clássico, Blue Cheese, Cheddar Melt, Mango Habanero, Garlic Parmesan, Carolina Gold, Alabama White, Spicy Queso Blanco.
  - Cat 3: Dips Cremosos, Ervas & Alho (21 a 30) - Honey Mustard, Maionese Verde, Aioli de Alho Assado, Maionese de Bacon, Guacamole Express, Chimichurri Cremoso, Tzatziki Diner, Avocado Lime, Dill Tartar, Cilantro Lime Ranch.
  - Cat 4: Fusões Orientais & Picantes (31 a 40) - Sour Cream Tropical, Sweet Chili, Bang Bang Dip, Tártaro Rústico, Consommé Express, Spicy Yum Yum, Hot Honey, Korean Gochujang Glaze, Nashville Hot Oil, Maple Dijon.
  *Cada molho contém:* `id`, `titulo`, `categoria`, `estilo`, `tempoPreparo`, `ingredientes: string[]`, `passos: string[]`, `receitasCompativeisIds: number[]`.

---

### 3. NAVEGAÇÃO & TELAS PRINCIPAIS (BOTTOM NAV)

#### Aba 1: 🏠 Início (Dashboard do Aluno)
- Header com saudação e barra de progresso gamificada ("X de 60 receitas virais preparadas").
- Card de Destaque: "Receita do Dia" com botão de acesso rápido.
- Carrossel horizontal com os 6 Capítulos temáticos com badges de conclusão.
- **Banner de Upsell Nativo (Se `hasUnlockedMolhos === false`):**
  - "🔥 DESBLOQUEIE O PACK COMPLETO: 40 Molhos Secretos dos EUA para acompanhar seus pratos por apenas R$ 19,90".

#### Aba 2: 📖 Receitas (Explorador Interativo)
- Barra de busca instantânea com filtro por tempo de preparo, temperatura e capítulo.
- Cards das 60 receitas exibindo tempo de cesto, temperatura e tag de concluída.
- Toggle para filtrar apenas "Favoritas" ou "Já Preparadas".

#### Aba 3: 🥫 40 Molhos (Área VIP do Order Bump)
- Grid dos 40 molhos com filtros por categoria (Fast-Food, Wings & BBQ, Cremosos, Picantes).
- **Lógica de Gating:**
  - Se `hasUnlockedMolhos === true`: Acesso imediato a todas as fichas técnicas com modo de preparo.
  - Se `hasUnlockedMolhos === false`: Cards com visual "blur/cadeado dourado". Ao clicar, abre o **Modal de Oferta Irrecusável** com os benefícios dos 40 molhos, garantia, gatilhos de ancoragem e botão de checkout simulado ("Desbloquear Acesso VIP").
  - Botão discreto no topo/rodapé: *"Simular Aluno VIP / Aluno Padrão"* para testar os dois fluxos.

#### Aba 4: 🍳 Cozinha & Ferramentas
- **Air Fryer Timer Pro:**
  - Seletor de minutos e temperatura.
  - Botão de Início com contagem regressiva visual.
  - Alerta intermediário sonoro configurável: "Hora de sacudir a cesta!".
  - Alerta final com bipes contínuos.
- **Lista de Compras Inteligente:**
  - Ingredientes adicionados diretamente a partir das receitas.
  - Checkbox para riscar itens no mercado.
  - Botão "Compartilhar Lista no WhatsApp".

---

### 4. TELA/MODAL DA RECEITA (MODO EXECUÇÃO)
- Header imersivo com tempo total, tempo de cesto e temperatura em destaque.
- **Calculadora de Porções:** `[ 1x ]` `[ 2x ]` `[ 4x ]` recalculando dinamicamente os ingredientes numéricos.
- **Cross-Sell de Molhos Contextual:**
  - Seção: *"Molhos que combinam com este prato:"*
  - Exibe os badges dos molhos recomendados. Clicar leva direto à ficha do molho (ou abre o modal de checkout se bloqueado).
- **Timer Rápido:** Botão `[ Iniciar Timer da Receita ]` que transfere o tempo exato para o temporizador.
- **Botão Gamificado:** `[ Marcar como Preparada 🎉 ]` com animação de celebração e incremento de estatística.

---

### 5. DESIGN & DIRETRIZES VISUAIS
- Tipografia limpa com hierarquia clara (estilo app nativo iOS/Android).
- Feedback tátil visual em botões e seletores (efeitos de clique e transições suaves).
- Banner discreto na base sugerindo adicionar o app à tela inicial do celular (PWA prompt).
- O código deve ser entregue completo, modularizado ou em arquivo único executável, pronto para rodar sem erros de compilação.
```