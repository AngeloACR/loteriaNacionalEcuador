<?php
/* Template Name:illescasBlog */

?>
<h1 class="statusTitle">CARGA DE BOLETINES Y BOLETOS</h1>

<div class="uploaderBox">

</div>

?
<style>
    .statusTitle {
        text-align: center;
    }

    .cashCont {
        display: flex;
        flex-direction: row;
        justify-content: center;
        align-items: center;
        margin-bottom: 0 !important;
    }

    .bigBox {
        border-width: 1px;
        border-style: solid;
        border-color: grey;
    }

    .cashElem {
        display: flex;
        width: 18%;
        margin-right: 10px;
        margin-left: 10px;
        height: 50px;
        align-items: center;
    }

    .cashElem p {
        margin: 0;
        padding: 0;
    }

    .cashElem select {
        margin: 0;
        padding: 0;
    }

    .cashElem .submit {
        margin: 0;
        padding: 0;
    }

    .cashElem button {
        cursor: pointer;
    }

    ul.usersList {
        width: 90% !important;
        margin: 0 auto;
    }


    @media screen and (max-width: 600px) {
        .postTitle p {
            font-size: 18px;
        }
    }
</style>

<script>
    let refreshButtons = document.getElementsByClassName("refreshButton");
    console.log(refreshButtons);
    let vmcAccessToken = "<?php echo $accessToken; ?>"
    let authUrl = 'https://api.mercadopago.com/oauth/token';
    Array.prototype.forEach.call(refreshButtons, function(refreshButton) {

        refreshButton.addEventListener('click', function(event) {
            let data = event.target.id
            let splitData = data.split("/--/");
            let refreshToken = splitData[0];
            let vendorId = splitData[1];
            console.log(refreshToken);
            console.log(vendorId);
            var details = {

                client_secret: vmcAccessToken,
                grant_type: 'refresh_token',
                refresh_token: refreshToken
            };

            var formBody = [];
            for (var property in details) {
                var encodedKey = encodeURIComponent(property);
                var encodedValue = encodeURIComponent(details[property]);
                formBody.push(encodedKey + "=" + encodedValue);
            }
            formBody = formBody.join("&");

            fetch(authUrl, {
                    method: 'POST',
                    headers: {
                        'Accept': 'application/json',
                        'Content-Type': 'application/x-www-form-urlencoded;charset=UTF-8'
                    },
                    body: formBody
                })
                .then(async (data) => {

                    let jsonResponse = await data.json()
                    console.log(jsonResponse);
                    let publicKey = jsonResponse.public_key;
                    let accessToken = jsonResponse.access_token;
                    let refreshToken = jsonResponse.refresh_token;
                    let actionLink = `${vmc_market_params.ajax_url}?action=refreshVendor&accessToken=${accessToken}&refreshToken=${refreshToken}&publicKey=${publicKey}&vendorId=${vendorId}`;

                    let ajax = new XMLHttpRequest();
                    ajax.open("GET", actionLink, true);
                    ajax.onreadystatechange = function(aEvt) {
                        console.log(ajax)
                        if (ajax.readyState == 4) {
                            if (ajax.status == 200) {
                                let response = JSON.parse(ajax.responseText);
                                console.log(response);
                                window.location.reload();
                            } else
                                console.log("Error\n");
                        }
                    };
                    ajax.send();
                })
        })
    });
</script>