import { ReactNode } from "react";

export interface CardProps {
  className?: string;
  children?: React.ReactNode;
}

export interface ButtonProps {
  className?: string;
  onClick?: () => void;
  children?: ReactNode;
  // other props
}

export interface PillProps {
  className?: string;
  label: string;
  onClick?: () => void;
  selected?: boolean;
}

export interface PropertyProps {
  name: string;
  address: {
    state: string;
    city: string;
    country: string;
  };
  rating: number;
  category: string[];
  price: number;
  offers: {
    bed: string;
    shower: string;
    occupants: string;
  };
  image: string;
  discount: string;
}
