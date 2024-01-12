"use client";
import { RadioGroup, RadioGroupItem } from "@/components/ui/radio-group";
import { Label } from "@/components/ui/label";
import { Icons } from "./icons";
// import { } from "@radix-ui/react-icons";

const Achievements = () => {
  return (
    <RadioGroup defaultValue="card" className="grid grid-cols-3 gap-4">
      <div>
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
      <div>
        <RadioGroupItem value="paypal" id="paypal" className="peer sr-only" />
        <Label
          htmlFor="paypal"
          className="flex flex-col items-center justify-between rounded-md border-2 border-muted bg-popover p-4 hover:bg-accent hover:text-accent-foreground peer-data-[state=checked]:border-primary [&:has([data-state=checked])]:border-primary"
        >
          <Icons.paypal className="mb-3 h-6 w-6" />
          Paypal
        </Label>
      </div>
      <div>
        <RadioGroupItem value="apple" id="apple" className="peer sr-only" />
        <Label
          htmlFor="apple"
          className="flex flex-col items-center justify-between rounded-md border-2 border-muted bg-popover p-4 hover:bg-accent hover:text-accent-foreground peer-data-[state=checked]:border-primary [&:has([data-state=checked])]:border-primary"
        >
          <Icons.apple className="mb-3 h-6 w-6" />
          Apple
        </Label>
      </div>
    </RadioGroup>
  );
};

export default Achievements;
