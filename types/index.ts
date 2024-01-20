import { MouseEventHandler } from "react";

export interface CustomBtnProps {
  isDisabled?: boolean;
  btnType: "button" | "submit";
  title: string;
  handleClick?: MouseEventHandler<HTMLButtonElement>;
  rightIcone?: string;
  btnStyle?: string;
}

export interface SearchManufacturerProps {
  manufacturer: string;
  setManufacturer: (manufacturer: string) => void;
}

export interface carProps {
  city_mpg: number;
  class: string;
  combination_mpg: number;
  cylinders: number;
  displacement: number;
  drive: string;
  fuel_type: string;
  highway_mpg: number;
  make: string;
  model: string;
  transmission: string;
  year: number;
}

export interface FilterData {
  manufacturer: string;
  model: number;
  year: string;
  fuel: string;
  limit: number;
}
export interface CatalougeProps {
  searchParams: FilterData;
}

export interface OptionProps {
  title: string;
  value: string;
}

export interface CustomFilterProps {
  title: string;
  options: OptionProps[];
}

export interface ShowMOreProps {
  pageNumber: number;
  isNext: boolean;
}
