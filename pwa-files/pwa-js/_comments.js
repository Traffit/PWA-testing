const reviews = document.querySelector(".reviews__container");

const reviews_data = [
  {
    img: "https://ui-avatars.com/api/?background=random&name=Gabriel Toso",
    name: "Gabriel Toso",
    comment:
    "💥 Wow, Fowl Play Gold è incredibile! Non pensavo che avrei trovato così tanta gioia in un'app di gioco. Il bonus di benvenuto di 200 euro è stato un regalo fantastico e i giochi sono davvero coinvolgenti. Grazie mille!",
  },
  {
    img: "https://ui-avatars.com/api/?background=random&name=Marietta Scaturro",
    name: "Marietta Scaturro",
    comment:
      "Grazie a Fowl Play Gold ho trovato un modo divertente per trascorrere il mio tempo libero! L'app è ben progettata e i premi sono davvero allettanti!!!",
  },
  {
    img: "https://ui-avatars.com/api/?background=random&name=Antonia Cardile",
    name: "Antonia Cardile",
    comment: "💰💰 Fowl Play Gold ha davvero cambiato il mio modo di vedere i giochi d'azzardo online! L'app è sicura, divertente e i premi sono reali. Grazie per offrire un'esperienza così fantastica!",
  },
  {
    img: "https://ui-avatars.com/api/?background=random&name=Baldassare Garofano",
    name: "Baldassare Garofano",
    comment: "🎊 Fowl Play Gold è puro divertimento! Ogni volta che apro l'app, so che mi aspetta un'esperienza incredibile e premi da sogno. Grazie per aggiungere così tanta gioia alla mia giornata! 🤩🎁",
  },
  {
    img: "https://ui-avatars.com/api/?background=random&name=Gilberto Biviano",
    name: "Gilberto Biviano",
    comment: "Non credevo ai miei occhi quando ho scoperto Fowl Play Gold! È come essere catapultati in un mondo di dolcezza e fortuna. Grazie per tanta emozione!))",
  },
  {
    img: "https://ui-avatars.com/api/?background=random&name=Giuditta Zanoni",
    name: "Giuditta Zanoni",
    comment:
      "Fowl Play Gold è la mia nuova ossessione! L'app è facile da usare e i giochi sono così divertenti. Il bonus di benvenuto è stato un grande incentivo per iniziare e non vedo l'ora di vincere di più!🎰🎰 🎰",
  },
  // {
  //   img: "media/photos/comments/comment7.png",
  //   name: "Michael Schultz",
  //   comment:
  //     "Thanks to the wide selection of games and a variety of bonuses, MR Beast Casino always remains at the top of my preferences.",
  // },
  // {
  //   img: "media/photos/comments/comment8.png",
  //   name: "Laura Hoffmann",
  //   comment: "Simple interface and lots of ways to win - that's what makes MR Beast Casino so captivating for me.",
  // },
  // {
  //   img: "media/photos/comments/comment9.png",
  //   name: "Stefan Richter",
  //   comment: "I love playing at MR Beast Casino! This casino always surprises with new offers and incentives.",
  // },
  // {
  //   img: "media/photos/comments/comment10.png",
  //   name: "Andrea Lehmann",
  //   comment: "MR Beast Casino is my first stop for quality and exciting entertainment. A great casino!",
  // },
];

function shuffle(array) {
  let currentIndex = array.length,
    randomIndex;

  // While there remain elements to shuffle...
  while (currentIndex !== 0) {
    // Pick a remaining element...
    randomIndex = Math.floor(Math.random() * currentIndex);
    currentIndex--;

    // And swap it with the current element.
    [array[currentIndex], array[randomIndex]] = [array[randomIndex], array[currentIndex]];
  }

  return array;
}

// Shuffle the reviews_data array
const shuffledReviews = shuffle(reviews_data);

// Take the first three reviews for display
shuffledReviews.slice(0, 5).forEach((review) => getReview(review));

function getReview(data) {
  // Your existing getReview function remains the same
  const review_template = `
  <div class="review">
          <div class="review__top c-black">
            <div class="review__img">
              <img src="${data.img}" alt="${data.name} comment" />
            </div>
            <div class="review__name">
              <h3>${data.name}</h3>
            </div>
            <div class="review__more-box">
              <a class="review__more" aria-label="More reviews">
                <i class="_icon-more_vert_black"></i>
              </a>
              <div class="review__more-open">
                <!-- <a class="watch-history__btn">Посмотреть историю изменений</a> -->
                <a class="unacceptable__btn" aria-label="Flag as inappropriate">Flag as inappropriate</a>
                <a class="spam__btn" aria-label="Flag as spam">Flag as spam</a>
              </div>
            </div>
          </div>
          <div class="review__rating">
            <div class="Stars" style="--rating: 5.0;" aria-label="Rating of this product is 5.0 out of 5."></div>
            <span class="review-date c-text">26.02.24</span>
          </div>
          <div class="review__text webkit c-text">
            <p>
             ${data.comment}
            </p>
          </div>
          <div class="review__qna">
            <span class="c-gray2">Was this review helpful?</span>
            <div class="review__true-false c-black">
              <a class="btn-true" aria-label="SÌ">SÌ</a>
              <a class="btn-false" aria-label="No">No</a>
            </div>
          </div>
        </div>
  `;
  return (reviews.innerHTML += review_template);
}
