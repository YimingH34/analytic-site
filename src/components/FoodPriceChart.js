// import React, { useState, useEffect } from 'react';
// import { LineChart } from '@mui/x-charts/LineChart';
// import {
//     Slider,
//     Stack,
//     Typography,
//     FormGroup,
//     FormControlLabel,
//     Checkbox,
//     Button,
//     Box,
//     Divider
// } from '@mui/material';
// import foodCpiData from '../data/foodCpiData';
// import './FoodPriceChart.css';
//
// const monthLabels = foodCpiData.map((d) => d.month);
// const totalMonths = monthLabels.length;
//
// export default function FoodPriceChart() {
//     const [range, setRange] = useState([0, totalMonths - 1]);
//     const [selectedCategories, setSelectedCategories] = useState({
//         Vegetables: true,
//         Meat: true,
//         Dairy: true,
//         Fruits: true,
//     });
//
//     const [animatedIndex, setAnimatedIndex] = useState(range[1]);
//     const [running, setRunning] = useState(false);
//
//     useEffect(() => {
//         setAnimatedIndex(range[1]);
//     }, [range]);
//
//     useEffect(() => {
//         if (!running) return;
//
//         const interval = setInterval(() => {
//             setAnimatedIndex((prev) => {
//                 const next = prev + 1;
//                 if (next > range[1]) {
//                     clearInterval(interval);
//                     return prev;
//                 }
//                 return next;
//             });
//         }, 100);
//
//         return () => clearInterval(interval);
//     }, [running, range]);
//
//     const animatedIndexInRange = animatedIndex - range[0];
//     const fullRange = foodCpiData.slice(range[0], range[1] + 1);
//     const visibleRange = fullRange.slice(0, animatedIndexInRange + 1);
//
//     const dataset = visibleRange.map((d) => ({
//         month: d.month,
//         Vegetables: d.Vegetables,
//         Meat: d.Meat,
//         Dairy: d.Dairy,
//         Fruits: d.Fruits,
//     }));
//
//     const series = Object.entries(selectedCategories)
//         .filter(([_, isSelected]) => isSelected)
//         .map(([category]) => ({
//             dataKey: category,
//             label: category,
//             showMark: false,
//         }));
//
//     const handleCheckboxChange = (event) => {
//         setSelectedCategories({
//             ...selectedCategories,
//             [event.target.name]: event.target.checked,
//         });
//     };
//
//     return (
//         <div className="chart-container-no-box">
//             <Stack spacing={3}>
//                 <Box>
//                     <Typography variant="h5" fontWeight={600} gutterBottom>
//                         CPI Trend (Details)
//                     </Typography>
//                     <Typography variant="body2" color="text.secondary">
//                         View how food prices have changed over time across different categories. Use the slider to select a time range, choose which categories to view, and animate month-by-month.
//                     </Typography>
//                 </Box>
//
//                 <Divider />
//
//                 <Box>
//                     <Typography variant="h6" fontWeight={600} align="center" sx={{ mb: 2 }}>
//                         Canada CPI over the past 5 years
//                     </Typography>
//
//                     <LineChart
//                         dataset={dataset}
//                         xAxis={[{ dataKey: 'month', scaleType: 'band' }]}
//                         yAxis={[{ min: 90, max: 130 }]}
//                         grid={{ vertical: false, horizontal: true }}
//                         series={series}
//                         height={500}
//                         margin={{ bottom: 10 }}
//                         legend={{ position: 'left' }}
//                     />
//                 </Box>
//
//                 <Box>
//                     <Typography variant="subtitle1" fontWeight={500} className="section-label">
//                         Category Filters:
//                     </Typography>
//                     <FormGroup row>
//                         {Object.keys(selectedCategories).map((cat) => (
//                             <FormControlLabel
//                                 key={cat}
//                                 control={
//                                     <Checkbox
//                                         checked={selectedCategories[cat]}
//                                         onChange={handleCheckboxChange}
//                                         name={cat}
//                                     />
//                                 }
//                                 label={cat}
//                             />
//                         ))}
//                     </FormGroup>
//                 </Box>
//
//                 <Box>
//                     <Typography variant="subtitle1" fontWeight={500} className="section-label">
//                         Select Month Range:
//                     </Typography>
//                     <Slider
//                         value={range}
//                         onChange={(_, val) => {
//                             setRange(val);
//                             setAnimatedIndex(val[1]);
//                         }}
//                         min={0}
//                         max={totalMonths - 1}
//                         step={1}
//                         valueLabelDisplay="auto"
//                         valueLabelFormat={(i) => monthLabels[i]}
//                     />
//                     <Typography variant="caption" color="text.secondary">
//                         Showing data from <strong>{monthLabels[range[0]]}</strong> to <strong>{monthLabels[range[1]]}</strong>
//                     </Typography>
//                 </Box>
//
//                 <Stack direction="row" spacing={2}>
//                     <Button
//                         variant="contained"
//                         onClick={() => {
//                             setAnimatedIndex(range[0]);
//                             setRunning(true);
//                         }}
//                     >
//                         Play
//                     </Button>
//                     <Button
//                         variant="outlined"
//                         onClick={() => {
//                             setAnimatedIndex(range[1]);
//                             setRunning(false);
//                         }}
//                     >
//                         Stop
//                     </Button>
//                 </Stack>
//             </Stack>
//         </div>
//     );
// }
//


import React, { useState, useEffect } from 'react';
import { LineChart } from '@mui/x-charts/LineChart';
import {
    Slider,
    Stack,
    Typography,
    FormGroup,
    FormControlLabel,
    Checkbox,
    Button,
    Box,
    Divider
} from '@mui/material';
import { useLingui } from '@lingui/react';
import foodCpiData from '../data/foodCpiData';
import './FoodPriceChart.css';

const monthLabels = foodCpiData.map((d) => d.month);
const totalMonths = monthLabels.length;

export default function FoodPriceChart() {
    const { i18n } = useLingui();

    const [range, setRange] = useState([0, totalMonths - 1]);
    const [selectedCategories, setSelectedCategories] = useState({
        Vegetables: true,
        Meat: true,
        Dairy: true,
        Fruits: true,
    });

    const [animatedIndex, setAnimatedIndex] = useState(range[1]);
    const [running, setRunning] = useState(false);

    useEffect(() => {
        setAnimatedIndex(range[1]);
    }, [range]);

    useEffect(() => {
        if (!running) return;

        const interval = setInterval(() => {
            setAnimatedIndex((prev) => {
                const next = prev + 1;
                if (next > range[1]) {
                    clearInterval(interval);
                    return prev;
                }
                return next;
            });
        }, 100);

        return () => clearInterval(interval);
    }, [running, range]);

    const animatedIndexInRange = animatedIndex - range[0];
    const fullRange = foodCpiData.slice(range[0], range[1] + 1);
    const visibleRange = fullRange.slice(0, animatedIndexInRange + 1);

    const dataset = visibleRange.map((d) => ({
        month: d.month,
        Vegetables: d.Vegetables,
        Meat: d.Meat,
        Dairy: d.Dairy,
        Fruits: d.Fruits,
    }));

    const series = Object.entries(selectedCategories)
        .filter(([_, isSelected]) => isSelected)
        .map(([category]) => ({
            dataKey: category,
            label: category,
            showMark: false,
        }));

    const handleCheckboxChange = (event) => {
        setSelectedCategories({
            ...selectedCategories,
            [event.target.name]: event.target.checked,
        });
    };

    return (
        <div className="chart-container-no-box">
            <Stack spacing={3}>
                <Box>
                    <Typography variant="h5" fontWeight={600} gutterBottom>
                        {i18n._('CPI Trend (Details)')}
                    </Typography>
                    <Typography variant="body2" color="text.secondary">
                        {i18n._(
                            'View how food prices have changed over time across different categories.'
                        )}
                    </Typography>
                </Box>

                <Divider />

                <Box>
                    <Typography variant="h6" fontWeight={600} align="center" sx={{ mb: 2 }}>
                        {i18n._('Canada CPI over the past 5 years')}
                    </Typography>

                    <LineChart
                        dataset={dataset}
                        xAxis={[{ dataKey: 'month', scaleType: 'band' }]}
                        yAxis={[{ min: 90, max: 130 }]}
                        grid={{ vertical: false, horizontal: true }}
                        series={series}
                        height={500}
                        margin={{ bottom: 10 }}
                        legend={{ position: 'left' }}
                    />
                </Box>

                <Box>
                    <Typography variant="subtitle1" fontWeight={500} className="section-label">
                        {i18n._('Category Filters:')}
                    </Typography>
                    <FormGroup row>
                        {Object.keys(selectedCategories).map((cat) => (
                            <FormControlLabel
                                key={cat}
                                control={
                                    <Checkbox
                                        checked={selectedCategories[cat]}
                                        onChange={handleCheckboxChange}
                                        name={cat}
                                    />
                                }
                                label={i18n._(cat)}
                            />
                        ))}
                    </FormGroup>
                </Box>

                <Box>
                    <Typography variant="subtitle1" fontWeight={500} className="section-label">
                        {i18n._('Select Month Range:')}
                    </Typography>
                    <Slider
                        value={range}
                        onChange={(_, val) => {
                            setRange(val);
                            setAnimatedIndex(val[1]);
                        }}
                        min={0}
                        max={totalMonths - 1}
                        step={1}
                        valueLabelDisplay="auto"
                        valueLabelFormat={(i) => monthLabels[i]}
                    />
                    <Typography variant="caption" color="text.secondary">
                        {i18n._('Showing data from')} <strong>{monthLabels[range[0]]}</strong> {i18n._('to')}{' '}
                        <strong>{monthLabels[range[1]]}</strong>
                    </Typography>
                </Box>

                <Stack direction="row" spacing={2}>
                    <Button
                        variant="contained"
                        onClick={() => {
                            setAnimatedIndex(range[0]);
                            setRunning(true);
                        }}
                    >
                        {i18n._('Play')}
                    </Button>
                    <Button
                        variant="outlined"
                        onClick={() => {
                            setAnimatedIndex(range[1]);
                            setRunning(false);
                        }}
                    >
                        {i18n._('Stop')}
                    </Button>
                </Stack>
            </Stack>
        </div>
    );
}
