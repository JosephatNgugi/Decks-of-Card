var ranks = ['ace', '2', '3', '4', '5', '6', '7', '8', '9', '10', 'jack', 'queen', 'king'  ];
var suits = ['Hearts', 'Clubs', 'Spades', 'Diamonds'];

var decks = []



            // For loop functions to loop through a deck of cards
// for (var suit = 0; suit < suits.length; suit ++){
//     for (var rank = 0; rank < ranks.length; rank++){
//         decks.push(ranks[rank] + " of " + suits[suit])
//     }
    
// }
//         console.log(decks);



        // ForEach loop function to loop through the decks of cards

 ranks.forEach(function(rank){
     suits.forEach(function(suit){
         decks.push(`${rank} of ${suit}`);
     });
 });
 console.log(decks);



