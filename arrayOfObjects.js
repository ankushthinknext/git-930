let users = [];

function generateFakeUsers(limit) {
  for (let i = 0; i < limit; i++) {
    let user = {};
    user["id"] = users.length;
    user["name"] = faker.name.findName();
    user["email"] = faker.internet.email();
    user["isVerified"] = faker.random.boolean();
    user["salary"] = faker.finance.amount();
    users.push(user);
  }
}

generateFakeUsers(200);

function seaching(array, keyword, searchBy) {}

seaching(users, "san", "email");

let mapped_users = users.map(u => {
  if (u.isVerified) {
    return { ...u, salary: (parseFloat(u.salary) + 10000.5).toFixed(2) };
  }
  return u;
});

function sorting(array, sortBy, type, sortOrder = 1) {
  if (type === "string") return stringsSort(array, sortBy, sortOrder);
  if (type === "number") return numbersSort(array, sortBy, sortOrder);
  return array;
}

function numbersSort(array, sortBy, sortOrder = 1) {
  return array.sort((a, b) =>
    sortOrder === 1 ? a[sortBy] - b[sortBy] : b[sortBy] - a[sortBy],
  );
}

function stringsSort(array, sortBy, sortOrder = 1) {
  return array.sort((a, b) => {
    a = a[sortBy].toUpperCase();
    b = b[sortBy].toUpperCase();
    if (a > b) return sortOrder === 1 ? 1 : -1;
    if (a < b) return sortOrder === 1 ? -1 : 1;
    return 0;
  });
}

function findById(array, id) {
  return array.find(el => el.id === id);
}
