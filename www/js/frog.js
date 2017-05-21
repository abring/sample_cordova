var frog_start_time = 0;
var frog_size = 0;
var frog_remain = 0;
var rows = 2;
var columns = 2;

$(document).ready(function(){

    $(".start_frog").click(function () {
        init(rows,columns);

        $(".frog_table").show();
    });

    $(document).on("mousedown",".frog",function () {
        $(this).hide();
        frog_remain--;
        if(frog_remain==0){
            finish();
        }
    });

    setInterval(function () {
        if (frog_start_time==0) return;
        var frog_finish_time = (new Date().getTime())/1000;
        var score = frog_size - parseInt(frog_finish_time-frog_start_time);
        if(score>=0)
        {
            $(".frog_table .timer").html(score);
        }else{
            finish();
        }
    },1000);

    function init(row,column) {

        $(".start_frog").hide();

        frog_start_time = 0;
        frog_size = 0;
        frog_remain = 0;

        //fill frog table
        var table = '\
            <table>\
            <tr>\
            <td class="timer">\
            </td>\
            </tr>';
            for (i = 0; i < row; i++) {
                table += '<tr>';
                for (j = 0; j < column && j<4; j++) {
                    table += '<td><img class="frog" src="img/frog.png"></td>';
                }
                table += '</tr>';
            }
        table += '</table>';
        $(".frog_table").html(table);
        $(".frog .start_frog").show();

        //start timer
        frog_start_time = new Date().getTime()/1000;
        frog_size = frog_remain = $("img.frog").length;
    }
    function finish() {
        $(".frog_table").hide();
        var frog_finish_time = (new Date().getTime())/1000;
        var score = frog_size-parseInt(frog_finish_time-frog_start_time);
        if(score>0)
        {
            var signature = md5(2*score+1);
            gamehubLeaderboardSetScore("leaderboard_25",score,signature);
            rows++;columns++;
            init(rows,columns);
            $(".frog_table").html("score="+score+"<br>You win!");
        }else{
            $(".frog_table").html("You lost!");
        }


        $(".start_frog").show();

        frog_start_time = 0;
        frog_size = 0;
        frog_remain = 0;


    }
});