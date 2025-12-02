# Sales Machine - Versão Demonstração 🎭

> **⚠️ ATENÇÃO: Esta é uma versão de demonstração com dados fictícios**

## 📋 Sobre esta versão

Esta é uma versão de demonstração do sistema Sales Machine, criada especificamente para apresentações e testes. 

### Características desta versão:

- ✅ **Sem autenticação**: Acesso direto sem necessidade de login
- ✅ **Dados fictícios**: Todos os dados são gerados aleatoriamente
- ✅ **Sem banco de dados**: Não há conexão com PostgreSQL ou qualquer banco de dados
- ✅ **Modo offline**: Funciona completamente sem APIs externas
- ✅ **Usuário demo**: Simula um usuário com perfil GESTOR_MASTER (acesso total)

## 🚀 Como executar

```bash
# Instalar dependências
npm install

# Executar em modo desenvolvimento
npm run dev

# Acessar o sistema
http://localhost:3000
```

## 📊 Dados disponíveis

O sistema inclui dados mockados para:

- 150 clientes fictícios
- 5 vendedores
- 3 filiais
- 500 notas fiscais
- Indicadores de vendas (receita, ticket médio, etc.)
- Rankings de performance
- Análises RFV (Recência, Frequência, Valor)
- Dados de carteira de clientes

## 🎯 Funcionalidades demonstradas

- **Dashboard completo** com KPIs e gráficos
- **Mapa de vendas** por região
- **Carteira de vendedores** com histórico
- **Gestão de clientes** com análise RFV
- **Rankings de performance**
- **Associações** cliente-vendedor
- **Interface de IA** (simulada)

## 🔧 Modificações da versão original

### Arquivos alterados:

1. **`src/middleware.ts`**: Autenticação desabilitada, usuário demo injetado
2. **`src/app/layout.tsx`**: Remoção de verificações de login
3. **`src/app/page.tsx`**: Remoção de redirecionamentos
4. **`src/components/DataProvider.tsx`**: Substituição de APIs por dados mockados
5. **`lib/mock-data.ts`**: Arquivo novo com todos os dados fictícios

### O que foi removido:

- ❌ Sistema de autenticação JWT
- ❌ Conexões com banco de dados (Prisma/Supabase)
- ❌ Middleware de permissões
- ❌ Rotas de API reais
- ❌ Página de login

## 📝 Notas importantes

- Esta versão **NÃO deve ser usada em produção**
- Os dados são **completamente fictícios**
- Nenhuma informação é persistida
- Refresh na página reseta todos os dados para o estado inicial

## 🔄 Voltando para a versão original

Se você precisar restaurar a versão original com autenticação e banco de dados, faça um checkout do branch principal do repositório original.

## 📞 Suporte

Para mais informações sobre o sistema completo, entre em contato com o desenvolvedor.

---

**Versão Demo** • Criada para apresentações e demonstrações • Sem conexão com dados reais
