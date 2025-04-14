import { NextResponse } from 'next/server';
import type { NextRequest } from 'next/server';

export function middleware(request: NextRequest) {
  const { pathname } = request.nextUrl;

  // Rediriger la page d'accueil vers /auth
  if (pathname === '/') {
    return NextResponse.redirect(new URL('/auth', request.url));
  }

  // Pour l'instant, on laisse passer toutes les autres routes
  return NextResponse.next();
}

export const config = {
  matcher: ['/((?!api|_next/static|_next/image|favicon.ico).*)'],
}; 