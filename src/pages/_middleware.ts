import { NextRequest, NextResponse } from 'next/server';
import jwt from 'jsonwebtoken';
import { public_only_urls, login_url, protected_urls } from '@/utils/config';

export function middleware(req: NextRequest) {
  // Add the user token to the response
  const token = req.cookies;

  let expired = true;
  if (token && token.jwtoken) {
    const decodedToken = jwt.decode(token.jwtoken, { complete: true });
    const dateNow = new Date();
    if (
      decodedToken &&
      decodedToken.payload &&
      typeof decodedToken.payload != 'string' &&
      decodedToken.payload.exp &&
      decodedToken.payload.exp >= dateNow.getTime() / 1000
    ) {
      expired = false;
    }
  }

  const request_protected = protected_urls.includes(req.nextUrl.pathname);

  if (expired && request_protected) {
    return NextResponse.redirect(req.nextUrl.origin + login_url);
  } else {
    return NextResponse.next();
  }
}
