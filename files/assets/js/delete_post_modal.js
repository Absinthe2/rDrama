function delete_postModal(id) {

    function delete_post(){	

        this.innerHTML='Deleting post';	
        this.disabled = true; 

        var url = '/delete_post/' + id
        var xhr = new XMLHttpRequest();
        xhr.open("POST", url, true);
        var form = new FormData()
        form.append("formkey", formkey());
        xhr.withCredentials=true;
        xhr.onload = function() {location.reload(true);};
        xhr.send(form);
    }

    document.getElementById("deletePostButton-mobile").onclick = delete_post;

    document.getElementById("deletePostButton").onclick =  delete_post;

};