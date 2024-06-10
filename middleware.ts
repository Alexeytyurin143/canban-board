import { clerkMiddleware, createRouteMatcher } from '@clerk/nextjs/server'
import { NextResponse } from 'next/server'

const isPublicRoute = createRouteMatcher(['/', '/sign-in(.*)', '/sign-up(.*)'])

const isStaticRoute = createRouteMatcher(['/static(.*)'])

export default clerkMiddleware((auth, req) => {
	const { userId, orgId } = auth()
	if (userId && isPublicRoute(req)) {
		let path = '/select-org'
		if (orgId) {
			path = `/organization/${orgId}`
		}
		const orgSelection = new URL(path, req.url)
		return NextResponse.redirect(orgSelection)
	}
	if (!userId && !isPublicRoute(req) && !isStaticRoute(req)) {
		auth().protect()
	}
	if (userId && !orgId && req.nextUrl.pathname !== '/select-org') {
		const orgSelection = new URL('/select-org', req.url)
		return NextResponse.redirect(orgSelection)
	}
})

export const config = {
	matcher: ['/((?!.+.[w]+$|_next).*)', '/', '/(api|trpc)(.*)'],
}
