import { cn } from "@/lib/utils";

export function DemoContainer({
  className,
  ...props
}: React.HTMLAttributes<HTMLDivElement>) {
  return (
    <div
      className={cn(
        "flex items-center flex-col justify-center [&>div]:w-full",
        className
      )}
      {...props}
    />
  );
}
