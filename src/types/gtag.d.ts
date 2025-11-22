declare global {
  interface Window {
    gtag: (
      command: string,
      targetId: string | Date,
      config?: any
    ) => void;
  }
}

export {};