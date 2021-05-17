import Container from '../common/Container';

const PrivacyPolicy = () => {
  return (
    <Container>
      <figure style={{ margin: '100px 10px' }}>
        <h1>Privacy Policy</h1>
        <p>
          Kling takes your privacy very seriously. It uses expo framework in react native development, which may provide thrid-party Ads SDKs. But in
          our app we never called any of those APIs. Kling logs no information on you and has no interest in doing such.
          <br />
          <br />
          <b>Kling does not collect, transmit, distribute or sell your data.</b>
        </p>
      </figure>
    </Container>
  );
};

export default PrivacyPolicy;
