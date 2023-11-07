import { type ClassValue, clsx } from "clsx"
import { twMerge } from "tailwind-merge"

export function cn(...inputs: ClassValue[]) {
  return twMerge(clsx(inputs))
}

/**
 * Validate email
 * @param email Email to validate
 * @returns Boolean indicating if email is valid
 */
export const validateEmail = (email: string): boolean => email.toLowerCase().match(
  /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|.(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/
) !== null;

/**
 * Generates a pseudo-random string of a given length
 * @param length Length of the string to generate
 * @returns Random string
 */
export const generateId = (length: number) => {
  let result = 'ontax-id-';
  const characters = 'ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789';
  const charactersLength = Number(length);
  for (let i = 0; i < charactersLength; i++) {
    result += characters.charAt(Math.floor(Math.random() * charactersLength));
  }
  return result;
}

/**
 * Wait for a given amount of time
 * @param ms Time to wait in milliseconds
 * @returns Promise that resolves after the given amount of time
 */
export const wait = async (ms: number) => new Promise(resolve => setTimeout(resolve, ms));

/**
 * Copy a string to the clipboard
 * @param text Text to copy to the clipboard
 * @returns Boolean indicating if the text was copied to the clipboard
 */
export const copyToClipboard = async (text: string): Promise<boolean> => {
  try {
    await navigator.clipboard.writeText(text);
  } catch {
    return false;
  }
  return true;
}