import { ReactNode } from "react";

export interface StepProps {
  stepNumber: number;
  title: string;
  description: string;
  children?: ReactNode;
}
