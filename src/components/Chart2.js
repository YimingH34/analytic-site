import { PieChart } from '@mui/x-charts/PieChart';
import { Paper, Typography } from '@mui/material';

export default function Chart2Pie() {
    return (
        <Paper sx={{ p: 3, borderRadius: 3, backgroundColor: '#fff' }} elevation={3}>
            <Typography variant="h6" align="center" fontWeight={600} mb={2}>
                Food Category Share
            </Typography>
            <PieChart
                series={[
                    {
                        data: [
                            { id: 0, value: 43.8, label: 'Vegetables' },
                            { id: 1, value: 31.3, label: 'Dairy' },
                            { id: 2, value: 18.8, label: 'Grains' },
                            { id: 3, value: 6.1, label: 'Other' },
                        ],
                    },
                ]}
                width={400}
                height={300}
            />
        </Paper>
    );
}
