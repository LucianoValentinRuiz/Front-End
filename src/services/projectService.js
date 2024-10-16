
export async function getListProject(name, campaign, client, offset, size) {
    let config = {
        method: 'GET',
        headers: {
            'Content-Type': 'application/json'
        },
        mode: 'cors',
        cache: 'default'
    };

    // Comenzamos con la URL base
    let url = 'http://localhost:5067/api/v1/Project';

    // Creamos un array para almacenar los parámetros
    let params = [];

    // Agregamos parámetros según los valores que recibimos
    if (name) {
        params.push(`name=${encodeURIComponent(name)}`);
    }
    if (campaign) {
        params.push(`campaign=${encodeURIComponent(campaign)}`);
    }
    if (client) {
        params.push(`client=${encodeURIComponent(client)}`);
    }
    if (offset !== null) { // Verificamos si offset no es null
        params.push(`offset=${encodeURIComponent(offset)}`);
    }
    if (size !== null) { // Verificamos si size no es null
        params.push(`size=${encodeURIComponent(size)}`);
    }

    // Si hay parámetros, los añadimos a la URL
    if (params.length > 0) {
        url += '?' + params.join('&');
    }

    try {
        const response = await fetch(url, config);

        if (response.ok) {
            let result = await response.json();
            return result;
        } else {
            alert("Error en la respuesta del servidor");
            let errorDetails = await response.json();
            alert(JSON.stringify(errorDetails));
        }
    } catch (error) {
        console.log("Error:", error);
    }
}

export async function postProject(name,start,end,client,type) {
    let config = {
        method: 'POST',
        headers:
        {
            'Content-Type': 'application/json'
        },
        body: JSON.stringify({
            name : name,
            start : start,
            end : end,
            client : client,
            campaignType : type
        }),
    }
    try {
        const response = await fetch( `http://localhost:5067/api/v1/Project`, config);
        let result = await response.json();
        return result;
    }
    catch(error) {
        console.log(error);
    }
}

export async function getProject(id) {
    let config = {
        method: 'GET',
        headers:
        {
            'Content-Type': 'application/json'
        }
    }
    try {
        const response = await fetch( `https://localhost:5067/api/v1/Project/${id}`, config);
        let result = await response.json();
        return result;
    }
    catch(error) {
        console.log(error);
    }
}

export async function patchInteraction(id,notes,date,type) {
    let config = {
        method: 'PATCH',
        headers:
        {
            'Content-Type': 'application/json'
        },
        body: JSON.stringify({
            notes : notes,
            date : date,
            interactionType : type
        }),
    }
    try {
        const response = await fetch( `http://localhost:5067/api/v1/Project/${id}/interactions`, config);
        let result = await response.json();
        return result;
    }
    catch(error) {
        console.log(error);
    }
}

export async function patchTask(id,name,dueDate,user,status) {
    let config = {
        method: 'PATCH',
        headers:
        {
            'Content-Type': 'application/json'
        },
        body: JSON.stringify({
            name : name,
            dueDate : dueDate,
            user : user,
            status : status
        }),
    }
    try {
        const response = await fetch( `https://localhost:5067/api/v1/Project/${id}/tasks`, config);
        let result = await response.json();
        return result;
    }
    catch(error) {
        console.log(error);
    }
}

export async function putTask(id,name,dueDate,user,status) {
    let config = {
        method: 'PUT',
        headers:
        {
            'Content-Type': 'application/json'
        },
        body: JSON.stringify({
            name : name,
            dueDate : dueDate,
            user : user,
            status : status
        }),
    }
    try {
        const response = await fetch( `https://localhost:5067/api/v1/Tasks/${id}`, config);
        let result = await response.json();
        return result;
    }
    catch(error) {
        console.log(error);
    }
}

export default {
    getProject,
    postProject,
    getListProject,
    patchInteraction,
    patchTask,
    putTask
}