function makeFriendsList(friends) {
  let ul = document.createElement("ul");

  let htmlForUl;

  friends.forEach(element => {
    htmlForUl += "<li>" + element.firstName + " " + element.lastName + "</li>\n";
  });

  ul.insertAdjacentHTML("afterbegin", htmlForUl);

  return ul;
}
