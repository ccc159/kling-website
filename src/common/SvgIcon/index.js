const SvgIcon = ({ src, width, height, style }) => (
  <div style={{ maxHeight: '400px', display: 'flex', justifyContent: 'center' }}>
    {/* eslint-disable-next-line react/jsx-no-duplicate-props */}
    <img src={`/img/svg/${src}`} alt={src} with={width} height={height} style={style} style={{ maxHeight: '400px' }} />
  </div>
);

export default SvgIcon;
