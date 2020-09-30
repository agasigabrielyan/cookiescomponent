$(document).ready(function(){
    let cookies_approved = BX.localStorage.get("COOKIES_APPROVED_ON_THIS_SITE_BY_USER");
    if(cookies_approved){
        $(".cookies-notice").css({display:"none"});
    }
});
$(document).on("click",".cookies-notice-container-btn",function(e){
    e.preventDefault();
    BX.localStorage.set("COOKIES_APPROVED_ON_THIS_SITE_BY_USER", "Y", "604800");
    $(".cookies-notice").css({display:"none"});
});