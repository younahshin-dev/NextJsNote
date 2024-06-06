import { NextRequest, NextResponse } from "next/server";

export function middleware(request: NextRequest) {
  console.log('미들웨어 실행 되고 있음! 체크중!!');
  if (request.nextUrl.pathname.startsWith('/products/1004')) {
    console.log('미들웨어 경로를 리다이렉팅함!');
    return NextResponse.redirect(new URL('products', request.url));
  }
}

//특정 경로에 대해서만 미들웨어 실행 할경우 매쳐를 설정
export const config = {
  matcher: ['/products/:path*'],
}