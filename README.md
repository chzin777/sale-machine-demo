# Sales Machine — Versão Demonstração

Versão de **demonstração** do painel [Seller Machine](https://github.com/chzin777/seller-machine), feita para apresentações comerciais: mesmas telas (indicadores, clientes, carteira de vendedores, mapa de vendas, segmentação RFV e módulos de IA), mas rodando **só com dados fictícios**.

**Produção:** https://sale-machine-demo.vercel.app

## O que muda em relação ao painel real

- **Sem login:** entra direto com um usuário simulado de perfil `GESTOR_MASTER` (acesso total)
- **Sem banco e sem APIs externas:** todos os dados vêm de `lib/mock-data.ts`
- Funciona offline

Detalhes em [`README-DEMO.md`](README-DEMO.md) e [`MUDANCAS-DEMO.md`](MUDANCAS-DEMO.md).

## Stack

- [Next.js 15](https://nextjs.org) (App Router) + React 19 + TypeScript
- Tailwind CSS 4 + Radix UI / shadcn
- Recharts (gráficos), Leaflet (mapa), GSAP e Motion

## Como rodar

```bash
npm install
npm run dev      # http://localhost:3000
npm run build
npm run start
```

Nenhuma variável de ambiente é necessária. Guia rápido em [`INICIO-RAPIDO.md`](INICIO-RAPIDO.md).

## Editando os dados fictícios

Altere `lib/mock-data.ts` para mudar empresas, filiais, vendedores, clientes e indicadores exibidos.

## Deploy

Vercel — cada push na `main` publica automaticamente.
