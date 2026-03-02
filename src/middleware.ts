import { NextRequest, NextResponse } from "next/server";

export function middleware(request: NextRequest) {
  const hostname = request.headers.get("host") || "";
  const url = request.nextUrl.clone();

  // Dev mode: ?_slug=xxx para probar sin subdominios
  if (process.env.NODE_ENV === "development") {
    const slugOverride = url.searchParams.get("_slug");
    if (slugOverride) {
      url.pathname = `/site/${slugOverride}${url.pathname === "/" ? "" : url.pathname}`;
      url.searchParams.delete("_slug");
      return NextResponse.rewrite(url);
    }
  }

  // Main site hosts — pass through untouched
  const mainHosts = ["dentalweb.cl", "www.dentalweb.cl"];
  if (
    mainHosts.some((h) => hostname === h) ||
    hostname.includes("vercel.app") ||
    hostname.startsWith("localhost")
  ) {
    return NextResponse.next();
  }

  // Subdomain: clinica-sonrisa.dentalweb.cl → /site/clinica-sonrisa/...
  const subdomain = hostname.split(".")[0];
  if (subdomain && subdomain !== "www") {
    url.pathname = `/site/${subdomain}${url.pathname === "/" ? "" : url.pathname}`;
    return NextResponse.rewrite(url);
  }

  return NextResponse.next();
}

export const config = {
  matcher: [
    "/((?!_next/static|_next/image|favicon.ico|icon.png|apple-icon.png|logo.png|opengraph-image.png).*)",
  ],
};
