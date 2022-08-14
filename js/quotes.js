const quotes = [
    {
      quote: "The wand chooses the wizard.",
      author: "Garrick Ollivander",
    },
    {
      quote: "Troll — in the dungeons — thought you ought to know.",
      author: "Professor Quirrell",
    },
    {
      quote: "Wit beyond measure is man’s greatest treasure.",
      author: "Luna Lovegood",
    },
  ];
  
  const quote = document.querySelector("#quote span:first-child");
  const author = document.querySelector("#quote span:last-child");
  const todaysQuote = quotes[Math.floor(Math.random() * quotes.length)];
  
  quote.innerText = todaysQuote.quote;
  author.innerText = todaysQuote.author;