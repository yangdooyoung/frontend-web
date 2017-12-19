var newnote = document.querySelector(".btn-newnote");

newnote.addEventListener('click', clickedNewnote);
    function clickedNewnote(e) {
    memo.value = '';
}
