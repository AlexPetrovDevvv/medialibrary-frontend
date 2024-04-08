declare const block: readonly ["top", "bottom"];
declare const inline: readonly ["start", "end", "left", "right"];
type Tblock = typeof block[number];
type Tinline = typeof inline[number];
export type Anchor = Tblock | Tinline | 'center' | 'center center' | `${Tblock} ${Tinline | 'center'}` | `${Tinline} ${Tblock | 'center'}`;


export type Density = null | 'default' | 'comfortable' | 'compact'

export type Variant = NonNullable<"flat" | "text" | "elevated" | "tonal" | "outlined" | "plain">