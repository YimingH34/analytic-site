import React from 'react';
import Sidebar from '../components/Sidebar';
import { Box, Typography, Container, Link, Divider, List, ListItem } from '@mui/material';
import { useLingui } from '@lingui/react';

export default function DetailsPage() {
    const { i18n } = useLingui();
    const isFrench = i18n.locale === 'fr';

    return (
        <Box sx={{ display: 'flex' }}>
            <Sidebar />

            <Container maxWidth="md" sx={{ mt: 4 }}>
                <Typography variant="h4" gutterBottom>
                    {i18n._('Further Reading')}
                </Typography>

                <Divider sx={{ mb: 3 }} />

                <Typography variant="body1" sx={{ mb: 2 }}>
                    {isFrench
                        ? i18n._(
                            "Voici quelques ressources fiables pour en savoir plus sur l'indice des prix à la consommation (IPC), l'inflation et leur impact sur l'économie (version FR) :"
                        )
                        : i18n._(
                            'Here are some trusted resources to learn more about the Consumer Price Index (CPI), inflation, and how these affect the economy (EN version):'
                        )}
                </Typography>

                <List>
                    <ListItem>
                        <Link
                            href="https://www150.statcan.gc.ca/n1/fr/sujets/economie/prix_et_indices_de_prix/indices_des_prix_a_la_consommation"
                            target="_blank"
                            rel="noopener"
                        >
                            {i18n._('Statistics Canada – Consumer Price Index')}
                        </Link>
                    </ListItem>
                    <ListItem>
                        <Link
                            href={
                                isFrench
                                    ? 'https://www.banqueducanada.ca/fonctions-principales/inflation/'
                                    : 'https://www.bankofcanada.ca/core-functions/inflation/'
                            }
                            target="_blank"
                            rel="noopener"
                        >
                            {i18n._('Bank of Canada – Inflation and Monetary Policy')}
                        </Link>
                    </ListItem>
                    <ListItem>
                        <Link
                            href={
                                isFrench
                                    ? 'https://www.investopedia.com/terms/c/consumerpriceindex.asp' // No FR version
                                    : 'https://www.investopedia.com/terms/c/consumerpriceindex.asp'
                            }
                            target="_blank"
                            rel="noopener"
                        >
                            {i18n._('Investopedia – Consumer Price Index')}
                        </Link>
                    </ListItem>
                    <ListItem>
                        <Link
                            href={
                                isFrench
                                    ? 'https://www.imf.org/fr/Topics/Inflation'
                                    : 'https://www.imf.org/en/Topics/Inflation'
                            }
                            target="_blank"
                            rel="noopener"
                        >
                            {i18n._('IMF – Inflation Explained')}
                        </Link>
                    </ListItem>
                </List>
            </Container>
        </Box>
    );
}
