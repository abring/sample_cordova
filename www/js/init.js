
$(document).ready(function(){
    abring.params.player.pages.other_player_profile.parent_id = "other_player_profile_content";
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

    abring.params.player.pages.my_profile.parent_id = "my_profile_content";
    abring.params.player.pages.my_profile.show =
        function () {
            fillMyPlayerInfo(true);
            abring.params.display.hidePageFunction();
            $.mobile.navigate("#my_profile");
        };

    abring.params.player.pages.player_mobile_other_way.parent_id = "player_mobile_other_way_content";
    abring.params.player.pages.player_mobile_other_way.show =
        function () {
            abring.params.display.hidePageFunction();
            $.mobile.navigate("#player_mobile_other_way");
        };

    abring.params.display.home.show =
        function(){
            $.mobile.navigate("#pageone");
        };


    abring.params.player.pages.player_mobile_register.parent_id = "player_mobile_register_content";
    abring.params.player.pages.player_mobile_register.show =
        function () {
            $.mobile.navigate("#player_mobile_register");
        };

    abring.params.player.pages.player_mobile_verify.parent_id  = "player_mobile_verify_content";
    abring.params.player.pages.player_mobile_verify.show =
        function () {
            $.mobile.navigate("#player_mobile_verify");
        };

    abring.params.player.pages.my_profile_update.parent_id = "my_profile_update_content","my_profile_update_content";
    abring.params.player.pages.my_profile_update.show =
        function () {
            $.mobile.navigate("#my_profile_update");
        };

//            abring.params.player.pages.abring_chat.setParents("my_profile_update_content","my_profile_update_content");
//            abring.params.player.pages.abring_chat.show =
//                    function () {
//                        $.mobile.navigate("#my_profile_update");
//                    };



    abring.params.message.pages.unicast.parent_id = "message_page_content";
    abring.params.message.pages.unicast.show = function (player_info) {
        $.mobile.navigate("#message_page");
    };

    abring.params.message.pages.list.parent_id = "message_list_content";
    abring.params.message.pages.list.show = function () {
        $.mobile.navigate("#message_list");
    };

    abring.params.message.pages.view.parent_id = "message_view_content";
    abring.params.message.pages.view.show = function () {
        $.mobile.navigate("#message_view");
    };

    abring.params.app = "ir.abring.sdk";
    abring.params.ping_time = 120;
    abring.params.socketRetryInterval = 50;

    abring.init();

});