// https://thecodingcowboy.notion.site/ContactForm-Input-Server-Calls-de72c6e29f3d4c8ba63703904eeeada3

//  https://github.com/casmdz/DigitalLibrary_Render/blob/main/app/authentication/routes.py
// https://flask-api-car-collection.onrender.com
// f944d07058f1bfcc40564c223f28776d3fbe429b61a99a68
const token = '7978b0db876d776d7237105ab17c2613855b20f9cb7e7e19'
// https://flask-api-car-collection.onrender.com/api/cars
//We will be upgrading critical infrastructure on October 15th, 5:00 pm CDT (October 15th, 10:00 pm UTC). For up to 30 minutes, you will be unable to view, edit, create, or deploy services and databases. There will be no interruptions to deployed services and databases. Follow our status page for updates.

export const server_calls = {
    get: async () => {
        const response = await fetch(`https://flask-api-car-collection.onrender.com/api/cars`,
        {
            method: 'GET',
            headers: {
                'Content-Type': 'application/json',
                // 'Access-Control-Allow-Origin': '*',
                'x-access-token': `Bearer ${token}`
            }
        }); 
        if (!response.ok){
            console.log('Failed to get')
            throw new Error('failed to fetch data from the server')
        }
        return await response.json()
    },

    create: async (data: any = {}) => {
        try {
            const response = await fetch(`https://flask-api-car-collection.onrender.com/api/cars`, {
                method: "POST",
                headers: {
                    'Content-Type': 'application/json',
                    'x-access-token': `Bearer ${token}`,
                },
                body: JSON.stringify(data)
            });

            if (!response.ok) {
                throw new Error(`Failed to create new data on the server. Status: ${response.status} ${response.statusText}`);
            }

            return await response.json();
        } catch (error) {
            console.error('Network error:', error);
            throw error; 
        }
    },

    update: async (id: string, data: any ={}) => {
        const response = await fetch (`https://flask-api-car-collection.onrender.com/api/cars/${id}`, // TODO check 4 correct endpoint
        {
            method: "POST",
            headers: {
                'Content-Type': 'application/json',
                'Access-Control-Allow-Origin': '*',
                'x-access-token': `Bearer ${token}`
            },
            body: JSON.stringify(data) 
        }) 
        if (!response.ok) {
            throw new Error('Failed to update data on the server.')
        }
        return await response.json()
    },

    delete: async (id: string) => {
        const response = await fetch (`https://flask-api-car-collection.onrender.com/api/cars/${id}`,
        {
            method: "DELETE",
            headers: {
                'Content-Type': 'application/json',
                'Access-Control-Allow-Origin': '*',
                'x-access-token': `Bearer ${token}`
            },
        }) 
        if (!response.ok){
            throw new Error('Failed to delete data on the server') 
        }
        return;
    },

};
