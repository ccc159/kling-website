import { lazy, Fragment } from 'react';
import { Row, Col } from 'antd';
import { withTranslation } from 'react-i18next';
import Fade from 'react-reveal/Fade';

import * as S from './styles';

const Container = lazy(() => import('../../common/Container'));

const Footer = ({ t }) => {
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
                <a href={'/privacypolicy'}>Privacy Policy</a>
                <span> | </span>
                <a href={'https://github.com/ccc159/kling'}>Github</a>
              </Col>
            </Row>
          </Container>
        </S.Footer>
      </Fade>
    </Fragment>
  );
};

export default withTranslation()(Footer);
