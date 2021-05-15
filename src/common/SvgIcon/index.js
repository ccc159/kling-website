const SvgIcon = ({ src, width, height, style }) => (
  <div style={{ maxHeight: '400px', display: 'flex', justifyContent: 'center' }}>
    <img
      autoCorrect
      src={`/img/svg/${src}`}
      alt={src}
      with={width}
      height={height}
      style={style}
      // eslint-disable-next-line react/jsx-no-duplicate-props
      style={{
        maxHeight: '400px',
        imageRendering: '-webkit-optimize-contrast',
      }}
    />
  </div>
);

export default SvgIcon;
