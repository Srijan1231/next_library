import getCurrentUser from "@/app/actions/getCurrentUser";
import Sidebar from "@/components/SideBar/Sidebar";

export default async function AdminLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  const currentUser = await getCurrentUser();

  return currentUser && currentUser?.role === "admin" ? (
    <div className="w-screen h-screen flex gap-2">
      <Sidebar currentUser={currentUser} />
      <main className="w-full h-screen">{children}</main>
    </div>
  ) : null;
}
