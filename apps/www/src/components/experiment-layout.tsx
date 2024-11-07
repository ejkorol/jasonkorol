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
  imageProps = {},
  className = "",
}: {
  imageProps?: VariantProps<typeof imageVariants>;
  className?: string;
}) => {
  const { size } = imageProps || {};

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
    <footer className="mt-16 pt-8 border-dark border-t-[0.5px] flex justify-between items-center">
      <div className="flex flex-col gap-2 w-1/2 text-left">
        <p className="font-medium text-grey">Previous</p>
        <Link href={previous.href} className="text-light">
          {previous.title}
        </Link>
      </div>
      <div className="flex flex-col gap-2 w-1/2 text-right">
        <p className="font-medium text-grey">Next</p>
        <Link href={next.href} className="text-light">
          {next.title}
        </Link>
      </div>
    </footer>
  );
};

export { ExperimentLayout };
