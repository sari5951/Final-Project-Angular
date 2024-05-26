import { jobField } from "./jobField";
export interface Job {
    id: number;
    jobField: jobField;
    jojbTitle: string;
    scopeOfHours: string;
    region: string;
    requirements: string[];
    workFromHome: boolean;
  }
