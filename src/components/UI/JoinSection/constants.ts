import { StaticImageData } from 'next/image';
import robert_fox from '../../../../public/images/robert_fox.png';
import cameron_williamson from '../../../../public/images/cameron_williamson.png';
import esther_howard from '../../../../public/images/esther_howard.png';

export type Props = {
  testimony: string;
  person: string;
  avatar: StaticImageData;
};

export const testimonials = [
  {
    testimony:
      "Solvimate made our e-learning content accessible in multiple languages. Their localization support was smooth, accurate, and delivered on time. Highly recommend their services!",
    person: 'Robert Fox',
    avatar: robert_fox,
  },
  {
    testimony:
      "We trusted Solvimate with a large subtitling project, and they exceeded expectations. Quality, speed, and professionalism were outstanding. Our go-to for all localization needs!",
    person: 'Cameron Williamson',
    avatar: cameron_williamson,
  },
  {
    testimony:
      "Our AI project needed high-quality data annotation, and Solvimate delivered with precision. Their team handled scale without compromising accuracy. A fantastic partner for tech projects!",
    person: 'Esther Howard',
    avatar: esther_howard,
  },
  {
    testimony:
      "From dubbing to transcription, Solvimate has been a reliable partner. Their skilled team makes even complex projects feel effortless. Quality and communication are top-notch.",
    person: 'Cameron Williamson',
    avatar: cameron_williamson,
  },
  {
    testimony:
      "Working with Solvimate has been a game-changer. Their expertise in translation and voice-over made our content truly global and engaging. Highly recommend their services!",
    person: 'Robert Fox',
    avatar: robert_fox,
  },
];

export const desktopHeaderPhrase = ['Trusted by 150+ global clients — and growing.'];
