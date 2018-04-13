import axios from 'axios';
export const loadData = ({commit})=>{
  axios({
    method: "get",
    baseURL:"https://vuecli-e7d72.firebaseio.com/",
    url: "data.json"
  }).then((res)=>{
    console.log(res.data);

    return res.data;

  }).then(data=>{
      if(data){
        const {stocks,funds,stockPortfolio} = data;
        const portfolio = {
          stocks:stockPortfolio,
          funds
        };
        commit('SET_STOCKS',stocks);
        commit('SET_PORTFOLIO',portfolio);
      }else {

      }
  });
};




