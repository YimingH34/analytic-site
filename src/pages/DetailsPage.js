import React from 'react';
import Sidebar from '../components/Sidebar';
import {Box, Typography, Container, Link, List, ListItem, Paper, Divider} from '@mui/material';
import { useLingui } from '@lingui/react';
import LaunchIcon from '@mui/icons-material/Launch';
import ArticleIcon from '@mui/icons-material/Article';
import SchoolIcon from '@mui/icons-material/School';
import TrendingUpIcon from '@mui/icons-material/TrendingUp';
import BarChartIcon from '@mui/icons-material/BarChart';

const headerStyles = {
    fontSize: { xs: '1.75rem', md: '2rem' },
    fontWeight: 700,
    color: '#1a202c',
    mb: 3
};

const subheaderStyles = {
    fontSize: { xs: '1rem', md: '1.1rem' },
    fontWeight: 500,
    color: '#4a5568',
    lineHeight: 1.5
};

export default function DetailsPage() {
    const { i18n } = useLingui();
    const isFrench = i18n.locale === 'fr';

    const resources = [
        {
            title: i18n._('Statistics Canada – Consumer Price Index'),
            url: 'https://www150.statcan.gc.ca/n1/fr/sujets/economie/prix_et_indices_de_prix/indices_des_prix_a_la_consommation',
            icon: <BarChartIcon />,
            color: '#FF6B6B',
            bgColor: '#FFF5F5'
        },
        {
            title: i18n._('Bank of Canada – Inflation and Monetary Policy'),
            url: isFrench
                ? 'https://www.banqueducanada.ca/fonctions-principales/inflation/'
                : 'https://www.bankofcanada.ca/core-functions/inflation/',
            icon: <TrendingUpIcon />,
            color: '#38B2AC',
            bgColor: '#F0FFF4'
        },
        {
            title: i18n._('Investopedia – Consumer Price Index'),
            url: 'https://www.investopedia.com/terms/c/consumerpriceindex.asp',
            icon: <SchoolIcon />,
            color: '#4299E1',
            bgColor: '#EBF8FF'
        },
        {
            title: i18n._('IMF – Inflation Explained'),
            url: isFrench
                ? 'https://www.imf.org/fr/Topics/Inflation'
                : 'https://www.imf.org/en/Topics/Inflation',
            icon: <ArticleIcon />,
            color: '#805AD5',
            bgColor: '#FAF5FF'
        }
    ];

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
                <Container maxWidth="md">
                    <Typography variant="h2" sx={headerStyles}>
                        {i18n._('Further Reading')}
                    </Typography>

                    <Divider sx={{ mb: 4 }} />

                    <Typography sx={{...subheaderStyles, mb: 6, textAlign: 'center'}}>
                        {isFrench
                            ? i18n._("Voici quelques ressources fiables pour en savoir plus sur l'indice des prix à la consommation (IPC), l'inflation et leur impact sur l'économie (version FR) :")
                            : i18n._('Here are some trusted resources to learn more about the Consumer Price Index (CPI), inflation, and how these affect the economy (EN version):')}
                    </Typography>

                    <List sx={{
                        display: 'grid',
                        gridTemplateColumns: { xs: '1fr', md: 'repeat(2, 1fr)' },
                        gap: 3
                    }}>
                        {resources.map((resource, index) => (
                            <ListItem
                                key={index}
                                sx={{ p: 0, height: '100%' }}
                            >
                                <Paper
                                    elevation={0}
                                    sx={{
                                        width: '100%',
                                        height: '100%',
                                        p: 3,
                                        borderRadius: 4,
                                        backgroundColor: '#FFFFFF',
                                        border: '1px solid #EDF2F7',
                                        transition: 'all 0.3s ease',
                                        display: 'flex',
                                        '&:hover': {
                                            transform: 'translateY(-5px)',
                                            boxShadow: '0 20px 25px -5px rgba(0, 0, 0, 0.1), 0 10px 10px -5px rgba(0, 0, 0, 0.04)'
                                        }
                                    }}
                                >
                                    <Link
                                        href={resource.url}
                                        target="_blank"
                                        rel="noopener"
                                        sx={{
                                            display: 'flex',
                                            alignItems: 'center',
                                            gap: 2,
                                            textDecoration: 'none',
                                            color: '#2D3748',
                                            width: '100%'
                                        }}
                                    >
                                        <Box sx={{
                                            p: 1.5,
                                            borderRadius: 2,
                                            backgroundColor: resource.bgColor,
                                            color: resource.color,
                                            display: 'flex',
                                            alignItems: 'center',
                                            justifyContent: 'center',
                                            flexShrink: 0
                                        }}>
                                            {resource.icon}
                                        </Box>

                                        <Box sx={{
                                            flex: 1,
                                            display: 'flex',
                                            flexDirection: 'column',
                                            justifyContent: 'space-between'
                                        }}>
                                            <Typography
                                                variant="h6"
                                                sx={{
                                                    fontSize: '1.1rem',
                                                    fontWeight: 600,
                                                    color: '#2D3748',
                                                    mb: 1
                                                }}
                                            >
                                                {resource.title}
                                            </Typography>
                                            <Box sx={{
                                                display: 'flex',
                                                alignItems: 'center',
                                                color: '#718096',
                                                fontSize: '0.875rem'
                                            }}>
                                                <LaunchIcon sx={{ fontSize: '1rem', mr: 0.5 }} />
                                                {i18n._('Visit Resource')}
                                            </Box>
                                        </Box>
                                    </Link>
                                </Paper>
                            </ListItem>
                        ))}
                    </List>
                </Container>
            </Box>
        </Box>
    );
}
