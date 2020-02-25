import users from './users.js';

// # Задание 1
console.log('Задание 1');

const getUserNames = users => users.map(user => user.name);

console.log(getUserNames(users));
// [ 'Moore Hensley', 'Sharlene Bush', 'Ross Vazquez', 'Elma Head', 'Carey Barr', 'Blackburn Dotson', 'Sheree Anthony' ]

// # Задание 2
console.log('Задание 2');

const getUsersWithEyeColor = (users, color) =>
  users.filter(user => user.eyeColor === color);

console.log(getUsersWithEyeColor(users, 'blue')); // [объект Moore Hensley, объект Sharlene Bush, объект Carey Barr]

// # Задание 3
console.log('Задание 3');

const getUsersWithGender = (users, gender) => {
  const arrObj = users.filter(user => user.gender === gender);
  return arrObj.map(user => user.name);
};

console.log(getUsersWithGender(users, 'male')); // [ 'Moore Hensley', 'Ross Vazquez', 'Carey Barr', 'Blackburn Dotson' ]

// # Задание 4
console.log('Задание 4');

const getInactiveUsers = users => users.filter(user => !user.isActive);

console.log(getInactiveUsers(users)); // [объект Moore Hensley, объект Ross Vazquez, объект Blackburn Dotson]

// # Задание 5
console.log('Задание 5');

const getUserWithEmail = (users, email) => {
  const emailName = users.filter(user => user.email === email);
  return emailName;
};

console.log(getUserWithEmail(users, 'shereeanthony@kog.com')); // {объект пользователя Sheree Anthony}
console.log(getUserWithEmail(users, 'elmahead@omatom.com')); // {объект пользователя Elma Head}

// # Задание 6
console.log('Задание 6');

const getUsersWithAge = (users, min, max) => {
  const arrAge = users.filter(user => user.age > min && user.age < max);
  return arrAge;
};

console.log(getUsersWithAge(users, 20, 30)); // [объект Ross Vazquez, объект Elma Head, объект Carey Barr]

console.log(getUsersWithAge(users, 30, 40));
// [объект Moore Hensley, объект Sharlene Bush, объект Blackburn Dotson, объект Sheree Anthony]

// # Задание 7
console.log('Задание 7');

const calculateTotalBalance = users => {
  const allBalance = users.reduce((acc, user) => acc + user.balance, 0);
  return allBalance;
};

console.log(calculateTotalBalance(users)); // 20916

// # Задание 8
console.log('Задание 8');

const getUsersWithFriend = (users, friendName) => {
  const result = users.filter(user => {
    if (user.friends.includes(friendName)) {
      return true;
    }
    return false;
  });
  const arrNames = result.map(user => user.name);
  return arrNames;
};

console.log(getUsersWithFriend(users, 'Briana Decker')); // [ 'Sharlene Bush', 'Sheree Anthony' ]
console.log(getUsersWithFriend(users, 'Goldie Gentry')); // [ 'Elma Head', 'Sheree Anthony' ]

// # Задание 9
console.log('Задание 9');

const getNamesSortedByFriendsCount = users => {
  const friendsStats = users.map(user => ({
    name: user.name,
    friendsCount: user.friends.length,
  }));
  const arrSort = friendsStats.sort(
    (prev, next) => prev.friendsCount - next.friendsCount,
  );
  const result = arrSort.map(user => user.name);
  return result;
};

console.log(getNamesSortedByFriendsCount(users));
// [ 'Moore Hensley', 'Sharlene Bush', 'Elma Head', 'Carey Barr', 'Blackburn Dotson', 'Sheree Anthony', 'Ross Vazquez' ]

// # Задание 10
console.log('Задание 10');

const getSortedUniqueSkills = users => {
  const allSkills = [];
  const result = [];
  users.forEach(user => allSkills.push(...user.skills));
  allSkills.forEach(user => {
    if (result.includes(user)) {
      return false;
    }
    result.push(user);
  });
  return result.sort();
};

console.log(getSortedUniqueSkills(users));
// [ 'adipisicing', 'amet', 'anim', 'commodo', 'culpa', 'elit', 'ex', 'ipsum', 'irure', 'laborum', 'lorem', 'mollit', 'non', 'nostrud', 'nulla', 'proident', 'tempor', 'velit', 'veniam' ]
