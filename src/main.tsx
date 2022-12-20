import React from 'react';
import ReactDOMClient from 'react-dom/client';
import Hero from './blocks/Hero';
import KlarHeader from './blocks/KlarHeader';
import './index.css';

const klarComponents: any = {
  KlarHeader: KlarHeader,
  Hero: Hero,
};

window.klarComponents = klarComponents;
window.siteConfig = { publicPath: '/' };

console.log(window.klarComponents);

ReactDOMClient.createRoot(
  document.getElementById('root') as HTMLElement,
).render(
  <React.StrictMode>
    <Hero
      {...{
        block: {
          _id: 'hero-123',
          title: 'Create an account and start making your own web sites',
          subtitle: 'Edit everything on this site and if you like it...',
          link: '#services',
          link_text: 'Tell me more',
          image:
            'https://raw.githubusercontent.com/klar-templates/agency/master/img/header-bg.jpg',
          show_title: true,
          show_subtitle: true,
          show_button: true,
          style: {
            title_text_color: '#ffffff',
            subtitle_text_color: '#ffffff',
            button_bg_color: '{{theme.colors.primary_color}}',
            button_text_color: '#ffffff',
            padding_top: 300,
            padding_bottom: 200,
            full_screen: true,
            text_align: 'center',
            show_overlay: true,
            overlay_bg_color: '#000000',
            overlay_opacity: 40,
            margin_top: 0,
            bg_image_position_top: 0,
          },
        },
      }}
    />
  </React.StrictMode>,
);
