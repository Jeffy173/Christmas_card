function get_card() {
    fetch('/api/get_card/')
        .then(response => {
            if (!response.ok) console.log("error");
            return response.text();
        })
        .then(new_html=>document.documentElement.innerHTML=new_html)
        .catch(error=>console.error('Error:', error));
}

const get_card_button=document.getElementById("get_card_button");
get_card_button.addEventListener("click",get_card);