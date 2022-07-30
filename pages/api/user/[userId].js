import prisma from '../../../lib/prisma';
// Fetch userdata and his posts 
export default async function handle(req, res) {
    const user = await prisma.user.findUnique({
        where: {
            id: req.query.userId
        },
        
        select: {
            
            name: true,
            image:true,
            posts: true,
            likedPosts: true,
            supportedPosts: true
        },
    })
    res.json(user)
}