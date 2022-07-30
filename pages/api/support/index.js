import prisma from '../../../lib/prisma';
import { getSession } from 'next-auth/react'

export default async function support(req, res) {

    const session = await getSession({ req });
    const { userId } = session;


    const ideaPost = await prisma.post.findUnique({
        where: {
            id: req.body.postId
        },
        include: {
            supportedByUsers: {
                select: {
                    id: true
                },
            }
        },
    })


    // console.log(ideaPost.supportedByUsers.some(el => el.id === userId))
    const isSupported = ideaPost?.supportedByUsers?.some(el => el.id === userId);


    //if supported, undo it

    if (isSupported === true) {

        const result = await prisma.post.update({
            where: { id: req.body.postId },
            data: {
                supportedByUsers: {
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


    //vote for support

    if (isSupported === false) {

        const result = await prisma.post.update({
            where: { id: req.body.postId },
            data: {
                supportedByUsers: {
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