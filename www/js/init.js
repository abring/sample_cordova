
$(document).ready(function(){
    abring.player.pages.other_player_profile.parent_id = "other_player_profile_content";
    abring.player.pages.other_player_profile.show =
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

    abring.player.pages.my_profile.parent_id = "my_profile_content";
    abring.player.pages.my_profile.show =
        function () {
            abring.display.hidePageFunction();
            $.mobile.navigate("#my_profile");
        };

    abring.player.pages.player_mobile_other_way.parent_id = "player_mobile_other_way_content";
    abring.player.pages.player_mobile_other_way.show =
        function () {
            abring.display.hidePageFunction();
            $.mobile.navigate("#player_mobile_other_way");
        };

    abring.display.home.show =
        function(){
            $.mobile.navigate("#pageone");
        };


    abring.player.pages.player_mobile_register.parent_id = "player_mobile_register_content";
    abring.player.pages.player_mobile_register.show =
        function () {
            $.mobile.navigate("#player_mobile_register");
        };

    abring.player.pages.player_mobile_verify.parent_id  = "player_mobile_verify_content";
    abring.player.pages.player_mobile_verify.show =
        function () {
            $.mobile.navigate("#player_mobile_verify");
        };

    abring.player.pages.my_profile_update.parent_id = "my_profile_update_content";
    abring.player.pages.my_profile_update.theme_parent_id = "my_profile_update_content";
    abring.player.pages.my_profile_update.show =
        function () {
            $.mobile.navigate("#my_profile_update");
        };

//            abring.player.pages.abring_chat.setParents("my_profile_update_content","my_profile_update_content");
//            abring.player.pages.abring_chat.show =
//                    function () {
//                        $.mobile.navigate("#my_profile_update");
//                    };



    abring.message.pages.unicast.parent_id = "message_page_content";
    abring.message.pages.unicast.show = function (player_info) {
        $.mobile.navigate("#message_page");
    };

    abring.message.pages.list.parent_id = "message_list_content";
    abring.message.pages.list.show = function () {
        $.mobile.navigate("#message_list");
    };

    abring.message.pages.view.parent_id = "message_view_content";
    abring.message.pages.view.show = function () {
        $.mobile.navigate("#message_view");
    };

    abring.params.app = "ir.abring.sdk";
    abring.params.ping_time = 120;
    abring.params.socketRetryInterval = 50;

    abring.init();

});