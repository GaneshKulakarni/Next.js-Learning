import { NextResponse } from 'next/server'

// This function can be marked `async' if using `await' inside
export function middleware(request) {
    // return NextResponse.next()//normal for redirection to about page to display content in the about page 
    return NextResponse.redirect(new URL('/home', request.url))//this line indicated that ,when we type "/about "or 
    // redirect to any page like"3000/about/xxx' wen direct redicret to the home page 
}
// See "Matching Paths" below to learn more
export const config = {
    matcher: '/about/:path*',
}