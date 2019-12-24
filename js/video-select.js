function getEmbeddedVideo(bilibili_src, bilibili_id, youtube_src, youtube_id, youku_src, youku_id) {
    if ((returnCitySN["cid"] != "710000") && (returnCitySN["cid"] == parseInt(Number(returnCitySN["cid"])))) {
        chooseVideo(bilibili_src, 'bilibili', bilibili_id);
    }
    
}

function chooseVideo(src, src_name, vid)
// this function is not in here!!!!! find it in base.html
{
    var velem = document.getElementById('videogfw');
    var vai = document.getElementById("video-alrt-info");

    // bilibili
    if (src_name == "bilibili") {
      if (vai) {
          vai.style.display = "block";
          vai.innerHTML = '(Bilibili 无法播放? 请 <a href="https://www.bilibili.com/video/av' + String(vid) +'" target="_blank" >点击这里</a> 跳转至B站内)';
      }
      if (src.includes("hdslb")) {
        velem.style.paddingBottom = "70%";
      }
      else if (src.includes("bilibili")) {
        velem.style.paddingBottom = "72.5%";
      }
    }
   

    if (src.includes("swf") && (!FlashDetect.installed)){
        $("#myVideo").remove();
        velem.style.paddingBottom = "0";
        velem.style.lineHeight = "90px";
        velem.style.textAlign = "center";
        velem.style.fontSize = "2.5em";
        velem.innerHTML = "您的浏览器不支持 Flash 播放器, 请前往<a href='https://www.bilibili.com/video/av" + vid +"' target='_blank'>B站内</a>观看或切换视频源";
    }
    else {
        var video = '<iframe id="myVideo" class="myvideo" width="560" height=315 src=' + src + ' frameborder="0" allowfullscreen></iframe>';
        $("#myVideo").remove();
        $("#videogfw").append(video);
    }
}


