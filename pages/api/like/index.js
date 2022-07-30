import prisma from '../../../lib/prisma';
import { getSession } from 'next-auth/react'

export default async function like(req, res) {

  const session = await getSession({ req });
  const { userId } = session;

  const ideaPost = await prisma.post.findUnique({
    where: {
      id: req.body.postId
    },
    include: {
      likedByUsers: {
        select: {
          id: true
        },
      }
    },
  })


  // console.log(ideaPost.likedByUsers.some(el => el.id === userId))
  const isLiked = ideaPost?.likedByUsers?.some(el => el.id === userId);


  //if liked, undo it

  if (isLiked === true) {
    const result = await prisma.post.update({
      where: { id: req.body.postId },
      data: {
        likedByUsers: {
          disconnect: { id: userId },
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


  //vote for like

  if (isLiked === false) {

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



}