import { NextRequest, NextResponse } from 'next/server';

// 🎭 MODO DEMONSTRAÇÃO - AUTENTICAÇÃO DESABILITADA
// Este middleware apenas injeta um usuário fictício GESTOR_MASTER para todos os acessos

export async function middleware(request: NextRequest) {
  const { pathname } = request.nextUrl;
  
  // Permitir todos os recursos estáticos
  if (pathname.startsWith('/_next') || 
      pathname.startsWith('/favicon.ico') || 
      pathname.startsWith('/manifest.json') || 
      pathname.startsWith('/sw.js')) {
    return NextResponse.next();
  }

  // Injetar usuário demo fictício com permissões máximas em todos os requests
  const requestHeaders = new Headers(request.headers);
  requestHeaders.set('x-user-id', '1');
  requestHeaders.set('x-user-role', 'GESTOR_MASTER');
  requestHeaders.set('x-user-empresa-id', '1');
  requestHeaders.set('x-user-diretoria-id', '1');
  requestHeaders.set('x-user-regional-id', '1');
  requestHeaders.set('x-user-filial-id', '1');
  requestHeaders.set('x-user-cpf', '000.000.000-00');
  requestHeaders.set('x-vendedor-id', '1');
  requestHeaders.set('x-vendedor-nome', 'Usuário Demo');

  return NextResponse.next({
    request: {
      headers: requestHeaders,
    },
  });
}

export const config = {
  matcher: [
    /*
     * Match all request paths except for the ones starting with:
     * - _next/static (static files)
     * - _next/image (image optimization files)
     * - favicon.ico (favicon file)
     */
    '/((?!_next/static|_next/image|favicon.ico).*)',
  ],
};