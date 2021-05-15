import { useState, Fragment, lazy } from 'react';
import { Row, Col, Drawer } from 'antd';
import { CSSTransition } from 'react-transition-group';
import { withTranslation } from 'react-i18next';

import * as S from './styles';

const SvgIcon = lazy(() => import('../../common/SvgIcon'));

const Header = ({ t }) => {
  const [isNavVisible] = useState(false);
  const [isSmallScreen] = useState(false);
  const [visible, setVisibility] = useState(false);

  const showDrawer = () => {
    setVisibility(!visible);
  };

  const onClose = () => {
    setVisibility(!visible);
  };

  const MenuItem = () => {
    const scrollTo = (id) => {
      const element = document.getElementById(id);
      element.scrollIntoView({
        behavior: 'smooth',
      });
      setVisibility(false);
    };
    return (
      <Fragment>
        <S.CustomNavLinkSmall onClick={() => scrollTo('intro')}>
          <S.Span>Intro</S.Span>
        </S.CustomNavLinkSmall>
        <S.CustomNavLinkSmall onClick={() => scrollTo('ux')}>
          <S.Span>UX</S.Span>
        </S.CustomNavLinkSmall>
        <S.CustomNavLinkSmall onClick={() => scrollTo('statistics')}>
          <S.Span>Statistics</S.Span>
        </S.CustomNavLinkSmall>
        <S.CustomNavLinkSmall onClick={() => scrollTo('notification')}>
          <S.Span>Notification</S.Span>
        </S.CustomNavLinkSmall>
        <S.CustomNavLinkSmall onClick={() => scrollTo('download')}>
          <S.Span>Download</S.Span>
        </S.CustomNavLinkSmall>
      </Fragment>
    );
  };

  return (
    <S.Header>
      <S.Container>
        <Row type='flex' justify='space-between' gutter={20}>
          <S.LogoContainer to='/' aria-label='homepage'>
            <SvgIcon width={150} height={150} src='logo.svg' />
          </S.LogoContainer>
          <S.NotHidden>
            <MenuItem />
          </S.NotHidden>
          <S.Burger onClick={showDrawer}>
            <S.Outline />
          </S.Burger>
        </Row>
        <CSSTransition in={!isSmallScreen || isNavVisible} timeout={350} classNames='NavAnimation' unmountOnExit>
          <Drawer closable={false} visible={visible} onClose={onClose}>
            <Col style={{ marginBottom: '2.5rem' }}>
              <S.Label onClick={onClose}>
                <Col span={12}>
                  <S.Menu>Menu</S.Menu>
                </Col>
                <Col span={12}>
                  <S.Outline padding='true' />
                </Col>
              </S.Label>
            </Col>
            <MenuItem />
          </Drawer>
        </CSSTransition>
      </S.Container>
    </S.Header>
  );
};

export default withTranslation()(Header);
