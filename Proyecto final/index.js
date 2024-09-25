document.getElementById('searchbutton').addEventListener('click', () => {
    const selectedOperator = document.getElementById('operator-selector').value;
    const selectedGoal = document.getElementById('goal-selector').value;

    const filteredData = data.filter(item => {
    return item.operator === selectedOperator && item.goal === selectedGoal;
    });

    const resultsDiv = document.getElementById('results');
    resultsDiv.innerHTML = '';

    filteredData.forEach(item => {
    const resultItem = document.createElement('div');
    resultItem.textContent = `${item.operator}: ${item.goal}`;
    resultsDiv.appendChild(resultItem);
    });
});

function createResultsTable(filteredData) {
    const table = document.createElement('table');
    const headerRow = table.insertRow();
    const headerCell1 = headerRow.insertCell();
    const headerCell2 = headerRow.insertCell();  

    headerCell1.textContent = 'Operator';
    headerCell2.textContent = 'Goal';
    filteredData.forEach(item => {

    const row = table.insertRow();
    const cell1 = row.insertCell();
    const cell2 = row.insertCell();

    cell1.textContent = item.operator;
    cell2.textContent = item.goal;
    });
    return table;
}

let skillsummarys = ["skill summary-1", "skill summary-2", "skill summary-3"];

let t5materials = ["crystaline electronic unit", "bipolar nanoflake", "polymerization preparation", "d32 steel", "nucleic crystal sinter"];

let t4materials = ["cyclicene prefab", "solidfied fiber board", "transmuted salt agglomerate", "refined solvent", "cuttin fluid solution", "crystaline circuit", "incandescent alloy block", "polymerized gel", "rma70-24", "grindstone pentahydrate", "manganese tryhidrate", "white horse kohl", ""];

let t3materials = ["integrated device", "aketon", "oriron cluster", "polyester pack", "sugar pack", "orirock cluster", "aggregate cyclicene", "fuscous fiber", "semi-synthetic solvent", "transmuted salt", "compound cutting fluid", "coagulating gel", "crystaline component", "rma70-12", "incandescent alloy", "grindstone", "manganese ore", "loxic kohl"];

let t2materials = ["device", "polyketon", "oriron", "polyester", "sugar", "orirock cube"];

let t1materials = ["damaged device", "diketon", "oriron shard", "ester", "sugar substitute", "orirock" ];

let modulematerials = ["module data block", "data supplement instrument", "data supplement stick"];

let lmd = "lmd";

function E1(elite1){
    this.elite1 = elite1;
};

function E2(elite2){
    this.elite2 = elite2;
};

function Modulestage1(modulestage1){
    this.modulestage1 = modulestage1;
};

function Modulestage2(modulestage2){
    this.modulestage2 = modulestage2;
};

function Modulestage3(modulestage3){
    this.modulestage3 = modulestage3;
};

function S1m1(s1m1){
    this.s1m1 = s1m1;
};

function S1m2(s1m2){
    this.s1m2 = s1m2;
};

function S1m3(s1m3){
    this.s1m3 = s1m3;
};

function S2m1(s2m1){
    this.s2m1 = s2m1;
};

function S2m2(s2m2){
    this.s2m2 = s2m2;
};

function S2m3(s2m3){
    this.s2m3 = s2m3;
};

function S3m1(s3m1){
    this.s3m1 = s3m1;
};

function S3m2(s3m2){
    this.s3m2 = s3m2;
};

function S3m3(s3m3){
    this.s3m3 = s3m3;
};

function Sklv2(sklv2){
    this.sklv2 = sklv2;
};

function Sklv3(skl3){
    this.sklv3 = sklv3;
};

function Skl4(sklv4){
    this.sklv4 = sklv4;
};

function Sklv5(sklv5){
    this.sklv5 = sklv5;
};

function Sklv6(sklv6){
    this.sklv6 = sklv6;
};

function Sklv7(sklv7){
    this.sklv7 = sklv7;
};

const amiyaE1 = new e1("20k lmd, caster chip x3, device x4, oriron x4")

const amiyaE2 = new e2("120k lmd, caster dualchip x3, orirock concentration x10, loxic kohl x10")

const amiyaModule1 = new modulestage1("module data block x2, polyester lump x3, 40k lmd")

const amiyaModule2 = new modulestage2("module data block x2, data supplement stick x20, keton colloid x4, 50k lmd")

const amiyaModule3 = new modulestage3("module data block x2, data supplement instrument x8, oriron block x5, 60k lmd")

const amiyas1m1 = new s1m1("skill summary-3 x5, white horse kohl x3, aketon x5")

const amiyas1m2 = new s1m2("skill summary-3 x6, grindstone pentahydrate x3, white horse kohl x6")

const amiyas1m3 = new s1m3("skill summary-3 x10, d32 steel x4, orirock concentration x5")

const amiyas2m1 = new s2m1("skill summary-3 x5, manganese tryhidrate x3, integrated device x2")

const amiyas2m2 = new s2m2("skill summary-3 x6, rma70-24 x3, manganese tryhidrate x5")

const amiyas2m3 = new s2m3("skill summary-3 x10, polymerization preparation x4, white horse kohl x5")

const amiyas3m1 = new s3m1("skill summary-3 x5, grindstone pentahydrate x3, loxic kohl x4")

const amiyas3m2 = new s3m2("skill summary-3 x6, orirock concentration x3, grindstone pentahydrate x6")

const amiyas3m3 = new s3m3("skill summary-3 x10, bipolar nanoflake x4, polyester lump x4")

const amiyasklv2 = new sklv2("skill summary-1 x4")

const amiyasklv3 = new sklv3("skill summary-1 x4, damaged device x4")

const amiyasklv4 = new sklv4("skill summary-2 x6, orirock cube x4")

const amiyasklv5 = new sklv5("skill summary-2 x6, sugar x5")

const amiyasklv6 = new sklv6("skill summary-2 x6, aketon x4")

const amiyasklv7 = new sklv7("skill summary-3 x6, integrated device x2, sugar pack x3")


function cargarMaterials() {
    materials.forEach(materials =>{
        const div = document.createElement("div");
        div.classList.add("materials");
        div.innerHTML=` 
            <div id="results">
            <img class="material-image" src="${materials.image}" alt="${materials.image}">
            <h3 class="operator-name">${operator.name}</h3>
            </div>
            `;
        materialsContainer.append(div);
    })
}

const materialsContainer = document.querySelector("#")