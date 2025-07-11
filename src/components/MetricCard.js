import { Paper, Typography, Box } from '@mui/material';
import TrendingUpIcon from '@mui/icons-material/TrendingUp'; // Example icon

export default function MetricCard({ title, value, trend, color, icon }) {
    return (
        <Paper
            elevation={3}
            sx={{
                p: 2,
                borderRadius: 3,
                backgroundColor: color || '#e3f2fd',
                display: 'flex',
                flexDirection: 'column',
                alignItems: 'flex-start',
                gap: 1,
            }}
        >
            <Box display="flex" alignItems="center" gap={1}>
                {icon || <TrendingUpIcon color="primary" />}
                <Typography variant="subtitle2">{title}</Typography>
            </Box>
            <Typography variant="h5" fontWeight={600}>
                {value}
            </Typography>
            <Typography variant="body2" color="text.secondary">
                {trend}
            </Typography>
        </Paper>
    );
}
