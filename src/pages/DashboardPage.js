import Sidebar from '../components/Sidebar';
import { Box, Typography } from '@mui/material';
import Chart1Line from '../components/Chart1';
import Chart2Pie from '../components/Chart2';
import MetricCard from '../components/MetricCard';
import TrendingUpIcon from '@mui/icons-material/TrendingUp';
import TrendingDownIcon from '@mui/icons-material/TrendingDown';
import { useLingui } from '@lingui/react';

const headerStyles = {
    fontSize: { xs: '1.75rem', md: '2rem' },
    fontWeight: 700,
    color: '#1a202c',
    mb: 4
};

function DashboardPage() {
    const { i18n } = useLingui();

    return (
        <Box sx={{
            display: 'flex',
            minHeight: '100vh',
            backgroundColor: '#F7FAFC'
        }}>
            <Sidebar />
            <Box sx={{
                flex: 1,
                display: 'flex',
                flexDirection: 'column',
                padding: { xs: 2, md: 4 }
            }}>
                <Typography variant="h2" sx={headerStyles}>
                    {i18n._('Canada Economic Dashboard')}
                </Typography>

                <Box sx={{
                    display: 'grid',
                    gridTemplateColumns: { xs: '1fr', sm: 'repeat(2, 1fr)', lg: 'repeat(4, 1fr)' },
                    gap: 3,
                    mb: 4
                }}>
                    <MetricCard
                        title={i18n._('MoM CPI Change')}
                        value="+0.3%"
                        trend={i18n._('↑ since last month')}
                        color="linear-gradient(135deg, #e3f2fd 0%, #bbdefb 100%)"
                        icon={<TrendingUpIcon color="primary" />}
                    />

                    <MetricCard
                        title={i18n._('Highest Inflation Item')}
                        value="Tomatoes"
                        trend={i18n._('+2.1% MoM')}
                        color="linear-gradient(135deg, #fff3e0 0%, #ffe0b2 100%)"
                    />

                    <MetricCard
                        title={i18n._('Lowest Inflation Item')}
                        value="Eggs"
                        trend={i18n._('−0.5% MoM')}
                        color="linear-gradient(135deg, #fce4ec 0%, #f8bbd0 100%)"
                        icon={<TrendingDownIcon color="error" />}
                    />

                    <MetricCard
                        title={i18n._('Top Region')}
                        value="Ontario"
                        trend={i18n._('CPI 163.5')}
                        color="linear-gradient(135deg, #ede7f6 0%, #d1c4e9 100%)"
                    />
                </Box>

                <Box sx={{ display: 'flex', gap: 2, height: 350 }}>
                    <Box sx={{ flex: 7 }}>
                        <Chart1Line />
                    </Box>
                    <Box sx={{ flex: 3 }}>
                        <Chart2Pie />
                    </Box>
                </Box>
            </Box>
        </Box>
    );
}

export default DashboardPage;
