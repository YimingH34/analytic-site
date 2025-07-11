// import React from 'react'
// import Sidebar from '../components/Sidebar'
// import { Box, Typography, Container, Divider } from '@mui/material'
// import { useLingui } from '@lingui/react'
//
// export default function About() {
//     const { i18n } = useLingui()
//
//     return (
//         <Box sx={{ display: 'flex' }}>
//             <Sidebar />
//
//             <Container maxWidth="md" sx={{ mt: 4 }}>
//                 <Typography variant="h4" gutterBottom>
//                     {i18n._(/*i18n*/`About the Consumer Price Index (CPI)`)}
//                 </Typography>
//
//                 <Divider sx={{ mb: 3 }} />
//
//                 <Typography variant="h6" gutterBottom>
//                     {i18n._(/*i18n*/`What is CPI?`)}
//                 </Typography>
//                 <Typography sx={{ mb: 2 }}>
//                     {i18n._(/*i18n*/`The Consumer Price Index (CPI) measures the average change in prices over time for a fixed basket of goods and services. It reflects the cost of living and is used to track price changes in areas like food, housing, transportation, and healthcare.`)}
//                 </Typography>
//                 <div style={{ marginBottom: '3rem' }} />
//
//                 <Typography variant="h6" gutterBottom>
//                     {i18n._(/*i18n*/`How is CPI Calculated?`)}
//                 </Typography>
//                 <Typography sx={{ mb: 2 }}>
//                     {i18n._(/*i18n*/`CPI compares the cost of a representative basket in a given year to its cost in a base year. The formula is:`)}
//                 </Typography>
//                 <Typography sx={{ fontStyle: 'italic', mb: 2 }}>
//                     {i18n._(/*i18n*/`CPI = (Cost in Current Year ÷ Cost in Base Year) × 100`)}
//                 </Typography>
//                 <Typography sx={{ mb: 2 }}>
//                     {i18n._(/*i18n*/`National statistics agencies, like Statistics Canada, gather data from across the country and update the basket regularly to reflect changes in consumer behavior.`)}
//                 </Typography>
//                 <div style={{ marginBottom: '3rem' }} />
//
//                 <Typography variant="h6" gutterBottom>
//                     {i18n._(/*i18n*/`Why is CPI Important?`)}
//                 </Typography>
//                 <Typography sx={{ mb: 2 }}>
//                     {i18n._(/*i18n*/`CPI is crucial for many reasons:`)}
//                 </Typography>
//
//                 <ul style={{ paddingLeft: '1.5rem', marginBottom: '1.5rem' }}>
//                     <li><Typography>{i18n._(/*i18n*/`It helps track inflation.`)}</Typography></li>
//                     <li><Typography>{i18n._(/*i18n*/`It adjusts wages, pensions, and benefits to match cost of living changes.`)}</Typography></li>
//                     <li><Typography>{i18n._(/*i18n*/`It guides economic policy, such as interest rate decisions.`)}</Typography></li>
//                     <li><Typography>{i18n._(/*i18n*/`It supports business decisions in pricing and planning.`)}</Typography></li>
//                 </ul>
//
//                 <Typography sx={{ mb: 2 }}>
//                     {i18n._(/*i18n*/`In short, understanding CPI helps individuals, businesses, and governments react to economic changes and protect purchasing power.`)}
//                 </Typography>
//             </Container>
//         </Box>
//     )
// }

import React from 'react'
import Sidebar from '../components/Sidebar'
import { Box, Typography, Container, Divider } from '@mui/material'
import { useLingui } from '@lingui/react'

export default function About() {
    const { i18n } = useLingui()

    return (
        <Box sx={{ display: 'flex' }}>
            <Sidebar />

            <Container maxWidth="md" sx={{ mt: 4 }}>
                <Typography variant="h4" gutterBottom>
                    {i18n._('About the Consumer Price Index (CPI)')}
                </Typography>

                <Divider sx={{ mb: 3 }} />

                <Typography variant="h6" gutterBottom>
                    {i18n._('What is CPI?')}
                </Typography>
                <Typography sx={{ mb: 2 }}>
                    {i18n._(
                        'The Consumer Price Index (CPI) measures the average change in prices over time for a fixed basket of goods and services. It reflects the cost of living and is used to track price changes in areas like food, housing, transportation, and healthcare.'
                    )}
                </Typography>
                <div style={{ marginBottom: '3rem' }} />

                <Typography variant="h6" gutterBottom>
                    {i18n._('How is CPI Calculated?')}
                </Typography>
                <Typography sx={{ mb: 2 }}>
                    {i18n._(
                        'CPI compares the cost of a representative basket in a given year to its cost in a base year. The formula is:'
                    )}
                </Typography>
                <Typography sx={{ fontStyle: 'italic', mb: 2 }}>
                    {i18n._('CPI = (Cost in Current Year ÷ Cost in Base Year) × 100')}
                </Typography>
                <Typography sx={{ mb: 2 }}>
                    {i18n._(
                        'National statistics agencies, like Statistics Canada, gather data from across the country and update the basket regularly to reflect changes in consumer behavior.'
                    )}
                </Typography>
                <div style={{ marginBottom: '3rem' }} />

                <Typography variant="h6" gutterBottom>
                    {i18n._('Why is CPI Important?')}
                </Typography>
                <Typography sx={{ mb: 2 }}>
                    {i18n._('CPI is crucial for many reasons:')}
                </Typography>

                <ul style={{ paddingLeft: '1.5rem', marginBottom: '1.5rem' }}>
                    <li><Typography>{i18n._('It helps track inflation.')}</Typography></li>
                    <li><Typography>{i18n._('It adjusts wages, pensions, and benefits to match cost of living changes.')}</Typography></li>
                    <li><Typography>{i18n._('It guides economic policy, such as interest rate decisions.')}</Typography></li>
                    <li><Typography>{i18n._('It supports business decisions in pricing and planning.')}</Typography></li>
                </ul>

                <Typography sx={{ mb: 2 }}>
                    {i18n._('In short, understanding CPI helps individuals, businesses, and governments react to economic changes and protect purchasing power.')}
                </Typography>
            </Container>
        </Box>
    )
}
