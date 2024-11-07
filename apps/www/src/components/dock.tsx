import { FloatingDock } from "./ui";
import { Mail, TestTubeDiagonal, LampDesk, House, Github } from "lucide-react";

interface DockItem {
  title: string;
  icon: React.ReactNode;
  href: string;
}

export const Dock = () => {
  const dockItems: DockItem[] = [
    {
      title: "Home",
      icon: <House />,
      href: "/",
    },
    {
      title: "Projects",
      icon: <LampDesk />,
      href: "",
    },
    {
      title: "Experiments",
      icon: <TestTubeDiagonal />,
      href: "/experiments",
    },
    {
      title: "Github",
      icon: <Github />,
      href: "",
    },
    {
      title: "Mail",
      icon: <Mail />,
      href: "",
    },
  ];

  return (
    <div className="absolute fixed bottom-10 flex items-center justify-center w-full">
      <FloatingDock items={dockItems} />
    </div>
  );
};
