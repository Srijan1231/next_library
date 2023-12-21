import { User } from '@prisma/client';
// export type SafeBook = Omit<Book, "createdAt"> & {
//     createdAt: string;
// };
export type SafeUser = Omit<
    User,
    "createdAt" | "updatedAt" | "emailVerified" | "image">
    & {
        createdAt: string;
        updatedAt: string;
        emailVerified: string | null;
        image: string | null | undefined;


    };