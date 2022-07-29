import prisma from '../../../lib/prisma';
import { getSession } from 'next-auth/react'

export default async function like(req, res) {

  const session = await getSession({ req });

  const { userId } = session;

  const result = await prisma.post.update({
    where: { id: req.body.postId },
    data: {
      likedByUsers: {
        connect: { id: userId },
      },
    },
    include: {
      likedByUsers: {
        select: {
          id: true,
        },
      },
      supportedByUsers: {
        select: {
          id: true,
        },
      }

    },

  });
  res.json(result)
}