type ToggleButtonProps = React.ComponentProps<'button'> & {
  label: string;
  isOff?: boolean;
  onRender?: React.ReactElement;
  offRender?: React.ReactElement;
};

function ToggleButton({
  label,
  isOff = true,
  onRender,
  offRender,
  className = '',
  ...buttonProps
}: ToggleButtonProps) {
  const classes = `flex justify-center items-center size-8 bg-transparent rounded-md border-0 p-0 leading-none hover:not-[:disabled,[aria-disabled=true]]:bg-black/10 ${className}`;

  return (
    <button className={classes} {...buttonProps}>
      {isOff ? offRender : onRender}
      <span className="sr-only">{label}</span>
    </button>
  );
}

export default ToggleButton;
