const body=document.body;
const button=document.getElementById("button");
const text_box=document.getElementById("text_box");
const left_text = [
"Dear Tim,",
"I am writing to tell you how",
"thankful I am for your friendship.",
"I have known you for more than",
"four years, and I got through my",
"secondary school period with your company.",
"During these years, we usually",
"study, join activities,",
"and play together.",
"You are always my partner",
"in group tasks.",
"Besides, you have helped me",
"a lot when I was lost.",
"As the leader of our class,",
"you care about all of us.",
"I remember one time",
"I slept little and felt sleepy in class.",
"You messaged me that night",
"asking if I was unhappy or sick.",
"I was so surprised",
"and suddenly felt warm inside my heart,",
"because I just felt sleepy",
"but still received your care.",
"I feel so blissful",
"to have a friend like you,",
"and I will never forget",
"the friendship between us.",
]

const right_text = [
"Sincerely,",
"Your friend Jeffy",
"2025.12.25",
]

function sleep(t){
    return new Promise(resolve=>setTimeout(resolve,t));
}

async function print_text(){
    await sleep(1000);
    for(let i=0;i<left_text.length;i++){
        let s=left_text[i];
        const p=document.createElement("p");
        p.classList.add("pleft");
        p.textContent="";
        text_box.appendChild(p);
        for(let j=0;j<s.length;j++){
            await sleep(100);
            p.textContent+=s[j];
        }
    }
    for(let i=0;i<right_text.length;i++){
        let s=right_text[i];
        const p=document.createElement("p");
        p.classList.add("pright");
        p.textContent="";
        text_box.appendChild(p);
        for(let j=0;j<s.length;j++){
            await sleep(100);
            p.textContent+=s[j];
        }
    }
}

bgcs=["bgc0","bgc1","bgc2"];
now_ci=0;
function change_bgc(){
    body.classList.remove(bgcs[now_ci++]);
    if(now_ci>=bgcs.length) now_ci-=bgcs.length;
    body.classList.add(bgcs[now_ci]);
}

button.addEventListener("click",change_bgc);
body.classList.add("bgc0");
print_text();