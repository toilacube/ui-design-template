
export interface StyleDefinition {
  id: string;
  name: string;
  keywords: string;
  colorSchemes: string;
  effects: string;
  description: string;
}

export type ViewState = 'home' | string;

export type PaletteMode = 'light' | 'dark' | 'contrast';

export interface StyleTheme {
  name: string;
  wrapper: string;
  nav: string;
  card: string;
  button: string;
  buttonSecondary: string;
  input: string;
  accentText: string;
  badge: string;
  shadow: string;
  // Optional specific overrides
  blobs?: string[]; // For Aurora: [blob1, blob2, blob3]
  scanlines?: boolean; // For Retro
  grid?: boolean; // For retro/minimal
}
