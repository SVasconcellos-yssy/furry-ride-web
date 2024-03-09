import { RequestCookie } from "next/dist/compiled/@edge-runtime/cookies";
import { NextRequest, NextResponse } from "next/server";

function validateToken(request: NextRequest) {
  const cookies = request.cookies;

  if (!cookies.get("token")) return false;

  const token = cookies.get("token")?.value;
  if (!token) return false;

  if (!cookies.get("expiresOn")) return false;

  const expiresOn = new Date(cookies.get("expiresOn")?.value ?? "");
  if (!expiresOn) return false;

  if (new Date() >= expiresOn) return false;

  return true;
}



export default async function middleware(
  request: NextRequest,
  response: NextResponse
) {
  
}

export const config = {
  matcher: ["/",],
};
