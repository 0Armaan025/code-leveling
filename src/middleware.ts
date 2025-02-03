import { withMiddlewareAuthRequired } from '@auth0/nextjs-auth0/edge';

export default withMiddlewareAuthRequired();

export const config = {
  matcher: ['/profile', '/dashboard', '/lab', '/redeem', '/shop', '/items'], // Only protect the /about route
};
