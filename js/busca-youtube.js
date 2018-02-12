function search(){

    var search = document.getElementById("search").value;

    if(search === ""){
        document.getElementById("iframeId").style.display = "none";
    } else {
        document.getElementById("iframeId").style.display = "inline-gitblock";
    }

    var url = "https://www.youtube.com/embed?listType=search&list=";
    document.getElementById("iframeId").src = url + search;
}