const body=document.body;
const button=document.getElementById("button");
const text_box=document.getElementById("text_box");
const left_text=[
"尊敬的[同學/老師]你好，",
"感謝你的合作與支持。",
"祝你在這個",
"溫馨的節日裡，好好放鬆，",
"與家人共度美好時光。",
"祝你聖誕快樂，",
"新的一年順順利利！",
]

const right_text=[
"Jeffy",
"敬上",
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