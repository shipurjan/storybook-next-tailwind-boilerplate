/* https://akhilaariyachandra.com/snippets/using-clsx-or-classnames-with-tailwind-merge */

import { clsx, type ClassValue } from "clsx";
import { twMerge } from "tailwind-merge";

export const cn = (...args: ClassValue[]) => twMerge(clsx(args));
