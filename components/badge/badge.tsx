type Props = {
  variant: 'primary' | 'secondary';
};

const Badge: React.FC<Props> = ({ children, variant }) => (
  <div
    className={`${
      variant === 'primary' ? 'bg-primary' : 'bg-secondary'
    } flex items-center rounded-md py-1 px-2`}
  >
    {children}
  </div>
);

Badge.defaultProps = {
  variant: 'primary',
};

export default Badge;
