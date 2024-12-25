/* eslint-disable @typescript-eslint/no-explicit-any */
declare module '*.svg' {
  const content: any;
  export const ReactComponent: any;
  export default content;
}

declare module 'cart/buy-button' {
  export * from '@cart/components/buy-button/buy-button';
  export { default } from '@cart/components/buy-button/buy-button';
}
