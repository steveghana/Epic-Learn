import { useConvexAuth } from "convex/react";
import { SignInButton, SignOutButton, useSession } from "@clerk/clerk-react";
import Link from "next/link";
import Image from "next/image";
import { Avatar, AvatarFallback } from "@/components/ui/avatar";
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu";
import { useRouter } from "next/navigation";
import { AvatarImage } from "@radix-ui/react-avatar";
import { ComboboxDemo } from "@/components/school/search";
import * as React from "react";

import { cn } from "@/lib/utils";
import { Icons } from "@/components/icons";
import {
  NavigationMenu,
  NavigationMenuContent,
  NavigationMenuItem,
  NavigationMenuLink,
  NavigationMenuList,
  NavigationMenuTrigger,
  navigationMenuTriggerStyle,
} from "@/components/ui/navigation-menu";
import ListItem from "@/components/listItem";

const navigationItems = {
  dashboard: [
    {
      title: "Dashboard",
      href: "/dashboard",
      description:
        "Track and visualize your progress with interactive insights and analytics.",
    },
    {
      title: "Courses",
      href: "/courses",
      description:
        "Embark on a learning journey with diverse and engaging courses tailored for you.",
    },
    // ... other dashboard-related items
  ],
  learning: [
    {
      title: "Playground",
      href: "/playground",
      description:
        "Immerse yourself in an interactive learning environment for hands-on exploration.",
    },
    {
      title: "Leaderboard",
      href: "/leaderboard",
      description:
        "Compete and climb the leaderboard, showcasing your skills and achievements.",
    },
    {
      title: "Quiz",
      href: "/quiz",
      description:
        "Challenge your knowledge and skills with interactive quizzes and assessments.",
    },
    {
      title: "Mail",
      href: "/mail",
      description:
        "Connect and communicate with peers and instructors in a collaborative space.",
    },
    {
      title: "Lesson",
      href: "/lesson",
      description:
        "Dive deep into individual lessons with detailed content and interactive resources.",
    },
    // ... other learning-related items
  ],
  profile: [
    {
      title: "Profile",
      href: "/profile",
      description:
        "Showcase your accomplishments, skills, and learning journey on your personalized profile.",
    },
    {
      title: "Account",
      href: "/profile/account",
      description:
        "Manage and customize your account settings for a personalized experience.",
    },
    // ... other profile-related items
  ],
  team: [
    {
      title: "Team",
      href: "/team",
      description:
        "Collaborate with like-minded individuals, forming a community for shared growth.",
    },
    // ... other team-related items
  ],
};

export default navigationItems;

export const Header = () => {
  // const { session } = useSession();
  // const isAdmin = session?.user.publicMetadata.isAdmin;

  return (
    <>
      <header className="border-b py-2 bg-white sticky top-0 z-50 flex flex-wrap justify-between md:items-center items-center w-full">
        <div className="p-2 md:w-auto border-b flex items-center justify-between w-full">
          <NavigationMenuDemo />
          <div className="lg:hidden">
            <Profile />
          </div>
        </div>
        <div className="hidden md:mx-0 flex flex-col items-center justify-center lg:w-auto w-full">
          <ComboboxDemo />
        </div>

        <div className="hidden md:block">
          <Profile />
        </div>
      </header>
    </>
  );
};
function Profile() {
  const router = useRouter();

  return (
    <div className="flex items-center gap-4">
      <DropdownMenu>
        <DropdownMenuTrigger>
          <Avatar>
            <AvatarImage src={""} />
            <AvatarFallback className="bg-purple-300 text-black">
              CN
            </AvatarFallback>
          </Avatar>
        </DropdownMenuTrigger>
        <DropdownMenuContent>
          <DropdownMenuItem>
            <SignOutButton
              signOutCallback={() => {
                router.push("/");
              }}
            >
              Sign Out
            </SignOutButton>
          </DropdownMenuItem>
        </DropdownMenuContent>
      </DropdownMenu>
    </div>
  );
}
export function NavigationMenuDemo() {
  return (
    <NavigationMenu>
      <NavigationMenuList>
        <NavigationMenuItem>
          <NavigationMenuTrigger>Getting started</NavigationMenuTrigger>
          <NavigationMenuContent>
            <ul className="grid gap-3 p-4 md:w-[400px] lg:w-[500px] lg:grid-cols-[.75fr_1fr]">
              <li className="row-span-3">
                <NavigationMenuLink asChild>
                  <a
                    className="flex h-full w-full select-none flex-col justify-end rounded-md bg-gradient-to-b from-muted/50 to-muted p-6 no-underline outline-none focus:shadow-md"
                    href="/profile"
                  >
                    <Icons.logo className="h-6 w-6" />
                    <div className="mb-2 mt-4 text-lg font-medium">Profile</div>
                    <p className="text-sm leading-tight text-muted-foreground">
                      Showcase your accomplishments, skills, and learning
                      journey on your personalized profile.
                    </p>
                  </a>
                </NavigationMenuLink>
              </li>
              {navigationItems.dashboard.map((navigationItem, i) => (
                <ListItem
                  href={navigationItem.href}
                  title={navigationItem.title}
                >
                  {navigationItem.description}
                </ListItem>
              ))}
            </ul>
          </NavigationMenuContent>
        </NavigationMenuItem>
        <NavigationMenuItem>
          <NavigationMenuTrigger>Learning</NavigationMenuTrigger>
          <NavigationMenuContent>
            <ul className="grid min-w-full gap-3 p-4 md:w-[500px] md:grid-cols-2 lg:w-[600px] ">
              {navigationItems.learning.map((component) => (
                <ListItem
                  key={component.title}
                  title={component.title}
                  href={component.href}
                >
                  {component.description}
                </ListItem>
              ))}
            </ul>
          </NavigationMenuContent>
        </NavigationMenuItem>
      </NavigationMenuList>
    </NavigationMenu>
  );
}
