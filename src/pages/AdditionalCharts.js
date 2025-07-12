import FoodPriceChart from '../components/FoodPriceChart';
import Sidebar from '../components/Sidebar';

export default function AdditionalCharts() {
    return (
        <div style={{ display: 'flex' }}>
            <Sidebar />
            <div style={{ flexGrow: 1}}>
                <FoodPriceChart />
            </div>
        </div>
    );
}
