//https://api.exchangeratesapi.io/latest?base=USD

class Kur{

    static async kurGetir(kur){
        const url = `https://api.exchangeratesapi.io/latest?base=${kur}`;

        const cevap = await fetch(url);
        const veri = cevap.json();
        return veri;
    }

    
}
