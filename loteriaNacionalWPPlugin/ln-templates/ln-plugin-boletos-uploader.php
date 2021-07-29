<?php
/* Template Name:illescasBlog */

$home = get_home_url();
$pcIconPath = $home . "/wp-content/plugins/lnPlugin/assets/uploadIcon.png";
$loaderPath = $home . "/wp-content/plugins/lnPlugin/assets/loader.gif";

?>
<div class="bigBox">
    <div class="moduleBox">
        <div class="titleBox">
            <p>CARGA DE BOLETOS</p>
        </div>
        <div class="instructionsBox">
            <p>- El nombre de los archivos de boletos debe empezar con una "B" seguido del código de la lotería correspondiente, y seguido finalmente por el número del sorteo. Ejemplo de nombre de archivo: T5943.jpg, T2256.jpg, T16626.jpg</p>
            <p>- Los códigos de los juegos son: </p>
            <p class="codeTag">- 1 para Loteria Nacional</p>
            <p class="codeTag">- 2 para Lotto</p>
            <p class="codeTag">- 5 para Pozo Millonario</p>
            <p>- Es importante seguir el protocolo descrito, de lo contrario los archivos no se cargarán correctamente y los usuarios de la plataforma web no podrán visualizarlos.</p>
        </div>

        <div class="uploadIcons">
            <div class="pcUpload">
            </div>
            <form class="fileUpload" enctype="multipart/form-data">
                <div class="form-group">
                    <label>
                        <img id="pc" src="<?php echo $pcIconPath; ?>" alt="">
                        <input type="file" name="clientFile" id="file" accept="image/*" multiple />
                        <p class="uploadTag">Cargar boletines</p>
                    </label>
                </div>
            </form>
        </div>

        <div id="boletinesBox" class="uploadedBoletines">
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
        width: 100%;
        overflow-x: hidden;
        display: flex;
        flex-direction: column;
        align-items: center;
        justify-content: flex-start;
    }

    .instructionsBox {
        width: 100%;
        display: flex;
        flex-direction: column;
        align-items: flex-start;
    }

    .codeTag {
        margin: 0 0 0 20px;
    }

    .uploadTag {
        margin: 0;
        font-weight: bold;
        text-align: center;
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
    var pc = document.getElementById("pc");
    var pcUpload = document.getElementById("file");


    let pcUploadLink = "<?php echo $src . "/wp-admin/admin-ajax.php?action=uploadBoletines"; ?>";


    showBoletines();

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
        triggerLoader()
        let ajax = new XMLHttpRequest();
        ajax.open("POST", link, true);
        ajax.onreadystatechange = function(aEvt) {
            console.log(ajax)
            if (ajax.readyState == 4) {
                if (ajax.status == 200) {
                    let response = JSON.parse(ajax.responseText);
                    showBoletines();
                    setLocalStorage();
                    console.log(response);
                    dismissLoader()
                    if (response.status) {

                        alert(`${response.message}`);
                        window.location.reload();
                    } else {
                        alert(`Hubo un error subiendo los archivos: ${response.message}`);
                    }
                } else
                    console.log("Error loading page\n");
            }
        };
        ajax.send(fd);

    })

    function setLocalStorage() {}

    function showBoletines() {}

    function getUploadLink() {
        let link = `${pcUploadLink}&contentType=false&processData=false`;
        return link
    }

    function triggerLoader() {
        console.log('waiting');
        let home = "<?php echo $home; ?>";
        let loaderBox = document.createElement("div");
        let loader = document.createElement("img");
        let loaderText = document.createElement("p");
        loaderText.innerText = "Espere mientras procesamos su información";
        loader.src = `<?php echo $loaderPath; ?>`;
        loaderBox.appendChild(loader);
        loaderBox.appendChild(loaderText);

        loaderBox.className = "loaderBox";
        loaderBox.id = "registerLoader";
        let body = document.getElementsByTagName("body")[0];
        //let registerBox = document.getElementById("registerBox");
        body.appendChild(loaderBox);
    }

    function dismissLoader() {
        let loaderBox = document.getElementById("registerLoader");
        let body = document.getElementsByTagName("body")[0];
        //let registerBox = document.getElementById("registerBox");
        body.removeChild(loaderBox);
        console.log('done');
    }
</script>