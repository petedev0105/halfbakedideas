import prisma from '../../lib/prisma';
import { getSession } from 'next-auth/react'
import type { NextApiRequest, NextApiResponse } from "next";

export default async function reaction(req: NextApiRequest, res: NextApiResponse ) {

  const session = await getSession({ req });
    console.log(req.body); 

  const { userId } = session;

// const result = await prisma.post.update({
//   where: {id:req.body.postId},
//   data: {
//    likedByUsers: {
//       create: { id:userId},
//     },
//   },
// });
res.status(200).json('ok')
}