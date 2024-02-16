import NextAuth from 'next-auth';

import { options } from './options';

const Auth = (req: any, res: any) => NextAuth(req, res, options);

export { Auth as get, Auth as POST };
