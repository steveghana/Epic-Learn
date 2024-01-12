// import type { NextPage } from "next";
"use client";
import { useEffect, useRef, useState } from "react";
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";
import Achievements from "@/components/achievments";
import { DemoGithub } from "@/components/github-card";
import ContainerWrapper from "@/components/containerWrapper";
import "./index.css";
export default function CoursePage({ params }: { params: { slug: string } }) {
  return (
    <ContainerWrapper badgeurl="" header="Cards" body="dsdsdsd">
      <div className=" py-4">
        <Accordion type="single" collapsible className=" bg-slate-100">
          <AccordionItem value="item-1" className="w-full">
            <AccordionTrigger className="bg-white px-2 my-2 w-[95dvw] md:w-[70dvw]">
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
            </AccordionTrigger>
            <AccordionContent className="mr-2 w-full">
              <Courseitem />
            </AccordionContent>
          </AccordionItem>
          <AccordionItem value="item-2">
            <AccordionTrigger className=" bg-white px-2 min-w-max  my-2">
              Is it styled?
            </AccordionTrigger>
            <AccordionContent>
              Yes. It comes with default styles that matches the other
              components&apos; aesthetic.
            </AccordionContent>
          </AccordionItem>
          <AccordionItem value="item-3">
            <AccordionTrigger className="bg-white px-2  my-2">
              Is it animated?
            </AccordionTrigger>
            <AccordionContent>
              Yes. It's animated by default, but you can disable it if you
              prefer.
            </AccordionContent>
          </AccordionItem>
        </Accordion>
      </div>
    </ContainerWrapper>
  );
}
const Courseitem = () => {
  return (
    <>
      <div className="step completed">
        <BreakIndicator />
        <div className="content">
          <DemoGithub />
        </div>
      </div>
      <div className="step completed">
        <BreakIndicator />
        <div className="content">
          <DemoGithub />
        </div>
      </div>
    </>
  );
};
const BreakIndicator = () => {
  return (
    <div className="v-stepper">
      <div className="circle"></div>
      <div className="line"></div>
    </div>
  );
};
