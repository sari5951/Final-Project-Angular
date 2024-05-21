import { jobField } from "./jobField";
export interface Job {
    id: number;
    jobField: jobField;
    jobTitle: string;
    scopeOfHours: string;
    region: string;
    requirements: string[];
    workFromHome: boolean;
  }
