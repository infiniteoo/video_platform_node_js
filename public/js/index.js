document.addEventListener("DOMContentLoaded", init, false);

function init() {
  // if an item in the 'up next' list is clicked ->

  $(".up-next-item").click(function () {
    // eslint-disable-next-line no-undef
    const titleVal = $(this).find("#title");
    const targetMovie = titleVal[0].outerText;

    // search the movies database for this target movie so we know the path to the video

    $.get("/api/upnext", (data) => {
      data.forEach((element) => {
        if (element.title === targetMovie) {
          var video = document.getElementById("videoPlayer");
          var source = document.createElement("source");

          source.setAttribute(
            "src",
            "video_library/" + element.video_path
          );

          video.appendChild(source);
          video.play();

          setTimeout(function () {
            video.pause();

            source.setAttribute(
              "src",
              element.video_path
            );

            video.load();
            video.play();
          }, 3000);

       /*    $("#videoPlayer").html(
            `<source src="/${element.video_path}" type="video/mp4">`
          ); */

          /* $.ajax({
            url: finalURL,  
            type: 'POST',
            data: element.video_path
          }).then(function(){
            
          }) */
        }
      });
    });
  });
}

/* const VP = document.getElementById('videoPlayer')
  const VPToggle = document.getElementById('toggleButton')

  VPToggle.addEventListener('click', function () {
    if (VP.paused) VP.play()
    else VP.pause()
  }) */
