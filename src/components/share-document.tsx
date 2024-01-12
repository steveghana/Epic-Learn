"use client";
import { PlayIcon } from "@radix-ui/react-icons";

import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import { Button } from "@/components/ui/button";
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import { Separator } from "@/components/ui/separator";
import { Icons } from "./icons";
import { RadioGroupItem } from "./ui/radio-group";
import { Label } from "./ui/label";

export function DemoShareDocument() {
  return (
    <Card>
      <CardHeader className="space-y-1">
        <div className="flex items-center justify-between">
          <CardTitle className="text-2xl">Course Progress</CardTitle>
          <p className="text-red-500">Manage</p>
        </div>
      </CardHeader>
      <CardContent>
        <Separator className="my-4" />
        <div className="space-y-4">
          <div className="grid gap-6">
            {Array.from({ length: 3 }).map((_, index) => (
              <div className="flex items-center justify-between space-x-4">
                <div className="flex items-center space-x-4">
                  <div className="px-4 py-2 flex justify-center items-center bg-slate-500">
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
                    <AvatarImage src="/avatars/03.png" />
                    <AvatarFallback>OM</AvatarFallback>
                  </Avatar> */}
                  <div>
                    <p className="text-sm font-medium leading-none">
                      Olivia Martin
                    </p>
                    <p className="text-sm text-muted-foreground">
                      m@example.com
                    </p>
                  </div>
                </div>
                <div className="border border-gray-300 rounded-md p-2">
                  <PlayIcon className="mt-px h-5 w-5" />
                </div>
              </div>
            ))}
          </div>
          <Button className="w-full" variant="default">
            Browse Courses
          </Button>
        </div>
      </CardContent>
    </Card>
  );
}
