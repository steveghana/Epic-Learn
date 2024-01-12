"use client";
import { RadioGroup, RadioGroupItem } from "@/components/ui/radio-group";
import { Label } from "@/components/ui/label";
import { Icons } from "./icons";

const CustomCard = () => {
  return (
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
  );
};

export default CustomCard;
