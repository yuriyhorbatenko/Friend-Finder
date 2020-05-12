
$(".btnsbmt").on("click", function (event) {

    var newFriend = {
        name: $("#name").val().trim(),
        photo: $("#url").val().trim(),
        scores: [$("#q1").val(), $("#q2").val(), $("#q3").val(), $("#q4").val(), $("#q5").val(), $("#q6").val(), $("#q7").val()]
    };

    console.log(newFriend);

    $.post("/api/friends", newFriend, function (data) {
        console.log("survey.html", data);
        console.log(data.name);
        console.log(data.photo);
        $(".friend-name").text(data.name);
        $(".friend-img").attr("src", data.photo);
        $(".modal").modal("toggle");
        $("#name").val("");
        $("#url").val("");
        $(".selections").val("");
    });

});