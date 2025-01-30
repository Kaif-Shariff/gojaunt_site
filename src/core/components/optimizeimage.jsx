const OptimizedImage = ({src, alt, className}) => (
    <img
        src={src}
        alt={alt}
        className={className}
        loading="lazy"
    />
);

export default OptimizedImage;
