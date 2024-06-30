import React, { useEffect, useState } from 'react';
import { ReturnCO2Models } from '../apiService';

function CarbonFootprintTracker() {
    const [data, setData] = useState(null);
    const [loading, setLoading] = useState(true);
    const [error, setError] = useState(null);

    useEffect(() => {
        const getData = async () => {
            try {
                const result = await ReturnCO2Models();
                setData(result);
            } catch (error) {
                setError(error.message);
            } finally {
                setLoading(false);
            }
        };

        getData();
    }, []);

    return (
        <div>
            <h1>Carbon Footprint Tracker</h1>
            {loading && <p>Loading...</p>}
            {error && <p>Error: {error}</p>}
            {data && (
                <div>
                    <h2>Your Carbon Footprint</h2>
                    <pre>{JSON.stringify(data, null, 2)}</pre>
                </div>
            )}
            <div>
                <h2>Log Your Activity</h2>
                <form>
                    <label>
                        Activity:
                        <input type="text" name="activity" />
                    </label>
                    <label>
                        CO2 Emissions (kg):
                        <input type="number" name="emissions" />
                    </label>
                    <button type="submit">Log Activity</button>
                </form>
            </div>
        </div>
    );
}

export default CarbonFootprintTracker;
