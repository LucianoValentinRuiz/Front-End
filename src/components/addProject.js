import{postProject} from "/src/services/projectService.js";
import{returnFilters} from "/src/components/addFilters.js"

let name,start,end,client,type;

//function
async function addProject(name,start,end,client,type){
    let newProject = await postProject (name,start,end,client,type);
}

const { nameFilter, campaignFilter, clientFilter } = await returnFilters();

//Button
const buttonClose = document.createElement("button");
buttonClose.id = "close_button";     
buttonClose.textContent = "X"

//Table
const table = document.createElement("table");

const nameRow = document.createElement("tr");

const nameCell = document.createElement("td");
nameCell.textContent = "Name";
nameRow.appendChild(nameCell);
const nameCellOption = document.createElement("td");
nameCellOption.appendChild(nameFilter);
nameRow.appendChild(nameCellOption);

const startRow = document.createElement("tr");

const startCell = document.createElement("td");
startCell.textContent = "Start";
startRow.appendChild(startCell);
const startCellOption = document.createElement("td");
const dateInput1 = document.createElement("input");
dateInput1.type = "date";
dateInput1.id = "startDate";
startCellOption.appendChild(dateInput1);
startRow.appendChild(startCellOption);

const endRow = document.createElement("tr");

const endCell = document.createElement("td");
endCell.textContent = "End";
endRow.appendChild(endCell);
const endCellOption = document.createElement("td");
const dateInput2 = document.createElement("input");
dateInput2.type = "date";
dateInput2.id = "endDate";
endCellOption.appendChild(dateInput2);
endRow.appendChild(endCellOption);

const clientRow = document.createElement("tr");

const clientCell = document.createElement("td");
clientCell.textContent = "Client";
clientRow.appendChild(clientCell);
const clientCellOption = document.createElement("td");
clientCellOption.appendChild(clientFilter);
clientRow.appendChild(clientCellOption);


const campaignRow = document.createElement("tr");

const campaignCell = document.createElement("td");
campaignCell.textContent = "Campaign type";
campaignRow.appendChild(campaignCell);
const campaignCellOption = document.createElement("td");
campaignCellOption.appendChild(campaignFilter);
campaignRow.appendChild(campaignCellOption);

export async function addComponents(container) {
    table.appendChild(nameRow);
    table.appendChild(startRow);
    table.appendChild(endRow);
    table.appendChild(clientRow);
    table.appendChild(campaignRow);

    container.appendChild(buttonClose);
    buttonClose.addEventListener("click", () => {

        if (container) {
            container.remove(); 
        }
    })
    
    container.appendChild(table);
}

export default {addComponents}