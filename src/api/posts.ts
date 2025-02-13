export async function getPosts() {
    const res = await fetch ('https://beyond-payload-blog.onrender.com/api/posts');
    const data = await res.json();
    return data.docs;
};