
/// <reference types="vite/client" />

interface Window {
  emailjs: {
    init: (userId: string) => void;
    send: (serviceId: string, templateId: string, templateParams: any) => Promise<{ status: number }>;
  }
}
