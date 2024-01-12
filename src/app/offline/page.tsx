"use client";
import ContainerWrapper from "@/components/containerWrapper";
import * as React from "react";

import { Button } from "@/components/ui/button";
import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import { cn } from "@/lib/utils";
import { DemoContainer } from "@/components/container";
import { RadioGroup, RadioGroupItem } from "@/components/ui/radio-group";
const Courses = () => {
  return (
    <div className="bg-slate-100">
      <h1 className="text-center py-6 text-3xl">My Courses</h1>
      <div className="w-full flex justify-center items-center">
        <div className=" self-center max-w-4xl col-span-2 grid lg:grid-cols-3 md:grid-cols-2 sm:grid-cols-1 items-start gap-6 lg:col-span-1 ">
          {Array.from({ length: 10 }, (_, i) => i).map((i) => (
            <DemoContainer>
              <CourseList key={i} />
            </DemoContainer>
          ))}
        </div>
      </div>
    </div>
  );
};
function CourseList() {
  return (
    <Card className="w-[350px] p-9 flex flex-col gap-1 justify-center items-center">
      <RadioGroup
        defaultValue="card"
        // className="w-[350px] p-9 flex flex-col gap-1 justify-center items-center"
      >
        {/* <CardContent className="h-[100px]  w-[100px] m-auto bg-slate-800"> */}
        <div className="">
          <RadioGroupItem value="card" id="card" className="peer sr-only" />
          <Label
            htmlFor="card"
            className="flex flex-col items-center justify-between rounded-md border-2 border-muted bg-popover p-4 hover:bg-accent hover:text-accent-foreground peer-data-[state=checked]:border-primary [&:has([data-state=checked])]:border-primary"
          >
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
            Card
          </Label>
        </div>
        {/* </CardContent> */}
        <h5>Create project</h5>
      </RadioGroup>
    </Card>
  );
}
export default Courses;
