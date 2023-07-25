var marina=["IMG_20230612_180012502.jpg", "IMG_20230613_133321119.jpg", "IMG-20230604-WA0012.jpg" , "IMG-20230605-WA0006.jpg" ,"IMG-20230605-WA0031.jpg"];
var numero=0;
function trocamarina(){
    if(numero>4){
        numero=0

    }
    document.getElementById("batata").src=marina[numero];
}