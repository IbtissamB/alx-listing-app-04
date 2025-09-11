import React from "react";
import { CardProps } from "@/interfaces";

const Card: React.FC<CardProps> = ({ children, className }: CardProps) => {
  return <div className={className}>{children}</div>;
}

export default Card;
