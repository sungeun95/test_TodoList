const contentInput = document.querySelector('.content');
const checkBtn = document.querySelector('#check_btn');
const ul = document.querySelector('ul');

checkBtn.addEventListener('click',()=>{
    if(contentInput.value == ''){
        alert('할 일을 입력하신 뒤 확인 버튼을 클릭해주세요!');
    }else{
        let li = document.createElement('li');
        ul.style = 'display : block'; /* 입력시 보이게하기 */
        li.innerHTML = `<span>${contentInput.value}</span><button type="button" title="삭제" class="close_btn"><img src="./image/close_small.png" alt=""></button>`;
        ul.appendChild(li);
        contentInput.value = '' ;/* 입력후 초기화 */
        const span = document.querySelectorAll('span');
        for(let i of span){
            console.log(i)
            i.addEventListener('click',()=>{
            i.style.textDecoration = 'line-through';
        })
        }
        const close = document.querySelectorAll('.close_btn');
        for(let i of close){ /* x클릭시 li 없애기 */
            console.log(i);
            i.addEventListener('click',()=>{
                i.parentNode.remove();
            })
        }
    }
})