export const initialState = {
  cardInfo: [
    {
      title: 'Madara Uchiha',
      content:
        'Madara Uchiha (うちはマダラ, Uchiha Madara) fue un legendario shinobi,co-fundador de Konoha y líder del Clan Uchiha durante su tiempo. Además, fue la pasada Reencarnación de Indra Ōtsutsuki.',
    },
  ],
  pubsInfo: [
    {
      username: 'Sasuke Uchiha',
      content:
        'Sasuke Uchiha (うちはサスケ, Uchiha Sasuke) es el deuteragonista de la serie y uno de los supervivientes del Clan Uchiha.',
    },
    {
      username: 'Sasuke Uchiha',
      content:
        'Sasuke Uchiha (うちはサスケ, Uchiha Sasuke) es el deuteragonista de la serie y uno de los supervivientes del Clan Uchiha.',
    },
  ],
  modalData: {
    display: false,
    cardInfo: {
      title: 'test',
      content: 'test...',
    },
  },

  snackbarData: {
    show: false,
    label: '',
    type: '',
  },
  userInfo: {
    firstName: '',
    lastName: '',
    username: 'not logged',
    token: '',
    admin: false,
  },
  posts: {
    generalPosts: [],
    profilePosts: [],
    showPostForm: false,
    postSectionVisible: false,
  },
};
