import {Box, Button, Divider, Stack, Typography} from '@mui/material';
import styles from './Sidebar.module.css';
import { useLingui } from '@lingui/react';
import DashboardIcon from '@mui/icons-material/SpaceDashboard';
import InfoIcon from '@mui/icons-material/Info';
import MenuBookIcon from '@mui/icons-material/MenuBook';
import StackedLineChartIcon from '@mui/icons-material/StackedLineChart';


export default function Sidebar() {
    const { i18n } = useLingui();
    const switchLanguage = (lang) => {
        i18n.activate(lang);
        localStorage.setItem('lang', lang);
    };

    return (
        <div className={styles.sidebar}>
            <Typography variant="h6" className={styles.logo}>
                CPI Dashboard
            </Typography>

            <Divider sx={{ mb: 3 }} />
            <nav className={styles.nav}>
                <a href="/" className={styles.link}>
                    <DashboardIcon fontSize="small" />
                    <span style={{ paddingLeft: "10px", paddingBottom: "3px" }}>{i18n._("Dashboard")}</span>
                </a>
                <a href="/details" className={styles.link}>
                    <StackedLineChartIcon fontSize="small" />
                    <span style={{ paddingLeft: "10px", paddingBottom: "3px" }}>{i18n._("Detailed View")}</span>
                </a>
                <a href="/about" className={styles.link}>
                    <InfoIcon fontSize="small" />
                    <span style={{ paddingLeft: "10px", paddingBottom: "3px" }}>{i18n._("About")}</span>
                </a>
                <a href="/reading" className={styles.link}>
                    <MenuBookIcon fontSize="small" />

                    <span style={{ paddingLeft: "10px", paddingBottom: "3px" }}>{i18n._("Further Reading")}</span>
                </a>
            </nav>

            <Box className={styles.bottomBox}>
                <Typography variant="caption" sx={{ color: '#94a3b8', mb: 1 }}>
                    Language
                </Typography>
                <Stack direction="row" spacing={1}>
                    <Button onClick={() => switchLanguage('en')} size="small" variant="outlined">
                        EN
                    </Button>
                    <Button onClick={() => switchLanguage('fr')} size="small" variant="outlined">
                        FR
                    </Button>
                </Stack>
            </Box>
        </div>
    );
}
