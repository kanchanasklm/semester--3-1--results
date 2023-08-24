let buttonEl=document.getElementById("button");
let finalResultEl=document.getElementById("result");

let OperatingSystemEl=document.getElementById("OS");
let ComputerNetworksEl=document.getElementById("CN");
let SoftwareEngineeringEl=document.getElementById("SE");
let MFDSEl=document.getElementById("MFDS");
let ElectiveEl=document.getElementById("Elective");
let OSLabEl=document.getElementById("OSLab");
let CNLabEl=document.getElementById("CNLab");
let SELabEl=document.getElementById("SE-lab");
let ELCLabEl=document.getElementById("ELC-lab-2");


let creddits=21; 
let result=0;
// let count=0;
function credits(subGrade, creditts) {

    // count++;
    if (subGrade === "Ex") {
        // result += (10 * creditts);
        return (10 * creditts)
        

    } else if (subGrade === "A") {
        // result += (9 * creditts);
        return (9 * creditts)
    } else if (subGrade === "B") {
        // result += (8 * creditts);
        return (8 * creditts);
        
    } else if (subGrade === "C") {
        // result += (7 * creditts);
        return (7 * creditts)
    } else if (subGrade === "D") {
        // result += (6 * creditts);
        return (6 * creditts)
    }
    else if (subGrade === "E") {
        // result += (6 * creditts);
        return (5 * creditts)
    }
    else if (subGrade === "F") {
        // result += (6 * creditts);
        return 0
    }
    
//    finalResultEl.textContent=result/creddits;
}



buttonEl.onclick=function()
{
    let OperatingSystemElGrade = OperatingSystemEl.value;
    let ComputerNetworksElGrade = ComputerNetworksEl.value;
    let SoftwareEngineeringElGrade=SoftwareEngineeringEl.value;
    let MFDSElGrade= MFDSEl.value; 
    let ElectiveElGrade=ElectiveEl.value;
    let OSLabElGrade=OSLabEl.value;
    let CNLabElGrade=CNLabEl.value;
    let SELabElGrade=SELabEl.value;
    let ELCLabElGrade=ELCLabEl.value;

    

   
    result+=credits(OperatingSystemElGrade,3);
    result+=credits(ComputerNetworksElGrade,3);
    result+=credits(SoftwareEngineeringElGrade,3);
    result+=credits(MFDSElGrade,3);
    result+=credits(ElectiveElGrade,3);
    result+=credits(OSLabElGrade,1.5);
    result+=credits(CNLabElGrade,1.5);
    result+=credits(SELabElGrade,1.5);
    result+=credits(ELCLabElGrade,1.5);

    
    // alert(result/creddits);
    // if(result===0){
    //     finalResultEl.textContent="you failed"
    // }
    finalResultEl.textContent=(result/creddits).toFixed(2);
    result=0;
};