console.log("whatup");
const app = new Vue({
  el: "#app",
  data: {
    bookData:{},
    filteredData:{},
    searchTerm:""
  },
  created: function() {
    this.getData();
  },
  methods:{
    getData: function() {
      fetch('https://api.myjson.com/bins/17osno', {
          method: "GET"
        })
        .then(function(response) {
          return response.json();
        })
        .then(function(json) {
          app.bookData = json.books;
          app.filteredData = app.bookData;
        })
        .catch(function(error) {
          console.log(error);
        })
    },
    filter: function() {
      let searchTerm = app.searchTerm;
      let re = new RegExp(searchTerm,"i");
      let array = [];
      for(let i = 0; i < app.bookData.length; i++) {
        if(re.test(app.bookData[i].title) || re.test(app.bookData[i].description)){
          array.push(app.bookData[i]);
        }
      }
      app.filteredData = array;
    }
  }
})
