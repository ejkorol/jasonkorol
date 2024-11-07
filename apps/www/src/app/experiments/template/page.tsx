import { ExperimentLayout } from "@/components";

const Template = () => {
  return (
    <ExperimentLayout>
      <ExperimentLayout.Header title="Designing Aesthetics" date="July 2024" />
      <ExperimentLayout.Section>
        <ExperimentLayout.SectionHeader>
          A Section
        </ExperimentLayout.SectionHeader>
        <ExperimentLayout.Paragraph>
          One of the most challenging fundamental pillars in visual media is
          composition. How do you distill a three-dimensional world into a
          two-dimensional (still) frame, while conveying story and depth? A
          favorite technique of mine to do so and also create visual interest is
          to composite the scene with layered objects. In filmmaking, this is
          generally referred to as "dirtying the frame" with foreground elements
          such as props or unconventional framing—usually the most obvious,
          pristine head-on shot would not subtly advance the story or be as
          visually compelling.
        </ExperimentLayout.Paragraph>
        <ExperimentLayout.Image />
        <ExperimentLayout.Paragraph>
          For example, the composition below produces a sense of unease by
          suggesting that the subject is being observed from behind another
          object. Without the foreground obstruction, I would not draw this
          assumption and this single frame would carry less emotion and
          information.
        </ExperimentLayout.Paragraph>
      </ExperimentLayout.Section>
      <ExperimentLayout.Footer
        previous={{
          title: "Contrasting Ideas",
          href: "#",
        }}
        next={{
          title: "Designing Interfaces",
          href: "#",
        }}
      />
    </ExperimentLayout>
  );
};

export default Template;
