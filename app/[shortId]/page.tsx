import connectDB from '@/db'
import { linkSchema } from '@/models/link'
import { notFound, redirect } from 'next/navigation'
import React, { FC } from 'react'



interface Props {
    params: {
        shortId: string
    }
}

const ShortId: FC<Props> = async ({ params }) => {

    const shortId = params?.shortId
    if (!shortId) return notFound()

    await connectDB()
    const data = await linkSchema.findOne({ shortUrl: shortId })

    if (!data) return notFound()

    const longUrl = data.longUrl

    redirect(longUrl)

    return (
        <div>ShortId</div>
    )
}

export default ShortId