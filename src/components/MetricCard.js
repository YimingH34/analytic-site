import { Paper, Typography, Box } from '@mui/material';
import TrendingUpIcon from '@mui/icons-material/TrendingUp';

export default function MetricCard({ title, value, trend, color, icon }) {
    return (
        <Paper
            elevation={0}
            sx={{
                p: 3,
                borderRadius: 4,
                background: color || 'linear-gradient(135deg, #e3f2fd 0%, #bbdefb 100%)',
                display: 'flex',
                flexDirection: 'column',
                alignItems: 'flex-start',
                gap: 1.5,
                transition: 'transform 0.2s ease-in-out',
                '&:hover': {
                    transform: 'translateY(-4px)',
                    boxShadow: '0 8px 16px rgba(0,0,0,0.1)',
                },
            }}
        >
            <Box display="flex" alignItems="center" gap={1.5}>
                {icon || <TrendingUpIcon color="primary" />}
                <Typography
                    variant="subtitle2"
                    sx={{
                        fontSize: '0.875rem',
                        color: 'rgba(0,0,0,0.7)',
                        fontWeight: 500
                    }}
                >
                    {title}
                </Typography>
            </Box>
            <Typography
                variant="h5"
                sx={{
                    fontWeight: 700,
                    fontSize: '1.75rem',
                    color: '#1a1a1a'
                }}
            >
                {value}
            </Typography>
            <Typography
                variant="body2"
                sx={{
                    color: 'rgba(0,0,0,0.6)',
                    fontSize: '0.875rem'
                }}
            >
                {trend}
            </Typography>
        </Paper>
    );
}
