
import { styled, Box} from "@mui/material";

export const RootWPQContainer = styled(Box)({
    display: 'flex',
    height: '100vh',
    overflow: 'hidden', // Evitar scrollbar
});

export const WPQMainContentContainer = styled(Box)({
    flexGrow: 1,
    backgroundColor: '#e0f7e9', // Fondo verde suave detrás de las cajas
});