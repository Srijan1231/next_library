import { Layout } from "@/components/layout/main-layout";
import getCurrentUser from "./actions/getCurrentUser";
import Image from "next/image";
import hero from "@/app/asset/image/hero.jpeg";
export default async function Home() {
  const currentUser = await getCurrentUser();

  return (
    <div className="flex flex-col mx-3">
      <Layout currentUser={currentUser}>
        <div className="flex flex-col  items-center justify-center w-full h-full">
          <div className="m-2 items-center justify-center text-center ">
            <h1 className="font-heading text-3xl sm:text-5xl md:text-6xl lg:text-7xl xl:text-8xl uppercase font-black leading-relaxed">
              <span className="block">Libraries: where books open</span>
              <span className="block">
                doors to infinite worlds and pages unfold
              </span>
              <span className="text-4xl sm:text-6xl md:text-7xl lg:text-8xl xl:text-9xl block">
                journeys.
              </span>
            </h1>
          </div>
          <div className="m-2 items-center justify-center ">
            <Image className="max-w-full h-1/2" src={hero} alt="library_img" />
          </div>
        </div>
      </Layout>
    </div>
  );
}
