import { cva } from "class-variance-authority"

export const badgeVariants = cva(
  "inline-flex items-center rounded-full border px-2.5 py-0.5 text-xs font-semibold transition-colors focus:outline-none focus:ring-2 focus:ring-ring focus:ring-offset-2",
  {
    variants: {
      variant: {
        default:
          "border-transparent bg-primary text-primary-foreground hover:bg-primary/80",
        secondary:
          "border-transparent bg-secondary text-secondary-foreground hover:bg-secondary/80",
        destructive:
          "border-transparent bg-destructive text-destructive-foreground hover:bg-destructive/80",
        outline: "text-foreground",
        glow: 
           "border-[#00d2ff]/50 bg-[#050017]/80 text-[#00d2ff] hover:bg-[#050017] hover:text-white hover:border-[#3a47d5]/70 backdrop-blur-sm shadow-[0_0_10px_rgba(0,210,255,0.3)] transition-all duration-300"
      },
    },
    defaultVariants: {
      variant: "default",
    },
  }
) 