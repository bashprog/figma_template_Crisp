export interface CTAInterface {
    header: string,
    text: string,
    textPosition: 'left' | 'right' | 'maxLeft' | 'maxRight',
    href: string,
    background: string,
    fullWidth?: boolean,
}