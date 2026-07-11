import { img0, img4, img5, img7 } from '../data/landingData';

import type { Project } from '../types';

const IMAGE_BASE_URL = import.meta.env.VITE_API_BASE_URL.replace("/api", "");
export const getImageUrl = (path: string) => {
    if (!path) return "";
    return `${IMAGE_BASE_URL}/${path}`;
};

// Image-only fallback for Project cards.
// Backend remains the source of truth for all business fields.
const defaultProjectImage = img0;

export const PROJECT_FALLBACK_IMAGES: Record<number, string> = {
    1: img4,
    2: img5,
    3: img7,
    4: img0,
};

const isNonEmptyString = (v: unknown): v is string =>
    typeof v === 'string' && v.trim().length > 0;

export const getProjectImage = (project: Project | null | undefined): string => {
    const backendImage = project?.image;
    if (isNonEmptyString(backendImage)) return backendImage;

    const id = project?.id;
    if (typeof id === 'number' && PROJECT_FALLBACK_IMAGES[id]) {
        return PROJECT_FALLBACK_IMAGES[id];
    }

    // Keep safe default; use local image assets only.
    return defaultProjectImage;
};
