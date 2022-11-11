const HOUSES_ENDPOINT = 'https://636d91d1b567eed48ac45053.mockapi.io/houses';

class HousesApi {
    get = async () => {
        try {
        const resp = await fetch(HOUSES_ENDPOINT);
        const data = await resp.json();
        return data;
    }   catch(e) {
        console.log('Oops,looks like fetchHouses had an issue.', e)
    }
    }

    put = async (house) => {
        try {
        const resp = await fetch(`${HOUSES_ENDPOINT}/${house.id}`, {
            method: 'PUT',
            headers: {
                'Content-Type': 'application/json'
            },
            body: JSON.stringify(house)
        });
        return await resp.json();
    }   catch(e) {
        console.log('Oops, looks like there was an issue updating houses', e);
    }
    }
}

export const housesApi = new HousesApi();