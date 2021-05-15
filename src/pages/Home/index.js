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
        icon='developer.svg'
        id='intro'
      />
      <MiddleBlock title={MiddleBlockContent.title} content={MiddleBlockContent.text} button={MiddleBlockContent.button} />
      <ContentBlock
        type='left'
        title={UXFriendlyContent.title}
        content={UXFriendlyContent.text}
        section={UXFriendlyContent.section}
        icon='graphs.svg'
        id='ux'
      />
      <ContentBlock type='right' title={StatisticsContent.title} content={StatisticsContent.text} icon='graphs.svg' id='statistics' />
      <ContentBlock
        type='left'
        title={NotificationContent.title}
        content={NotificationContent.text}
        section={NotificationContent.section}
        icon='Conclusion-launch.svg'
        id='notification'
      />
      <ContentBlock
        type='right'
        title={DownloadContent.title}
        content={DownloadContent.text}
        svg={DownloadContent.svg}
        icon='graphs.svg'
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
              <a href='https://chen.works' target='_blank'>
                Jingcheng Chen
              </a>{' '}
              who works as a software developer at{' '}
              <a href='http://www.designtoproduction.com/en' target='_blank'>
                Design-to_production
              </a>
              . This app is inspired by{' '}
              <a href='https://de.linkedin.com/in/johanneskuhnen' target='_blank'>
                Johannes Kuhnen
              </a>
              , whose fiancée, a virologist, saw a demand in the field of tracking multiple tests simultaneously. Therefore I spent some days to come
              up with this app, in the hope of helping anyone that is in the front line fighting against Covid19. It is totally free and open source.
              It does not access or track any of your personal data. If you find it useful, please spread it out! Keep safe! ❤️
            </span>
          </div>
        }
        icon='waving.svg'
        id='conclusion'
      />
    </Container>
  );
};

export default Home;
