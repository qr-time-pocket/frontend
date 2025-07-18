import { cn } from "@/lib/utils";
import { cva, type VariantProps } from "class-variance-authority";
import * as React from "react";

const typographyVariants = cva("", {
  variants: {
    variant: {
      h1: "scroll-m-20 text-4xl font-extrabold tracking-tight lg:text-5xl",
      h2: "scroll-m-20 border-b pb-2 text-3xl font-semibold tracking-tight first:mt-0",
      h3: "scroll-m-20 text-2xl font-semibold tracking-tight",
      h4: "scroll-m-20 text-xl font-semibold tracking-tight",
      h5: "scroll-m-20 text-lg font-semibold tracking-tight",
      h6: "scroll-m-20 text-base font-semibold tracking-tight",
      p: "leading-7 [&:not(:first-child)]:mt-6",
      blockquote: "mt-6 border-l-2 pl-6 italic",
      code: "relative rounded bg-muted px-[0.3rem] py-[0.2rem] font-mono text-sm font-semibold",
      lead: "text-xl text-muted-foreground",
      large: "text-lg font-semibold",
      small: "text-sm font-medium leading-none",
      muted: "text-sm text-muted-foreground",
      link: "font-medium text-primary underline underline-offset-4 hover:text-primary/80",
    },
    size: {
      default: "",
      sm: "text-sm",
      lg: "text-lg",
      xl: "text-xl",
      "2xl": "text-2xl",
      "3xl": "text-3xl",
      "4xl": "text-4xl",
      "5xl": "text-5xl",
      "6xl": "text-6xl",
    },
    weight: {
      normal: "font-normal",
      medium: "font-medium",
      semibold: "font-semibold",
      bold: "font-bold",
      extrabold: "font-extrabold",
    },
    align: {
      left: "text-left",
      center: "text-center",
      right: "text-right",
      justify: "text-justify",
    },
  },
  defaultVariants: {
    variant: "p",
    size: "default",
    weight: "normal",
    align: "left",
  },
});

export interface TypographyProps
  extends React.HTMLAttributes<HTMLElement>,
    VariantProps<typeof typographyVariants> {
  as?: React.ElementType;
}

const Typography = React.forwardRef<HTMLElement, TypographyProps>(
  ({ className, variant, size, weight, align, as, ...props }, ref) => {
    const Component = as || getDefaultElement(variant);

    return React.createElement(Component, {
      className: cn(
        typographyVariants({ variant, size, weight, align, className })
      ),
      ref,
      ...props,
    });
  }
);
Typography.displayName = "Typography";

function getDefaultElement(
  variant: string | null | undefined
): React.ElementType {
  switch (variant) {
    case "h1":
      return "h1";
    case "h2":
      return "h2";
    case "h3":
      return "h3";
    case "h4":
      return "h4";
    case "h5":
      return "h5";
    case "h6":
      return "h6";
    case "blockquote":
      return "blockquote";
    case "code":
      return "code";
    case "link":
      return "a";
    default:
      return "p";
  }
}

// 편의를 위한 개별 컴포넌트들
const H1 = React.forwardRef<
  HTMLHeadingElement,
  Omit<TypographyProps, "variant" | "as">
>((props, ref) => <Typography ref={ref} variant="h1" as="h1" {...props} />);
H1.displayName = "H1";

const H2 = React.forwardRef<
  HTMLHeadingElement,
  Omit<TypographyProps, "variant" | "as">
>((props, ref) => <Typography ref={ref} variant="h2" as="h2" {...props} />);
H2.displayName = "H2";

const H3 = React.forwardRef<
  HTMLHeadingElement,
  Omit<TypographyProps, "variant" | "as">
>((props, ref) => <Typography ref={ref} variant="h3" as="h3" {...props} />);
H3.displayName = "H3";

const H4 = React.forwardRef<
  HTMLHeadingElement,
  Omit<TypographyProps, "variant" | "as">
>((props, ref) => <Typography ref={ref} variant="h4" as="h4" {...props} />);
H4.displayName = "H4";

const H5 = React.forwardRef<
  HTMLHeadingElement,
  Omit<TypographyProps, "variant" | "as">
>((props, ref) => <Typography ref={ref} variant="h5" as="h5" {...props} />);
H5.displayName = "H5";

const H6 = React.forwardRef<
  HTMLHeadingElement,
  Omit<TypographyProps, "variant" | "as">
>((props, ref) => <Typography ref={ref} variant="h6" as="h6" {...props} />);
H6.displayName = "H6";

const P = React.forwardRef<
  HTMLParagraphElement,
  Omit<TypographyProps, "variant" | "as">
>((props, ref) => <Typography ref={ref} variant="p" as="p" {...props} />);
P.displayName = "P";

const Blockquote = React.forwardRef<
  HTMLQuoteElement,
  Omit<TypographyProps, "variant" | "as">
>((props, ref) => (
  <Typography ref={ref} variant="blockquote" as="blockquote" {...props} />
));
Blockquote.displayName = "Blockquote";

const Code = React.forwardRef<
  HTMLElement,
  Omit<TypographyProps, "variant" | "as">
>((props, ref) => <Typography ref={ref} variant="code" as="code" {...props} />);
Code.displayName = "Code";

const Lead = React.forwardRef<
  HTMLParagraphElement,
  Omit<TypographyProps, "variant" | "as">
>((props, ref) => <Typography ref={ref} variant="lead" as="p" {...props} />);
Lead.displayName = "Lead";

const Large = React.forwardRef<
  HTMLDivElement,
  Omit<TypographyProps, "variant" | "as">
>((props, ref) => <Typography ref={ref} variant="large" as="div" {...props} />);
Large.displayName = "Large";

const Small = React.forwardRef<
  HTMLElement,
  Omit<TypographyProps, "variant" | "as">
>((props, ref) => (
  <Typography ref={ref} variant="small" as="small" {...props} />
));
Small.displayName = "Small";

const Muted = React.forwardRef<
  HTMLParagraphElement,
  Omit<TypographyProps, "variant" | "as">
>((props, ref) => <Typography ref={ref} variant="muted" as="p" {...props} />);
Muted.displayName = "Muted";

const Link = React.forwardRef<
  HTMLAnchorElement,
  Omit<TypographyProps, "variant" | "as"> &
    React.AnchorHTMLAttributes<HTMLAnchorElement>
>((props, ref) => <Typography ref={ref} variant="link" as="a" {...props} />);
Link.displayName = "Link";

export {
  Blockquote,
  Code,
  H1,
  H2,
  H3,
  H4,
  H5,
  H6,
  Large,
  Lead,
  Link,
  Muted,
  P,
  Small,
  Typography,
  typographyVariants,
};
