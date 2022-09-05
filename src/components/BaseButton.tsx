import { Button, ButtonProps, CircularProgress } from '@mui/material';
import { SxProps } from '@mui/system';
import { useSelector } from 'react-redux';
import Link from 'next/link';

type BaseButtonProps = ButtonProps & {
  fill?: boolean;
  to?: string;
  target?: string;
  url?: string;
  bgColor?: string;
  textColor?: string;
};

const BaseButton: React.FC<BaseButtonProps> = ({
  fill = false,
  bgColor,
  textColor,
  ...props
}) => {
  const color_info: SxProps = fill
    ? { background: '#c2a136', color: '#fff' }
    : { background: '#fff', color: '#c2a136' };

  if (bgColor) color_info.background = bgColor;
  if (textColor) color_info.color = textColor;

  const color_style: SxProps = {
    ...color_info,
    '&:hover': color_info,
  };
  const style = { ...color_style, ...props.sx };

  const httpReqs = useSelector((state) => state.httpReqs);
  if (httpReqs.includes(props.url || '')) {
    return (
      <Button
        variant="contained"
        {...props}
        sx={style}
        onClick={undefined}
        type="button"
      >
        <CircularProgress
          size={24}
          style={{ color: fill ? '#fff' : '#c2a136' }}
        />
      </Button>
    );
  }

  if (props.to) {
    return (
      <Link href={props.to}>
        <a>
          <Button
            target={props.target}
            variant="contained"
            sx={style}
            fullWidth={props.fullWidth}
            startIcon={props.startIcon}
            size={props.size}
          >
            {props.children}
          </Button>
        </a>
      </Link>
    );
  } else {
    return (
      <Button variant="contained" {...props} sx={style}>
        {props.children}
      </Button>
    );
  }
};

export default BaseButton;
