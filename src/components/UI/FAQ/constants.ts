type FAQItem = {
  question: string;
  answer: string;
};

export const desktopHeaderPhrase = ['Frequently asked', 'questions'];
export const mobileHeaderPhrase = ['Frequently', 'asked', 'questions'];
export const animate = {
  initial: {
    y: '100%',
    opacity: 0,
  },
  open: (i: number) => ({
    y: '0%',
    opacity: 1,
    transition: { duration: 1, delay: 0.1 * i, ease: [0.33, 1, 0.68, 1] },
  }),
};

export const faqData: FAQItem[] = [
  {
    question: 'What services does Solvimate provide?',
    answer:
      'Solvimate offers a wide range of services, including: Translation, Localization, Transcription ,Dubbing , Voice over and Subtitling.',
  },
  {
    question: 'Do you work with individuals as well as agencies?',
    answer:
      'Yes, we collaborate with both individuals and agencies. Whether you’re a freelancer, a small business, or a large enterprise, we adapt our services to fit your specific project needs.',
  },
  {
    question: 'Do you offer subtitling and dubbing services for videos?',
    answer:
      'Absolutely. Our team specializes in both subtitling and dubbing across multiple languages. We ensure accuracy, cultural adaptation, and professional voice talent to make your content accessible and engaging for global audiences.',
  },
  {
    question: 'Can you handle large-scale projects with tight deadlines?',
    answer:
      'Yes, we have a dedicated and experienced team capable of managing large-scale projects efficiently. With a structured workflow and quality assurance process, we deliver high-volume tasks within deadlines without compromising quality.',
  },
];
