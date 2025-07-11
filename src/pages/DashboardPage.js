import Sidebar from '../components/Sidebar';
import styles from './Dashboard.module.css';
import { Box, Typography } from '@mui/material';
import Chart1Line from '../components/Chart1';
import Chart2Pie from '../components/Chart2';
import MetricCard from '../components/MetricCard';
import TrendingUpIcon from '@mui/icons-material/TrendingUp';
import TrendingDownIcon from '@mui/icons-material/TrendingDown';
import { useLingui } from '@lingui/react';

function DashboardPage() {
    const { i18n } = useLingui(); // ✅ this fixes the issue

    return (
        <div style={{ display: 'flex' }}>
            <Sidebar />

            <div className={styles.container}>
                <Typography variant="h4" className={styles.title}>
                    {i18n._('Canada Economic Dashboard')}
                </Typography>

                <div className={styles.topCards}>
                    <MetricCard
                        title={i18n._('MoM CPI Change')}
                        value="+0.3%"
                        trend={i18n._('↑ since last month')}
                        color="#e3f2fd"
                        icon={<TrendingUpIcon color="primary" />}
                    />

                    <MetricCard
                        title={i18n._('Highest Inflation Item')}
                        value="Tomatoes"
                        trend={i18n._('+2.1% MoM')}
                        color="#fff3e0"
                    />

                    <MetricCard
                        title={i18n._('Lowest Inflation Item')}
                        value="Eggs"
                        trend={i18n._('−0.5% MoM')}
                        color="#fce4ec"
                        icon={<TrendingDownIcon color="error" />}
                    />

                    <MetricCard
                        title={i18n._('Top Region')}
                        value="Ontario"
                        trend={i18n._('CPI 163.5')}
                        color="#ede7f6"
                    />
                </div>

                <div className={styles.chartsRow}>
                    <Box sx={{ flex: 3, minWidth: 0 }}>
                        <Chart1Line />
                    </Box>

                    <Box sx={{ flex: 2, minWidth: 0 }}>
                        <Chart2Pie />
                    </Box>
                </div>
            </div>
        </div>
    );
}


export default DashboardPage;
