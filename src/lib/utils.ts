import * as React from "react"
import { clsx, type ClassValue } from "clsx"
import { twMerge } from "tailwind-merge"

export function cn(...inputs: ClassValue[]) {
    return twMerge(clsx(inputs))
}

export function createPageUrl(pageName: string) {
    const pages: Record<string, string> = {
        'Home': '/',
        'PrivacyPolicy': '/privacy-policy',
    };
    return pages[pageName] || '/';
} 