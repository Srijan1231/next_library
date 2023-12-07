import { Layout } from "@/components/layout/main-layout";
import getCurrentUser from "./actions/getCurrentUser";

export default function Home() {
  // const currentUser = getCurrentUser();
  // console.log(currentUser);
  return (
    <div className="flex flex-col mx-3">
      <Layout>{/* Card section */}</Layout>
    </div>
  );
}
