import { PieChart } from '@mui/x-charts/PieChart';
import { Paper, Typography, Box } from '@mui/material';

export default function Chart2Pie() {
    return (
        <Paper
            sx={{
                p: 3,
                borderRadius: 3,
                backgroundColor: '#f9fafc',
                height: '100%',
                display: 'flex',
                flexDirection: 'column',
                boxShadow: '0 4px 20px rgba(0, 0, 0, 0.05)',
            }}
        >
            <Typography
                variant="h6"
                align="center"
                fontWeight={600}
                mb={2}
                color="primary"
            >
                Food Category Share
            </Typography>

            <Box sx={{ flex: 1, display: 'flex', justifyContent: 'center', alignItems: 'center' }}>
                <PieChart
                    series={[
                        {
                            data: [
                                { id: 0, value: 23.4, label: 'Vegetables' },
                                { id: 1, value: 16.8, label: 'Dairy' },
                                { id: 2, value: 19.6, label: 'Meat' },
                                { id: 3, value: 14.5, label: 'Bakery' },
                                { id: 4, value: 12.3, label: 'Fruits' },
                                { id: 5, value: 13.4, label: 'Other' },
                            ],
                        },
                    ]}
                    width={300}
                    height={300}
                    margin={{ top: 30, left: 10, right: 10 }}
                />
            </Box>
        </Paper>
    );
}
