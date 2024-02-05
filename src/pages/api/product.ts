import type { NextApiRequest, NextApiResponse } from "next";

type data = {
    status: Boolean
    statusCode: 200
    data: {
        id: number
        name: string
        price: number
        size: string
    }[]
}

export default function handler(
    req: NextApiRequest,
    res: NextApiResponse
) {
    const data = [
        {
            id: 1,
            name: "baju Baru",
            price: 10000,
            size: "L"
        },
        {
            id: 2,
            name: "baju Bekas",
            price: 50000,
            size: "XL"
        },
        {
            id: 3,
            name: "baju Lama",
            price: 5000,
            size: "S"
        },
    ]

    res.status(200).json({ status: true, statusCode: 200,  data });
}