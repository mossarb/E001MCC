function controlFunc() {
    var adminid = document.getElementById("recipient-name").value;
    var msgCode = document.getElementById("message-text").value;

    if (adminid == "SB-9000" && msgCode == "sb-9000q=129854") {
        swal (
            "Başarılı giriş.",
            "Sisteme başarıyla giriş yapıldı.",
            "success"
        )
        window.location.href = "./SB-9000-21312367123512673521623897647872428936452346278346278423847623.html";
    }
    else {
        swal (
            "Hatalı giriş!",
            "Sisteme erişmek için kullandığınız bilgiler hatalı.",
            "error"
        )
    }
}

function sendCommandFunc() {
    var setInput = document.getElementById("exampleInputEmail1").value;

    if (setInput.includes("/speak:")) {
        swal(
            "Komut Gönderimi Başarılı",
            "Robotu Konuşturma Kodu Sisteme Gönderildi.",
            "success"
        )
    }
    else {
        swal (
            "Hatalı Kod",
            "Girdiğiniz Kod Hatalı.",
            "error"
        )
    }
}