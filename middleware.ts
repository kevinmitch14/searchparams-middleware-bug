import { NextResponse } from "next/server";
import type { NextRequest } from "next/server";

export function middleware(request: NextRequest) {
  const { pathname } = request.nextUrl;
  const subdomain = request.headers.get("host")!.replace(".localhost:3000", "");
  if (subdomain === "app") {
    return NextResponse.rewrite(
      new URL(`/${subdomain}${pathname}`, request.url)
    );
  }
}

export const config = {
  matcher: ["/((?!api|_next/static|_next/image|favicon.ico).*)"],
};
