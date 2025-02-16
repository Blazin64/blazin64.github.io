const fetchProfile = fetch('https://api.github.com/user/26800120', {method: 'GET'})
    .then(response => response.json());

$(document).ready(async function() {
    const mytext = await fetchProfile;
    console.log(mytext);
    $(".profile-photo").attr('src', mytext.avatar_url);
    $(".my-bio-text").html(mytext.bio);
});