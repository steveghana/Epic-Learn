"use client";
import { ChevronDownIcon } from "@radix-ui/react-icons";

import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import { Button } from "@/components/ui/button";
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import {
  Command,
  CommandEmpty,
  CommandGroup,
  CommandInput,
  CommandItem,
  CommandList,
} from "@/components/ui/command";
import {
  Popover,
  PopoverContent,
  PopoverTrigger,
} from "@/components/ui/popover";
import Achievements from "./achievments";

export function DemoTeamMembers() {
  return (
    <Card>
      <CardHeader>
        <CardTitle>Achievments</CardTitle>
        <CardDescription>
          Invite your team members to collaborate.
        </CardDescription>
      </CardHeader>
      <CardContent>
        <Achievements />
      </CardContent>
      <CardHeader>
        <CardTitle>Next Task</CardTitle>
      </CardHeader>

      <CardContent className="grid gap-6">
        <div className="flex items-center justify-between space-x-4">
          <div className="flex items-center space-x-4">
            <div className="px-4 py-2 bg-slate-500">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                viewBox="0 0 24 24"
                fill="none"
                stroke="currentColor"
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="2"
                className="mb-3 h-6 w-6"
              >
                <rect width="20" height="14" x="2" y="5" rx="2" />
                <path d="M2 10h20" />
              </svg>
            </div>
            {/* <Avatar>
              <AvatarImage src="/avatars/01.png" />
              <AvatarFallback>OM</AvatarFallback>
            </Avatar> */}
            <div>
              <p className="text-sm font-medium leading-none">
                Practice Makes Perfect
              </p>
              <p className="text-sm text-muted-foreground">m@example.com</p>
            </div>
          </div>
        </div>
        <Button className="w-full">Take a quiz</Button>
      </CardContent>
    </Card>
  );
}
