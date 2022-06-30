import { CommonTableColumnDirectionEnum } from "../enums";

export interface ICommonTableColumn<T extends Record<string, any> = Record<string, any>> {
  key: keyof T;
  config?: Partial<ICommonTableColumnConfig>;
}

export interface ICommonTableColumnConfig {
  title: string;
  text: string;
  fixedWidth: number;
  customHeaderClass: string;
  customBodyClass: string;
  colSpan: number;
  rowSpan: number;
  sortable: boolean;
  direction: CommonTableColumnDirectionEnum;
}