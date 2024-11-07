import React from "react";
import { VariantProps, cva } from "class-variance-authority";
import cn from "classnames";
import { Button } from "./ui";

/* ********************************* */
/*           SAMPLE USAGE            */
/* ********************************* */

// <ExperimentGrid>
//   <ExperimentGrid.Column>
//     <ExperimentGrid.Item>
//       <ExperimentGrid.Content>
//         <ExperimentGrid.Image {/* props */} />
//         <ExperimentGrid.Title {/* props */} />
//       </ExperimentGrid.Content>
//       <ExperimentGrid.Footer />
//     </ExperimentGrid.Item>
//   </ExperimentGrid.Column>
// </ExperimentGrid>

/* ROOT */
const ExperimentGrid = ({ children }: { children: React.ReactNode }) => {
  return (
    <section className="flex gap-2 flex-col md:flex-row w-full px-2 py-2">
      {children}
    </section>
  );
};

/* COLUMNS */
ExperimentGrid.Column = ({
  children,
  className = "",
}: {
  children: React.ReactNode;
  className?: string;
}) => {
  return (
    <div className={`flex w-full flex-col gap-2 ${className}`}>{children}</div>
  );
};

/* ITEMS */
ExperimentGrid.Item = ({ children }: { children: React.ReactNode }) => {
  const hasFooter = React.Children.toArray(children).some(
    (child) =>
      React.isValidElement(child) && child.type === ExperimentGrid.Footer,
  );

  return (
    <article
      className={cn("h-fit rounded-xl border-[1px] border-lightGrey", {
        "bg-darkGrey px-2 py-2": hasFooter,
      })}
    >
      {children}
    </article>
  );
};

/* CONTENT */
ExperimentGrid.Content = ({ children }: { children: React.ReactNode }) => {
  return <div className="relative w-full">{children}</div>;
};

/* TITLE / HEADER */
ExperimentGrid.Title = ({ title, date }: { title: string; date: string }) => {
  return (
    <div className="absolute bottom-0 inset-x-0 flex items-center justify-between px-3 pb-2">
      <p className="text-white font-medium text-sm capitalize">{title}</p>
      <p className="text-dark font-medium text-sm capitalize">{date}</p>
    </div>
  );
};

/* FOOTER */
ExperimentGrid.Footer = ({ title }: { title?: "prototype" | "article" }) => {
  return (
    <>
      {title ? (
        <Button className="mt-2">
          {title === "prototype" ? `View Prototype ->` : `Read Article ->`}
        </Button>
      ) : null}
    </>
  );
};

/* IMAGE */
const imageVariants = cva("flex bg-grey rounded-lg ", {
  variants: {
    size: {
      sm: "h-[12rem]",
      md: "h-[14rem]",
      lg: "h-[16rem]",
      xl: "h-[18rem]",
    },
  },
  defaultVariants: {
    size: "sm",
  },
});

ExperimentGrid.Image = ({
  size,
  className = "",
}: VariantProps<typeof imageVariants> & { className?: string }) => {
  return <div className={cn(imageVariants({ size, className }))} />;
};

export { ExperimentGrid };
