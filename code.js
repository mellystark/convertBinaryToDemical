let binary="1011";
function convertBinaryToDemical(binary){
    let toplam = 0;
    let ust = 0;
    for(let i = binary.length-1; i>=0; i--){
        toplam+= Number(binary.charAt(i)) * Math.pow(2,ust);
        ust++;
    }
    alert(toplam);
}convertBinaryToDemical(binary);
