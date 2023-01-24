$(document).ready(function(){
    $("form").submit(function(event) {
        var name = $("#name").val();
        var email = $("#email").val();
        var team = $("#team").val();

        if (name == "") {
            alert("Name field is required");
            event.preventDefault();
        }
        if (email == "") {
            alert("Email field is required");
            event.preventDefault();
        }
        if (team == "") {
            alert("Favorite team field is required");
            event.preventDefault();
        }
    });

    $("form").attr("action","https://www.w3schools.com/action_page.php");


    var btn = document.getElementById("more-info-btn");

    btn.addEventListener("click", function() {
        var topPremierLeagueTeams = document.querySelectorAll("ol li");

        for (var i = 0; i < topPremierLeagueTeams.length; i++) {
            var team = topPremierLeagueTeams[i].textContent;
            var teamInfo = document.createElement("span");
            if (team == "Manchester City") {
                teamInfo.textContent = " - Manchester City Football Club is a football club based in Manchester, England. Founded in 1880, they have won the Premier League, FA Cup, and League Cup multiple times.";
            } else if (team == "Liverpool") {
                teamInfo.textContent = " - Liverpool Football Club is a football club based in Liverpool, England. Founded in 1892, they have won the Premier League, FA Cup, and League Cup multiple times.";
            } else if (team == "Chelsea") {
                teamInfo.textContent = " - Chelsea Football Club is a football club based in London, England. Founded in 1905, they have won the Premier League, FA Cup, and League Cup multiple times.";
            }
            topPremierLeagueTeams[i].appendChild(teamInfo);
        }

        btn.disabled = true;
    });




    $("#show-scores").click(function() {
        $("td:contains('Scores Hidden')").text("3-1");
        $(this).css("background-color", "red");
    });
});
