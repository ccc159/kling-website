import { lazy } from 'react';

import IntroContent from '../../content/IntroContent.json';
import MiddleBlockContent from '../../content/MiddleBlockContent.json';
import UXFriendlyContent from '../../content/UXFriendlyContent.json';
import NotificationContent from '../../content/NotificationContent.json';
import StatisticsContent from '../../content/StatisticsContent.json';
import DownloadContent from '../../content/DownloadContent.json';

const ContentBlock = lazy(() => import('../../components/ContentBlock'));
const MiddleBlock = lazy(() => import('../../components/MiddleBlock'));
const Container = lazy(() => import('../../common/Container'));
const ScrollToTop = lazy(() => import('../../common/ScrollToTop'));

const Home = () => {
  return (
    <Container>
      <ScrollToTop />
      <ContentBlock
        type='right'
        first='true'
        title={IntroContent.title}
        content={IntroContent.text}
        button={IntroContent.button}
        icon='full_cover.png'
        id='intro'
      />
      <MiddleBlock title={MiddleBlockContent.title} content={MiddleBlockContent.text} button={MiddleBlockContent.button} />
      <ContentBlock
        type='left'
        title={UXFriendlyContent.title}
        content={UXFriendlyContent.text}
        section={UXFriendlyContent.section}
        icon='ux.png'
        id='ux'
      />
      <ContentBlock type='right' title={StatisticsContent.title} content={StatisticsContent.text} icon='statistics.png' id='statistics' />
      <ContentBlock
        type='left'
        title={NotificationContent.title}
        content={NotificationContent.text}
        section={NotificationContent.section}
        icon='waving.svg'
        id='notification'
      />
      <ContentBlock
        type='right'
        title={DownloadContent.title}
        content={DownloadContent.text}
        svg={DownloadContent.svg}
        icon='product-launch.svg'
        id='download'
      />

      <MiddleBlock
        type='left'
        title={'Easier and safer life!'}
        content={
          <div>
            Get ready to track the rapid tests with Kling! Hope Kling could make your work easier and our lives safer. In case of any questions or
            suggestions, don't hesitant to reach out to us! <hr style={{ opacity: 0.1, margin: '20px' }} />
            <span style={{ fontSize: '14px', letterSpacing: 'initial', opacity: 0.7 }}>
              In the end, a little bit about me: I am{' '}
              <a href='https://chen.works' target='_blank' rel='noreferrer'>
                Jingcheng Chen
              </a>{' '}
              who works as a software developer at{' '}
              <a href='http://www.designtoproduction.com/en' target='_blank' rel='noreferrer'>
                Design-to-Production
              </a>
              . This app is inspired by{' '}
              <a href='https://de.linkedin.com/in/johanneskuhnen' target='_blank' rel='noreferrer'>
                Johannes Kuhnen
              </a>
              , whose fiancée, a virologist, saw a demand in the field of tracking multiple tests simultaneously. Therefore I spent some days to come
              up with this app, with the graphic design support from my wife{' '}
              <a href='https://www.linkedin.com/in/jun-li-profile/' target='_blank' rel='noreferrer'>
                Jun Li
              </a>
              , in the hope of helping anyone that is in the front line fighting against COVID-19. It is totally free and open source. It does not
              access or track any of your personal data. If you find it useful, please spread it out! Stay safe! ❤️
            </span>
          </div>
        }
        id='conclusion'
      />
    </Container>
  );
};

export default Home;
