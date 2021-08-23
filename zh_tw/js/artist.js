$(function(){

  const data = [
    {
      id: '1',
      name: 'ØZI',
      intro: `
        <p>ØZI為新樂園Forbidden Paradise首席藝人，在2017年發表個人獨立製作作品《TITLE 頭銜》及《ME INSTEAD 奪愛》受到注目，同年發表作品《PARADISE ISLAND 天堂島》成為首支破百萬音樂作品並且展現了MV執導的能力，在華語樂壇中被稱呼為「核彈級新人」，同時與米奇林、剃刀蔣成立新樂園Forbidden Paradise，致力推廣台灣R&B音樂文化。</p>
        <p>2018年發行首張個人專輯《ØZI: The Album》在市場上創下佳績，並入圍了2019年第三十屆金曲獎最佳新人獎、最佳國語男歌手獎、最佳單曲製作人獎、最佳編曲人獎、最佳國語專輯獎、年度專輯獎等六項大獎，最終獲得最佳新人獎。</p>
        <p>在2020年與Transparent Arts合作，進行了海外發行計畫，與LA當地知名音樂製作人Ian Jeffery Thomas、Andrew Beckner共同製作，首先發行《LAVA!》單曲，隔年2021年正式發表海外專輯《PEDESTAL基石》，首波主打為《SLIDE》，第二波主打《LUFU》更與南韓實力派R&B歌手GSoul、美國節奏藍調歌手Arin Ray 合唱，以拓展海外市場為目標進行。</p>
      `,
      cover: 'images/artist/artist_1.png',
    },
    {
      id: '2',
      name: '宋秉勤 sunkis',
      intro: `
        <p>「sunkis 宋秉勤」這位還未有人知道的神秘男孩正在用自己的方式來詮釋R&B，在一年前以個人身分發表單曲《Lemme go》雖然未造成轟動，但已吸引圈內高手注意。金曲才女孫盛希的主動邀約發表了合作歌曲《不要讓我後悔 / Realer Love》與好友ØZI的相挺合力做出《JUST DO YOU》，溫暖的聲音在其他強烈的歌手表現下反而凸顯了個性，並未被其強勢的合作歌手蓋過個人特質，在情慾與侵略性佔多數的R&B世界中，sunkis正在使用另一種方式來表達自己的愛。</p>
        <p>同為R&B創作歌手，其創作能力完全無需它人代勞，反而也能替其他歌手寫出更具音樂性的R&B旋律，詮釋出自己獨特的風格。而sunkis在這音樂類型中剛好就是那位充滿溫暖的溫柔男子，現在他準備出來創造出另一種R&B的欣賞方式，一種溫柔的浪漫。</p>
        <p>一位剛來台灣發展的男孩甚至連中文都還有些生澀，因為如此創作出來的歌曲，讓人感受出可愛真誠的一面，這就是sunkis對世界表達的特色，從文字中即可感受到sunkis的個性，願意在歌中表達自己的害羞，與ØZI的R&B詮釋方式有完全不同的感覺。</p>
        <p>個人專輯的計畫中大部分歌曲皆由自己創作，呈現出的價值觀並不需要再拿出R&B的情色與侵略性，雖然有自信，但看見喜歡的人還是會害羞，如果被傷害還是會難過，自信在旋律，純情在文字的結合，讓今年誕生溫柔系R&B「sunkis 宋秉勤」。</p>
      `,
      cover: 'images/artist/artist_2.png',
    },
    {
      id: '3',
      name: '鶴 THE CRANE',
      intro: `
        <p>鶴 The Crane 本名林泰羽，來自台北，生於1994年，是另類R&B領域的創作新人。</p>
        <p>成長於節奏藍調盛行的千禧年、並歷經青春期在搖滾樂中的自我探索，目前落腳在Alternative R&B、Bedroom Pop等曲風之間。作品以當代Urban曲風結合七〇年代靈魂樂元素，寫下都市生活中無關緊要的雜緒。</p>
        <p>鶴過去以多種身份活躍於獨立音樂圈，他曾是電子⺠謠樂團 他者 The Other 的 合成器手，也是 HUSH、鄭宜農等人的巡迴樂手。更因其獨特的製作能力，擔任了鄭宜農《給天王星》專輯中數首歌曲的製作人，並持續參與各路音樂人的編曲。</p>
        <p>2020年八月，鶴發佈了單曲〈LIMO〉，自主完成詞曲、編曲、錄製、混音、甚至擔任MV導演，在復古而鮮明的色調下，以匿名戒酒會場景呼應歌曲內容，詼諧地諷刺當代社會，並憑藉該首單曲逐漸獲得關注。</p>
        <p>年底時更祭出第二波單曲〈I Love You More (than adore)〉，改以浪漫的口吻，描繪一位深陷愛情的主人翁，無可救藥地愛上一位難以接近的古怪女孩。歌曲中融入 Indie Pop元素，將飄逸的電吉他融入大量合成器，仿佛一場迷離而奇險的夢境旅途。</p>
        <p>鶴 The Crane 擅於創造多變的合成器聲響、堆疊繁複的和聲，並在其慵懶的嗓音下，編織出一幅獨特的世界觀。</p>
      `,
      cover: 'images/artist/artist_3.png',
    },
  ]

  const Util = {
    toGetParam:function(name, casesensitive) {
      name = name.replace(/[\[]/, "\\\[").replace(/[\]]/, "\\\]");
      let href = window.location.href;
        
      if (!casesensitive) name = name.toLowerCase();
      if (!casesensitive) href = href.toLowerCase();
        
      let regexS = "[\\?&]" + name + "=([^&#]*)";
      let regex = new RegExp(regexS);
      let results = regex.exec(href);
  
      if (results == null) {
        return "";
      } else {
        return results[1];
      }
    }
  };
  
  $.html5Loader({
    filesToLoad: 'js/resource.json',
    onBeforeLoad: function(){
      console.log('on BeforeLoad');
    },
    onComplete: function(){
      console.log('on complete');
      init();
    },
    onElementLoaded: function(obj, elm){
      //console.log(elm);
    },
    onUpdate: function(percentage){
      console.log(percentage);
    }
  });

  function init(){
    let id = Util.toGetParam('id');
    setPersonal(id);

    TweenMax.to($('#loading'), 0.5, {autoAlpha: 0});

    setSlick($('.item-group'));
  }

  // 設置slick
  function setSlick(el){
    el.slick({
      dots: true,
      infinite: true,
      dots: false,
      speed: 600,
      slidesToShow: 3,
      slidesToScroll: 1,
      centerMode: true,
      centerPadding: '0px',
      prevArrow: '<div class="arrow-left"><img class="img-fluid" src="images/global/arrow_left.png"></div>',
      nextArrow: '<div class="arrow-right"><img class="img-fluid" src="images/global/arrow_right.png"></div>',
      
      responsive: [
        {
          breakpoint: 768,
          settings: {
            slidesToShow: 1,
            slidesToScroll: 1,
            centerMode: true,
            centerPadding: '0px',
          }
        },
      ]
    });
  }

  function setPersonal(id){
    let personalData = data.filter(item => (id === item.id));
    let coverElement = `<img src="${personalData[0].cover}">`;
    let personalElement = `
      <h2>${personalData[0].name}</h2>
      <article>
        ${personalData[0].intro}
      </article>
    `;
    $('.cover').empty().append(coverElement);
    $('.personal-container').empty().append(personalElement);
  }

});