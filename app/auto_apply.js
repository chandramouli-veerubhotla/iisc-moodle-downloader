// Figure out if the current page contains video player and 
// show a download button on top of video player.


(function()  {
  applyMoodleDownloader()
})()



function applyMoodleDownloader() {
    let iframe = document.getElementsByClassName("h5p-iframe")
    if (iframe.length > 0) {
        iframe = iframe[0]  // only one iframe will exists
        let docTitle = document.title
        let videoTags = iframe.contentWindow.document.getElementsByTagName("video")
        if (videoTags.length > 0) {
            addDownloadBtn(iframe, docTitle, videoTags[0].getAttribute("src"))
        }
    }
}



function addDownloadBtn(iframe, name, videoURI) {
    var link = document.createElement("a")
    link.download = name
    link.href = videoURI
    link.innerText = "Download"
    link.style = "position:absolute;left:0;top:0;padding:14px;background:#20c997;color:white;border-radius:5px;text-decoration:none;box-shadow:0px 0px 5px black;z-index:999"
    // add to iframe
    iframe.contentWindow.document.body.appendChild(link)
}

