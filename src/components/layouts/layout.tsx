import { Outlet, useLocation } from "react-router-dom";
import { AppSidebar } from "../app-sidebar";
import { Separator } from "../ui/separator";
import { SidebarInset, SidebarProvider, SidebarTrigger } from "../ui/sidebar";

export default function Layout() {
  const location = useLocation();

  const withoutSidebar = ["/login", "/", "/academy"];

  if (withoutSidebar.includes(location.pathname)) {
    return <Outlet />;
  }

  const data = {
    navMain: [
      {
        title: "모아보기",
        url: "#",
        items: [
          {
            title: "아카데미",
            url: "#",
          },
        ],
      },
    ],
  };

  return (
    <SidebarProvider>
      <AppSidebar data={data} />
      <SidebarInset>
        <header className="flex h-16 shrink-0 items-center gap-2 border-b px-4">
          <SidebarTrigger className="-ml-1" />
          <Separator
            orientation="vertical"
            className="mr-2 data-[orientation=vertical]:h-4"
          />
        </header>
        <div className="flex flex-1 flex-col">
          <Outlet />
        </div>
      </SidebarInset>
    </SidebarProvider>
  );
}
