import { lazy, Fragment } from 'react';
import { Row, Col } from 'antd';
import i18n from 'i18next';
import { withTranslation } from 'react-i18next';
import Fade from 'react-reveal/Fade';

import * as S from './styles';

const SvgIcon = lazy(() => import('../../common/SvgIcon'));
const Container = lazy(() => import('../../common/Container'));

const Footer = ({ t }) => {
  const handleChange = (event) => {
    i18n.changeLanguage(event.target.value);
  };

  const SocialLink = ({ href, src }) => {
    return (
      <a href={href} target='_blank' rel='noopener noreferrer' key={src} aria-label={src}>
        <SvgIcon src={src} width='25px' height='25px' />
      </a>
    );
  };

  return (
    <Fragment>
      <Fade bottom>
        <S.Footer>
          <Container>
            <Row type='flex' justify='space-between'>
              <Col lg={10} md={10} sm={12} xs={24}>
                <S.Language>{t('Contact')}</S.Language>
                <S.Para>
                  Please write your thoughts to <a href='mailto:mail@chenjingcheng.com'>mail@chenjingcheng.com</a>
                </S.Para>
              </Col>
              <Col lg={8} md={8} sm={12} xs={24}>
                <S.Title>About</S.Title>

                <a href={'/privatepolicy'}>Private Policy</a>
                <span> | </span>
                <a href={'https://github.com/ccc159/kling'}>Github</a>
                <span> | </span>
                <a href={'/'}>
                  <SvgIcon src='logo.svg' aria-label='homepage' width='50px' height='50px' />
                </a>
              </Col>
            </Row>
          </Container>
        </S.Footer>
      </Fade>
    </Fragment>
  );
};

export default withTranslation()(Footer);
