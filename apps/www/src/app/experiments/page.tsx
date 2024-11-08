"use client";
import { useRef, useState, useEffect, useCallback } from "react";
import { useCursor } from "@/components/cursor";
import { ExperimentGrid } from "@/components";

const mockData = Array.from(Array(7));

const Experiments = () => {
  const [screen, setScreen] = useState<{
    sm: boolean;
    md: boolean;
    lg: boolean;
  }>({ sm: false, md: false, lg: false });

  const buttonRefs = useRef<(HTMLButtonElement | null)[]>([]);
  const {
    scrollPosition,
    mousePosition,
    cursorScope,
    animateCursor,
    setMousePosition,
  } = useCursor();

  useEffect(() => {
    if (!buttonRefs.current.length) return;

    let cursorUpdated = false;
    const { x: mouseX, y: mouseY } = mousePosition;

    for (const button of buttonRefs.current) {
      if (!button) continue;

      const hitBox = 10;
      const {
        left: buttonX,
        top: buttonY,
        width: buttonWidth,
        height: buttonHeight,
      } = button.getBoundingClientRect();

      const adjustedButtonX = buttonX + scrollPosition.x;
      const adjustedButtonY = buttonY + scrollPosition.y;

      if (
        mouseX >= adjustedButtonX - hitBox &&
        mouseX <= adjustedButtonX + buttonWidth + hitBox &&
        mouseY >= adjustedButtonY - hitBox &&
        mouseY <= adjustedButtonY + buttonHeight + hitBox
      ) {
        const snappedPosition = {
          x: adjustedButtonX,
          y: adjustedButtonY,
        };
        if (mouseX !== snappedPosition.x || mouseY !== snappedPosition.y) {
          console.log("button: ", buttonX, buttonY);
          console.log("mouse: ", mouseX, mouseY);
          console.log("scroll: ", scrollPosition.x, scrollPosition.y);
          setMousePosition(snappedPosition);
        }

        animateCursor(
          cursorScope.current,
          {
            x: adjustedButtonX,
            y: adjustedButtonY,
            height: buttonHeight,
            width: buttonWidth,
            opacity: "50%",
            borderRadius: "0.5rem",
          },
          {
            type: "spring",
            stiffness: 300,
            damping: 20,
            mass: 0.5,
          },
        );

        cursorUpdated = true;
        break;
      }
    }

    if (!cursorUpdated) {
      animateCursor(
        cursorScope.current,
        {
          height: 30,
          width: 30,
          opacity: "80%",
          borderRadius: "50%",
        },
        {
          type: "spring",
          stiffness: 300,
          damping: 20,
          mass: 0.5,
        },
      );
    }
  }, [mousePosition, buttonRefs, scrollPosition]);

  const handleResize = useCallback(() => {
    if (window.innerWidth <= 768) {
      setScreen({ sm: true, md: false, lg: false });
    } else if (window.innerWidth > 768 && window.innerWidth < 1024) {
      setScreen({ sm: false, md: true, lg: false });
    } else {
      setScreen({ sm: false, md: false, lg: true });
    }
  }, []);

  useEffect(() => {
    window.addEventListener("resize", handleResize);
    handleResize();
    return () => window.removeEventListener("resize", handleResize);
  }, [handleResize]);

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
                <ExperimentGrid.Image size="md" />
                <ExperimentGrid.Title title="string" date="string" />
              </ExperimentGrid.Content>
              <ExperimentGrid.Footer
                title="article"
                ref={(el) => {
                  if (el) {
                    buttonRefs.current[colIdx * mockData.length + idx] = el;
                  }
                }}
              />
            </ExperimentGrid.Item>
          ))}
        </ExperimentGrid.Column>
      ))}
    </ExperimentGrid>
  );
};

export default Experiments;
