import { TimeReport, Test } from "./types";
export declare function loadXML(file: string): any;
export declare function addNewFiles(reports: TimeReport[], tests: Test[]): TimeReport[];
export declare function removeDeletedFiles(reports: TimeReport[], tests: Test[]): TimeReport[];
export declare function findFilenameInJUnit(testsuite: any, prop?: string): string;
