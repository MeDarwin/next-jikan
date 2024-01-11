import React from "react";

const Badge = ({
  children,
  className,
}: {
  children: React.ReactNode;
  className?: string;
}) => {
  return <span className={`badge ${className}`}>{children}</span>;
};

export default Badge;
