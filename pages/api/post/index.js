import prisma from '../../../lib/prisma';
import { getSession } from 'next-auth/react'

// POST /api/post
// Required fields in body: title, category
export default async function handle(req, res) {

  const { title, category } = req.body;
  const session = await getSession({ req });

  const result = await prisma.post.create({
    data: {
      title: title,
      category: category,
      userName: session?.user?.name,
      author: { connect: { email: session?.user?.email } },
    },
  });
  res.json(result);
}

