import { NextResponse } from 'next/server';
import type { NextRequest } from 'next/server';

// 🎭 MODO DEMONSTRAÇÃO - Middleware simplificado
// Em modo demo, apenas permite todos os requests

export function middleware(request: NextRequest) {
  return NextResponse.next();
}

export const config = {
  matcher: [
    '/((?!_next/static|_next/image|favicon.ico|manifest.json|sw.js).*)',
  ],
};
