import{getListProject} from "/src/services/projectService.js"
import{returnFilters} from "/src/components/addFilters.js"
import{addComponents} from "/src/components/addProject.js"

let name=null;
let campaign=null;
let client=null;
let offset = 0;
let size = 10;

async function loadProjects(name, campaign, client, offset, size){
    let listProjects = await getListProject (name,campaign,client,offset,size);

    const table = document.getElementById("table_projects");
    
    listProjects.forEach(project => {
    
        const row = document.createElement("tr");
        //Agrego columnas con la info del project
        const nameCell = document.createElement("td");
        nameCell.textContent = project.name;
        row.appendChild(nameCell);
    
        const campaignCell = document.createElement("td");
        campaignCell.textContent = project.campaignType.name; 
        row.appendChild(campaignCell);
    
        const nameClientCell = document.createElement("td");
        nameClientCell.textContent = project.client.name; 
        row.appendChild(nameClientCell);
    
        const emailCell = document.createElement("td");
        emailCell.textContent = project.client.email; 
        row.appendChild(emailCell);
    
        const companyCell = document.createElement("td");
        companyCell.textContent = project.client.company; 
        row.appendChild(companyCell);
    
        const phoneCell = document.createElement("td");
        phoneCell.textContent = project.client.phone; 
        row.appendChild(phoneCell);
    
        const startCell = document.createElement("td");
        startCell.textContent = new Date(project.start).toLocaleDateString(); 
        row.appendChild(startCell);
    
        const endCell = document.createElement("td");
        endCell.textContent = new Date(project.end).toLocaleDateString(); 
        row.appendChild(endCell);

        //Agrego el boton
        const buttonCell = document.createElement("td");
        const button = document.createElement("button");
        button.id = "moreInfo_button";     //id de los botones de los project
        button.textContent = "Ver mas+"   //Agrego un texto
        button.addEventListener("click", () => {  //Agrego un evento
        alert("Viste mas");
    })
        buttonCell.appendChild(button);
        row.appendChild(buttonCell);
    
        table.appendChild(row);
    });
}
await loadProjects(name, campaign, client, offset, size);


const buttonHeader = document.getElementById("header_button");
buttonHeader.textContent = "Agregar+"
buttonHeader.addEventListener("click", () => {
    const section = document.getElementById("principal_Section");
    const container = document.getElementById("project_container");
    if (!container) {
        const newContent = document.createElement("div");
        newContent.id = "project_container";
        section.appendChild(newContent);
        addComponents(newContent);
    }
    else{
        console.log("Error");
    }
})

const blockFilters = document.getElementById("Options_filters");
const { nameFilter, campaignFilter, clientFilter } = await returnFilters();

blockFilters.appendChild(nameFilter);
blockFilters.appendChild(campaignFilter);
blockFilters.appendChild(clientFilter);

const searchButton = document.createElement("button");
searchButton.textContent = "Buscar"   
searchButton.addEventListener("click", async () => {  
        name = nameFilter.value || null;
        campaign = campaignFilter.value !== "" ? campaignFilter.value : null;
        client = clientFilter.value !== "" ? clientFilter.value : null; 

        const table = document.getElementById("table_projects");
        const rows = table.querySelectorAll("tr:not(#fila_Principal)");
        rows.forEach(row => row.remove()); 

        await loadProjects(name, campaign, client, offset, size);
})
blockFilters.appendChild(searchButton);

const PreviousButton = document.getElementById("first_button");
PreviousButton.addEventListener("click", async () => {  
    if(offset >= 10){
        offset = offset-10;
        const table = document.getElementById("table_projects");
        const rows = table.querySelectorAll("tr:not(#fila_Principal)");
        rows.forEach(row => row.remove()); 
    
        await loadProjects(name, campaign, client, offset, size);
    }
})
const table = document.getElementById("table_projects");
const NextButton = document.getElementById("second_button");
NextButton.addEventListener("click", async () => {  
    if(table.rows.length >= 10){
        offset = offset+10;
        const table = document.getElementById("table_projects");
        const rows = table.querySelectorAll("tr:not(#fila_Principal)");
        rows.forEach(row => row.remove());  
    
        await loadProjects(name, campaign, client, offset, size);
    }
})