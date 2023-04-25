axios
 .get("https://api.hnpwa.com/v0/newest/1.json")
 .then(function (response){
    createList(response)
 })
 .catch(function (error){
    console.log(error);
 });


//  function for create list
function createList(response){
    response.data.forEach(function(ListItem) {

        // Create List Item
        var li = document.createElement("li");
        li.setAttribute("class", "list-group-item");
        // li.innerHTML = ListItem.title;

        // Create Badge
        var span = document.createElement("span");
        span.setAttribute("class", "badge text-bg-primary");
        span.innerHTML = ListItem.points;

        // Anchor tag
        var anchor = document.createElement("a");
        anchor.setAttribute("href", ListItem.url);
        anchor.innerHTML = ListItem.title;
        li.prepend(span);

        li.appendChild(anchor);

        document.querySelector(".list-group").appendChild(li);
    });
}