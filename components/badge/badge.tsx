type Props = {
  variant: 'primary' | 'secondary';
};

const Badge: React.FC<Props> = ({ children, variant }) => (
  <div
    className={`${
      variant === 'primary' ? 'bg-primary' : 'bg-secondary'
    } flex items-center rounded-md px-2 py-1`}
  >
    {children}
  </div>
);

Badge.defaultProps = {
  variant: 'primary',
};

export default Badge;
