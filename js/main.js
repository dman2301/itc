//replace with your user:
const GITHUB_URL = "https://api.github.com/users/dman2301";

fetch(GITHUB_URL)
    .then(function(response) {
        return response.json();
    })
    .then(function(data) {
        // access profile image
        const profileImage = document.getElementById("profile-image");
        // assign source
        profileImage.src = data.avatar_url;
    });



function onProfileClick() {
    const profileImage = document.getElementById("profile-image");
    const hasSpinClass = profileImage.classList.contains('spin');
    // console.info( {hasSpinClass })

    if (hasSpinClass) {
        profileImage.classList.remove('spin')
    } else {
        profileImage.classList.add('spin')
    }
}