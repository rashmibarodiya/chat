import { clerkMiddleware, createRouteMatcher } from '@clerk/nextjs/server'
import { NextRequest, NextResponse } from 'next/server'


const isPublicRoute = createRouteMatcher([
    "signin", "/", "home"
])

export default clerkMiddleware((auth: any, req: NextRequest) => {
    const { userId } = auth()
    const url = req.nextUrl.clone();

    //not logged in
    if (!userId && !isPublicRoute(req)) {
        url.pathname = '/';  
        return NextResponse.redirect(url); 
    }
})
export const config = {
    matcher: [
        // Skip Next.js internals and all static files, unless found in search params
        '/((?!_next|[^?]*\\.(?:html?|css|js(?!on)|jpe?g|webp|png|gif|svg|ttf|woff2?|ico|csv|docx?|xlsx?|zip|webmanifest)).*)',
        // Always run for API routes
        '/(api|trpc)(.*)',
    ],
}