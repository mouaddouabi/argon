$(document).ready(function(){
    $(".mytable").DataTable();
    $("select[name*='DataTables_Table_0_length']").css({"width":"50px"});
    console.log("datatable");
});

function corps_etr(att){
    if(att==true){
        document.getElementById("blockCorps").style.display="block";
    }
    else{
        document.getElementById("blockCorps").style.display="none";
    }
    return;
}
function afficherLotsuiv(id){
    document.getElementById("lot"+id).style.display="block";
    document.getElementById("btn"+id).style.display="none";
    document.getElementById("btn"+id+"h").style.display="none";
}
function hideLotsuiv(idh){
    idfix=idh-1;
    document.getElementById("Fournisseur"+idfix).value = "";
    document.getElementById("CodeFr"+idfix).value = "";
    document.getElementById("numLotEmb"+idfix).value = 0;
    document.getElementById("Volume_unite"+idfix).value = "";
    document.getElementById("condStock"+idfix).value = "";
    document.getElementById("dateCond"+idfix).value = "";
    document.getElementById("Operateur"+idfix).value = "";
    document.getElementById("lavSechEmb"+idfix).value = "";
    document.getElementById("actionCorre"+idfix).value = "";
    document.getElementById("Type"+idfix).value = "";
    document.getElementById("lot"+idfix).style.display="none";
    document.getElementById("btn"+idfix).style.display="block";
    document.getElementById("btn"+idfix+"h").style.display="block";
    
}
