/**
 * 🎭 DADOS FICTÍCIOS PARA DEMONSTRAÇÃO
 * Este arquivo contém todos os dados mockados para o projeto de demonstração
 */

// Dados de vendedores
export const mockVendedores = [
  { id: 1, nome: "João Silva", cpf: "123.456.789-00", email: "joao@demo.com", filialId: 1, status: "ATIVO" },
  { id: 2, nome: "Maria Santos", cpf: "987.654.321-00", email: "maria@demo.com", filialId: 1, status: "ATIVO" },
  { id: 3, nome: "Pedro Costa", cpf: "456.789.123-00", email: "pedro@demo.com", filialId: 2, status: "ATIVO" },
  { id: 4, nome: "Ana Paula", cpf: "789.123.456-00", email: "ana@demo.com", filialId: 2, status: "ATIVO" },
  { id: 5, nome: "Carlos Mendes", cpf: "321.654.987-00", email: "carlos@demo.com", filialId: 3, status: "ATIVO" },
];

// Dados de clientes
export const mockClientes = Array.from({ length: 150 }, (_, i) => ({
  id: i + 1,
  nome: `Cliente ${i + 1}`,
  cnpj: `${String(i + 1).padStart(2, '0')}.${String(i + 1).padStart(3, '0')}.${String(i + 1).padStart(3, '0')}/0001-${String(i + 1).padStart(2, '0')}`,
  cidade: ["São Paulo", "Rio de Janeiro", "Belo Horizonte", "Curitiba", "Porto Alegre"][i % 5],
  estado: ["SP", "RJ", "MG", "PR", "RS"][i % 5],
  status: i % 10 === 0 ? "INATIVO" : "ATIVO",
  ultimaCompra: i % 10 === 0 
    ? new Date(Date.now() - 100 * 24 * 60 * 60 * 1000).toISOString() // 100 dias atrás
    : new Date(Date.now() - (i % 30) * 24 * 60 * 60 * 1000).toISOString(),
  vendedorId: (i % 5) + 1,
  filialId: (i % 3) + 1,
}));

// Dados de filiais
export const mockFiliais = [
  { id: 1, nome: "Filial São Paulo", cidade: "São Paulo", estado: "SP", regionalId: 1 },
  { id: 2, nome: "Filial Rio de Janeiro", cidade: "Rio de Janeiro", estado: "RJ", regionalId: 1 },
  { id: 3, nome: "Filial Belo Horizonte", cidade: "Belo Horizonte", estado: "MG", regionalId: 2 },
];

// Dados de notas fiscais
export const mockNotasFiscais = Array.from({ length: 500 }, (_, i) => {
  const mes = (i % 12) + 1;
  const dia = (i % 28) + 1;
  const ano = 2024;
  const valorNota = Math.random() * 5000 + 500;
  const quantidadeItens = Math.floor(Math.random() * 10) + 1;
  
  return {
    id: i + 1,
    numero: `NF${String(i + 1).padStart(6, '0')}`,
    data: `${ano}-${String(mes).padStart(2, '0')}-${String(dia).padStart(2, '0')}`,
    valor: valorNota,
    clienteId: (i % 150) + 1,
    vendedorId: (i % 5) + 1,
    filialId: (i % 3) + 1,
    quantidadeItens,
    itens: Array.from({ length: quantidadeItens }, (_, j) => ({
      id: `${i}-${j}`,
      descricao: ["Produto A", "Produto B", "Produto C", "Serviço X", "Serviço Y"][j % 5],
      quantidade: Math.floor(Math.random() * 10) + 1,
      valorUnitario: Math.random() * 500 + 50,
      tipo: j % 2 === 0 ? "PRODUTO" : "SERVICO",
    })),
  };
});

// Indicadores calculados
export const mockIndicadores = {
  receitaTotal: mockNotasFiscais.reduce((acc, nf) => acc + nf.valor, 0),
  numeroNotas: mockNotasFiscais.length,
  ticketMedio: mockNotasFiscais.reduce((acc, nf) => acc + nf.valor, 0) / mockNotasFiscais.length,
  itensVendidos: mockNotasFiscais.reduce((acc, nf) => acc + nf.quantidadeItens, 0),
  clientesAtivos: mockClientes.filter(c => c.status === "ATIVO").length,
  clientesInativos: mockClientes.filter(c => c.status === "INATIVO").length,
};

// Receita mensal
export const mockReceitaMensal = {
  ano: 2024,
  receitaPorMes: {
    "Janeiro": mockNotasFiscais.filter(nf => nf.data.includes("-01-")).reduce((acc, nf) => acc + nf.valor, 0),
    "Fevereiro": mockNotasFiscais.filter(nf => nf.data.includes("-02-")).reduce((acc, nf) => acc + nf.valor, 0),
    "Março": mockNotasFiscais.filter(nf => nf.data.includes("-03-")).reduce((acc, nf) => acc + nf.valor, 0),
    "Abril": mockNotasFiscais.filter(nf => nf.data.includes("-04-")).reduce((acc, nf) => acc + nf.valor, 0),
    "Maio": mockNotasFiscais.filter(nf => nf.data.includes("-05-")).reduce((acc, nf) => acc + nf.valor, 0),
    "Junho": mockNotasFiscais.filter(nf => nf.data.includes("-06-")).reduce((acc, nf) => acc + nf.valor, 0),
    "Julho": mockNotasFiscais.filter(nf => nf.data.includes("-07-")).reduce((acc, nf) => acc + nf.valor, 0),
    "Agosto": mockNotasFiscais.filter(nf => nf.data.includes("-08-")).reduce((acc, nf) => acc + nf.valor, 0),
    "Setembro": mockNotasFiscais.filter(nf => nf.data.includes("-09-")).reduce((acc, nf) => acc + nf.valor, 0),
    "Outubro": mockNotasFiscais.filter(nf => nf.data.includes("-10-")).reduce((acc, nf) => acc + nf.valor, 0),
    "Novembro": mockNotasFiscais.filter(nf => nf.data.includes("-11-")).reduce((acc, nf) => acc + nf.valor, 0),
    "Dezembro": mockNotasFiscais.filter(nf => nf.data.includes("-12-")).reduce((acc, nf) => acc + nf.valor, 0),
  },
};

// Receita por tipo de produto
export const mockReceitaPorTipo = [
  {
    tipo: "PRODUTO",
    receita: mockNotasFiscais.reduce((acc, nf) => {
      const produtosNf = nf.itens.filter(item => item.tipo === "PRODUTO");
      return acc + produtosNf.reduce((sum, item) => sum + (item.quantidade * item.valorUnitario), 0);
    }, 0),
  },
  {
    tipo: "SERVICO",
    receita: mockNotasFiscais.reduce((acc, nf) => {
      const servicosNf = nf.itens.filter(item => item.tipo === "SERVICO");
      return acc + servicosNf.reduce((sum, item) => sum + (item.quantidade * item.valorUnitario), 0);
    }, 0),
  },
];

// Vendas por filial
export const mockVendasPorFilial = mockFiliais.map(filial => ({
  filial: { nome: filial.nome },
  receitaTotal: mockNotasFiscais
    .filter(nf => nf.filialId === filial.id)
    .reduce((acc, nf) => acc + nf.valor, 0),
  quantidadeNotas: mockNotasFiscais.filter(nf => nf.filialId === filial.id).length,
}));

// Ranking de vendedores
export const mockRankingVendedores = mockVendedores.map((vendedor, index) => {
  const notasVendedor = mockNotasFiscais.filter(nf => nf.vendedorId === vendedor.id);
  const receitaTotal = notasVendedor.reduce((acc, nf) => acc + nf.valor, 0);
  const ticketMedio = notasVendedor.length > 0 ? receitaTotal / notasVendedor.length : 0;
  const meta = 100000 + (index * 20000); // Meta fictícia
  const percentualMeta = (receitaTotal / meta) * 100;
  const crescimento = Math.random() * 40 - 10; // -10% a +30%
  const ultimaNota = notasVendedor.sort((a, b) => new Date(b.data).getTime() - new Date(a.data).getTime())[0];
  
  // Cores para os avatares
  const cores = ['#003153', '#0066CC', '#9333EA', '#059669', '#DC2626'];
  
  return {
    id: vendedor.id,
    nome: vendedor.nome,
    avatar: vendedor.nome.split(' ').map(n => n[0]).join('').toUpperCase().slice(0, 2),
    receita: receitaTotal,
    volume: notasVendedor.length,
    ticketMedio,
    meta,
    percentualMeta,
    crescimento,
    tendencia: crescimento >= 0 ? 'up' : 'down' as 'up' | 'down',
    ultimaVenda: ultimaNota ? ultimaNota.data : new Date().toISOString(),
    posicao: index + 1,
    cor: cores[index % cores.length],
  };
}).sort((a, b) => b.receita - a.receita)
  .map((v, idx) => ({ ...v, posicao: idx + 1 })); // Reordenar posições após sort

// Dados de RFV (Recência, Frequência, Valor)
export const mockDadosRFV = mockClientes.map(cliente => {
  const notasCliente = mockNotasFiscais.filter(nf => nf.clienteId === cliente.id);
  const receitaTotal = notasCliente.reduce((acc, nf) => acc + nf.valor, 0);
  const ultimaNota = notasCliente.sort((a, b) => new Date(b.data).getTime() - new Date(a.data).getTime())[0];
  const diasDesdeUltimaCompra = ultimaNota 
    ? Math.floor((Date.now() - new Date(ultimaNota.data).getTime()) / (1000 * 60 * 60 * 24))
    : 999;
  
  return {
    clienteId: cliente.id,
    clienteNome: cliente.nome,
    recencia: diasDesdeUltimaCompra,
    frequencia: notasCliente.length,
    valor: receitaTotal,
    scoreR: diasDesdeUltimaCompra <= 30 ? 5 : diasDesdeUltimaCompra <= 60 ? 4 : diasDesdeUltimaCompra <= 90 ? 3 : diasDesdeUltimaCompra <= 180 ? 2 : 1,
    scoreF: notasCliente.length >= 10 ? 5 : notasCliente.length >= 7 ? 4 : notasCliente.length >= 5 ? 3 : notasCliente.length >= 3 ? 2 : 1,
    scoreV: receitaTotal >= 50000 ? 5 : receitaTotal >= 30000 ? 4 : receitaTotal >= 15000 ? 3 : receitaTotal >= 5000 ? 2 : 1,
  };
});

// Carteira de vendedores
export const mockCarteiraVendedor = mockVendedores.map(vendedor => {
  const clientesVendedor = mockClientes.filter(c => c.vendedorId === vendedor.id);
  const notasVendedor = mockNotasFiscais.filter(nf => nf.vendedorId === vendedor.id);
  
  return {
    vendedorId: vendedor.id,
    vendedorNome: vendedor.nome,
    totalClientes: clientesVendedor.length,
    clientesAtivos: clientesVendedor.filter(c => c.status === "ATIVO").length,
    clientesInativos: clientesVendedor.filter(c => c.status === "INATIVO").length,
    receitaTotal: notasVendedor.reduce((acc, nf) => acc + nf.valor, 0),
    clientes: clientesVendedor.map(cliente => ({
      id: cliente.id,
      nome: cliente.nome,
      cidade: cliente.cidade,
      estado: cliente.estado,
      status: cliente.status,
      ultimaCompra: cliente.ultimaCompra,
    })),
  };
});

// Dados de IA / Machine Learning (simulados)
export const mockPredicoes = {
  churnPrediction: mockClientes.slice(0, 20).map(cliente => ({
    clienteId: cliente.id,
    clienteNome: cliente.nome,
    probabilidadeChurn: Math.random() * 100,
    risco: Math.random() > 0.7 ? "ALTO" : Math.random() > 0.4 ? "MEDIO" : "BAIXO",
  })),
  salesForecast: {
    proximoMes: mockIndicadores.receitaTotal * (1 + (Math.random() * 0.2 - 0.1)),
    confianca: 0.85,
    tendencia: "CRESCIMENTO",
  },
  clusters: [
    { cluster: "Clientes Premium", total: 45, receitaMedia: 35000 },
    { cluster: "Clientes Regulares", total: 80, receitaMedia: 15000 },
    { cluster: "Clientes Ocasionais", total: 25, receitaMedia: 5000 },
  ],
};

// Configuração padrão de inatividade
export const mockConfiguracaoInatividade = {
  diasSemCompra: 90,
  empresaId: 1,
};
