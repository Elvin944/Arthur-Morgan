let btn= document.getElementsByClassName("opacity");

[...btn].forEach(elem=>{
    elem.onclick=function () {
        [...this.parentElement.children].forEach(x=>
        {
            x.style.opacity="1";
        });
        this.style.opacity="0";
        this.style.transition="0.8s"
    }
});