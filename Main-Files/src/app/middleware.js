import { NextResponse } from 'next/server'

export function middleware(request) {
  const response = NextResponse.next()
  response.headers.set('Content-Type', 'text/html; charset=utf-8')
  return response
}