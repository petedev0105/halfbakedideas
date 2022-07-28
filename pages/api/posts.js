import prisma from '../../lib/prisma';
// Fetch all posts (in /pages/api/posts.ts)

export default async function handle(req, res) {
  const posts = await prisma.post.findMany()
  res.json(posts)
}