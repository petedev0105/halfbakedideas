import prisma from '../../lib/prisma';
// Fetch all posts 

export default async function handle(req, res) {
  const posts = await prisma.post.findMany({
    orderBy: {
    created: 'desc',
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
  })
  res.json(posts)
}