
$(document).ready(function(){
    abring.init(
        {
            "app":"ir.abring.sdk",
            "ping_time":120,
            "socketRetryInterval" : 50
        }
    );

    abring.params.player.pages.other_player_profile.setParents("other_player_profile_content");
    abring.params.player.pages.other_player_profile.show =
        function (other_player_id) {
            fillOtherPlayerInfo(other_player_id,
                function (other_player_info) {
                    $.mobile.navigate("#other_player_profile");
                },
                function (x, c, e) {
                    alert("Failed to fetch player data\n" + e);
                }
            );
        };

    abring.params.player.pages.my_profile.setParents("my_profile_content");
    abring.params.player.pages.my_profile.show =
        function () {
            fillMyPlayerInfo(true);
            abring.params.display.hidePageFunction();
            $.mobile.navigate("#my_profile");
        };

    abring.params.player.pages.player_mobile_other_way.setParents("player_mobile_other_way_content");
    abring.params.player.pages.player_mobile_other_way.show =
        function () {
            abring.params.display.hidePageFunction();
            $.mobile.navigate("#player_mobile_other_way");
        };

    abring.params.display.home.show =
        function(){
            $.mobile.navigate("#pageone");
        };


    abring.params.player.pages.player_mobile_register.setParents("player_mobile_register_content");
    abring.params.player.pages.player_mobile_register.show =
        function () {
            $.mobile.navigate("#player_mobile_register");
        };

    abring.params.player.pages.player_mobile_verify.setParents("player_mobile_verify_content");
    abring.params.player.pages.player_mobile_verify.show =
        function () {
            $.mobile.navigate("#player_mobile_verify");
        };

    abring.params.player.pages.my_profile_update.setParents("my_profile_update_content","my_profile_update_content");
    abring.params.player.pages.my_profile_update.show =
        function () {
            $.mobile.navigate("#my_profile_update");
        };

//            abring.params.player.pages.abring_chat.setParents("my_profile_update_content","my_profile_update_content");
//            abring.params.player.pages.abring_chat.show =
//                    function () {
//                        $.mobile.navigate("#my_profile_update");
//                    };



    abring.params.message.pages.unicast.setParents("message_page_content");
    abring.params.message.pages.unicast.show = function (player_info) {
        $.mobile.navigate("#message_page");
    };

    abring.params.message.pages.list.setParents("message_list_content");
    abring.params.message.pages.list.show = function () {
        $.mobile.navigate("#message_list");
    };

    abring.params.message.pages.view.setParents("message_view_content");
    abring.params.message.pages.view.show = function () {
        $.mobile.navigate("#message_view");
    };

});