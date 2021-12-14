function collapse_comment(comment_id) {
    const comment = "comment-" + comment_id
    const element = document.getElementById(comment)
    const closed = element.classList.toggle("collapsed")
    const top = element.getBoundingClientRect().y

    if (closed && top < 0) {
        element.scrollIntoView()
        window.scrollBy(0, - 100)
    }
};

function poll_vote_no_v() {
    var myToast = new bootstrap.Toast(document.getElementById('toast-post-error'));
    myToast.show();
    document.getElementById('toast-post-error-text').innerText = "Only logged-in users can vote!";
}

function morecomments(cid) {
    btn = document.getElementById(`btn-${cid}`);
    btn.disabled = true;
    btn.innerHTML = "Requesting...";
    var form = new FormData();
    form.append("formkey", formkey());
    var xhr = new XMLHttpRequest();
    xhr.open("post", `/morecomments/${cid}`);
    xhr.withCredentials=true;
    xhr.onload=function(){
        if (xhr.status==200) {
            document.getElementById(`morecomments-${cid}`).innerHTML = xhr.response.replace(/data-src/g, 'src').replace(/data-cfsrc/g, 'src').replace(/style="display:none;visibility:hidden;"/g, '');
            var tooltipTriggerList = [].slice.call(document.querySelectorAll('[data-bs-toggle="tooltip"]'));
            tooltipTriggerList.map(function(element){
                return new bootstrap.Tooltip(element);
            });
            popovertrigger()
        }
    }
    xhr.send(form)
}