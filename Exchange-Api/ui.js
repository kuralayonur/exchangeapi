class UI{
    
    static basliklariDegistir(first,second,result){
        const outPutFirst = document.getElementById("outputFirst");
        const outPutSecond = document.getElementById("outputSecond");
        const outPutResult = document.getElementById("outputResult");

        outPutFirst.textContent = first;
        outPutSecond.textContent = second;
        outPutResult.value = result;
        
    }
}