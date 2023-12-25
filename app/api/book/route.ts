

import prisma from "@/app/lib/prismadb";

import { NextResponse } from 'next/server';
import multer from 'multer';
import { NextApiRequest, NextApiResponse } from "next";
const imgFolderPath = "public/img/product";
//setup multer
const storage = multer.diskStorage({
    destination: (req, file, cb) => {
        let error = null;
        // validation check
        cb(error, imgFolderPath);
    },
    filename: (req, file, cb) => {
        let error = null;
        // construct/ rename file name
        const fullFileName = Date.now() + "-" + file.originalname;

        cb(error, fullFileName);
    },
});

const upload = multer({ storage });
export const config = {
    api: {
        bodyParser: false, // This is necessary for handling file uploads
    },
};
export async function POST(req: any, res: any) {



    // Change this line to use upload.array instead of upload.single
    upload.array('files', 5)(req, res, async function (err) {
        if (err instanceof multer.MulterError) {
            // Handle Multer errors
            return NextResponse.json({ err });;
        } else if (err) {
            // Handle other errors
            return NextResponse.json({ err });;
        }

        // Extract data from the request body
        const body = await req.json();
        const { title, description, category, author, publishedIn } = body;

        // Assuming 'files' is the name of the file input in your form
        const mediaFiles: string[] = (req.files as File[])?.map(file => (file as any).filename);

        // Create a book using Prisma
        const book = await prisma.book.create({
            data: {
                title,
                description,
                media: mediaFiles, // Assuming media is an array field in your database
                category,
                author,
                publishedIn,
            },
        });

        // Return the created book as JSON
        return NextResponse.json(book);
    });






}