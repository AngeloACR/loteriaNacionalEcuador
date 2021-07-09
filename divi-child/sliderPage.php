<?php
/* Template Name:boletinUpload */

$home = get_home_url();


?>

<div class="bigBox">
    <div class="moduleBox">
        <div class="titleBox">
            <p>CARGA DE BOLETINES Y BOLETOS</p>
        </div>
        <div class="instructionsBox">
            <p>-Cargue y visualice el listado de boletines y boletos.</p>
        </div>
        <div class="counterBox">
            <p>Ultimo Boletin: <span id="numberOfBoletinesUploaded"></span></p>
        </div>

        <div class="uploadIcons">
            <div class="pcUpload">
            </div>
            <form class="fileUpload" enctype="multipart/form-data">
                <div class="form-group">
                    <label>
                        <img id="pc" src="https://weyulab.com/wp-content/uploads/2020/09/BOTON-SUBIR-FOTO.png" alt="">
                        <input type="file" name="clientFile" id="file" accept="image/*" multiple />
                    </label>
                </div>
            </form>
        </div>

        <div id="boletinesBox" class="uploadedBoletines">
        </div>
        <div class="buttonBox">
            <a href="<?php echo $urlEditor; ?>">IR AL EDITOR</a>
        </div>
    </div>
</div>

<style>
    #file {
        width: 0.1px;
        height: 0.1px;
        opacity: 0;
        overflow: hidden;
        z-index: -1;
    }

    .moduleBox {
        height: 100%;
        width: 90%;
        overflow: scroll;
        overflow-x: hidden;
        display: flex;
        flex-direction: column;
        align-items: center;
        justify-content: flex-start;
    }

    .moduleBox::-webkit-scrollbar-track {
        -webkit-box-shadow: inset 0 0 6px rgba(0, 0, 0, 0.3);
        background-color: #F5F5F5;
    }

    .moduleBox::-webkit-scrollbar {
        width: 6px;
        background-color: #F5F5F5;
    }

    .moduleBox::-webkit-scrollbar-thumb {
        background-color: #d91887;
    }

    .uploadIcons {
        display: flex;
        flex-direction: row;
        width: 100%;
        align-items: center;
        justify-content: center;
    }

    .uploadIcons img {
        height: 100px;
        margin-right: 15px;
        margin-left: 15px;
        cursor: pointer;
    }

    .uploadIcons img:first-child {
        height: 180px;
    }

    .uploadedBoletines {
        display: flex;
        flex-direction: row;
        align-items: center;
        justify-content: center;
        flex-wrap: wrap;
    }

    .uploadedBoletin {
        width: 14%;
        margin-left: 2%;
        margin-right: 2%;
        margin-bottom: 20px;
    }

    .uploadedBoletin img {
        width: 100%;
    }

    .buttonBox {
        width: 180px;
        margin-bottom: 30px;
        cursor: pointer;
    }

    .buttonBox a {
        padding: 10px;
        width: 100%;
        height: 100%;
        text-align: center;
        background-color: #d91887;
        color: white;
        font-size: 16px;
        font-weight: bold;
        cursor: pointer;
        border-style: solid;
        border-width: 2px;
        border-radius: 23px;
        border-color: #d91887;
    }

    .buttonBox a:hover {
        background-color: white;
        color: #d91887;
    }

    @media only screen and (max-width: 800px) {}
</style>

<script>
    let orderId = "<?php echo $orderId; ?>";
    let boletinList = <?php echo $boletinList; ?>;
    let totalBoletines = <?php echo $totalBoletines; ?>;
    let uploadedBoletinesInit = <?php echo $orderUploadedBoletines; ?>;


    localStorage.setItem("orderId", orderId);
    var pc = document.getElementById("pc");
    var pcUpload = document.getElementById("file");
    var facebook = document.getElementById("facebook");
    var instagram = document.getElementById("instagram");
    var close = document.getElementById("cBox")


    let pcUploadLink = "<?php echo $src . "/wp-admin/admin-ajax.php?action=boletinesList"; ?>";


    showBoletines(boletinList);

    pcUpload.addEventListener("change", function() {
        var fileList = pcUpload.files; // The <input type="file" /> field
        let i = 0;
        // Loop through each data and create an array file[] containing our files data.
        // our AJAX identifier
        let link = getUploadLink();
        console.log(fileList);
        let fd = new FormData();
        for (let i = 0; i < fileList.length; i++) {
            name = "clientFile" + i;
            fd.append(name, fileList[i]);
        }
        let ajax = new XMLHttpRequest();
        ajax.open("POST", link, true);
        ajax.onreadystatechange = function(aEvt) {
            console.log(ajax)
            if (ajax.readyState == 4) {
                if (ajax.status == 200) {
                    let response = JSON.parse(ajax.responseText);
                    let newBoletinList = response.newBoletinList
                    showBoletines(newBoletinList);
                    changeUploadedCounter(totalBoletines, response.boletines_uploaded)
                    setLocalStorage(response);
                    console.log(response);
                } else
                    console.log("Error loading page\n");
            }
        };
        ajax.send(fd);

    })

    function setLocalStorage(data) {
        localStorage.setItem("boletinList", JSON.stringify(data.boletinList));
        localStorage.setItem("uploadedBoletines", data.boletines_uploaded);
    }

    function showBoletines(boletinList) {
        let boletinesBox = document.getElementById("boletinesBox");
        boletinList.forEach(boletin => {
            let boletinBox = document.createElement("DIV");
            let boletinImg = document.createElement("IMG");
            boletinImg.src = boletin;
            boletinBox.appendChild(boletinImg);
            boletinBox.className = "uploadedBoletin";
            boletinesBox.appendChild(boletinBox);
        });
    }

    function getUploadLink() {
        let link = `${pcUploadLink}&orderId=${orderId}&contentType=false&processData=false`;
        return link
    }

    function changeUploadedCounter(totalBoletines, uploadedBoletines) {
        let cargadas = document.getElementById("numberOfBoletinesUploaded")
        let restantes = document.getElementById("remainingBoletinesToUpload")

        let auxCargadas = uploadedBoletines;
        let auxRestantes = totalBoletines - auxCargadas;
        cargadas.innerText = auxCargadas;
        restantes.innerText = auxRestantes;
    }



    /* close.addEventListener("click", function() {
        box.style.display = "none";
        modal.style.display = "none";

        box.style.height = "0%";
        modal.style.height = "0%";
    })
     */
</script>