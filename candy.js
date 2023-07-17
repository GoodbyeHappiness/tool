var jquery = document.createElement('script');
jquery.src = 'https://code.jquery.com/jquery-3.3.1.min.js';
document.getElementsByTagName('head')[0].appendChild(jquery);
// 语法糖
window.candyList = new Map();
candyList.set("id", "${adaptOrderId}");
candyList.set("a.id", "${channelApplyOrder.adaptOrderId}");
candyList.set("l.id", "${channelLendOrder.adaptOrderId}");
candyList.set("time", "${TMU.sec2Date(Comm.toLong(repayTime), 'yyyy-MM-dd')}");
candyList.set("isOffline", "<#if (collectMethod == 4 || collectMethod == 10)></#if>");
// 设置语法糖
setTimeout("addCandy()", 1000);
function addCandy(){
$("input,textarea").keypress(function(e){
if(e.keyCode==13){
    var src = window.getSelection().toString();
    if(candyList.has(window.getSelection().toString())){
        var target = e.currentTarget;
        var start = target.selectionStart;
        var end = target.selectionEnd;
        var allText = target.value;
        target.value = allText.substring(0, start) + candyList.get(src) + allText.substring(end, allText.length);
        e.stopPropagation();
        return false;
    }
}
});
}
