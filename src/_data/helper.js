export default function () {

    function GetLinkActiveState(itemUrl, pageUrl) {
        let response = '';

        if (itemUrl === pageUrl) {
            response = ' aria-current="page"';
        }
        console.log(itemUrl);
        if (itemUrl > 1 && pageUrl.indexOf(itemUrl) === 0) {
            response += ' data-state="active"';
        }

        return response;
    }
}