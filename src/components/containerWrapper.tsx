import React from "react";
import UpgradeToPro, { UpgradeToProMobile } from "./upgradeToPro";

const ContainerWrapper = ({
  badgeurl,
  header,
  body,
  children,
}: {
  badgeurl: string;
  header: string;
  body: string;
  children: any;
}) => {
  return (
    <div className="flex flex-col bg-slate-300 justify-center">
      <div className="h-[200px] bg-slate-800">Behad</div>
      <div className="translate-y-[-37px] px-0.5 min-w-4xl self-center bg-white items-start justify-center rounded-lg ">
        {/* <UpgradeToPro />
        <UpgradeToProMobile /> */}
        {children}
      </div>
    </div>
  );
};

export default ContainerWrapper;
