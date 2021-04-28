const commentBtn = document.getElementById('add-comment');
const commentDiv = document.getElementById('comment-div');

function showCommentForm() {
    // alert('Show comment form was clicked!');

    if (commentDiv.style.display == "none") {
        commentDiv.style.display = "block";
    } else {
        commentDiv.style.display = "none";
    }
}


commentBtn.addEventListener('click', showCommentForm);