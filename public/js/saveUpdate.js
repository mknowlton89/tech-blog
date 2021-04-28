const updateForm = document.getElementById('update-blog-form');

const updatePost = async (event) => {

    event.preventDefault;

    const url = window.location.href;
    const splitUrl = url.split('/');
    const id = splitUrl[6];
    console.log(splitUrl);

    const title = document.querySelector('#title').value;
    const content = document.querySelector('#content').value;

    const responseURL = `/api/posts/update/${id}`;
    console.log(responseURL);



    // Send a put request to the API endpoint
    const response = await fetch(`/api/posts/update/${id}`, {
        method: 'PUT',
        body: JSON.stringify({ title, content }),
        headers: { 'Content-Type': 'application/json' },
    });

    if (response.ok) {
        document.location.replace('/dashboard');
    } else {
        alert(response.statusText);
    }
};

updateForm.addEventListener('submit', updatePost)