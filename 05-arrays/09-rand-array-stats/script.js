/* becode/javascript
 *
 * /05-arrays/09-rand-array-stats/script.js - 5.9: tableau aléatoire & statistiques
 *
 * coded by leny@BeCode
 * started at 26/10/2018
 */

// NOTE: don't focus on the existing code structure for now.
// You will have time to focus on it later.

(() => {
    let a,b,c,d,e,f,g,h,i,j;
    var n = 0;
    var x = 0;

    document.getElementById("run").addEventListener("click",()=>{
        function randome(min,max){
            min=1;
            max=100;
            a = Math.round(Math.random()*(max-min)+min)
            b = Math.round(Math.random()*(max-min)+min)
            c = Math.round(Math.random()*(max-min)+min)
            d = Math.round(Math.random()*(max-min)+min)
            e = Math.round(Math.random()*(max-min)+min)
            f = Math.round(Math.random()*(max-min)+min)
            g = Math.round(Math.random()*(max-min)+min)
            h = Math.round(Math.random()*(max-min)+min)
            i = Math.round(Math.random()*(max-min)+min)
            j = Math.round(Math.random()*(max-min)+min)
        }
        function option(){
            min=Math.min(a,b,c,d,e,f,g,h,i,j);
            max=Math.max(a,b,c,d,e,f,g,h,i,j);
            add=a+b+c+d+e+f+g+h+i+j
            moy=(a+b+c+d+e+f+g+h+i+j)/10;
        }
        console.log(randome(),option());
        document.getElementById("n-1").innerHTML=a;
        document.getElementById("n-2").innerHTML=b;
        document.getElementById("n-3").innerHTML=c;
        document.getElementById("n-4").innerHTML=d;
        document.getElementById("n-5").innerHTML=e;
        document.getElementById("n-6").innerHTML=f;
        document.getElementById("n-7").innerHTML=g;
        document.getElementById("n-8").innerHTML=h;
        document.getElementById("n-9").innerHTML=i;
        document.getElementById("n-10").innerHTML=j;
        document.getElementById("min").innerHTML=min;
        document.getElementById("max").innerHTML=max;
        document.getElementById("sum").innerHTML=add;
        document.getElementById("average").innerHTML=moy;
    })
    // your code here
})();
