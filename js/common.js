function ShowTab(tabNo, Total){
    var tabId = 'tab' + tabNo;
    var tabContentId = 'tabContent' + tabNo;
    document.getElementById(tabId).className = "selected";
    document.getElementById(tabContentId).style.display = "block";
    
    for(i=1;i<=Total;i++){
        if(i != tabNo){
            tabId = 'tab' + i;
            tabContentId = 'tabContent' + i;
            document.getElementById(tabId).className = "";
            document.getElementById(tabContentId).style.display = "none";
        }
    } 
    
    goBackCount = 2;
}

function GoBack(){ 
    var x = -1;
        x = x * goBackCount;        
    history.go(x);
}

function ConfirmDelete() {
  return confirm("Are you SURE you want to delete this article?");
};