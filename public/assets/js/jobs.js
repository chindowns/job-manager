$(function () {

    $.ajax(`/api/jobs/`+ globalUserZip, {
        type: "GET"
    }).then(function (resp) {
        // console.log(resp)
        $("#github-jobs").append(resp)
        // $(document).html(resp)
    })



    $(document).on("click", ".link-to-ext", function () {


        // event.preventDefault();
        var id = $(this).data("jobid");
        var title = $(`#title-${id}`).text();
        var desc = $(`#desc-${id}`).text();

        var newApp = {
            title: title,
            type: "",
            description: "desc",
            industry: "None",
            zipCode: "94114",
            salaryRange: "0",
            rating: 0,
            dataApplied: Date.now(),
            UserId: globalUserID
        }

        $.ajax("/api/application", {
            type: "POST",
            data: newApp,
        }).then(function (res) {
            console.log(res)

        })

    })

})