import { TimeReport } from "./types";
export declare function distribute(reports: TimeReport[], jobs: number): {
    time: number;
    files: string[];
}[];
