// For copying url of websites to share.

const shareButtons = document.querySelectorAll('.tile-share-button')
console.log(shareButtons)

async function copyText(e) {
    //prevent button going to the site
    e.preventDefault();
    const link = this.getAttribute('link');

    try {
        if (navigator.clipboard) {
            await navigator.clipboard.writeText(link);

        } else {
            const el = document.createElement('textarea');
            el.value = link;
            document.body.appendChild(el);
            el.select();
            document.execCommand('copy');
            document.body.removeChild(el);

        }
    } catch (err) {
        console.error(err);
    }
}

shareButtons.forEach(shareButton =>
    shareButton.addEventListener('click', copyText));


