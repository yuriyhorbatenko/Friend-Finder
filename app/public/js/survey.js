var config = {
    ".chosen-select": {},
    ".chosen-select-deselect": {
        allow_single_deselect: true
    },
    ".chosen-select-no-single": {
        disable_search_threshold: 10
    },
    ".chosen-select-no-results": {
        no_results_text: "Oops, nothing found!"
    },
    ".chosen-select-width": {
        width: "95%"
    }
};

for (var selector in config) {
    $(selector).chosen(config[selector]);
}


$("#buttonSbmt").on("click", function (event) {

    event.preventDefault();

    function validateForm() {
        var isValid = true;
        $(".form-control").each(function () {
            if ($(this).val() === "") {
                isValid = false;
            }
        });

        $(".selections").each(function () {

            if ($(this).val() === "") {
                isValid = false;
            }
        });
        return isValid;
    }


    if (validateForm()) {
        var newFriend = {
            name: $("#name").val().trim(),
            photo: $("#url").val().trim(),
            scores: [$("#q1").val(), $("#q2").val(), $("#q3").val(), $("#q4").val(), $("#q5").val(), $("#q6").val(), $("#q7").val()]
        };

        console.log(newFriend);

        $.post("/api/friends", newFriend, function (data) {

            console.log(data.name);
            console.log(data.photo);
            console.log(data.scores);

            $(".friend-name").text(data.name);
            $(".friend-img").attr("src", data.photo);
            $("#results-modal").modal("toggle");
        });
    }

    else {
        alert("Please fill out all fields before submitting!");
    }

});

