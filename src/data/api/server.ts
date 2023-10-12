// https://thecodingcowboy.notion.site/ContactForm-Input-Server-Calls-de72c6e29f3d4c8ba63703904eeeada3
// const token = 'c595c89d2997cd95852ed7df2eeb70327a97d99488f7b330' //bling
// let token = 'be84dcf573b84f8108cea8c871b27fb0e15713c61dea0617' // mine
//  https://github.com/casmdz/DigitalLibrary_Render/blob/main/app/authentication/routes.py
// https://flask-api-car-collection.onrender.com

const token = 'f944d07058f1bfcc40564c223f28776d3fbe429b61a99a68'

export const server_calls = {
    get: async () => {
        const response = await fetch(`https://flask-api-car-collection.onrender.com/api/cars`,
        {
            method: 'GET',
            mode: 'cors',
        }); // TODO: check if /api/cars or /api 

        if (!response.ok){
            console.log('Failed to get')
            throw new Error('failed to fetch data from the server')
        }
        return await response.json()
    },

    create: async (data: any = {}) => {
        const response = await fetch(`https://flask-api-car-collection.onrender.com/api/cars`,
        {
            method: "POST",
            headers: {
                'Content-Type': 'application/json',
                // 'Access-Control-Allow-Origin': '*',
                // 'x-access-token': `Bearer ${token}`
            },
            body: JSON.stringify(data)
        })

        if (!response.ok) {
            console.log('failed to create new data on the server!')
            throw new Error('failed to create new data on the server.')
        }
        return await response.json() 
    },

    update: async (id: string, data: any ={}) => {
        const response = await fetch (`https://flask-api-car-collection.onrender.com/api/cars${id}`, // TODO check 4 correct endpoint
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
        const response = await fetch (`https://flask-api-car-collection.onrender.com/api/cars${id}`, // TODO check 4 correct endpoint
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
