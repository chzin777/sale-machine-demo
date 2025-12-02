# 🚀 Guia Rápido - Sales Machine Demo

## ⚡ Início Rápido

```bash
# 1. Instalar dependências
npm install

# 2. Executar em desenvolvimento
npm run dev

# 3. Abrir navegador
# http://localhost:3000
```

## 🎯 O Que Esperar

Ao abrir o projeto, você verá:

- ✅ Banner amarelo no topo indicando "MODO DEMONSTRAÇÃO"
- ✅ Acesso direto ao dashboard (sem login)
- ✅ Sidebar lateral com navegação
- ✅ Usuário demo: "Usuário Demo" (perfil GESTOR_MASTER)
- ✅ Todos os gráficos e KPIs funcionando com dados fictícios

## 📊 Páginas Disponíveis

- **/** - Dashboard principal com KPIs e gráficos
- **/mapa-vendas** - Visualização geográfica de vendas
- **/carteira-vendedor** - Gestão de carteira de clientes
- **/clientes** - Lista de clientes
- **/associacoes** - Associações cliente-vendedor
- **/ia** - Interface de Inteligência Artificial
- **/usuarios** - Gestão de usuários

## 🎭 Características Demo

- **Sem Login**: Acesso direto
- **Dados Fictícios**: 150 clientes, 5 vendedores, 500 notas fiscais
- **Offline**: Funciona sem internet
- **Sem Banco**: Não precisa de PostgreSQL
- **Usuário Admin**: Acesso total a todas as funcionalidades

## ⚠️ Importante

- Os dados são **sempre os mesmos**
- Nenhuma alteração é salva
- Refresh da página reseta tudo
- **NÃO use em produção**

## 🆘 Problemas?

### Erro de porta ocupada
```bash
# Matar processo na porta 3000
npx kill-port 3000

# Ou usar porta diferente
npm run dev -- -p 3001
```

### Erro de dependências
```bash
# Limpar cache e reinstalar
rm -rf node_modules package-lock.json
npm install
```

### Erro de compilação TypeScript
```bash
# Verificar versão do Node
node --version  # Deve ser >= 18

# Limpar build
rm -rf .next
npm run dev
```

## 📚 Mais Informações

- Leia `README-DEMO.md` para detalhes completos
- Veja `MUDANCAS-DEMO.md` para lista de modificações
- Entre em contato se precisar de ajuda

---

**Versão**: Demo 1.0 | **Data**: Novembro 2025
