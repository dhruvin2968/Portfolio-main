import React, { useRef } from 'react';
import { cn } from "@/utils/cn";

export const GlareCard = ({
  children,
  className,
}: {
  children: React.ReactNode;
  className?: string;
}) => {
  const refElement = useRef<HTMLDivElement>(null);

  const containerStyle = {
    "--transition-duration": "200ms",
    "--scale": "1",
    "--bg-color": "rgb(4,7,29)",
    "--bg-hover-color": "rgb(4,7,45)",
  } as any;

  const handlePointerMove = (event: React.PointerEvent<HTMLDivElement>) => {
    if (refElement.current) {
      const rect = event.currentTarget.getBoundingClientRect();
      const position = {
        x: (event.clientX - rect.left) / rect.width * 100,
        y: (event.clientY - rect.top) / rect.height * 100,
      };
      refElement.current.style.setProperty("--bg-color", `rgba(${position.x}, ${position.y}, 100, 0.3)`);
    }
  };

  return (
    <div
      style={containerStyle}
      className="relative transition-transform duration-[var(--transition-duration)] ease-in-out hover:scale-[var(--scale)] hover:bg-[var(--bg-hover-color)]"
      ref={refElement}
      onPointerMove={handlePointerMove}
    >
      <div
        className={cn("h-full w-full transition-all duration-[var(--transition-duration)]", className)}
      >
        {children}
      </div>
    </div>
  );
};
