let ADDPOST = "ADD-POST";
let UPDATEONCHANGEPOST = "UPDATE-ON-CHANGE-POST";
let initialState = { 
    newsData : [
      {day : "Monday" , id : 1 , news : " В Кабуле в храме сикхов прогремел взрыв. Об этом в субботу, 18 июня, сообщило агентство Reuters." , newsPhoto : "https://cdn.iz.ru/sites/default/files/styles/900x506/public/news-2022-06/20200909_gaf_x99_023.jpeg.jpg?itok=oTNcX_i-"  } ,
      {day : "Tuesday" , id : 2 , news : " Армия обороны Израиля атаковала цели радикалов в секторе Газа после ракетного обстрела израильской территории, сообщила в субботу, 18 июня пресс-служба ведомства. " , newsPhoto :   "https://cdn.iz.ru/sites/default/files/styles/900x506/public/news-2022-06/TASS_45921741.jpg?itok=wjw1WpZa "} ,
      {day : "Wednesday" , id : 3, news : "На нефтехимическом предприятии по производству этиленгликоля в китайском Шанхае, в субботу, 18 июня, произошел мощный взрыв, а затем начался пожар." , newsPhoto : "https://cdn.iz.ru/sites/default/files/styles/900x506/public/news-2022-06/4yezrhd.jpg?itok=oOiPMO03"  } ,
      {day : "Thursday" , id : 4 , news : "Премьер-министр Великобритании Борис Джонсон в ходе визита в Киев предложил президенту Украины Владимиру Зеленскому учебную программу для украинских военнослужащих, сообщила в пятницу, 17 июня, канцелярия главы британского правительства." , newsPhoto : "https://cdn.iz.ru/sites/default/files/styles/900x506/public/news-2022-06/20220617_int_z03_055.jpg?itok=ioYJF5nb"  } ,
      {day : "Friday" , id : 5 , news : "МОСКВА, 18 июн — РИА Новости. Сделанное на Петербургском экономическом форуме заявление президента России Владимира Путина о завершении эпохи 'однополярного мира' вызвало одобрение у читателей китайской газеты 'Гуаньча.' " , newsPhoto :   "https://cdnn21.img.ria.ru/images/07e6/06/11/1796205998_0:0:3132:1763_640x0_80_0_0_db5a287b3a1d9d5907d25d6ece24a85b.jpg.webp"  },
      {day : "Saturday" , id : 6 , news : "«Бешеный пес пустыни»Террор, шатры и личная женская гвардия. Как жил и за что умер Муаммар Каддафи?" , newsPhoto : "https://icdn.lenta.ru/images/2022/06/10/17/20220610175410386/owl_article_280_e3c57aaf158d1df21cc726f3bf93de08.jpg"  },
      {day : "Sunday" , id : 7 , news : "Биткоин, нефть и атомная бомба. Иран уже 40 лет живет под санкциями. Почему они не остановили иранскую ядерную программу?" , newsPhoto : "https://icdn.lenta.ru/images/2022/05/19/17/20220519174345493/owl_article_280_3f9f27b4791551239adfa3e6604f9336.jpg" },
    ]
};



const newsReducer = (state = initialState , action) => {
  switch(action.type) {

  
  case ADDPOST : 
    let newPost = {
      id: 6 , 
      message: state.newPostChange , 
      likeCount: 12000
    }; 
    return { 
      ...state , 
      messagesData : [...state.messagesData , newPost] , 
      newPostChange : ""
      
    };

  case UPDATEONCHANGEPOST : 
    return {...state , 
      newPostChange : action.newText
    };

  default : 
      return state ;
}
  

}

export default newsReducer;