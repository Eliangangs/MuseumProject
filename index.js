let content = document.getElementsByClassName('content');
let content1 = document.getElementsByClassName('content1');
let input_text = document.getElementsByClassName('input-text');
let text_area = document.getElementById('text_area');
let res_href = document.getElementById('btn_href');
let text = 'Ну го) ';
let user = {};

let clickRadio = (value, name) => {
    user.name = input_text[0].value;
    user.age = input_text[1].value;
    if(name == 'sex'){
        user.sex = value;
    } else if( name == 'gay'){
        user.gay = value;
    } else {
        user.ip = value;
    }
}

let startVirus = () => {    
    if (
      input_text[0].value == '' ||
      input_text[1].value == '' ||
      user.sex == undefined ||
      user.gay == undefined ||
      user.ip == undefined
    ) {
      alert('Будь ласочка... ЗАПОВНИ ПОЛЯ');
    } else {
      alert(`Взлом пройшов успішно ${user.sex}...`);
      alert(`Оййййй`);
      content1[0].style = 'display: block;';
      content[0].style = 'display: none;';
      text +=
        `Не знаю наскільки твоє ім'я "${user.name}" правдиве, але почнемо) `;
      switch (user.sex) {
        case 'woman':
          text +=
            'Твоя чарівність притягне до тебе важливу людину, яка допоможе досягти мети. Прислухайся до знаків долі — вони поряд із тобою, зваблюй далі тупих men.💋💋💋 <br><br>';
          break;
        case 'men':
          text += `У твоєму житті з'явиться нова можливість, яка змінить твій звичний ритм, будь мужиком далі. Довіряй інтуїції, навіть якщо рішення здаватиметься ризикованим ти ж мужик. <br><br>`;
          break;
        case 'idk':
          text +=
            'Ти стоїш на порозі відкриття ЛГБТ клубу, яке подарує новий погляд на життя. Все стане на свої місця, якщо відпустиш зайві сумніви хочаби в тому, що в тебе в штанях(судячи з орієнтації). <br><br>';
          break;
      }
      switch (user.gay) {
        case 'yes':
          text +=
            'Судячи з вашої відповіді, вас заставляли прибирати в хаті, що вказує на крах психіки. Зверніться до фахівців терміново, звоніть => 4441114402939217 <br><br>';
          break;
        case 'no':
          text +=
            'Ви надзвичайна людина. Вас не зупинили труднощі і маєте те що є зараз. Це через те що ви не прибирали. <br><br>';
          break;
      }
      switch (user.ip){
        case 'yes':
          text +=
            'Знову наголошуємо, ваша ip адреса не була зламана. Щасти! <br><br>';
          break;
      }
      text_area.innerHTML = text;
    } 
}