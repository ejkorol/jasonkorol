"use client";

import { ExperimentGrid } from "@/components";
import { useState, useEffect } from "react";

const mockData = Array.from(Array(7));

const Experiments = () => {
  const [screen, setScreen] = useState<{
    sm: boolean;
    md: boolean;
    lg: boolean;
  }>({
    sm: false,
    md: false,
    lg: false,
  });

  useEffect(() => {
    const handleResize = () => {
      if (window.innerWidth <= 768) {
        setScreen({ sm: true, md: false, lg: false });
      } else if (window.innerWidth > 768 && window.innerWidth < 1024) {
        setScreen({ sm: false, md: true, lg: false });
      } else {
        setScreen({ sm: false, md: false, lg: true });
      }
    };

    window.addEventListener("resize", handleResize);
    handleResize();

    return () => window.removeEventListener("resize", handleResize);
  }, []);

  const getRandomSize = () => {
    const sizes = ["sm", "md", "lg", "xl"];
    return sizes[Math.floor(Math.random() * sizes.length)];
  };

  const columns = screen.lg ? 3 : screen.md ? 2 : 1;

  const columnData = Array.from({ length: columns }, (_, i) =>
    mockData.filter((_, index) => index % columns === i),
  );

  return (
    <ExperimentGrid>
      {columnData.map((data, colIdx) => (
        <ExperimentGrid.Column key={colIdx}>
          {data.map((_, idx) => (
            <ExperimentGrid.Item key={idx}>
              <ExperimentGrid.Content>
                <ExperimentGrid.Image size={getRandomSize() as any} />
                <ExperimentGrid.Title title="string" date="string" />
              </ExperimentGrid.Content>
              <ExperimentGrid.Footer title="article" />
            </ExperimentGrid.Item>
          ))}
        </ExperimentGrid.Column>
      ))}
    </ExperimentGrid>
  );
};

export default Experiments;
