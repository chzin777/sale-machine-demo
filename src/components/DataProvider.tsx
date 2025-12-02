"use client";

import React, { createContext, useContext, useEffect, useState, useCallback, ReactNode } from "react";
import {
  mockIndicadores,
  mockReceitaMensal,
  mockReceitaPorTipo,
  mockVendasPorFilial,
  mockNotasFiscais,
} from "../../lib/mock-data";

type ReceitaMensal = {
  ano: number;
  receitaPorMes: Record<string, number>;
};
type ReceitaPorTipo = { tipo: string; receita: number }[];
type VendaPorFilial = { filial: { nome: string }; receitaTotal: number; quantidadeNotas: number }[];

interface DataContextType {
  receitaTotal: number | null;
  ticketMedio: number | null;
  itensVendidos: number | null;
  numeroNotas: number | null;
  itensP95PorNota: number | null;
  receitaMensal: ReceitaMensal | null;
  receitaPorTipo: ReceitaPorTipo;
  vendasPorFilial: VendaPorFilial;
  clientesAtivos: number | null;
  clientesInativos: number | null;
  loading: boolean;
  error: string | null;
  refetch: () => void;
}

const DataContext = createContext<DataContextType | undefined>(undefined);

export function DataProvider({ children }: { children: ReactNode }) {
  const [loading, setLoading] = useState(true);

  // Calcular itens P95 por nota
  const itensP95 = (() => {
    const quantidades = mockNotasFiscais.map(nf => nf.quantidadeItens).sort((a, b) => a - b);
    const p95Index = Math.floor(quantidades.length * 0.95);
    return quantidades[p95Index] || 0;
  })();

  const [data] = useState<Omit<DataContextType, 'refetch'>>({
    receitaTotal: mockIndicadores.receitaTotal,
    ticketMedio: mockIndicadores.ticketMedio,
    itensVendidos: mockIndicadores.itensVendidos,
    numeroNotas: mockIndicadores.numeroNotas,
    itensP95PorNota: itensP95,
    receitaMensal: mockReceitaMensal,
    receitaPorTipo: mockReceitaPorTipo,
    vendasPorFilial: mockVendasPorFilial,
    clientesAtivos: mockIndicadores.clientesAtivos,
    clientesInativos: mockIndicadores.clientesInativos,
    loading: false,
    error: null,
  });

  const refetch = useCallback(() => {
    // Em modo demo, não há necessidade de refetch
    console.log('🎭 Refetch chamado (modo demo - sem ação)');
  }, []);

  // Simular carregamento inicial
  useEffect(() => {
    const timer = setTimeout(() => {
      setLoading(false);
    }, 500);
    return () => clearTimeout(timer);
  }, []);

  const contextValue: DataContextType = {
    ...data,
    loading,
    refetch
  };

  return (
    <DataContext.Provider value={contextValue}>
      {children}
    </DataContext.Provider>
  );
}

export function useData() {
  const context = useContext(DataContext);
  if (context === undefined) {
    throw new Error('useData must be used within a DataProvider');
  }
  return context;
}
