import { Layout } from "@/components/layout/main-layout";
import getCurrentUser from "./actions/getCurrentUser";

export default async function Home() {
  const currentUser = await getCurrentUser();

  return (
    <div className="flex flex-col mx-3">
      <Layout currentUser={currentUser}>{/* Card section */}</Layout>
    </div>
  );
}
