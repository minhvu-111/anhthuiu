const textConfig = {
  text1: "Helo cậu!",
  text2: "Tớ Muốn Hỏi Cậu Một Câu Hỏi <3",
  text3: "Bạn có ghét mình không",
  text4: "Nếu cậu ko trả lời mà thoát ra tức là muốn làm vợ tớ rùi đó nha :v",
  text5: "Có ạ"
  text6: "Không ạ anh vũ là nhất",
  text7: "Lí do cậu thích tớ đi :vvvv",
  text8: "Gửi cho tớ <3",
  text9: "Vì tớ thích cậu mất rồi",
  text10: "Tớ biết mà ^^ Yêu cậu 300.000",
  text11:
    "Tối nay tớ qua đón cậu đi chơi nhaa :v Còn giờ thì cậu xem hết bí mật này nha!",
  text12: "Okii lunn <3",
};

$(document).ready(function () {
  // process bar
  setTimeout(function () {
    firstQuestion();
    $(".spinner").fadeOut();
    $("#preloader").delay(350).fadeOut("slow");
    $("body").delay(350).css({
      overflow: "visible",
    });
  }, 600);

  $("#text3").html(textConfig.text3);
  $("#text4").html(textConfig.text4);
  $("#no").html(textConfig.text5);
  $("#yes").html(textConfig.text6);

  function firstQuestion() {
    $(".content").hide();
    Swal.fire({
      title: textConfig.text1,
      text: textConfig.text2,
      imageUrl: "./anh2.jpg.jpg",
      imageWidth: 300,
      imageHeight: 300,
      background: '#fff url("data:image/jpeg;base64,/9j/4AAQSkZJRgABAQAAAQABAAD/2wCEAAkGBwgHBgkIBwgKCgkLDRYPDQwMDRsUFRAWIB0iIiAdHx8kKDQsJCYxJx8fLT0tMTU3Ojo6Iys/RD84QzQ5OjcBCgoKDQwNGg8PGjclHyU3Nzc3Nzc3Nzc3Nzc3Nzc3Nzc3Nzc3Nzc3Nzc3Nzc3Nzc3Nzc3Nzc3Nzc3Nzc3Nzc3N//AABEIAJoApAMBIgACEQEDEQH/xAAbAAADAQEBAQEAAAAAAAAAAAAAAQIDBAUGB//EABwQAQEBAQEBAQEBAAAAAAAAAAABAhIRE0EDIf/EABYBAQEBAAAAAAAAAAAAAAAAAAABAv/EABQRAQAAAAAAAAAAAAAAAAAAAAD/2gAMAwEAAhEDEQA/APyuQ5GkyqZGmXJzLXlUyDGYPltMqmQY8DhvMHMAxmBMN5g5gGEwfDeYOYEc8wfDomD4BzTB8OiYPgHN8x83TMHwDl+Y+bquC4BzcB08AHJMnyuRUgqJlUyuRUgjPlUy0mVTIM5k+GsyqZBlMnw15VMgx4VMNpk+QYzB8NuVTAOeYPh0cCYBzzB8OjgcCOfgXDo4HAObgOngA8iKiYuCnIuRMVAVIqRMVAVIqQoqAci5ExUA/FSFKqUQ5FTJSqlA5lXJSqlApk+FdCaBPA4X2m6BHJjoA+flVKxmlTQ02lVKxmj6EbyqlYTSpoG8qppz9KmgdE0qac80fQOjpU055s+wdM0OnP2qbB0TY7c/YmxHVNjtzdjsHT2LtzdjsHR2HP2AeJNH0w9PoadE0fTn6VNA6JpXTm6VNg3m1duabPsHVNibc82JsR0za+3JNnNg6uxNubsTYOrsTbm7HYOrsfRyzZ9g6exdubsXYOjsObsA4vB41uS5FZ2FI1uS5BAXYVgJ9E0dheAfQmysLwFzZ9s6QNZs+2IBt2JtiAb9jth6PQb9i7Yej0G3YYgHdcFcOm/zTcCOe4TcunhNyDn5LlvcpuQYXIsa3KbkVnYVjTxNgIsKxVgsBHgqrCoJBigQAAAAAAAe/cJuHTYz1BHPcIuXRqM7AYXKbltWegZWJsaVNBlYmxpU0VnYVaVFBAqkgVKnSAgdIAAAAAB9HdoumN/om7Ea3SNVndpuwVb/AKjVTdJugO1NpXSbQFqbRam0UUh6m0BUqqPQOkBQBfoAAAAAAD0bsu2dKiNOk3SCBfSbpFKiq6FqU0DtFpUqB+p9FAAgAFIfoAAAAAAAAB//2Q==")',
      imageAlt: "Custom image",
    }).then(function () {
      $(".content").show(200);
    });
  }

  // switch button position
  function switchButton() {
    var audio = new Audio("./audio.mp3.mp4");
    audio.play();
    var leftNo = $("#no").css("left");
    var topNO = $("#no").css("top");
    var leftY = $("#yes").css("left");
    var topY = $("#yes").css("top");
    $("#no").css("left", leftY);
    $("#no").css("top", topY);
    $("#yes").css("left", leftNo);
    $("#yes").css("top", topNO);
  }
  // move random button póition
  function moveButton() {
    var audio = new Audio("sound/Swish1.mp3");
    audio.play();
    if (screen.width <= 600) {
      var x = Math.random() * 300;
      var y = Math.random() * 500;
    } else {
      var x = Math.random() * 500;
      var y = Math.random() * 500;
    }
    var left = x + "px";
    var top = y + "px";
    $("#no").css("left", left);
    $("#no").css("top", top);
  }

  var n = 0;
  $("#no").mousemove(function () {
    if (n < 1) switchButton();
    if (n > 1) moveButton();
    n++;
  });
  $("#no").click(() => {
    if (screen.width >= 900) switchButton();
  });

  // generate text in input
  function textGenerate() {
    var n = "";
    var text = " " + textConfig.text9;
    var a = Array.from(text);
    var textVal = $("#txtReason").val() ? $("#txtReason").val() : "";
    var count = textVal.length;
    if (count > 0) {
      for (let i = 1; i <= count; i++) {
        n = n + a[i];
        if (i == text.length + 1) {
          $("#txtReason").val("");
          n = "";
          break;
        }
      }
    }
    $("#txtReason").val(n);
  }

  // show popup
  $("#yes").click(function () {
    var audio = new Audio("");
    audio.play();
    Swal.fire({
      title: textConfig.text7,
      html: true,
      width: 900,
      padding: "3em",
      html: "<input type='text' class='form-control' id='txtReason'  placeholder='Whyyy'>",
      background: '#fff url("./anh2.jpg.jpg")',
      backdrop: `
                    rgba(0,0,123,0.4)
                    url("img/giphy2.gif")
                    left top
                    no-repeat
                  `,
      showCancelButton: false,
      confirmButtonColor: "#3085d6",
      cancelButtonColor: "#d33",
      confirmButtonColor: "#fe8a71",
      cancelButtonColor: "#f6cd61",
      confirmButtonText: textConfig.text8,
    }).then((result) => {
      if (result.value) {
        Swal.fire({
          width: 900,
          confirmButtonText: textConfig.text12,
          background: '#fff url("")',
          title: textConfig.text10,
          text: textConfig.text11,
          confirmButtonColor: "#83d0c9",
          onClose: () => {
            window.location = "https://cuongnobro.github.io/Baby/";
          },
        });
      }
    });

    $("#txtReason").focus(function () {
      var handleWriteText = setInterval(function () {
        textGenerate();
      }, 10);
      $("#txtReason").blur(function () {
        clearInterval(handleWriteText);
      });
    });
  });
});
