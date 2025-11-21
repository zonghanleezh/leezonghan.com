export const THEME_STORAGE_KEY = "color-theme"

export type ThemeName =
  | "modern-neutral"
  | "warm-neutral"
  | "neutral-gray"
  | "ruul-slate"
  | "woodland-romance"
  | "campfire-orange"
  | "relato-crimson"
  | "wittl-lime"
  | "greenhouse-forest"
  | "letters-sky"
  | "ocean-blue"

export interface ThemeColors {
  background: string
  foreground: string
  card: string
  cardForeground: string
  popover: string
  popoverForeground: string
  primary: string
  primaryForeground: string
  secondary: string
  secondaryForeground: string
  muted: string
  mutedForeground: string
  accent: string
  accentForeground: string
  destructive: string
  destructiveForeground: string
  border: string
  input: string
  ring: string
  chart1: string
  chart2: string
  chart3: string
  chart4: string
  chart5: string
}

export interface Theme {
  name: ThemeName
  displayName: string
  description: string
  light: ThemeColors
  dark: ThemeColors
}

const NEUTRAL_GRAY_THEME: Theme = {
  name: "neutral-gray",
  displayName: "Neutral Gray",
  description: "Clean and neutral design with classic gray tones",
  light: {
    background: "0 0% 100%",
    foreground: "0 0% 3.9%",
    card: "0 0% 100%",
    cardForeground: "0 0% 3.9%",
    popover: "0 0% 100%",
    popoverForeground: "0 0% 3.9%",
    primary: "0 0% 9%",
    primaryForeground: "0 0% 98%",
    secondary: "0 0% 96.1%",
    secondaryForeground: "0 0% 9%",
    muted: "0 0% 96.1%",
    mutedForeground: "0 0% 45.1%",
    accent: "0 0% 96.1%",
    accentForeground: "0 0% 9%",
    destructive: "0 84.2% 60.2%",
    destructiveForeground: "0 0% 98%",
    border: "0 0% 89.8%",
    input: "0 0% 89.8%",
    ring: "0 0% 3.9%",
    chart1: "12 76% 61%",
    chart2: "173 58% 39%",
    chart3: "197 37% 24%",
    chart4: "43 74% 66%",
    chart5: "27 87% 67%"
  },
  dark: {
    background: "0 0% 3.9%",
    foreground: "0 0% 98%",
    card: "0 0% 3.9%",
    cardForeground: "0 0% 98%",
    popover: "0 0% 3.9%",
    popoverForeground: "0 0% 98%",
    primary: "0 0% 98%",
    primaryForeground: "0 0% 9%",
    secondary: "0 0% 14.9%",
    secondaryForeground: "0 0% 98%",
    muted: "0 0% 14.9%",
    mutedForeground: "0 0% 63.9%",
    accent: "0 0% 14.9%",
    accentForeground: "0 0% 98%",
    destructive: "0 62.8% 30.6%",
    destructiveForeground: "0 0% 98%",
    border: "0 0% 14.9%",
    input: "0 0% 14.9%",
    ring: "0 0% 83.1%",
    chart1: "220 70% 50%",
    chart2: "160 60% 45%",
    chart3: "30 80% 55%",
    chart4: "280 65% 60%",
    chart5: "340 75% 55%"
  }
}

const WOODLAND_ROMANCE_THEME: Theme = {
  name: "woodland-romance",
  displayName: "Woodland Romance",
  description:
    "Warm cream with forest green and terracotta accents - perfect for romantic outdoor weddings",
  light: {
    background: "40 30% 96%",
    foreground: "140 30% 20%",
    card: "40 25% 98%",
    cardForeground: "140 30% 20%",
    popover: "40 25% 98%",
    popoverForeground: "140 30% 20%",
    primary: "140 35% 25%",
    primaryForeground: "40 30% 96%",
    secondary: "40 20% 92%",
    secondaryForeground: "140 30% 20%",
    muted: "40 15% 90%",
    mutedForeground: "140 15% 45%",
    accent: "15 55% 60%",
    accentForeground: "40 30% 96%",
    destructive: "0 70% 55%",
    destructiveForeground: "40 30% 96%",
    border: "40 20% 88%",
    input: "40 20% 88%",
    ring: "140 35% 25%",
    chart1: "140 35% 25%",
    chart2: "15 55% 60%",
    chart3: "350 35% 75%",
    chart4: "40 30% 96%",
    chart5: "140 15% 45%"
  },
  dark: {
    background: "140 20% 12%",
    foreground: "40 30% 92%",
    card: "140 20% 15%",
    cardForeground: "40 30% 92%",
    popover: "140 20% 15%",
    popoverForeground: "40 30% 92%",
    primary: "140 30% 70%",
    primaryForeground: "140 30% 10%",
    secondary: "140 15% 20%",
    secondaryForeground: "40 30% 92%",
    muted: "140 15% 22%",
    mutedForeground: "40 15% 65%",
    accent: "15 55% 50%",
    accentForeground: "40 30% 96%",
    destructive: "0 65% 45%",
    destructiveForeground: "40 30% 96%",
    border: "140 15% 25%",
    input: "140 15% 25%",
    ring: "140 30% 70%",
    chart1: "140 30% 70%",
    chart2: "15 55% 50%",
    chart3: "350 30% 60%",
    chart4: "40 30% 92%",
    chart5: "140 15% 45%"
  }
}

const OCEAN_BLUE_THEME: Theme = {
  name: "ocean-blue",
  displayName: "Ocean Blue",
  description: "Calming ocean blues with sandy accents",
  light: {
    background: "200 20% 98%",
    foreground: "210 50% 15%",
    card: "0 0% 100%",
    cardForeground: "210 50% 15%",
    popover: "0 0% 100%",
    popoverForeground: "210 50% 15%",
    primary: "210 75% 48%",
    primaryForeground: "0 0% 100%",
    secondary: "200 20% 92%",
    secondaryForeground: "210 50% 20%",
    muted: "200 15% 94%",
    mutedForeground: "210 25% 42%",
    accent: "210 75% 48%",
    accentForeground: "0 0% 100%",
    destructive: "0 84.2% 60.2%",
    destructiveForeground: "0 0% 98%",
    border: "200 20% 88%",
    input: "200 18% 91%",
    ring: "210 75% 48%",
    chart1: "210 75% 48%",
    chart2: "180 65% 52%",
    chart3: "40 80% 58%",
    chart4: "195 70% 45%",
    chart5: "160 55% 48%"
  },
  dark: {
    background: "215 25% 9%",
    foreground: "200 20% 96%",
    card: "215 25% 12%",
    cardForeground: "200 20% 96%",
    popover: "215 25% 12%",
    popoverForeground: "200 20% 96%",
    primary: "210 70% 58%",
    primaryForeground: "0 0% 100%",
    secondary: "215 20% 17%",
    secondaryForeground: "200 20% 92%",
    muted: "215 20% 17%",
    mutedForeground: "200 18% 65%",
    accent: "210 70% 58%",
    accentForeground: "0 0% 100%",
    destructive: "0 62.8% 30.6%",
    destructiveForeground: "0 0% 98%",
    border: "215 20% 21%",
    input: "215 20% 20%",
    ring: "210 70% 58%",
    chart1: "210 70% 58%",
    chart2: "180 60% 58%",
    chart3: "40 75% 62%",
    chart4: "195 65% 52%",
    chart5: "160 55% 58%"
  }
}

const WARM_NEUTRAL_THEME: Theme = {
  name: "warm-neutral",
  displayName: "Warm Neutral",
  description: "Sophisticated warm beige and charcoal tones",
  light: {
    background: "40 28% 97%",
    foreground: "30 15% 20%",
    card: "40 35% 98%",
    cardForeground: "30 15% 20%",
    popover: "0 0% 100%",
    popoverForeground: "30 15% 20%",
    primary: "30 25% 28%",
    primaryForeground: "40 30% 98%",
    secondary: "40 22% 90%",
    secondaryForeground: "30 20% 22%",
    muted: "40 20% 90%",
    mutedForeground: "30 15% 38%",
    accent: "30 25% 28%",
    accentForeground: "40 30% 98%",
    destructive: "0 84.2% 60.2%",
    destructiveForeground: "0 0% 98%",
    border: "40 18% 84%",
    input: "40 18% 89%",
    ring: "30 25% 28%",
    chart1: "30 25% 32%",
    chart2: "40 50% 58%",
    chart3: "25 45% 52%",
    chart4: "35 40% 48%",
    chart5: "20 50% 62%"
  },
  dark: {
    background: "30 18% 9%",
    foreground: "40 25% 94%",
    card: "30 18% 12%",
    cardForeground: "40 25% 94%",
    popover: "30 18% 12%",
    popoverForeground: "40 25% 94%",
    primary: "40 32% 78%",
    primaryForeground: "30 20% 10%",
    secondary: "30 15% 17%",
    secondaryForeground: "40 25% 90%",
    muted: "30 15% 17%",
    mutedForeground: "40 20% 66%",
    accent: "40 32% 78%",
    accentForeground: "30 20% 10%",
    destructive: "0 62.8% 30.6%",
    destructiveForeground: "0 0% 98%",
    border: "30 15% 21%",
    input: "30 15% 20%",
    ring: "40 32% 78%",
    chart1: "40 32% 78%",
    chart2: "40 42% 68%",
    chart3: "25 42% 62%",
    chart4: "35 38% 58%",
    chart5: "20 48% 72%"
  }
}

const MODERN_NEUTRAL_THEME: Theme = {
  name: "modern-neutral",
  displayName: "Modern Neutral",
  description: "Clean modern design with warm off-white backgrounds",
  light: {
    background: "50 30% 98%",
    foreground: "40 18% 10%",
    card: "0 0% 100%",
    cardForeground: "40 18% 10%",
    popover: "0 0% 100%",
    popoverForeground: "40 18% 10%",
    primary: "40 20% 12%",
    primaryForeground: "0 0% 98%",
    secondary: "50 18% 94%",
    secondaryForeground: "40 18% 12%",
    muted: "50 18% 94%",
    mutedForeground: "40 12% 43%",
    accent: "40 20% 12%",
    accentForeground: "0 0% 98%",
    destructive: "0 84.2% 60.2%",
    destructiveForeground: "0 0% 98%",
    border: "50 18% 89%",
    input: "50 18% 93%",
    ring: "40 20% 12%",
    chart1: "40 20% 15%",
    chart2: "45 58% 52%",
    chart3: "35 48% 48%",
    chart4: "30 38% 42%",
    chart5: "50 52% 58%"
  },
  dark: {
    background: "40 25% 7%",
    foreground: "50 18% 96%",
    card: "40 22% 9%",
    cardForeground: "50 18% 96%",
    popover: "40 22% 9%",
    popoverForeground: "50 18% 96%",
    primary: "50 22% 88%",
    primaryForeground: "40 25% 12%",
    secondary: "40 18% 13%",
    secondaryForeground: "50 18% 88%",
    muted: "40 18% 13%",
    mutedForeground: "50 12% 58%",
    accent: "50 22% 88%",
    accentForeground: "40 25% 12%",
    destructive: "0 62.8% 30.6%",
    destructiveForeground: "0 0% 98%",
    border: "40 18% 16%",
    input: "40 18% 15%",
    ring: "50 22% 88%",
    chart1: "50 22% 88%",
    chart2: "45 52% 68%",
    chart3: "35 45% 62%",
    chart4: "30 38% 58%",
    chart5: "50 48% 72%"
  }
}

const CAMPFIRE_ORANGE_THEME: Theme = {
  name: "campfire-orange",
  displayName: "Campfire Orange",
  description:
    "Vibrant orange accents with warm cream backgrounds inspired by Campfire.ai",
  light: {
    background: "30 60% 97%",
    foreground: "20 15% 10%",
    card: "0 0% 100%",
    cardForeground: "20 15% 10%",
    popover: "0 0% 100%",
    popoverForeground: "20 15% 10%",
    primary: "24 95% 54%",
    primaryForeground: "0 0% 100%",
    secondary: "30 45% 94%",
    secondaryForeground: "24 70% 28%",
    muted: "30 40% 94%",
    mutedForeground: "20 12% 42%",
    accent: "24 95% 54%",
    accentForeground: "0 0% 100%",
    destructive: "0 84.2% 60.2%",
    destructiveForeground: "0 0% 98%",
    border: "30 30% 87%",
    input: "30 28% 90%",
    ring: "24 95% 54%",
    chart1: "24 95% 54%",
    chart2: "141 48% 62%",
    chart3: "262 55% 72%",
    chart4: "24 85% 65%",
    chart5: "141 55% 52%"
  },
  dark: {
    background: "240 8% 7%",
    foreground: "30 18% 96%",
    card: "240 8% 9%",
    cardForeground: "30 18% 96%",
    popover: "240 8% 9%",
    popoverForeground: "30 18% 96%",
    primary: "24 92% 58%",
    primaryForeground: "0 0% 100%",
    secondary: "240 6% 13%",
    secondaryForeground: "30 18% 92%",
    muted: "240 6% 13%",
    mutedForeground: "30 12% 62%",
    accent: "24 92% 58%",
    accentForeground: "0 0% 100%",
    destructive: "0 62.8% 30.6%",
    destructiveForeground: "0 0% 98%",
    border: "240 6% 16%",
    input: "240 6% 15%",
    ring: "24 92% 58%",
    chart1: "24 92% 58%",
    chart2: "141 45% 58%",
    chart3: "262 50% 68%",
    chart4: "24 82% 68%",
    chart5: "141 48% 50%"
  }
}

const RELATO_CRIMSON_THEME: Theme = {
  name: "relato-crimson",
  displayName: "Relato Crimson",
  description: "Bold crimson red accents with warm neutrals inspired by Relato",
  light: {
    background: "0 0% 98%",
    foreground: "0 0% 10%",
    card: "0 0% 100%",
    cardForeground: "0 0% 10%",
    popover: "0 0% 100%",
    popoverForeground: "0 0% 10%",
    primary: "0 70% 45%",
    primaryForeground: "0 0% 100%",
    secondary: "45 100% 94%",
    secondaryForeground: "0 70% 25%",
    muted: "0 0% 96%",
    mutedForeground: "0 0% 40%",
    accent: "45 100% 55%",
    accentForeground: "0 0% 10%",
    destructive: "0 84.2% 60.2%",
    destructiveForeground: "0 0% 98%",
    border: "0 0% 90%",
    input: "0 0% 90%",
    ring: "0 70% 45%",
    chart1: "0 70% 45%",
    chart2: "45 100% 55%",
    chart3: "0 70% 60%",
    chart4: "45 90% 65%",
    chart5: "0 60% 50%"
  },
  dark: {
    background: "0 0% 8%",
    foreground: "0 0% 95%",
    card: "0 0% 10%",
    cardForeground: "0 0% 95%",
    popover: "0 0% 10%",
    popoverForeground: "0 0% 95%",
    primary: "0 70% 55%",
    primaryForeground: "0 0% 100%",
    secondary: "0 0% 15%",
    secondaryForeground: "0 0% 90%",
    muted: "0 0% 15%",
    mutedForeground: "0 0% 60%",
    accent: "45 100% 60%",
    accentForeground: "0 0% 10%",
    destructive: "0 62.8% 30.6%",
    destructiveForeground: "0 0% 98%",
    border: "0 0% 18%",
    input: "0 0% 18%",
    ring: "0 70% 55%",
    chart1: "0 70% 55%",
    chart2: "45 100% 60%",
    chart3: "0 70% 65%",
    chart4: "45 90% 70%",
    chart5: "0 60% 60%"
  }
}

const LETTERS_SKY_THEME: Theme = {
  name: "letters-sky",
  displayName: "Letters Sky",
  description:
    "Professional sky blue with soft gradients inspired by Letters.app",
  light: {
    background: "204 50% 98%",
    foreground: "215 20% 12%",
    card: "0 0% 100%",
    cardForeground: "215 20% 12%",
    popover: "0 0% 100%",
    popoverForeground: "215 20% 12%",
    primary: "197 70% 50%",
    primaryForeground: "0 0% 100%",
    secondary: "204 35% 94%",
    secondaryForeground: "197 60% 28%",
    muted: "204 25% 95%",
    mutedForeground: "215 12% 43%",
    accent: "197 70% 50%",
    accentForeground: "0 0% 100%",
    destructive: "0 84.2% 60.2%",
    destructiveForeground: "0 0% 98%",
    border: "204 25% 88%",
    input: "204 25% 91%",
    ring: "197 70% 50%",
    chart1: "197 70% 50%",
    chart2: "263 55% 62%",
    chart3: "197 65% 68%",
    chart4: "204 55% 63%",
    chart5: "263 48% 58%"
  },
  dark: {
    background: "220 18% 8%",
    foreground: "204 18% 95%",
    card: "220 18% 10%",
    cardForeground: "204 18% 95%",
    popover: "220 18% 10%",
    popoverForeground: "204 18% 95%",
    primary: "197 70% 56%",
    primaryForeground: "0 0% 100%",
    secondary: "220 12% 15%",
    secondaryForeground: "204 18% 92%",
    muted: "220 12% 15%",
    mutedForeground: "204 12% 62%",
    accent: "197 70% 56%",
    accentForeground: "0 0% 100%",
    destructive: "0 62.8% 30.6%",
    destructiveForeground: "0 0% 98%",
    border: "220 12% 18%",
    input: "220 12% 17%",
    ring: "197 70% 56%",
    chart1: "197 70% 56%",
    chart2: "263 55% 66%",
    chart3: "197 65% 72%",
    chart4: "204 55% 68%",
    chart5: "263 48% 62%"
  }
}

const GREENHOUSE_FOREST_THEME: Theme = {
  name: "greenhouse-forest",
  displayName: "Greenhouse Forest",
  description:
    "Professional forest green with vibrant accents inspired by Greenhouse",
  light: {
    background: "160 18% 98%",
    foreground: "160 55% 15%",
    card: "0 0% 100%",
    cardForeground: "160 55% 15%",
    popover: "0 0% 100%",
    popoverForeground: "160 55% 15%",
    primary: "163 45% 48%",
    primaryForeground: "0 0% 100%",
    secondary: "160 25% 93%",
    secondaryForeground: "160 50% 20%",
    muted: "160 18% 95%",
    mutedForeground: "160 18% 42%",
    accent: "163 45% 48%",
    accentForeground: "0 0% 100%",
    destructive: "0 84.2% 60.2%",
    destructiveForeground: "0 0% 98%",
    border: "160 20% 87%",
    input: "160 18% 90%",
    ring: "163 45% 48%",
    chart1: "163 45% 48%",
    chart2: "160 45% 58%",
    chart3: "163 45% 68%",
    chart4: "160 38% 53%",
    chart5: "163 38% 45%"
  },
  dark: {
    background: "160 35% 9%",
    foreground: "160 18% 96%",
    card: "160 32% 11%",
    cardForeground: "160 18% 96%",
    popover: "160 32% 11%",
    popoverForeground: "160 18% 96%",
    primary: "163 45% 56%",
    primaryForeground: "0 0% 100%",
    secondary: "160 25% 15%",
    secondaryForeground: "160 18% 92%",
    muted: "160 25% 15%",
    mutedForeground: "160 15% 63%",
    accent: "163 45% 56%",
    accentForeground: "0 0% 100%",
    destructive: "0 62.8% 30.6%",
    destructiveForeground: "0 0% 98%",
    border: "160 25% 19%",
    input: "160 25% 18%",
    ring: "163 45% 56%",
    chart1: "163 45% 56%",
    chart2: "160 45% 64%",
    chart3: "163 45% 72%",
    chart4: "160 38% 58%",
    chart5: "163 38% 52%"
  }
}

const WITTL_LIME_THEME: Theme = {
  name: "wittl-lime",
  displayName: "Wittl Lime",
  description: "Energetic lime green on soft neutrals inspired by Wittl",
  light: {
    background: "60 12% 99%",
    foreground: "180 12% 10%",
    card: "0 0% 100%",
    cardForeground: "180 12% 10%",
    popover: "0 0% 100%",
    popoverForeground: "180 12% 10%",
    primary: "83 90% 64%",
    primaryForeground: "180 25% 12%",
    secondary: "60 18% 95%",
    secondaryForeground: "180 12% 15%",
    muted: "60 15% 95%",
    mutedForeground: "180 8% 42%",
    accent: "83 90% 64%",
    accentForeground: "180 25% 12%",
    destructive: "0 84.2% 60.2%",
    destructiveForeground: "0 0% 98%",
    border: "60 12% 88%",
    input: "60 12% 91%",
    ring: "83 90% 64%",
    chart1: "83 90% 64%",
    chart2: "140 55% 52%",
    chart3: "83 75% 72%",
    chart4: "100 65% 58%",
    chart5: "140 48% 48%"
  },
  dark: {
    background: "180 12% 7%",
    foreground: "60 12% 96%",
    card: "180 12% 9%",
    cardForeground: "60 12% 96%",
    popover: "180 12% 9%",
    popoverForeground: "60 12% 96%",
    primary: "83 88% 68%",
    primaryForeground: "180 25% 12%",
    secondary: "180 10% 13%",
    secondaryForeground: "60 12% 92%",
    muted: "180 10% 13%",
    mutedForeground: "60 8% 62%",
    accent: "83 88% 68%",
    accentForeground: "180 25% 12%",
    destructive: "0 62.8% 30.6%",
    destructiveForeground: "0 0% 98%",
    border: "180 10% 16%",
    input: "180 10% 15%",
    ring: "83 88% 68%",
    chart1: "83 88% 68%",
    chart2: "140 55% 58%",
    chart3: "83 75% 78%",
    chart4: "100 65% 64%",
    chart5: "140 48% 54%"
  }
}

const RUUL_SLATE_THEME: Theme = {
  name: "ruul-slate",
  displayName: "Ruul Slate",
  description: "Refined charcoal slate with subtle elegance inspired by Ruul",
  light: {
    background: "240 5% 99%",
    foreground: "240 15% 10%",
    card: "0 0% 100%",
    cardForeground: "240 15% 10%",
    popover: "0 0% 100%",
    popoverForeground: "240 15% 10%",
    primary: "240 20% 20%",
    primaryForeground: "0 0% 100%",
    secondary: "240 10% 96%",
    secondaryForeground: "240 15% 15%",
    muted: "240 8% 96%",
    mutedForeground: "240 8% 45%",
    accent: "240 20% 25%",
    accentForeground: "0 0% 100%",
    destructive: "0 84.2% 60.2%",
    destructiveForeground: "0 0% 98%",
    border: "240 10% 90%",
    input: "240 10% 90%",
    ring: "240 20% 20%",
    chart1: "240 20% 30%",
    chart2: "220 15% 40%",
    chart3: "200 20% 50%",
    chart4: "240 10% 60%",
    chart5: "220 12% 55%"
  },
  dark: {
    background: "240 15% 7%",
    foreground: "240 5% 96%",
    card: "240 12% 9%",
    cardForeground: "240 5% 96%",
    popover: "240 12% 9%",
    popoverForeground: "240 5% 96%",
    primary: "240 8% 85%",
    primaryForeground: "240 15% 10%",
    secondary: "240 10% 14%",
    secondaryForeground: "240 5% 90%",
    muted: "240 10% 14%",
    mutedForeground: "240 5% 60%",
    accent: "240 8% 85%",
    accentForeground: "240 15% 10%",
    destructive: "0 62.8% 30.6%",
    destructiveForeground: "0 0% 98%",
    border: "240 10% 17%",
    input: "240 10% 17%",
    ring: "240 8% 85%",
    chart1: "240 10% 70%",
    chart2: "220 12% 60%",
    chart3: "200 15% 55%",
    chart4: "240 8% 50%",
    chart5: "220 10% 65%"
  }
}

export const THEMES: Record<ThemeName, Theme> = {
  "modern-neutral": MODERN_NEUTRAL_THEME,
  "warm-neutral": WARM_NEUTRAL_THEME,
  "neutral-gray": NEUTRAL_GRAY_THEME,
  "ruul-slate": RUUL_SLATE_THEME,
  "woodland-romance": WOODLAND_ROMANCE_THEME,
  "campfire-orange": CAMPFIRE_ORANGE_THEME,
  "relato-crimson": RELATO_CRIMSON_THEME,
  "wittl-lime": WITTL_LIME_THEME,
  "greenhouse-forest": GREENHOUSE_FOREST_THEME,
  "letters-sky": LETTERS_SKY_THEME,
  "ocean-blue": OCEAN_BLUE_THEME
}

export const ACTIVE_THEME: ThemeName = "modern-neutral"
