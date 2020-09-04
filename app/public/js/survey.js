
$("#buttonSbmt").on("click", function (event) {

    event.preventDefault();

    var newFriend = {
        name: $("#name").val().trim(),
        photo: $("#url").val().trim(),
        scores: [$("#q1").val(), $("#q2").val(), $("#q3").val(), $("#q4").val(), $("#q5").val(), $("#q6").val(), $("#q7").val()]
    };

    if (newFriend.photo == "" || newFriend.name == "") {
        alert("Please provide your name and a profile picture to use.");
        return false
    }

    console.log(newFriend);

    $.post("/api/friends", newFriend, function (data) {

        console.log(data.name);
        console.log(data.photo);
        console.log(data.scores);
        console.log("HELLO!!!");

        $(".friend-name").text(data.name);
        $(".friend-img").attr("src", data.photo);
        $("#results-modal").modal("toggle");

    });
});

