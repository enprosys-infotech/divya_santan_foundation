/**
 * Spiritual Icon Registry
 *
 * Maps Sanatan/Spiritual symbols to their PNG asset paths.
 * These icons represent ancient Vedic wisdom integrated with modern science.
 * Using high-quality yellow-colored spiritual icons for enhanced visual impact.
 */

import omIcon from "@/assets/mdi--om.png";
import lotusIcon from "@/assets/ph--flower-lotus.png";
import tridentIcon from "@/assets/noto--trident-emblem.png";
import swastikaIcon from "@/assets/pinhead--swastika-with-dots.png";
import leafIcon from "@/assets/mdi--leaf.png";
import sunIcon from "@/assets/gg--sun.png";
import scriptIcon from "@/assets/streamline-plump--script-2.png";
import yogaIcon from "@/assets/hugeicons--yoga-01.png";

export const SPIRITUAL_ICONS = {
  om: {
    src: omIcon,
    alt: "Om Symbol - Sacred Sound & Vibration",
    label: "Om",
    description: "Primordial sound, Vedic mantras, auditory science",
  },
  lotus: {
    src: lotusIcon,
    alt: "Lotus - Purity & Enlightenment",
    label: "Lotus",
    description: "Purity, environmental consciousness, transformation",
  },
  trident: {
    src: tridentIcon,
    alt: "Trident - Divine Trinity",
    label: "Trident",
    description: "Body, Mind, Spirit - the sacred trinity",
  },
  swastika: {
    src: swastikaIcon,
    alt: "Swastika - Auspiciousness",
    label: "Swastika",
    description: "Well-being, four directions, good fortune",
  },
  leaf: {
    src: leafIcon,
    alt: "Leaf - Nature & Ayurveda",
    label: "Leaf",
    description: "Nutrition, natural wellness, Ayurvedic science",
  },
  sun: {
    src: sunIcon,
    alt: "Sun - Solar Energy & Cycles",
    label: "Sun",
    description: "Surya Namaskar, circadian rhythms, natural cycles",
  },
  script: {
    src: scriptIcon,
    alt: "Sacred Script - Knowledge & Wisdom",
    label: "Script",
    description: "Sacred texts, storytelling, knowledge transmission",
  },
  yoga: {
    src: yogaIcon,
    alt: "Yoga - Breath & Life Force",
    label: "Yoga/Pranayama",
    description: "Breathing practices, vital energy, wellness",
  },
} as const;

export type SpiritualIconKey = keyof typeof SPIRITUAL_ICONS;

/**
 * Map synergy pillar IDs to their corresponding spiritual icons
 */
export const SYNERGY_ICON_MAP: Record<string, SpiritualIconKey> = {
  soundNeuroscience: "om",
  epigeneticsLotus: "lotus",
  triadEndocrinology: "trident",
  samvadLimbic: "swastika",
  aharaEpigenomics: "leaf",
  suryaChronobiology: "sun",
  pranayamaRespiratory: "yoga",
  kathaMemory: "script",
} as const;

/**
 * Get icon by synergy pillar ID
 */
export function getIconByPillarId(pillarId: string) {
  const iconKey = SYNERGY_ICON_MAP[pillarId];
  return iconKey ? SPIRITUAL_ICONS[iconKey] : null;
}

/**
 * Get all spiritual icons
 */
export function getAllSpiritualIcons() {
  return Object.entries(SPIRITUAL_ICONS).map(([key, value]) => ({
    key,
    ...value,
  }));
}
