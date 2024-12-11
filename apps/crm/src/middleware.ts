import { NextResponse } from 'next/server';
import type { NextRequest } from 'next/server';

export function middleware(req: NextRequest) {
    const url = req.nextUrl.clone();
    const token = req.cookies.get('AuthToken');

    const protectedPaths = ['/blog', '/shop'];

    console.log(url.pathname);

    if (protectedPaths.some(path => url.pathname.startsWith(path)) || url.pathname === '/') {
        if (!token) {
            url.pathname = '/login';
            return NextResponse.redirect(url);
        }
    }

    if (url.pathname === '/login') {
        if (token) {
            url.pathname = '/';
            return NextResponse.redirect(url);
        }
    }

    return NextResponse.next();
}
