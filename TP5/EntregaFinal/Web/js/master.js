$('.carousel').carousel();

let cb = new Codebird;

$(document).ready(function() {
  cb.setConsumerKey("tdBPNs1qFs95m3DFOfccAOk23", "MbzrYohbdxEgtrAXKpEafhuIiAVL9bMjAidJ1nIhspypSi7QTs");
  cb.setToken("925789691177308160-KGNn0GHOYx9gtl2VamRo4AZ8DyDHSUS", "DZO5VVDfaDkbvJIrZUBmm8lqD904oF9EF74h5dQTT6EjP");
});

$(".small-nav").hide();
$(".carousel").hide();
$(".grid").hide();


$("#tweet").click(function(event) {
  event.preventDefault();
  $(".index").hide();
  $(".small-nav").show();
  $(".carousel").show();

  let params = {
    q: $("#tweet-search").val(),
    count: 30
  };

  cb.__call(
    "search_tweets",
    params,
    function (reply) {
      var photosArray = [];

      for (var i = 0; i < reply.statuses.length; i++) {
        let tweet = reply.statuses[i];
        if(tweet.extended_entities && tweet.extended_entities.media[0].type == "photo") {
          console.log(tweet);
          let urlImg = tweet.extended_entities.media[0].media_url_https;
          if(!photosArray.includes(tweet.extended_entities.media[0].media_url_https)){
            if(tweet.extended_entities.media.length > 0){
              console.log("entro al 2do if");
            photosArray.push(urlImg);
            }
            photosArray.push(urlImg);
            $("#lista-img").append('<li class="col-md-6"><img src="'+urlImg+'" class="img-tweet" width="300" height="300" alt=""></li>');
          }
        }
      }
    },
  );
});

$('.fa-picture-o').click(function(event){
  $(".grid").hide();
  $('carousel').show();
})

$('.fa-th').click(function(event){
  $(".carousel").hide();
  $('.grid').show();
})
