import { clerkMiddleware, createRouteMatcher } from '@clerk/nextjs/server';
import { NextRequest, NextResponse } from 'next/server';
import { PrismaClient } from '@prisma/client';

const isPublicRoute = createRouteMatcher([
    'signin',
    '/sign-in',
    '/sign-up',
    '/',
    '/home',
]);

const prisma = new PrismaClient();

export default clerkMiddleware(async (auth, req) => {
    const { userId } = auth();
    const url = req.nextUrl.clone();

    // User is not logged in
    if (!userId) {
        if (!isPublicRoute(req)) {
            // Redirect to sign-in only if not on sign-in/sign-up routes
            url.pathname = '/sign-in';
            console.log('Redirecting to sign-in');
            return NextResponse.redirect(url);
        }
    } else {
        // User is logged in
        console.log('User is logged in:', userId);

        // Uncomment the code to fetch and create the user in your DB
        // let clerkUser = await currentUser();
        // let dbUser = await prisma.user.findUnique({
        //     where: {
        //         email: clerkUser.email,
        //     },
        // });
        // if (!dbUser) {
        //     dbUser = await prisma.user.create({
        //         data: {
        //             email: clerkUser.getEmail(),
        //             profilePic: clerkUser.imageUrl || null,
        //             name: clerkUser.firstName || '',
        //         },
        //     });
        // }

        // Continue to the requested page
        return NextResponse.next();
    }

    // If none of the conditions are met, continue to the requested page
    return NextResponse.next();
});

export const config = {
    matcher: [
        '/((?!_next|[^?]*\\.(?:html?|css|js(?!on)|jpe?g|webp|png|gif|svg|ttf|woff2?|ico|csv|docx?|xlsx?|zip|webmanifest)).*)',
        '/(api|trpc)(.*)',
    ],
};
