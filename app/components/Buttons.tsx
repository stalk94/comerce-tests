import { Button, ButtonProps } from "@mui/material";


/** базовая кнопка */
export default function ({ onClick, children, ...props }: ButtonProps) {
    return(
        <Button
            color='error'
            variant='contained'
            onClick={onClick}
            sx={{
                height: 40,
                borderRadius: 5,
                ...props.sx
            }}
            { ...props }
        >
            { children }
        </Button>
    );
}