import { VariantProps, cva } from "class-variance-authority";
import cn from "classnames";
import Link from "next/link";

const ExperimentLayout = ({ children }: { children: React.ReactNode }) => {
  return (
    <section className="flex flex-col justify-center mx-auto py-32 px-8 w-full md:w-[50rem]">
      {children}
    </section>
  );
};

ExperimentLayout.Header = ({
  title,
  date,
}: {
  title: string;
  date: string;
}) => {
  return (
    <div className="flex flex-col gap-2">
      <h1 className="font-medium text-light">{title}</h1>
      <h3 className="text-sm text-grey font-medium">{date}</h3>
    </div>
  );
};

ExperimentLayout.Section = ({ children }: { children: React.ReactNode }) => {
  return <div className="flex flex-col mt-16">{children}</div>;
};

ExperimentLayout.Paragraph = ({ children }: { children: string }) => {
  return <p className="text-light text-md leading-relaxed mb-8">{children}</p>;
};

ExperimentLayout.SectionHeader = ({ children }: { children: string }) => {
  return <h2 className="font-medium text-grey text-md mb-4">{children}</h2>;
};

const imageVariants = cva(
  "rounded-xl border-[1px] bg-black mb-4 border-lightGrey",
  {
    variants: {
      size: {
        default: "h-[22rem] w-full",
        lg: "h-[30rem] w-full",
      },
    },
    defaultVariants: {
      size: "default",
    },
  },
);

ExperimentLayout.Image = ({
  size,
  className = "",
}: VariantProps<typeof imageVariants> & { className?: string }) => {
  return <div className={cn(imageVariants({ size, className }))} />;
};

interface FooterLink {
  title: string;
  href: string;
}

ExperimentLayout.Footer = ({
  previous,
  next,
}: {
  previous: FooterLink;
  next: FooterLink;
}) => {
  return (
    <footer className="mt-16 pt-8 border-grey border-t-[0.5px] flex justify-between items-center">
      {/* previous */}
      <Link
        href={previous.href}
        className="flex flex-col gap-2 w-fit text-light"
      >
        <span className="font-medium text-grey">Previous</span>
        <span className="text-light">{previous.title}</span>
      </Link>

      {/* next */}
      <Link href={next.href} className="flex flex-col gap-2 w-fit text-right">
        <span className="font-medium text-grey">Next</span>
        <span className="text-light">{next.title}</span>
      </Link>
    </footer>
  );
};

export { ExperimentLayout };
