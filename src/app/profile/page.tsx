import { Metadata } from "next";
import Image from "next/image";

import { cn } from "@/lib/utils";
import { DemoCreateAccount } from "@/components/create-account";
import { DemoPaymentMethod } from "@/components/payment-method";
import { DemoTeamMembers } from "@/components/team-members";
import { DemoShareDocument } from "@/components/share-document";
import { DemoDatePicker } from "@/components/date-picker";
import { DemoNotifications } from "@/components/notifications";
import { DemoReportAnIssue } from "@/components/report-an-issue";
import { DemoGithub } from "@/components/github-card";
import Certificates from "@/components/certificates";
import Achievements from "@/components/achievments";
import ContainerWrapper from "@/components/containerWrapper";
import { DemoContainer } from "@/components/container";

export const metadata: Metadata = {
  title: "Cards",
  description: "Examples of cards built using the components.",
};

export default function CardsPage() {
  return (
    <ContainerWrapper badgeurl="" header="Cards" body="dsdsdsd">
      <div className="flex flex-col items-center justify-center">
        {/* 
        quick access links
        Dailychallenges
        SchoolSearch
        Goal setting
        Take the quiz
        Personalised learning path

        */}
        <div className=" max-w-4xl bg-white items-start justify-center gap-6 rounded-lg md:grid lg:grid-cols-2 xl:grid-cols-2  py-8 ">
          <div className=" col-span-2 grid items-start gap-6 lg:col-span-1">
            <DemoContainer>
              <DemoShareDocument />
            </DemoContainer>
            <DemoContainer>
              <Certificates />
            </DemoContainer>
            {/* <DemoContainer>
              <Achievments />
            </DemoContainer> */}

            <DemoContainer>
              {" "}
              <DemoPaymentMethod />
            </DemoContainer>
          </div>
          <div className="col-span-2 grid items-start gap-6 lg:col-span-1">
            <DemoContainer>
              <DemoTeamMembers />
            </DemoContainer>
            <DemoContainer>
              <DemoCreateAccount />
            </DemoContainer>
            <DemoContainer>
              <DemoDatePicker />
            </DemoContainer>
            <DemoContainer>
              <DemoNotifications />
            </DemoContainer>
          </div>
          <div className="col-span-2 grid items-start gap-6 lg:col-span-2 lg:grid-cols-2 xl:col-span-1 xl:grid-cols-1">
            <DemoContainer>
              <DemoReportAnIssue />
            </DemoContainer>
            <DemoContainer>
              <DemoGithub />
            </DemoContainer>
            {/* <DemoContainer>
            <DemoCookieSettings />
          </DemoContainer> */}
          </div>
        </div>
      </div>
    </ContainerWrapper>
  );
}
