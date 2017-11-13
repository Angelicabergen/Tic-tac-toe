$(document).ready(function () {
    $("#reset").hide();
    $("#tally").hide();
    $("#newGame").hide();
    $("#start").prop("disabled", true);
    $("#zero, #one, #two, #three, #four, #five, #six, #seven, #eight").html("").prop("disabled", true);

    var arr = [null, null, null, null, null, null, null, null, null];
    var boardArr = ["#zero", "#one", "#two", "#three", "#four", "#five", "#six", "#seven", "#eight"];
    var numberArr = ["zero", "one", "two", "three", "four", "five", "six", "seven", "eight"]
    var rndm;
    var i;
    var set;
    var playerWinCount = 0;
    var botWinCount = 0;
    var drawCount = 0;
    var computerLetter; var playerLetter;

    $("#tally").html("Player: " + playerWinCount + " Computer: " + botWinCount + " Draw: " + drawCount);

    function firstMove() {
        set = [0, 2, 6, 8]
        rndm = Math.floor(Math.random() * set.length) % set.length;
        i = set[rndm];
        arr.splice(i, 1, 1);
        $(boardArr[i]).html(computerLetter).prop("disabled", true);
    }
    $("#playerX").click(function () {
        computerLetter = "O";
        playerLetter = "X";
        $("#start").prop("disabled", false);
    })
    $("#playerO").click(function () {
        computerLetter = "X";
        playerLetter = "O";
        $("#start").prop("disabled", false);
    })

    $("#start").click(function () {
        $("#start").hide();
        $("#playerQuestion").hide();
        $("#reset").show();
        $("#tally").show();
        $("#zero, #one, #two, #three, #four, #five, #six, #seven, #eight").html("").prop("disabled", false);
        firstMove();
    })
    $("#reset").click(function () {
        $("#start").show().prop("disabled", true);
        $("#reset").hide();
        $("#newGame").hide();
        $("#playerQuestion").show();
        playerWinCount = 0;
        botWinCount = 0;
        drawCount = 0;
        $("#tally").html("Player: " + playerWinCount + " Computer: " + botWinCount + " Draw: " + drawCount);
        arr = [null, null, null, null, null, null, null, null, null];
        $("#zero, #one, #two, #three, #four, #five, #six, #seven, #eight").html("").prop("disabled", false);
    })
    $("#newGame").click(function () {
        arr = [null, null, null, null, null, null, null, null, null];
        $("#zero, #one, #two, #three, #four, #five, #six, #seven, #eight").html("").prop("disabled", false);
        $("#newGame").hide();
        firstMove();
    })
    function computerTurn() {
        switch (true) {
            case arr[0] === null:
                arr.splice(0, 1, 1);
                $(boardArr[0]).html(computerLetter).prop("disabled", true);
                break;
            case arr[1] === null:
                arr.splice(1, 1, 1);
                $(boardArr[1]).html(computerLetter).prop("disabled", true);
                break;
            case arr[2] === null:
                arr.splice(2, 1, 1);
                $(boardArr[2]).html(computerLetter).prop("disabled", true);
                break;
            case arr[3] === null:
                arr.splice(3, 1, 1);
                $(boardArr[3]).html(computerLetter).prop("disabled", true);
                break;
            case arr[4] === null:
                arr.splice(4, 1, 1);
                $(boardArr[4]).html(computerLetter).prop("disabled", true);
                break;
            case arr[5] === null:
                arr.splice(5, 1, 1);
                $(boardArr[5]).html(computerLetter).prop("disabled", true);
                break;
            case arr[6] === null:
                arr.splice(6, 1, 1);
                $(boardArr[6]).html(computerLetter).prop("disabled", true);
                break;
            case arr[7] === null:
                arr.splice(7, 1, 1);
                $(boardArr[7]).html(computerLetter).prop("disabled", true);
                break;
            case arr[8] === null:
                arr.splice(8, 1, 1);
                $(boardArr[8]).html(computerLetter).prop("disabled", true);
                break;
        }
    };
    function checkWin() {
        var computerWon = false;
        var playerWon = false;
        if (arr[0] + arr[1] + arr[2] === 3 || arr[3] + arr[4] + arr[5] === 3 || arr[6] + arr[7] + arr[8] === 3 || arr[0] + arr[3] + arr[6] === 3 || arr[1] + arr[4] + arr[7] === 3 || arr[2] + arr[5] + arr[8] === 3 || arr[0] + arr[4] + arr[8] === 3 || arr[2] + arr[4] + arr[6] === 3) {
            botWinCount++;
            $("#newGame").show();
            $("#tally").html("Player: " + playerWinCount + " Computer: " + botWinCount + " Draw: " + drawCount);
            $("#zero, #one, #two, #three, #four, #five, #six, #seven, #eight").prop("disabled", true);
        }
        if (arr[0] + arr[1] + arr[2] === 15 || arr[3] + arr[4] + arr[5] === 15 || arr[6] + arr[7] + arr[8] === 15 || arr[0] + arr[3] + arr[6] === 15 || arr[1] + arr[4] + arr[7] === 15 || arr[2] + arr[5] + arr[8] === 15 || arr[0] + arr[4] + arr[8] === 15 || arr[2] + arr[4] + arr[6] === 15) {
            playerWinCount++;
            $("#newGame").show();
            $("#tally").html("Player: " + playerWinCount + " Computer: " + botWinCount + " Draw: " + drawCount);
            $("#zero, #one, #two, #three, #four, #five, #six, #seven, #eight").prop("disabled", true);
        }
    }

    $("#zero, #one, #two, #three, #four, #five, #six, #seven, #eight").click(function () {
        $(this).html(playerLetter).prop("disabled", true);
        i = numberArr.indexOf($(this).attr("id"));
        arr.splice(i, 1, 5);
        checkWin();
        computerTurn();

    })
})