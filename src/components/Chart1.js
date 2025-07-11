import { LineChart } from '@mui/x-charts/LineChart';
import { Paper, Typography, Box } from '@mui/material';
import cpiData from '../data/cpiData';
import { i18n } from '@lingui/core';

export default function Chart1Line() {
    const months = cpiData.map((d) => d.month);
    const values = cpiData.map((d) => d.cpi);
    const maxTicks = 6;
    const tickInterval = Math.ceil(months.length / maxTicks);
    const tickValues = months.filter((_, i) => i % tickInterval === 0);

    return (
        <Paper
            elevation={3}
            sx={{
                p: 3,
                borderRadius: 3,
                backgroundColor: '#f9fafc',
                boxShadow: '0 4px 20px rgba(0, 0, 0, 0.05)',
            }}
        >
            <Typography
                variant="h6"
                fontWeight={600}
                mb={2}
                color="primary"
                align="center"
            >
                {i18n._('Canadian CPI Trends – 2023')}
            </Typography>

            <Box sx={{ overflowX: 'auto' }}>
                <LineChart
                    height={500}
                    margin={{ top: 30, left: 10, right: 10 }}
                    series={[
                        {
                            data: values,
                            label: i18n._('CPI Index').toString(), // ✅ plain string
                            curve: 'monotone',
                            color: '#1976d2',
                        },
                    ]}
                    xAxis={[
                        {
                            data: months,
                            tickValues: tickValues,
                            scaleType: 'point',
                            label: i18n._('Month').toString(), // ✅ plain string
                            tickLabelStyle: {
                                fontSize: 12,
                                fill: '#555',
                                angle: 0,
                            },
                        },
                    ]}
                    yAxis={[{ label: i18n._('CPI Value').toString() }]} // ✅ plain string
                    grid={{ horizontal: true }}
                />
            </Box>
        </Paper>
    );
}
