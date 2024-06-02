//using the data structure below ,
// print a message  my total bill for items above 450 is 1700
const availableFoods = [
  { id: "qwe234dfh", name: "Burger", image: "🍔🍔", price: 234 },
  { id: "qwe2356dxh", name: "pizza", image: "🍕🍕", price: 400 },
  { id: "qwe2456yh", name: "meat", image: "🍖🍖", price: 500 },
  { id: "qwe2785yh", name: "chicken", image: "🍗🍗", price: 1200 },
];
const ourMenu = availableFoods.map(function (menu) {
  // console.log(menu)
  return menu.price;
});
filteredPrices = ourMenu.filter(function (requiredPrice) {
  return requiredPrice > 450;
});
// console.log(filteredPrices)
myBill = filteredPrices.reduce(function (previousBill, nextBill) {
  return previousBill + nextBill;
});
console.log(`my total bill for items above 450 is ${myBill}`);

// QUESTION2
const users = [
  {
      id: 1,
      name: "John",
      location: "New York",
      friends: [2, 3, 4],
      posts: [
          { content: "Great day at Central Park!", timestamp: "2024-05-10T12:00:00", likes: 15 },
          { content: "Loving the vibes in NYC!", timestamp: "2024-05-15T08:30:00", likes: 8 },
          { content: "Visited the Statue of Liberty today!", timestamp: "2024-05-05T17:45:00", likes: 20 }
      ]
  },
  {
      id: 2,
      name: "Alice",
      location: "San Francisco",
      friends: [1, 3],
      posts: [
          { content: "Hiking in the Bay Area!", timestamp: "2024-05-12T14:20:00", likes: 12 },
          { content: "Enjoying the sunny weather!", timestamp: "2024-05-14T11:10:00", likes: 6 }
      ]
  },
  {
      id: 3,
      name: "Emily",
      location: "Los Angeles",
      friends: [1, 2, 4],
      posts: [
          { content: "Beach day in LA!", timestamp: "2024-05-08T09:45:00", likes: 25 },
          { content: "Exploring Hollywood!", timestamp: "2024-05-16T16:55:00", likes: 5 }
      ]
  },
  {
      id: 4,
      name: "David",
      location: "Chicago",
      friends: [2],
      posts: [
          { content: "Deep dish pizza is the best!", timestamp: "2024-05-11T10:30:00", likes: 18 },
          { content: "Trying out a new jazz club tonight!", timestamp: "2024-05-13T20:00:00", likes: 3 }
      ]
  },
  {
      id: 5,
      name: "Sarah",
      location: "Seattle",
      friends: [3, 1],
      posts: [
          { content: "Coffee time in the Pacific Northwest!", timestamp: "2024-05-09T15:15:00", likes: 9 },
          { content: "Exploring the Olympic National Park!", timestamp: "2024-05-14T07:00:00", likes: 11 }
      ]
  }
];

const getUsers = (users) => {
  const daysAgo = 7;
  const todayDate = new Date();
  const sevenDaysAgo = new Date(todayDate);
  sevenDaysAgo.setDate(todayDate.getDate() - daysAgo);

  const activeUsers = users.filter(user =>
      user.posts.some(post => new Date(post.timestamp) >= sevenDaysAgo)
  );

  const popularContent = activeUsers.map(user => 
      user.posts.filter(post => post.likes >= 10 && new Date(post.timestamp) >= sevenDaysAgo)
  ).flat();

  const totalLikes = popularContent.reduce((sum, post) => sum + post.likes, 0);
  const averageLikesPerUser = activeUsers.length ? totalLikes / activeUsers.length : 0;

  return {
      numOfActiveUsers: activeUsers.length,
      totalNumOfpopularContent: popularContent.length,
      averageLikesPerUser
  };
};

console.log(getUsers(users));
